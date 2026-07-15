import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/meta";
import { LINKEDIN_URL, SUBSTACK_URL } from "@/lib/site";

export const metadata = pageMetadata("newsletter-lt");

const promises = [
  "Ką sukūriau ir kiek tai kainavo, su tikrais skaičiais.",
  "AI agentų ir MCP metodai, kurie išgyvena susidūrimą su realybe.",
  "Atviros pastabos apie startuolio auginimą Baltijos šalyse: akseleratoriai, prezentacijos, pardavimai.",
];

export default function NewsletterLt() {
  return (
    <>
      <PageHeader
        eyebrow="Naujienlaiškis"
        title="Kūrimo užrašai, ne filosofija"
        lede="Rašau tada, kai turiu ką naudingo pasakyti: ką paleidau, kiek kainavo, ką daryčiau kitaip. Jokio turinio dėl turinio."
      />

      <section>
        <Container className="py-16">
          <ul className="max-w-2xl space-y-4">
            {promises.map((p) => (
              <li key={p} className="flex gap-3 text-lg leading-relaxed">
                <span aria-hidden className="mt-1 font-bold text-coral">
                  ¶
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            {SUBSTACK_URL ? (
              <Button href={SUBSTACK_URL} external>
                Prenumeruoti per Substack
              </Button>
            ) : (
              <div className="max-w-md avb bg-white p-7">
                <p className="text-sm leading-relaxed text-muted">
                  Naujienlaiškis startuoja jau greitai. Kol kas tomis pačiomis
                  pastabomis dalinuosi LinkedIn.
                </p>
                <div className="mt-4">
                  <Button href={LINKEDIN_URL} external variant="secondary">
                    Sekti LinkedIn
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
