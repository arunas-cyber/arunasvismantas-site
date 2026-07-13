import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd, personJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";
import { PITCH_VIDEO_URL } from "@/lib/site";

export const metadata = pageMetadata("about");

const milestones = [
  {
    year: "2010",
    text: "BA in Leadership in Management, Oxford Brookes University.",
  },
  {
    year: "2018",
    text: "Founded Smart Vision, an ecommerce support-services company. Venture number one.",
  },
  {
    year: "2020",
    text: "Growth work across AdKings Agency and BrandBoosters.io, four years deep in ecommerce marketing.",
  },
  {
    year: "2025",
    text: "Founded Callsy, an EU platform where AI voice, SMS, and email agents handle customer conversations for ecommerce brands. Venture number three.",
  },
  {
    year: "2025",
    text: "Selected for FirstPick's AI Accelerator, the first AI accelerator in the Baltics, and 500 Global's Eurasia Accelerator (Batch 9).",
  },
  {
    year: "2025",
    text: "Pitched Callsy on Rykliai. Lietuva, Lithuania's Shark Tank on TV3.",
  },
  {
    year: "2026",
    text: "One of 7 finalists in the Latitude59 Pitch Competition, the flagship Baltic startup conference. F6S ranked Callsy the #3 Top Company in AI in March 2026.",
  },
  {
    year: "2026",
    text: "Launched Founders & Food, a podcast where Lithuanian founders talk honestly over dinner.",
  },
];

export default function About() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <PageHeader
        eyebrow="About"
        title="Founder first. Engineer by necessity."
        lede="I'm Arunas Vismantas, a Vilnius-based three-time founder and CEO of Callsy. I build AI agents for a living, and I document what actually works for founders who want to do the same."
      />

      <section className="border-b border-line">
        <Container className="py-16">
          <div className="max-w-[68ch] space-y-6 text-lg leading-relaxed">
            <p>
              Callsy is an EU AI platform where voice, SMS, and email agents
              handle customer conversations for ecommerce brands: recovering
              abandoned carts, answering support questions, following up on
              leads. I started it because I watched online stores lose sales
              every night simply because nobody picked up the phone.
            </p>
            <p>
              In 2025 I pitched Callsy on Rykliai. Lietuva, the Lithuanian
              Shark Tank on TV3. We left without a deal, and with something
              more useful: two unicorn founders, Tadas Burgaila and Toma
              Sabaliauskienė, validated the business on air.{" "}
              <a
                href={PITCH_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue underline underline-offset-4 transition-colors duration-150 hover:text-coral"
              >
                The pitch is on YouTube.
              </a>
            </p>
            <p>
              I am not a classically trained engineer. Everything I ship, I
              ship by building with AI: agents, MCP integrations, entire
              marketing sites. That constraint turned out to be the most
              valuable thing I can teach. If a non-engineer founder can run a
              production AI platform, so can you, and I can show you the exact
              route.
            </p>
            <p>
              When I am not building, I host Founders & Food, a podcast where
              Lithuanian founders talk honestly over dinner, and I speak at
              startup and AI events in Lithuanian and English.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Milestones
          </h2>
          <ol className="mt-8 max-w-2xl divide-y divide-line border-y border-line">
            {milestones.map((m, i) => (
              <li key={i} className="flex gap-6 py-4">
                <span className="w-14 shrink-0 text-sm font-medium text-muted">
                  {m.year}
                </span>
                <span className="text-sm leading-relaxed">{m.text}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container className="flex flex-wrap items-center justify-between gap-6 py-16">
          <p className="max-w-md text-2xl font-extrabold tracking-tight">
            Working on something an AI agent could help with?
          </p>
          <Button href="/call">Book a call</Button>
        </Container>
      </section>
    </>
  );
}
