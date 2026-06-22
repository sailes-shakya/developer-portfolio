"use client";

import { useEffect, useRef } from "react";
import { initGsap } from "@/lib/gsap-client";

export default function ExperienceTimeline({ children }) {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const { gsap } = initGsap();

    if (reduced) {
      gsap.set(line, { scaleY: 1 });
      return;
    }

    gsap.set(line, { scaleY: 0, transformOrigin: "top center" });

    const tween = gsap.to(line, {
      scaleY: 1,
      duration: 1.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: line.parentElement,
        start: "top 75%",
        end: "bottom 60%",
        scrub: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <ol className="relative space-y-6 pl-8">
      <span
        ref={lineRef}
        className="absolute bottom-0 left-0 top-0 w-[3px] bg-border"
        aria-hidden="true"
      />
      {children}
    </ol>
  );
}
