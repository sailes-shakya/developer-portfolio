export default function SectionHeader({
  label,
  title,
  description,
  headingId,
}) {
  return (
    <header className="mb-12 max-w-2xl">
      {label && <p className="brutal-label">{label}</p>}
      <h2
        id={headingId}
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 border-l-[3px] border-accent pl-4 text-lg text-foreground-secondary leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
