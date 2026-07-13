export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
