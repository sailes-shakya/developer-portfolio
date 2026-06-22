/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-elevated": "rgb(var(--color-surface-elevated) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        muted: "rgb(var(--color-text-muted) / <alpha-value>)",
        foreground: "rgb(var(--color-text-primary) / <alpha-value>)",
        "foreground-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
      },
      borderRadius: {
        glass: "var(--radius-brutal)",
        brutal: "var(--radius-brutal)",
      },
      boxShadow: {
        glass: "var(--shadow-brutal)",
        brutal: "var(--shadow-brutal)",
        "brutal-sm": "var(--shadow-brutal-sm)",
        "brutal-lg": "var(--shadow-brutal-lg)",
        lift: "var(--shadow-brutal-lg)",
      },
      borderWidth: {
        brutal: "3px",
      },
      animation: {
        "fade-up": "fadeUp 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translate(4px, 4px)" },
          to: { opacity: "1", transform: "translate(0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
