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
    <section className="border-b-[3px] border-ink">
      <Container className="py-16 sm:py-20">
        <p className="avtag inline-block rounded-lg bg-ink px-3 py-1.5 text-yellow">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-muted">
            {lede}
          </p>
        )}
      </Container>
    </section>
  );
}
