import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";
import { PITCH_VIDEO_URL } from "@/lib/site";

export const metadata = pageMetadata("about-lt");

const milestones = [
  {
    year: "2010",
    text: "Vadybos lyderystės bakalauras, Oxford Brookes universitetas.",
  },
  {
    year: "2018",
    text: "Įkūriau Smart Vision, el. prekybos aptarnavimo paslaugų įmonę. Pirmasis verslas.",
  },
  {
    year: "2020",
    text: "Ketveri metai el. prekybos marketinge: AdKings Agency ir BrandBoosters.io.",
  },
  {
    year: "2025",
    text: "Įkūriau Callsy: AI balso, SMS ir el. pašto agentai, kurie bendrauja su el. parduotuvių klientais visoje Europoje. Trečiasis verslas.",
  },
  {
    year: "2025",
    text: "Callsy atrinkta į FirstPick AI akseleratorių, pirmąjį Baltijos šalyse, ir į 500 Global Eurasia akseleratoriaus 9-ąją laidą.",
  },
  {
    year: "2025",
    text: "Prezentavau Callsy laidoje Rykliai. Lietuva (TV3).",
  },
  {
    year: "2026",
    text: "Vienas iš 7 Latitude59 pitch konkurso finalininkų. F6S kovo mėnesį Callsy įvertino kaip #3 AI įmonę.",
  },
  {
    year: "2026",
    text: "Pradėjau tinklalaidę Founders & Food: atviri lietuvių steigėjų pokalbiai prie vakarienės stalo.",
  },
];

export default function AboutLt() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <PageHeader
        eyebrow="Apie mane"
        title="Pirmiausia verslininkas. Inžinierius iš reikalo."
        lede="Esu Arunas Vismantas, Vilniuje gyvenantis trijų verslų įkūrėjas ir Callsy vadovas. Kuriu AI agentus kasdien ir dokumentuoju, kas iš tikrųjų veikia, kad tą patį galėtų padaryti ir kiti steigėjai."
      />

      <section className="border-b border-line">
        <Container className="py-16">
          <div className="max-w-[68ch] space-y-6 text-lg leading-relaxed">
            <p>
              Callsy yra Europoje veikianti AI platforma: balso, SMS ir el.
              pašto agentai kalbasi su el. parduotuvių klientais, susigrąžina
              apleistus krepšelius, atsako į užklausas, primena apie
              užsakymus. Įkūriau ją pamatęs, kiek pardavimų parduotuvės
              praranda vien todėl, kad naktį niekas nepakelia ragelio.
            </p>
            <p>
              2025 metais Callsy pristačiau laidoje Rykliai. Lietuva per TV3.
              Sandorio nesudarėme, bet gavome kai ką vertingiau: verslą eteryje
              patvirtino du vienaragių kūrėjai, Tadas Burgaila ir Toma
              Sabaliauskienė.{" "}
              <a
                href={PITCH_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue underline underline-offset-4 transition-colors duration-150 hover:text-coral"
              >
                Prezentacija yra YouTube.
              </a>
            </p>
            <p>
              Nesu diplomuotas programuotojas. Viską, ką paleidžiu į
              gyvenimą, pasistatau su AI įrankiais: agentus, MCP integracijas,
              ištisas svetaines. Būtent tai ir yra vertingiausia, ko galiu
              išmokyti. Jei ne inžinierius gali valdyti veikiančią AI
              platformą, galite ir jūs, o aš galiu parodyti tikslų kelią.
            </p>
            <p>
              Kai nekuriu, vedu tinklalaidę Founders & Food, kur lietuviai
              steigėjai atvirai kalbasi prie vakarienės, ir skaitau pranešimus
              startuolių bei AI renginiuose lietuviškai ir angliškai.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Svarbiausi etapai
          </h2>
          <ol className="mt-8 max-w-2xl divide-y divide-line border-y border-line">
            {milestones.map((m, i) => (
              <li key={i} className="flex gap-6 py-4">
                <span className="w-14 shrink-0 text-sm font-medium text-muted">
                  {m.year}
                </span>
                <span className="text-sm leading-relaxed">{m.text}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container className="flex flex-wrap items-center justify-between gap-6 py-16">
          <p className="max-w-md text-2xl font-extrabold tracking-tight">
            Turite idėją, kur AI agentas galėtų padėti?
          </p>
          <Button href="/lt/konsultacija">Rezervuoti pokalbį</Button>
        </Container>
      </section>
    </>
  );
}
