"use client";

import { useEffect, useRef } from "react";
import { initGsap } from "@/lib/gsap-client";

export default function HoverLift({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const { gsap } = initGsap();

    const onEnter = () => {
      gsap.to(el, {
        y: -6,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
