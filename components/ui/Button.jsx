"use client";

import Link from "next/link";

const variants = {
  primary:
    "bg-accent text-[rgb(var(--color-bg))] hover:brightness-105",
  secondary:
    "glass-panel text-foreground hover:bg-[rgb(var(--color-glass)/0.7)]",
  ghost: "text-foreground-secondary hover:text-accent underline-offset-4 hover:underline",
};

function isExternalHref(href) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-offset-4 ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          onClick={(e) => {
            e.preventDefault();
            window.location.assign(href);
          }}
          {...props}
        >
          {children}
        </a>
      );
    }

    if (isExternalHref(href) || external) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
