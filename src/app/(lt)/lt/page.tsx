import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProofBar } from "@/components/ProofBar";
import { Waveform } from "@/components/Waveform";
import { HeroPhoto } from "@/components/HeroPhoto";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";
import { CALLSY_URL } from "@/lib/site";

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
      <Container className="pt-8 sm:pt-12">
        <section className="avb relative overflow-hidden bg-yellow px-7 py-12 sm:px-12 sm:py-16">
          <a
            href={CALLSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="avtag absolute right-6 top-6 z-10 hidden rounded-full border-[3px] border-ink bg-blue px-4 py-2 text-white shadow-brutal-sm sm:inline-block"
            style={{ "--r": "7deg", animation: "floaty 5s ease-in-out infinite" } as React.CSSProperties}
          >
            callsy.ai ↗
          </a>
          <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
          <p className="avtag inline-block rounded-lg bg-ink px-3 py-1.5 text-yellow">
            Callsy įkūrėjas · AI agentai · Pranešėjas
          </p>
          <h1 className="mt-8 max-w-4xl text-[clamp(2.6rem,7vw,5.25rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.035em]">
            Kuriu AI agentus.{" "}
            <span className="text-coral">Ir padedu kurti kitiems.</span>
          </h1>
          <p className="mt-8 max-w-[52ch] text-[19px] font-medium leading-normal">
            Penkių verslų įkūrėjas iš Vilniaus. Kartu su komanda kuriu{" "}
            <strong>Callsy</strong>, europinę AI balso agentų platformą. Čia
            dalinuosi, kaip kuriu su dirbtiniu intelektu, kokius verslus statau
            ir apie ką{" "}
            <span className="rounded-md bg-blue px-1.5 py-0.5 text-white">
              kalbu scenoje
            </span>
            .
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/lt/konsultacija" variant="dark">
              Rezervuoti pokalbį
            </Button>
            <Button href="/lt/naujienlaiskis" variant="secondary">
              Prenumeruoti naujienlaiškį
            </Button>
          </div>
          <div className="mt-10">
            <Waveform />
          </div>
          </div>
          <HeroPhoto
            label="Scenoje"
            alt="Arunas Vismantas skaito pranešimą technologijų konferencijos scenoje"
          />
          </div>
        </section>

        {/* Proof marquee */}
        <div className="mt-6">
          <ProofBar />
        </div>
      </Container>

      {/* Story */}
      <section>
        <Container className="py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              eyebrow="Trumpai apie mane"
              title="Penki verslai, vienas instinktas"
            />
            <div className="max-w-[54ch] space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Atvirai: esu tinginys, ir iš to susikūriau karjerą. Jei
                užduotis kartojasi, mano instinktas ją automatizuoti. Penki
                verslai vėliau tas instinktas yra bendras jų visų vardiklis.
              </p>
              <p>
                Šiandien tai <strong className="text-ink">Callsy</strong>,
                europinė platforma, kurioje AI balso, SMS ir el. pašto agentai
                perima pokalbius, kuriems el. parduotuvės neturi laiko. Prieš ją
                buvo Podbase, Smart Vision, AdKings ir BrandBoosters.
              </p>
              <p>
                Esu apsėstas naujų technologijų ir lygiai taip pat mėgstu
                dalintis tuo, ką iš jų išmokstu. Čia dedu savo darbus, žinias ir
                būdus, kaip galime ką nors sukurti kartu.
              </p>
              <div className="pt-1">
                <Button href="/lt/apie" variant="ghost">
                  Visa istorija →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Offers */}
      <section className="border-t-[3px] border-ink">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            eyebrow="Dirbkime kartu"
            title="Trys keliai pradėti"
          />
          <div className="mt-12 grid gap-7 sm:grid-cols-3">
            {offers.map((o) => (
              <div
                key={o.title}
                className="avb avb-hover flex flex-col bg-white p-7"
              >
                <h3 className="text-xl font-extrabold tracking-tight">
                  {o.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {o.body}
                </p>
                {o.cta ? (
                  <div className="mt-5">
                    <Button href={o.cta.href} variant="ghost">
                      {o.cta.label} →
                    </Button>
                  </div>
                ) : (
                  <p className="avtag mt-5 text-coral">Jau greitai</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Writing teaser */}
      <section className="border-t-[3px] border-ink bg-white">
        <Container className="py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Apie ką rašau"
              title="Pastabos iš kūrimo, ne teorija"
            />
            <Button href="/lt/izvalgos" variant="secondary">
              Skaityti įžvalgas
            </Button>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Kaip susikurti savo AI asistentą",
              "Produktų kūrimas su AI be programavimo",
              "AI agentai el. prekybai",
              "Startuolio kūrimas Baltijos šalyse",
            ].map((topic) => (
              <li key={topic} className="avb bg-paper p-5 text-[15px] font-bold">
                {topic}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA band */}
      <Container className="py-20">
        <section className="avb bg-ink px-8 py-16 text-center text-paper">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pasikalbėkime, ką AI agentas galėtų nuveikti jūsų versle
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/lt/konsultacija">Rezervuoti pokalbį</Button>
          </div>
        </section>
      </Container>
    </>
  );
}
