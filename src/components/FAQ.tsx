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
      <div className="divide-y divide-line border-y border-line">
        {items.map((i) => (
          <details key={i.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
              {i.q}
              <span
                aria-hidden
                className="text-muted transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {i.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
