import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd, personJsonLd, profilePageJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/meta";
import { PITCH_VIDEO_URL } from "@/lib/site";

export const metadata = pageMetadata("about", { ogType: "profile" });

const milestones = [
  {
    year: "2010",
    text: "BA in Leadership in Management, Oxford Brookes University.",
  },
  {
    year: "2018",
    text: "Co-founded Smart Vision, an ecommerce support-services company.",
  },
  {
    year: "2020",
    text: "Co-founded and led AdKings Agency and BrandBoosters.io, performance marketing and growth for ecommerce brands. Also co-founded Podbase.",
  },
  {
    year: "2025",
    text: "Co-founded Callsy, an EU platform where AI voice, SMS, and email agents handle customer conversations for ecommerce brands.",
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

const sections = [
  {
    h: "The arc",
    body: [
      "Here is the honest version: I am a lazy person, and I have built a career out of it. If a task is repetitive, my instinct is to automate it. Five companies later, that instinct is the through-line in all of them.",
      "It started in 2018 with Smart Vision, an ecommerce support-services company, and ran through years of performance marketing and growth for online brands with AdKings and BrandBoosters, plus Podbase along the way. Each one taught the same lesson from a different angle: the boring, repeatable work is exactly what software should handle.",
      "Today it is Callsy, an EU platform where AI voice, SMS, and email agents hold real customer conversations: recovering abandoned carts, qualifying leads, taking bookings, sending payment reminders, running win-backs. I co-founded it with Laimonas Sutkus after watching online stores lose sales every night, simply because nobody picked up the phone.",
    ],
  },
  {
    h: "How I build",
    body: [
      "I am not a classically trained engineer. Everything I ship, I ship by building with AI: the agents themselves, the MCP integrations, entire marketing sites, this one included.",
      "That used to feel like a disadvantage. It turned out to be the most useful thing I can teach. The tools got good enough that a founder who truly understands the problem can now build the solution, without a computer science degree and without waiting on a team. If I can run a production AI platform this way, so can you.",
      "So I am honest about the stack, the real costs, and the mistakes. No mystique, no gatekeeping.",
    ],
  },
  {
    h: "Why I share it",
    body: [
      "Two things have stayed constant my whole career. I am obsessed with trying new technology, I want my hands on every useful tool the week it ships. And I love passing on what I learn, whether that is teaching a founder to wire up their first agent or just getting someone genuinely excited about what is now possible.",
      "This site is the home for both: the guides, the talks, the build notes. If something I worked out saves you a month, that is the whole point.",
    ],
  },
  {
    h: "What I believe about AI agents",
    body: [
      "Most AI demos are toys. The work worth doing is agents that hold down a real job, end to end, and earn enough trust to be left alone with it.",
      "I think the next few years belong to founders who can wire these agents into their own business faster than incumbents can bolt them onto theirs. Not the biggest engineering team. The fastest, clearest thinker with the right tools. That is the bet behind Callsy, and behind everything I teach.",
    ],
  },
  {
    h: "Right now",
    body: [
      "Today I am scaling Callsy and raising for 2026, after wrapping the 500 Global Eurasia accelerator and FirstPick's AI Accelerator, the first in the Baltics. Along the way Callsy pitched on Rykliai. Lietuva, Lithuania's Shark Tank, reached the Latitude59 pitch finals, and was ranked the #3 AI company on F6S.",
      "Outside the company, I host Founders & Food, a podcast where Lithuanian founders talk honestly over dinner, and I speak at startup and AI events in Lithuanian and English.",
    ],
  },
];

export default function About() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={profilePageJsonLd} />
      <PageHeader
        eyebrow="About"
        title="Founder first. Engineer by necessity."
        lede="I'm Arunas Vismantas, a Vilnius-based founder. I have co-founded and led five companies, most recently Callsy. I build AI agents with no formal engineering background, and I share what I learn so other founders can do the same."
      />

      <section className="border-b-[3px] border-ink">
        <Container className="py-16">
          <div className="max-w-[68ch] space-y-14">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  {s.h}
                </h2>
                <div className="mt-5 space-y-5 text-lg leading-relaxed text-muted">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {s.h === "The arc" && (
                    <p>
                      In 2025 I pitched Callsy on Rykliai. Lietuva, the
                      Lithuanian Shark Tank on TV3. We left without a deal, and
                      with something more useful: two unicorn founders, Tadas
                      Burgaila and Toma Sabaliauskienė, validated the business
                      on air.{" "}
                      <a
                        href={PITCH_VIDEO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue underline underline-offset-4 transition-colors duration-150 hover:text-coral"
                      >
                        The pitch is on YouTube.
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-[3px] border-ink">
        <Container className="py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">Milestones</h2>
          <ol className="mt-8 max-w-2xl divide-y-[2.5px] divide-line border-y-[2.5px] border-line">
            {milestones.map((m, i) => (
              <li key={i} className="flex gap-6 py-4">
                <span className="avtag w-16 shrink-0 pt-1 text-coral">
                  {m.year}
                </span>
                <span className="text-[15px] leading-relaxed">{m.text}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container className="py-16">
        <section className="avb flex flex-wrap items-center justify-between gap-6 bg-yellow px-8 py-10">
          <p className="max-w-md text-2xl font-extrabold tracking-tight">
            Working on something an AI agent could help with?
          </p>
          <Button href="/call" variant="dark">
            Book a call
          </Button>
        </section>
      </Container>
    </>
  );
}
