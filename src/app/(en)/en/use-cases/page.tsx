import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("work");

/** What I do for clients — the three pillars of the offer. */
const capabilities = [
  {
    n: "01",
    h: "Digital foundation and a client engine",
    body: "A fast, findable website, SEO and GEO optimisation, and funnels that turn a visitor into an enquiry.",
  },
  {
    n: "02",
    h: "Inbound lead automation with AI",
    body: "AI voice, SMS and email agents take, qualify and route enquiries around the clock. No lead is left without a reply.",
  },
  {
    n: "03",
    h: "AI systems that let a business scale",
    body: "Custom agents take over the repetitive work: onboarding, process automation and support. The business grows without headcount growing with it.",
  },
];

/** Case studies. Each links to its own page. */
const cases = [
  {
    href: "/en/use-cases/zabulis-legal",
    img: "/images/work/zabulis-legal.jpg",
    client: "Zabulis Legal",
    sector: "Law · UK and Lithuania",
    headline: "A trilingual digital presence and client engine for a solicitor",
    summary:
      "Two ageing Wix sites become one fast, trilingual site (EN/LT/RU) with a lead-capture funnel and AI agents for inbound enquiries.",
    tags: ["Website rebuild", "SEO and GEO", "Lead funnel", "AI agents"],
  },
];

export default function UseCasesEn() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <PageHeader
        eyebrow="Use cases"
        title="How it actually plays out"
        lede="I build growth engines for businesses with AI: I fix how they show up online, automate their inbound leads, and use agents to grow faster than headcount allows. Here is the real client work, case by case."
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
                      alt={`${c.client} website`}
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
                      Read the case study
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
          <p className="avtag text-muted">What I do</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight">
            From first visitor to onboarded client
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
            Want an engine like this for your business?
          </p>
          <Button href="/en/call" variant="dark">
            Book a call
          </Button>
        </section>
      </Container>
    </>
  );
}
