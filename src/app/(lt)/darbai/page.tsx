import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Inline } from "@/components/Inline";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("work-lt");

/** What I do for clients — the three pillars of the offer. */
const capabilities = [
  {
    n: "01",
    h: "Skaitmeninis pamatas ir klientų pritraukimo variklis",
    body: "Sutvarkau įmonės buvimą internete ir paverčiu jį varikliu, kuris pritraukia klientų: greita ir randama svetainė, SEO bei GEO optimizacija ir potencialių klientų surinkimo funeliai, kurie lankytoją paverčia užklausa.",
  },
  {
    n: "02",
    h: "Užklausų automatizavimas su AI",
    body: "AI balso, SMS ir el. pašto agentai priima, kvalifikuoja ir nukreipia gaunamas užklausas visą parą. Nė vienas potencialus klientas nelieka be atsako, net naktį ar savaitgalį.",
  },
  {
    n: "03",
    h: "AI sistemos, kurios plečia verslą",
    body: "Individualūs agentai ir sistemos perima pasikartojantį darbą: klientų priėmimą, procesų automatizavimą ir aptarnavimą. Verslas auga be proporcingo etatų augimo.",
  },
];

/** Featured case study. */
const study = {
  label: "Pirmasis klientas",
  name: "Zabulis Legal",
  role: "Dvigubą kvalifikaciją turintis advokatas (Anglija ir Velsas bei Lietuva). Biurai Londone ir Vilniuje.",
  challenge: [
    "Du pasenę Wix tinklalapiai (.com ir .co.uk) su besidubliuojančiu turiniu, praradę matomumą paieškoje.",
    "Jokio potencialių klientų surinkimo: lankytojas ateidavo ir išeidavo be jokio kito žingsnio.",
    "Trikalbė auditorija (anglų, lietuvių, rusų), kurios nė vienas senasis tinklalapis tinkamai neaptarnavo.",
  ],
  built: [
    "Nuo nulio perstatytas trikalbis tinklalapis (EN/LT/RU): greitas, techniškai švarus ir paruoštas tiek Google, tiek AI atsakymų sistemoms.",
    "Potencialių klientų surinkimo funelis, kvalifikuojantis skolų išieškojimo užklausas ir pasibaigiantis konkrečia kaina.",
    "Gilus, ekspertinis turinys, atsakantis į tikrus teisinius klausimus, kad firma taptų tuo atsakymu, kurį pateikia paieška ir AI asistentai.",
    "Kitas etapas: AI agentai, perimantys gaunamų užklausų aptarnavimą ir klientų priėmimą.",
  ],
  status: "Projektas pradėtas 2026 m. Pirmasis etapas paruoštas paleidimui, antrasis seka toliau.",
};

/** Real client quote goes here once we have it in writing. Keep null until then. */
const testimonial: { quote: string; author: string; role: string } | null =
  null;

export default function DarbaiLt() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <PageHeader
        eyebrow="Darbai su klientais"
        title="Kuriu verslams augimo variklius su AI"
        lede="Padedu įmonėms sutvarkyti buvimą internete, automatizuoti gaunamas užklausas ir su AI agentais augti greičiau, nei leidžia etatai. Tas pats požiūris, kuriuo auginu Callsy, tik pritaikytas jūsų verslui."
      />

      {/* What I do for clients */}
      <section className="border-b-[3px] border-ink">
        <Container className="py-16">
          <p className="avtag text-muted">Ką darau</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight">
            Nuo pirmo lankytojo iki priimto kliento
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.n} className="avb bg-white p-6">
                <span className="avtag text-coral">{c.n}</span>
                <h3 className="mt-3 text-xl font-extrabold leading-tight tracking-tight">
                  {c.h}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured case study */}
      <section className="border-b-[3px] border-ink bg-ink text-paper">
        <Container className="py-16">
          <p className="avtag text-yellow">{study.label}</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
            {study.name}
          </h2>
          <p className="mt-3 max-w-2xl text-lg font-medium leading-relaxed text-paper/70">
            {study.role}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="avb bg-paper p-6 text-ink">
              <p className="avtag text-coral">Iššūkis</p>
              <ul className="mt-4 space-y-3">
                {study.challenge.map((c, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                    <span aria-hidden className="mt-0.5 font-bold text-coral">
                      ✕
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="avb bg-yellow p-6 text-ink">
              <p className="avtag text-ink/60">Ką sukūrėme</p>
              <ul className="mt-4 space-y-3">
                {study.built.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                    <span aria-hidden className="mt-0.5 font-bold">
                      →
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-paper/60">
            {study.status}
          </p>
        </Container>
      </section>

      {/* Testimonial (renders only when a real, consented quote exists) */}
      {testimonial && (
        <section className="border-b-[3px] border-ink">
          <Container className="py-16">
            <figure className="avb mx-auto max-w-2xl bg-white p-8">
              <blockquote className="text-2xl font-extrabold leading-snug tracking-tight">
                <Inline text={`“${testimonial.quote}”`} />
              </blockquote>
              <figcaption className="mt-5 text-[15px] text-muted">
                <span className="font-bold text-ink">{testimonial.author}</span>
                {", "}
                {testimonial.role}
              </figcaption>
            </figure>
          </Container>
        </section>
      )}

      {/* CTA */}
      <Container className="py-16">
        <section className="avb flex flex-wrap items-center justify-between gap-6 bg-yellow px-8 py-10">
          <p className="max-w-md text-2xl font-extrabold tracking-tight">
            Norite tokio variklio savo verslui?
          </p>
          <Button href="/konsultacija" variant="dark">
            Rezervuoti pokalbį
          </Button>
        </section>
      </Container>
    </>
  );
}
