import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Inline } from "@/components/Inline";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("case-zabulis");

const facts = [
  { k: "Sector", v: "Law" },
  { k: "Markets", v: "UK and Lithuania" },
  { k: "Languages", v: "EN · LT · RU" },
  { k: "Engagement", v: "6-month project" },
];

const challenge = [
  "Two ageing Wix sites (.com and .co.uk) with duplicated content that had lost their search visibility.",
  "No lead capture at all: a visitor arrived and left with no next step.",
  "A trilingual audience (English, Lithuanian, Russian) that neither old site served properly.",
];

const built = [
  {
    n: "01",
    h: "A trilingual site, rebuilt from scratch",
    body: "An EN/LT/RU site that is fast, technically clean and ready for both Google and AI answer engines. Split by market, so each client gets their own language and their own jurisdiction.",
  },
  {
    n: "02",
    h: "A lead-capture funnel",
    body: "A funnel that qualifies debt-recovery enquiries and ends on a concrete price, not a contact form. The visitor sees exactly what to expect.",
  },
  {
    n: "03",
    h: "Content that search and AI cite",
    body: "Deep, expert content answering real legal questions, so the firm becomes the answer that Google and AI assistants give.",
  },
  {
    n: "04",
    h: "AI agents for inbound (next phase)",
    body: "Agents that take over inbound enquiry handling and client onboarding, so no enquiry is lost, even out of hours.",
  },
];

/** Real client quote goes here once we have it in writing. Keep null until then. */
const testimonial: { quote: string; author: string; role: string } | null =
  null;

export default function ZabulisLegalEn() {
  return (
    <>
      <JsonLd data={personJsonLd} />

      {/* Hero */}
      <section className="border-b-[3px] border-ink">
        <Container className="py-14 sm:py-16">
          <a
            href="/en/use-cases"
            className="avtag text-muted transition-colors duration-150 hover:text-coral"
          >
            ← Use cases
          </a>
          <p className="avtag mt-6 inline-block rounded-lg bg-coral px-3 py-1.5 text-white">
            Case study
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Zabulis Legal
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-muted">
            A dual-qualified solicitor (England &amp; Wales and Lithuania) with
            offices in London and Vilnius. We rebuilt the firm&apos;s digital
            presence and are turning it into an engine that brings in clients.
          </p>

          {/* Screenshot of the delivered site */}
          <div className="avb mt-10 overflow-hidden bg-white">
            <Image
              src="/images/work/zabulis-legal.jpg"
              alt="The new Zabulis Legal website"
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
              <p className="avtag text-coral">The challenge</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                The firm was better than its website
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
          <p className="avtag text-yellow">What we built</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight">
            One engine, four parts
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
            Project started in 2026. Phase one is ready to launch, with phase
            two to follow.
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
            Have a similar challenge in your business?
          </p>
          <Button href="/en/call" variant="dark">
            Book a call
          </Button>
        </section>
      </Container>
    </>
  );
}
