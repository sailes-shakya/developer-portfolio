export default function Badge({ children, className = "" }) {
  return (
    <span className={`brutal-badge ${className}`}>{children}</span>
  );
}
