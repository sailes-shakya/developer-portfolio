export default function AmbientBackground() {
  return (
    <div
      className="ambient-canvas pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    >
      <div className="ambient-grid" />
      <div className="ambient-grain" />
    </div>
  );
}
