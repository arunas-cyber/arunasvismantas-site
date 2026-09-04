import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("work-lt");

/** What I do for clients — the three pillars of the offer. */
const capabilities = [
  {
    n: "01",
    h: "Skaitmeninis pamatas ir klientų srautas",
    body: "Greita ir randama svetainė, SEO bei GEO optimizacija ir funeliai, kurie lankytoją paverčia užklausa.",
  },
  {
    n: "02",
    h: "Užklausų automatizavimas su AI",
    body: "AI balso, SMS ir el. pašto agentai priima, kvalifikuoja ir nukreipia užklausas visą parą. Nė vienas klientas nelieka be atsako.",
  },
  {
    n: "03",
    h: "AI sistemos, kurios plečia verslą",
    body: "Individualūs agentai perima pasikartojantį darbą: klientų priėmimą, procesus ir aptarnavimą. Verslas auga be etatų augimo.",
  },
];

/** Case studies. Each links to its own page. */
const cases = [
  {
    href: "/darbai/zabulis-legal",
    img: "/images/work/zabulis-legal.jpg",
    client: "Zabulis Legal",
    sector: "Teisė · UK ir Lietuva",
    headline: "Trikalbis tinklalapis, pritraukiantis advokatui klientų",
    summary:
      "Du pasenę Wix tinklalapiai virsta vienu greitu, trikalbiu (EN/LT/RU) tinklalapiu su potencialių klientų surinkimo funeliu ir AI agentais užklausoms.",
    tags: ["Svetainės perstatymas", "SEO ir GEO", "Klientų funelis", "AI agentai"],
  },
];

export default function DarbaiLt() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <PageHeader
        eyebrow="Atvejai"
        title="Kaip tai atrodo iš tikrųjų"
        lede="Padedu verslams su AI pritraukti daugiau klientų: sutvarkau, kaip įmonė atrodo internete, automatizuoju gaunamas užklausas ir agentais padedu augti greičiau, nei leidžia etatai. Štai keli realūs klientų atvejai."
      />

      {/* Case studies */}
      <section className="border-b-[3px] border-ink">
        <Container className="py-16">
          <div className="space-y-10">
            {cases.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="avb avb-hover group block overflow-hidden bg-white"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[16/10] border-b-[3px] border-ink md:border-b-0 md:border-r-[3px]">
                    <Image
                      src={c.img}
                      alt={`${c.client} tinklalapis`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col p-7 sm:p-9">
                    <p className="avtag text-coral">{c.sector}</p>
                    <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                      {c.client}
                    </h2>
                    <p className="mt-2 text-lg font-semibold text-ink">
                      {c.headline}
                    </p>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                      {c.summary}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <li
                          key={t}
                          className="avtag rounded-md border-2 border-ink bg-paper px-2.5 py-1 text-ink"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-blue transition-colors duration-150 group-hover:text-coral">
                      Skaityti atvejį
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* What I do */}
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

      {/* CTA */}
      <Container className="py-16">
        <section className="avb flex flex-wrap items-center justify-between gap-6 bg-yellow px-8 py-10">
          <p className="max-w-md text-2xl font-extrabold tracking-tight">
            Norite tokių pat rezultatų savo versle?
          </p>
          <Button href="/konsultacija" variant="dark">
            Rezervuoti pokalbį
          </Button>
        </section>
      </Container>
    </>
  );
}
