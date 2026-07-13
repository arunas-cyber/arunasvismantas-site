import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-line">
      <Container className="py-16 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {lede}
          </p>
        )}
      </Container>
    </section>
  );
}
