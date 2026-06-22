"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { navLinks, siteConfig } from "@/lib/data/site";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className="section-container !py-0"
        aria-label="Primary"
      >
        <div
          className={`glass-panel-solid flex items-center justify-between gap-4 px-4 py-3 sm:px-6 ${
            scrolled ? "shadow-glass" : ""
          }`}
        >
          <Link
            href="#hero"
            className="text-sm font-bold tracking-tight text-foreground sm:text-base"
            onClick={closeMenu}
          >
            {siteConfig.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-accent"
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
              className="glass-panel flex h-10 w-10 items-center justify-center lg:hidden"
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
          className="glass-panel-solid fixed inset-x-4 top-[4.5rem] z-40 max-h-[calc(100vh-6rem)] overflow-y-auto p-4 lg:hidden"
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
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground-secondary transition-colors hover:bg-accent/10 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between border-t border-border/10 pt-4">
            <ThemeToggle />
            <Button href="#resume" variant="primary" className="!px-4 !py-2 text-xs" onClick={closeMenu}>
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
