"use client";

import { useEffect, useRef } from "react";
import { initGsap } from "@/lib/gsap-client";

export default function StaggerList({
  children,
  className = "",
  itemSelector = "[data-stagger-item]",
  stagger = 0.06,
  delay = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = root.querySelectorAll(itemSelector);
    if (!items.length) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const { gsap } = initGsap();

    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y: 16 });

    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      stagger,
      delay: delay / 1000,
      ease: "power2.out",
      scrollTrigger: {
        trigger: root,
        start: "top 88%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [itemSelector, stagger, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
