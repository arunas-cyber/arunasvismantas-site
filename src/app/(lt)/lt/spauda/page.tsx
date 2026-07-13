import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/meta";
import { PITCH_VIDEO_URL } from "@/lib/site";

export const metadata = pageMetadata("press-lt");

const items = [
  {
    name: "Rykliai. Lietuva (TV3)",
    year: "2025",
    body: "Pristačiau Callsy nacionalinėje televizijoje. Sandorio nebuvo, bet verslą eteryje patvirtino du vienaragių kūrėjai: Tadas Burgaila ir Toma Sabaliauskienė.",
    link: { label: "Žiūrėti įrašą", href: PITCH_VIDEO_URL },
  },
  {
    name: "Latitude59 pitch konkursas",
    year: "2026",
    body: "Vienas iš 7 finalininkų svarbiausioje Baltijos startuolių konferencijoje. Pristatyta kaip AI agentai, automatizuojantys pardavimus, aktyvavimą ir aptarnavimą.",
    link: {
      label: "Pranešimas",
      href: "https://latitude59.ee/startups-from-estonia-finland-lithuania-and-ukraine-reach-the-finals-of-latitude59s-pitch-competition/",
    },
  },
  {
    name: "FirstPick AI akseleratorius",
    year: "2025",
    body: "Callsy atrinkta į pirmąjį AI akseleratorių Baltijos šalyse kaip el. prekybos AI agentas, padedantis susigrąžinti prarastus pardavimus.",
    link: {
      label: "Laidos pranešimas",
      href: "https://firstpick.vc/blog/firstpick-launches-the-baltics-first-ai-accelerator/",
    },
  },
  {
    name: "500 Global Eurasia akseleratorius",
    year: "2025",
    body: "Vienas iš 13 startuolių 500 Global Eurasia programos 9-ojoje laidoje (12 savaičių).",
    link: {
      label: "Pranešimas",
      href: "https://www.linkedin.com/posts/500eurasia_500global-eurasia-accelerator-activity-7374395084668047360-AjTu",
    },
  },
  {
    name: "F6S",
    year: "2026",
    body: "2026 m. kovą F6S įvertino Callsy kaip #3 AI įmonę.",
    link: null,
  },
];

export default function PressLt() {
  return (
    <>
      <PageHeader
        eyebrow="Spauda"
        title="Scenos, ekranai ir įrodymai"
        lede="Kur pasirodė Callsy ir aš, su šaltiniais. Dėl interviu, tinklalaidžių ar pranešimų susisiekite."
      />

      <section className="border-b border-line">
        <Container className="py-16">
          <div className="max-w-3xl divide-y divide-line border-y border-line">
            {items.map((item) => (
              <article key={item.name} className="py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-xl font-extrabold tracking-tight">
                    {item.name}
                  </h2>
                  <span className="text-sm text-muted">{item.year}</span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-bold text-blue transition-colors duration-150 hover:text-coral"
                  >
                    {item.link.label} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-wrap items-center justify-between gap-6 py-16">
          <p className="max-w-md text-2xl font-extrabold tracking-tight">
            Ieškote pranešėjo ar pašnekovo savo laidai?
          </p>
          <Button href="/lt/konsultacija">Susisiekti</Button>
        </Container>
      </section>
    </>
  );
}
