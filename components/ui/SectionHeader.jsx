"use client";

import { useEffect, useRef } from "react";
import { initGsap } from "@/lib/gsap-client";

export default function SectionHeader({
  label,
  title,
  description,
  headingId,
}) {
  const ref = useRef(null);
  const words = title.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const labelEl = el.querySelector("[data-sh-label]");
    const wordEls = el.querySelectorAll("[data-sh-word]");
    const descEl = el.querySelector("[data-sh-desc]");

    const { gsap } = initGsap();

    if (reduced) {
      gsap.set([labelEl, ...wordEls, descEl].filter(Boolean), {
        opacity: 1,
        y: 0,
        x: 0,
      });
      return;
    }

    gsap.set(labelEl, { opacity: 0, y: 18 });
    gsap.set(wordEls, { opacity: 0, y: 28 });
    if (descEl) gsap.set(descEl, { opacity: 0, x: -16 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    if (labelEl) {
      tl.to(labelEl, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
    }

    tl.to(
      wordEls,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
      },
      labelEl ? "-=0.2" : 0
    );

    if (descEl) {
      tl.to(
        descEl,
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
        "-=0.25"
      );
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [label, title, description]);

  return (
    <header ref={ref} className="mb-12 max-w-2xl">
      {label && (
        <p className="brutal-label" data-sh-label>
          {label}
        </p>
      )}
      <h2
        id={headingId}
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden">
            <span className="inline-block" data-sh-word>
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          </span>
        ))}
      </h2>
      {description && (
        <p
          data-sh-desc
          className="mt-4 border-l-[3px] border-accent pl-4 text-lg text-foreground-secondary leading-relaxed"
        >
          {description}
        </p>
      )}
    </header>
  );
}
