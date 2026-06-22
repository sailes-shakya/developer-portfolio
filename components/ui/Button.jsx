"use client";

import Link from "next/link";

const variants = {
  primary: "brutal-btn brutal-btn-primary",
  secondary: "brutal-btn brutal-btn-secondary",
  ghost:
    "font-bold uppercase tracking-wide text-foreground-secondary underline decoration-[2px] underline-offset-4 hover:text-accent",
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
  const classes = `px-6 py-3 text-sm focus-visible:outline-offset-4 ${variants[variant]} ${className}`;

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
