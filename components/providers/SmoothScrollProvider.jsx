"use client";

import { useEffect, useState } from "react";
import { initGsap } from "@/lib/gsap-client";
import { ScrollContext } from "@/lib/scroll-context";

export default function SmoothScrollProvider({ children }) {
  const [scrollState, setScrollState] = useState({ lenis: null, ready: false });

  useEffect(() => {
    let lenis = null;
    let onTick = null;
    let cancelled = false;

    async function setup() {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || cancelled) return;

      const [{ default: Lenis }, { gsap, ScrollTrigger }] = await Promise.all([
        import("lenis"),
        Promise.resolve(initGsap()),
      ]);

      if (cancelled) return;

      lenis = new Lenis({
        lerp: 0.09,
        smoothWheel: true,
        anchors: { offset: -80 },
      });

      document.documentElement.classList.add("lenis");
      setScrollState({ lenis, ready: true });

      lenis.on("scroll", ScrollTrigger.update);

      onTick = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (arguments.length) {
            lenis.scrollTo(value, { immediate: true });
          }
          return lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      ScrollTrigger.addEventListener("refresh", () => lenis.resize());
      ScrollTrigger.refresh();
    }

    setup();

    return () => {
      cancelled = true;
      document.documentElement.classList.remove("lenis");
      setScrollState({ lenis: null, ready: false });

      if (onTick) {
        const { gsap, ScrollTrigger } = initGsap();
        gsap.ticker.remove(onTick);
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }

      lenis?.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollState}>
      {children}
    </ScrollContext.Provider>
  );
}
