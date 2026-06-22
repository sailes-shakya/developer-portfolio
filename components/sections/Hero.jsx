"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/data/site";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import { initGsap } from "@/lib/gsap-client";

export default function Hero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const frame = frameRef.current;
    if (!section || !content) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const { gsap } = initGsap();
    const targets = content.querySelectorAll("[data-hero-item]");

    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y: 32 });

    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.1,
      ease: "power3.out",
    });

    let parallaxTween = null;
    if (frame) {
      parallaxTween = gsap.to(frame, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }

    return () => {
      tl.kill();
      parallaxTween?.scrollTrigger?.kill();
      parallaxTween?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="section-container flex min-h-[90vh] flex-col justify-center !pb-16 !pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div ref={contentRef}>
          <div data-hero-item>
            <Badge className="mb-6">Senior Software Engineer</Badge>
          </div>
          <h2
            id="hero-heading"
            data-hero-item
            className="text-hero font-bold leading-[1.05] tracking-tight text-foreground"
          >
            Mobile products that feel{" "}
            <span className="text-gradient">native</span> in your hand.
          </h2>
          <p
            data-hero-item
            className="mt-6 max-w-xl text-lg text-foreground-secondary"
          >
            {siteConfig.tagline} Explore case studies, skills, and writing — or
            download my resume to see if we&apos;re a fit.
          </p>
          <div data-hero-item className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">View projects</Button>
            <Button href="#resume" variant="secondary">
              Download resume
            </Button>
          </div>
          <p data-hero-item className="mt-6 text-sm text-muted">
            {siteConfig.availability}
          </p>
        </div>

        <div
          ref={frameRef}
          className="flex justify-center lg:justify-end"
          data-hero-item
        >
          <GlassCard className="relative overflow-hidden p-6 sm:p-8" hover={false}>
            <div className="iphone-frame mx-auto">
              <div className="iphone-screen">
                <div className="iphone-island" aria-hidden="true" />
                <Image
                  src={siteConfig.profileImage}
                  alt={`Illustration of ${siteConfig.name} coding at a desk`}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 260px, 280px"
                />
                <div className="iphone-screen-glare" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-foreground">
                {siteConfig.name}
              </p>
              <p className="text-sm text-foreground-secondary">
                {siteConfig.title}
              </p>
              <p className="mt-1 text-xs text-muted">{siteConfig.location}</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
