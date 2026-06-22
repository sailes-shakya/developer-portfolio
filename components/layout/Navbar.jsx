"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { navLinks, siteConfig } from "@/lib/data/site";
import { useScroll } from "@/lib/scroll-context";
import { initGsap } from "@/lib/gsap-client";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const hiddenRef = useRef(false);
  const { lenis, ready } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open || !headerRef.current) return;

    const { gsap } = initGsap();
    hiddenRef.current = false;
    gsap.to(headerRef.current, { y: "0%", duration: 0.25, ease: "power2.out" });
  }, [open]);

  useEffect(() => {
    if (!ready || !lenis || !headerRef.current) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const { gsap } = initGsap();
    const header = headerRef.current;

    const onLenisScroll = ({ scroll, direction }) => {
      setScrolled(scroll > 24);

      if (open) return;

      if (direction === 1 && scroll > 120 && !hiddenRef.current) {
        hiddenRef.current = true;
        gsap.to(header, { y: "-110%", duration: 0.35, ease: "power2.inOut" });
      } else if (direction === -1 && hiddenRef.current) {
        hiddenRef.current = false;
        gsap.to(header, { y: "0%", duration: 0.35, ease: "power2.out" });
      }
    };

    lenis.on("scroll", onLenisScroll);

    return () => {
      lenis.off("scroll", onLenisScroll);
      gsap.set(header, { clearProps: "y" });
    };
  }, [ready, lenis, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 will-change-transform transition-[padding] duration-200 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav className="section-container !py-0" aria-label="Primary">
        <div className="brutal-panel-solid flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="#hero"
            className="font-mono text-sm font-bold uppercase tracking-tight text-foreground sm:text-base"
            onClick={closeMenu}
          >
            {siteConfig.name.split(" ")[0]}
            <span className="text-accent">_</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-2 font-mono text-xs font-bold uppercase tracking-wide text-foreground-secondary transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:flex" />
            <Button
              href="#resume"
              variant="primary"
              className="hidden !px-4 !py-2 text-xs sm:inline-flex"
            >
              Get in touch
            </Button>
            <button
              type="button"
              className="brutal-btn brutal-btn-secondary flex h-10 w-10 items-center justify-center !p-0 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <HiXMark className="h-5 w-5" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          data-lenis-prevent
          className="brutal-panel-solid fixed inset-x-4 top-[4.5rem] z-40 max-h-[calc(100vh-6rem)] overflow-y-auto p-4 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block border-2 border-transparent px-4 py-3 font-mono text-sm font-bold uppercase tracking-wide text-foreground-secondary transition-colors hover:border-border hover:bg-surface hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between border-t-[3px] border-border pt-4">
            <ThemeToggle />
            <Button
              href="#resume"
              variant="primary"
              className="!px-4 !py-2 text-xs"
              onClick={closeMenu}
            >
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
