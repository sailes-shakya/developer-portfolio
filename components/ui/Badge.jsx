export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border/20 bg-[rgb(var(--color-accent-subtle)/0.5)] px-3 py-1 text-xs font-medium text-accent ${className}`}
    >
      {children}
    </span>
  );
}
