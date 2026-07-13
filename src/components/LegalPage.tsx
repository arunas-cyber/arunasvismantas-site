import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export interface LegalSection {
  h: string;
  p: string;
}

export function LegalPage({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lede={updated} />
      <section>
        <Container className="py-16">
          <div className="max-w-[68ch] space-y-8">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  {s.h}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
