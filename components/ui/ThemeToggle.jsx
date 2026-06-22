"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { HiMoon, HiSun } from "react-icons/hi2";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`brutal-btn brutal-btn-secondary flex h-10 w-10 items-center justify-center !p-0 ${className}`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <HiSun className="h-5 w-5 text-accent" aria-hidden="true" />
      ) : (
        <HiMoon className="h-5 w-5 text-accent" aria-hidden="true" />
      )}
    </button>
  );
}
