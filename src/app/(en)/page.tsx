import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProofBar } from "@/components/ProofBar";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";

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
      <section className="border-b border-line">
        <Container className="py-24 sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Founder of Callsy · AI agents · Speaker
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-tight">
            I build AI agents. <em className="text-accent">And founders.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Founder of Callsy, an EU AI voice platform for ecommerce. I teach
            founders and operators to build their own AI assistants, and I talk
            about it on stage.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/call">Book a call</Button>
            <Button href="/newsletter" variant="secondary">
              Join the newsletter
            </Button>
          </div>
        </Container>
      </section>

      {/* Proof bar */}
      <section className="border-b border-line">
        <Container className="py-8">
          <ProofBar />
        </Container>
      </section>

      {/* Offers */}
      <section>
        <Container className="py-20 sm:py-24">
          <SectionHeading eyebrow="Work with me" title="Three ways in" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {offers.map((o) => (
              <div
                key={o.title}
                className="flex flex-col rounded border border-line p-6 transition-shadow duration-200 hover:shadow-card"
              >
                <h3 className="font-serif text-xl font-medium">{o.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {o.body}
                </p>
                {o.cta ? (
                  <div className="mt-5">
                    <Button href={o.cta.href} variant="ghost">
                      {o.cta.label} →
                    </Button>
                  </div>
                ) : (
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.15em] text-muted">
                    Coming soon
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-ink text-paper">
        <Container className="py-20 text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Let&apos;s talk about what an AI agent could do in your business
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/call">Book a call</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
