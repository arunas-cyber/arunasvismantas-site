import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Inline } from "@/components/Inline";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("case-zabulis-lt");

const facts = [
  { k: "Sektorius", v: "Teisė" },
  { k: "Rinkos", v: "JK ir Lietuva" },
  { k: "Kalbos", v: "EN · LT · RU" },
  { k: "Trukmė", v: "6 mėnesių projektas" },
];

const challenge = [
  "Du pasenę Wix tinklalapiai (.com ir .co.uk) su besidubliuojančiu turiniu, praradę matomumą paieškoje.",
  "Jokio potencialių klientų surinkimo: lankytojas ateidavo ir išeidavo be jokio kito žingsnio.",
  "Trikalbė auditorija (anglų, lietuvių, rusų), kurios nė vienas senasis tinklalapis tinkamai neaptarnavo.",
];

const built = [
  {
    n: "01",
    h: "Trikalbis tinklalapis nuo nulio",
    body: "Perstatytas EN/LT/RU tinklalapis: greitas, techniškai švarus ir paruoštas tiek Google, tiek AI atsakymų sistemoms. Rinkos suskirstytos taip, kad kiekvienas klientas gauna savo kalbą ir savo jurisdikciją.",
  },
  {
    n: "02",
    h: "Klientų surinkimo funelis",
    body: "Skolų išieškojimo užklausas kvalifikuojantis funelis, kuris baigiasi konkrečia kaina, o ne kontaktų forma. Lankytojas iš karto mato, ko tikėtis.",
  },
  {
    n: "03",
    h: "Turinys, kurį cituoja paieška ir AI",
    body: "Gilus, ekspertinis turinys, atsakantis į tikrus teisinius klausimus, kad firma taptų tuo atsakymu, kurį pateikia Google ir AI asistentai.",
  },
  {
    n: "04",
    h: "AI agentai užklausoms (kitas etapas)",
    body: "Agentai, perimantys gaunamų užklausų aptarnavimą ir klientų priėmimą, kad nė viena užklausa nebūtų prarasta net ne darbo metu.",
  },
];

/** Real client quote goes here once we have it in writing. Keep null until then. */
const testimonial: { quote: string; author: string; role: string } | null =
  null;

export default function ZabulisLegalLt() {
  return (
    <>
      <JsonLd data={personJsonLd} />

      {/* Hero */}
      <section className="border-b-[3px] border-ink">
        <Container className="py-14 sm:py-16">
          <a
            href="/darbai"
            className="avtag text-muted transition-colors duration-150 hover:text-coral"
          >
            ← Atvejai
          </a>
          <p className="avtag mt-6 inline-block rounded-lg bg-coral px-3 py-1.5 text-white">
            Klientų atvejis
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Zabulis Legal
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-muted">
            Dvigubą kvalifikaciją turintis advokatas (Anglija ir Velsas bei
            Lietuva) su biurais Londone ir Vilniuje. Perstatėme skaitmeninį
            firmos veidą ir paverčiame jį varikliu, kuris pritraukia klientų.
          </p>

          {/* Screenshot of the delivered site */}
          <div className="avb mt-10 overflow-hidden bg-white">
            <Image
              src="/images/work/zabulis-legal.jpg"
              alt="Naujasis Zabulis Legal tinklalapis"
              width={1600}
              height={1000}
              priority
              className="h-auto w-full"
            />
          </div>

          {/* At a glance */}
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border-[3px] border-ink bg-ink sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.k} className="bg-paper p-4">
                <dt className="avtag text-muted">{f.k}</dt>
                <dd className="mt-1 text-[15px] font-extrabold tracking-tight">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Challenge */}
      <section className="border-b-[3px] border-ink">
        <Container className="py-16">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <p className="avtag text-coral">Iššūkis</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Stipri firma, prastas tinklalapis
              </h2>
            </div>
            <ul className="space-y-4">
              {challenge.map((c, i) => (
                <li
                  key={i}
                  className="avb flex gap-3 bg-white p-5 text-[15px] leading-relaxed"
                >
                  <span aria-hidden className="mt-0.5 font-bold text-coral">
                    ✕
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* What we built */}
      <section className="border-b-[3px] border-ink bg-ink text-paper">
        <Container className="py-16">
          <p className="avtag text-yellow">Ką sukūrėme</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight">
            Vienas variklis, keturios dalys
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {built.map((b) => (
              <div key={b.n} className="avb bg-paper p-6 text-ink">
                <span className="avtag text-coral">{b.n}</span>
                <h3 className="mt-3 text-xl font-extrabold leading-tight tracking-tight">
                  {b.h}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-paper/60">
            Projektas pradėtas 2026 m. Pirmasis etapas paruoštas paleidimui,
            antrasis seka toliau.
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
            Turite panašų iššūkį savo versle?
          </p>
          <Button href="/konsultacija" variant="dark">
            Rezervuoti pokalbį
          </Button>
        </section>
      </Container>
    </>
  );
}
