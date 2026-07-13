import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProofBar } from "@/components/ProofBar";
import { Waveform } from "@/components/Waveform";
import { HeroPhoto } from "@/components/HeroPhoto";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";
import { CALLSY_URL } from "@/lib/site";

export const metadata = pageMetadata("home");

const offers = [
  {
    title: "Build your own AI assistant",
    body: "A hands-on course on building an AI agent that actually does the work. Coming soon.",
    cta: null,
  },
  {
    title: "Advisory call",
    body: "AI agents, MCP integrations, ecommerce automation, or fundraising notes from someone who pitched on national TV.",
    cta: { label: "Book a call", href: "/call" },
  },
  {
    title: "Speaking and hosting",
    body: "Keynotes and event hosting on AI agents and startup building, in Lithuanian or English.",
    cta: { label: "Get in touch", href: "/call" },
  },
];

export default function Home() {
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
            Founder of Callsy · AI agents · Speaker
          </p>
          <h1 className="mt-8 max-w-4xl text-[clamp(3rem,8vw,6rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.035em]">
            I build AI agents.{" "}
            <span className="text-coral">And founders.</span>
          </h1>
          <p className="mt-8 max-w-[52ch] text-[19px] font-medium leading-normal">
            Founder of <strong>Callsy</strong>, an EU AI voice platform for
            ecommerce. I teach founders and operators to build AI assistants
            that{" "}
            <span className="rounded-md bg-blue px-1.5 py-0.5 text-white">
              actually work
            </span>
            , and I talk about it on stage.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/call" variant="dark">
              Book a call
            </Button>
            <Button href="/newsletter" variant="secondary">
              Join the newsletter
            </Button>
          </div>
          <div className="mt-10">
            <Waveform />
          </div>
          </div>
          <HeroPhoto
            label="On stage"
            alt="Arunas Vismantas speaking on stage at a tech conference"
          />
          </div>
        </section>

        {/* Proof marquee */}
        <div className="mt-6">
          <ProofBar />
        </div>
      </Container>

      {/* Offers */}
      <section>
        <Container className="py-20 sm:py-24">
          <SectionHeading eyebrow="Work with me" title="Three ways in" />
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
                  <p className="avtag mt-5 text-coral">Coming soon</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <Container className="pb-20">
        <section className="avb bg-ink px-8 py-16 text-center text-paper">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let&apos;s talk about what an AI agent could do in your business
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/call">Book a call</Button>
          </div>
        </section>
      </Container>
    </>
  );
}
