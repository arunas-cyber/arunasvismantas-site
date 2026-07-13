import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProofBar } from "@/components/ProofBar";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("home-lt");

const offers = [
  {
    title: "Susikurk savo AI asistentą",
    body: "Praktiniai mokymai, kaip pasistatyti AI agentą, kuris iš tikrųjų dirba darbą. Jau greitai.",
    cta: null,
  },
  {
    title: "Konsultacija",
    body: "AI agentai, MCP integracijos, el. prekybos automatizavimas ar investicijų pritraukimas. Patarimai iš žmogaus, kuris prezentavo nacionalinėje televizijoje.",
    cta: { label: "Rezervuoti pokalbį", href: "/lt/konsultacija" },
  },
  {
    title: "Pranešimai ir renginiai",
    body: "Pranešimai ir renginių vedimas apie AI agentus ir startuolių kūrimą. Lietuviškai arba angliškai.",
    cta: { label: "Susisiekti", href: "/lt/konsultacija" },
  },
];

export default function HomeLt() {
  return (
    <>
      <JsonLd data={personJsonLd} />

      {/* Hero */}
      <section className="border-b border-line">
        <Container className="py-24 sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Callsy įkūrėjas · AI agentai · Pranešėjas
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-tight">
            Kuriu AI agentus.{" "}
            <em className="text-accent">Ir padedu kurti kitiems.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Esu Callsy įkūrėjas. Callsy AI balso agentai atsiliepia į
            skambučius už el. parduotuves visoje Europoje. Mokau steigėjus ir
            komandas susikurti savo AI asistentą, o patirtimi dalinuosi
            scenoje.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/lt/konsultacija">Rezervuoti pokalbį</Button>
            <Button href="/lt/naujienlaiskis" variant="secondary">
              Prenumeruoti naujienlaiškį
            </Button>
          </div>
        </Container>
      </section>

      {/* Proof bar */}
      <section className="border-b border-line">
        <Container className="py-8">
          <ProofBar />
        </Container>
      </section>

      {/* Offers */}
      <section>
        <Container className="py-20 sm:py-24">
          <SectionHeading
            eyebrow="Dirbkime kartu"
            title="Trys keliai pradėti"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {offers.map((o) => (
              <div
                key={o.title}
                className="flex flex-col rounded border border-line p-6 transition-shadow duration-200 hover:shadow-card"
              >
                <h3 className="font-serif text-xl font-medium">{o.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {o.body}
                </p>
                {o.cta ? (
                  <div className="mt-5">
                    <Button href={o.cta.href} variant="ghost">
                      {o.cta.label} →
                    </Button>
                  </div>
                ) : (
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.15em] text-muted">
                    Jau greitai
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-ink text-paper">
        <Container className="py-20 text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Pasikalbėkime, ką AI agentas galėtų nuveikti jūsų versle
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/lt/konsultacija">Rezervuoti pokalbį</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
