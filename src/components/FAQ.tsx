import { JsonLd } from "@/lib/schema";

export interface FaqItem {
  q: string;
  a: string;
}

/** Accordion + matching FAQPage JSON-LD from the same data. */
export function FAQ({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <div className="avb divide-y-[2.5px] divide-ink/10 bg-white px-6">
        {items.map((i) => (
          <details key={i.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-bold">
              {i.q}
              <span
                aria-hidden
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-yellow text-ink ring-2 ring-ink transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
              {i.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
