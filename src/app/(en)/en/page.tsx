import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProofBar } from "@/components/ProofBar";
import { Waveform } from "@/components/Waveform";
import { HeroPhoto } from "@/components/HeroPhoto";
import { JsonLd, personJsonLd, websiteJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";
import { CALLSY_URL } from "@/lib/site";

export const metadata = pageMetadata("home");

const covered = [
  {
    title: "AI agents & automation",
    body: "Where AI actually saves you time and where to start, so you don't burn money on demos.",
  },
  {
    title: "MCP integrations",
    body: "How to connect an AI agent to your existing tools so it does real work, not just chat.",
  },
  {
    title: "Ecommerce automation",
    body: "Abandoned carts, customer support, bookings. What's worth automating first.",
  },
  {
    title: "Fundraising",
    body: "Product, pitch, and accelerators from someone who went through 500 Global and raised millions.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />

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
                <span className="text-coral">And help founders build theirs.</span>
              </h1>
              <p className="mt-8 max-w-[52ch] text-[19px] font-medium leading-normal">
                A five-time founder from Vilnius. I co-founded{" "}
                <strong>Callsy</strong>, an EU AI voice platform for ecommerce.
                Book a free call and let's talk about what AI could actually do
                in your business.
              </p>
              <div className="mt-10">
                <Button href="/en/call" variant="dark">
                  Book a free call
                </Button>
                <p className="avtag mt-4 text-ink/70">
                  30 min · free · no pitch
                </p>
                <a
                  href="/en/newsletter"
                  className="mt-4 inline-block text-sm font-semibold underline underline-offset-4 transition-colors duration-150 hover:text-coral"
                >
                  or join the newsletter →
                </a>
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

      {/* What the call covers */}
      <section className="border-t-[3px] border-ink">
        <Container className="py-20 sm:py-24">
          <SectionHeading eyebrow="Free consultation" title="What we can cover" />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {covered.map((o) => (
              <div key={o.title} className="avb flex flex-col bg-white p-7">
                <h3 className="text-lg font-extrabold tracking-tight">
                  {o.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/en/call" variant="dark">
              Book a call
            </Button>
          </div>
        </Container>
      </section>

      {/* Closing CTA band — with a face, so the ask has a person behind it */}
      <Container className="py-20">
        <section className="avb overflow-hidden bg-ink text-paper">
          <div className="grid items-stretch md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[300px] border-b-[3px] border-ink bg-ink md:border-b-0 md:border-r-[3px]">
              <Image
                src="/images/webinar/arunas.jpg"
                alt="Arunas Vismantas"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[30%_20%]"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-14 text-center md:px-12 md:text-left">
              <p className="avtag text-yellow">Who you'll talk to</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Let's talk about what an AI agent could do in your business
              </h2>
              <p className="mt-4 max-w-md text-paper/70">
                A free 30-minute call, directly with me. No obligation, no sales
                script.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <Button href="/en/call">Book a free call</Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
