import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  lede,
  tightBottom = false,
  flush = false,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  /** Trims the bottom padding when a section sits right below the header. */
  tightBottom?: boolean;
  /** Drops the divider border and hugs the next section tight (no gap). */
  flush?: boolean;
}) {
  const pad = flush
    ? "pt-14 pb-5 sm:pt-16 sm:pb-6"
    : tightBottom
      ? "pt-16 pb-8 sm:pt-20 sm:pb-10"
      : "py-16 sm:py-20";
  return (
    <section className={flush ? "" : "border-b-[3px] border-ink"}>
      <Container className={pad}>
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
