export default function GlassCard({
  children,
  className = "",
  as: Component = "div",
  hover = true,
  solid = false,
  ...props
}) {
  const base = solid ? "brutal-panel-solid" : "brutal-panel";
  const hoverClass = hover ? "brutal-panel-interactive" : "";

  return (
    <Component className={`${base} ${hoverClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}
