import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Inline } from "@/components/Inline";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("work");

/** What I do for clients — the three pillars of the offer. */
const capabilities = [
  {
    n: "01",
    h: "Digital foundation and an acquisition engine",
    body: "I fix how a business shows up online and turn it into an engine that brings in clients: a fast, findable website, SEO and GEO optimisation, and lead-capture funnels that turn a visitor into an enquiry.",
  },
  {
    n: "02",
    h: "Inbound lead automation with AI",
    body: "AI voice, SMS and email agents take, qualify and route inbound enquiries around the clock. No lead is left without a reply, not at night and not on a weekend.",
  },
  {
    n: "03",
    h: "AI systems that let a business scale",
    body: "Custom agents and systems take over the repetitive work: client onboarding, process automation and support. The business grows without headcount growing with it.",
  },
];

/** Featured case study. */
const study = {
  label: "First client",
  name: "Zabulis Legal",
  role: "A dual-qualified solicitor (England & Wales and Lithuania). Offices in London and Vilnius.",
  challenge: [
    "Two ageing Wix sites (.com and .co.uk) with duplicated content that had lost their search visibility.",
    "No lead capture at all: a visitor arrived and left with no next step.",
    "A trilingual audience (English, Lithuanian, Russian) that neither old site served properly.",
  ],
  built: [
    "A trilingual site (EN/LT/RU) rebuilt from scratch: fast, technically clean, and ready for both Google and AI answer engines.",
    "A lead-capture funnel that qualifies debt-recovery enquiries and ends on a concrete price.",
    "Deep, expert content answering real legal questions, so the firm becomes the answer that search and AI assistants give.",
    "Next up: AI agents that take over inbound enquiry handling and client onboarding.",
  ],
  status: "Project started in 2026. Phase one is ready to launch, with phase two to follow.",
};

/** Real client quote goes here once we have it in writing. Keep null until then. */
const testimonial: { quote: string; author: string; role: string } | null =
  null;

export default function WorkEn() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <PageHeader
        eyebrow="Client work"
        title="I build growth engines for businesses with AI"
        lede="I help companies fix how they show up online, automate their inbound leads, and grow faster than headcount allows with AI agents. The same approach I use to build Callsy, applied to your business."
      />

      {/* What I do for clients */}
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
              <p className="avtag text-coral">The challenge</p>
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
              <p className="avtag text-ink/60">What we built</p>
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
