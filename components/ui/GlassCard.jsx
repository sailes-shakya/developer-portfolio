export default function GlassCard({
  children,
  className = "",
  as: Component = "div",
  hover = true,
  solid = false,
  ...props
}) {
  const base = solid ? "glass-panel-solid" : "glass-panel";
  const hoverClass = hover
    ? "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
    : "";

  return (
    <Component className={`${base} ${hoverClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}
