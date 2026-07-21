import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Inline } from "@/components/Inline";
import { JsonLd, personJsonLd, profilePageJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";
import { PITCH_VIDEO_URL } from "@/lib/site";

export const metadata = pageMetadata("about-lt", { ogType: "profile" });

const milestones = [
  {
    year: "2010",
    text: "Vadybos lyderystės bakalauras, Oxford Brookes universitetas.",
  },
  {
    year: "2018",
    text: "Kartu su komanda įkūriau Smart Vision, el. prekybos aptarnavimo paslaugų įmonę.",
  },
  {
    year: "2020",
    text: "Bendraįkūriau ir vadovavau AdKings Agency ir BrandBoosters.io, efektyvaus marketingo agentūroms el. parduotuvėms. Taip pat bendraįkūriau Podbase.",
  },
  {
    year: "2025",
    text: "Kartu su komanda įkūriau Callsy: AI balso, SMS ir el. pašto agentai, bendraujantys su el. parduotuvių klientais visoje Europoje.",
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

const sections = [
  {
    h: "Kelias",
    body: [
      "Atvirai: esu tinginys, ir iš to susikūriau karjerą. Jei užduotis kartojasi, ją automatizuoju. Tas pats instinktas jungia visus penkis mano verslus.",
      "Prasidėjo 2018-aisiais su Smart Vision, el. prekybos aptarnavimo paslaugų įmone. Vėliau buvo keleri metai efektyvaus marketingo ir augimo darbo el. parduotuvėms su [AdKings](https://www.adkings.agency) ir [BrandBoosters](https://brandboosters.io), o pakeliui atsirado ir [Podbase](https://www.podbase.com). Kiekvienas šių verslų iš kito kampo pamokė to paties: nuobodų, pasikartojantį darbą kaip tik ir turėtų atlikti programinė įranga.",
      "Šiandien tai [Callsy](https://callsy.ai), europinė platforma, kurioje AI balso, SMS ir el. pašto agentai veda tikrus pokalbius su klientais: susigrąžina apleistus krepšelius, kvalifikuoja potencialius klientus, priima rezervacijas, primena apie mokėjimus, grąžina pasitraukusius pirkėjus. Įkūriau ją kartu su Laimonu Sutkumi, pamatęs, kiek pardavimų parduotuvės praranda kiekvieną naktį vien todėl, kad niekas nepakelia ragelio.",
    ],
  },
  {
    h: "Kaip kuriu",
    body: [
      "Nesu diplomuotas programuotojas. Viską, ką paleidžiu, susikuriu su dirbtiniu intelektu: pačius agentus, MCP integracijas, ištisas svetaines, įskaitant šią.",
      "Kadaise tai atrodė kaip trūkumas. Pasirodė, kad tai naudingiausia, ko galiu išmokyti. Įrankiai tapo pakankamai geri, kad steigėjas, kuris tikrai supranta problemą, dabar gali pats sukurti sprendimą, be informatikos diplomo ir nelaukdamas komandos. Jei aš taip valdau veikiančią AI platformą, galite ir jūs.",
      "Todėl atvirai kalbu apie technologijas, realias sąnaudas ir klaidas. Nieko neslepiu ir nesureikšminu.",
    ],
  },
  {
    h: "Kodėl dalinuosi",
    body: [
      "Du dalykai lydi mane visą karjerą. Esu apsėstas naujų technologijų, noriu išbandyti kiekvieną naudingą įrankį tą pačią savaitę, kai jis pasirodo. Ir mėgstu dalintis tuo, ką išmokstu, ar tai būtų steigėjo mokymas susikurti pirmąjį agentą, ar tiesiog kai pavyksta ką nors uždegti tuo, kas dabar įmanoma.",
      "Šioje svetainėje telpa abu: gidai, pranešimai, kūrimo užrašai. Jei tai, ką išsiaiškinau, jums sutaupys mėnesį, būtent to ir siekiu.",
    ],
  },
  {
    h: "Ką manau apie AI agentus",
    body: [
      "Dauguma AI demonstracijų yra žaislai. Verta dirbti su agentais, kurie atlieka tikrą darbą nuo pradžios iki pabaigos ir užsitarnauja pakankamai pasitikėjimo, kad juos būtų galima palikti vienus.",
      "Manau, kad artimiausi metai priklausys steigėjams, kurie sugebės įpinti šiuos agentus į savo verslą greičiau, nei rinkos senbuviai spės juos prisikabinti prie savojo. Ne didžiausiai inžinierių komandai. Greičiausiam ir aiškiausiam mąstytojui su tinkamais įrankiais. Tai ir yra Callsy pagrindas, ir viso, ko mokau.",
    ],
  },
  {
    h: "Dabar",
    body: [
      "Šiandien auginu Callsy ir renku investicijas 2026-iesiems, ką tik baigęs 500 Global Eurasia akseleratorių ir FirstPick AI akseleratorių, pirmąjį Baltijos šalyse. Pakeliui su Callsy pasirodėme laidoje Rykliai. Lietuva, patekome į Latitude59 finalą ir buvome įvertinti kaip #3 AI įmonė F6S platformoje.",
      "Be įmonės, vedu tinklalaidę Founders & Food, kur lietuviai steigėjai atvirai kalbasi prie vakarienės, ir skaitau pranešimus startuolių bei AI renginiuose lietuviškai ir angliškai.",
    ],
  },
];

export default function AboutLt() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={profilePageJsonLd} />
      <PageHeader
        eyebrow="Apie mane"
        title="Pirmiausia verslininkas. Inžinierius iš reikalo."
        lede="Esu Arunas Vismantas, Vilniuje gyvenantis steigėjas. Bendraįkūriau ir vadovavau penkiems verslams, iš kurių naujausias yra Callsy. Kuriu AI agentus be formalaus inžinerinio išsilavinimo ir dalinuosi tuo, ką išmokstu, kad tą patį galėtų padaryti ir kiti steigėjai."
      />

      <section className="border-b-[3px] border-ink">
        <Container className="py-16">
          <div className="max-w-[68ch] space-y-14">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  {s.h}
                </h2>
                <div className="mt-5 space-y-5 text-lg leading-relaxed text-muted">
                  {s.body.map((p, i) => (
                    <p key={i}>
                      <Inline text={p} />
                    </p>
                  ))}
                  {s.h === "Kelias" && (
                    <p>
                      2025-aisiais Callsy pristačiau laidoje Rykliai. Lietuva
                      per TV3. Sandorio nesudarėme, bet gavome kai ką
                      vertingiau: verslą eteryje patvirtino du vienaragių
                      kūrėjai, Tadas Burgaila ir Toma Sabaliauskienė.{" "}
                      <a
                        href={PITCH_VIDEO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue underline underline-offset-4 transition-colors duration-150 hover:text-coral"
                      >
                        Prezentacija yra YouTube.
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-[3px] border-ink">
        <Container className="py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Svarbiausi etapai
          </h2>
          <ol className="mt-8 max-w-2xl divide-y-[2.5px] divide-line border-y-[2.5px] border-line">
            {milestones.map((m, i) => (
              <li key={i} className="flex gap-6 py-4">
                <span className="avtag w-16 shrink-0 pt-1 text-coral">
                  {m.year}
                </span>
                <span className="text-[15px] leading-relaxed">{m.text}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container className="py-16">
        <section className="avb flex flex-wrap items-center justify-between gap-6 bg-yellow px-8 py-10">
          <p className="max-w-md text-2xl font-extrabold tracking-tight">
            Turite idėją, kur AI agentas galėtų padėti?
          </p>
          <Button href="/konsultacija" variant="dark">
            Rezervuoti pokalbį
          </Button>
        </section>
      </Container>
    </>
  );
}
