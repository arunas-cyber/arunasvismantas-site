import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SubscribeForm } from "@/components/SubscribeForm";
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
        title="Iš praktikos, ne filosofija"
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
            <SubscribeForm
              source="newsletter-lt"
              placeholder="Tavo el. paštas"
              cta="Prenumeruoti"
              loadingLabel="Prenumeruojama..."
              success="Ačiū! Netrukus parašysiu."
              error="Nepavyko. Bandyk dar kartą."
              note="Jokio spamo. Atsisakyti gali bet kada."
            />
          </div>

          {(SUBSTACK_URL || LINKEDIN_URL) && (
            <p className="mt-6 text-sm text-muted">
              {SUBSTACK_URL ? (
                <>
                  Ankstesnius laiškus skaityk{" "}
                  <a
                    href={SUBSTACK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue underline underline-offset-4 hover:text-coral"
                  >
                    Substack
                  </a>
                  .
                </>
              ) : (
                <>
                  Kol kas tomis pačiomis pastabomis dalinuosi{" "}
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue underline underline-offset-4 hover:text-coral"
                  >
                    LinkedIn
                  </a>
                  .
                </>
              )}
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
