import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { CalendlyInline } from "@/components/CalendlyInline";
import { pageMetadata } from "@/lib/meta";
import { CALENDLY_URL } from "@/lib/site";

export const metadata = pageMetadata("call");

const topics = [
  {
    title: "Autonomous AI employees",
    body: "I deploy fully autonomous AI agents that do real work inside your company: answering, qualifying leads, handling tasks and processes. Not a demo, an employee.",
  },
  {
    title: "Acquisition funnel automation",
    body: "I automate the whole acquisition funnel, from first touch to sale, so the system runs itself without manual work.",
  },
  {
    title: "AI CMO",
    body: "I build an AI CMO that runs your digital media: media buying, creative production, and content. Marketing that runs itself.",
  },
  {
    title: "Ecommerce automation",
    body: "Cart recovery, support, and follow-up flows that pay for themselves. Built on what works at Callsy across real stores.",
  },
  {
    title: "Fundraising in the Baltics",
    body: "Accelerators, pitch competitions, and what actually moved the needle for Callsy: FirstPick, 500 Global, Latitude59, and a national TV pitch.",
  },
];

const faq: FaqItem[] = [
  {
    q: "Who is this call for?",
    a: "Founders, ecommerce operators, and teams who want a straight answer about AI agents before committing budget. If you are deciding whether to build, buy, or skip, this call saves you weeks.",
  },
  {
    q: "What do I leave with?",
    a: "A concrete next-step plan. Typically: what to automate first, which tools fit your stack, and what to ignore. I share real examples, not slides.",
  },
  {
    q: "Can you build it for us?",
    a: "Sometimes. If your use case fits Callsy, that is the fastest route. For custom agent or MCP work, we discuss scope on the call and I tell you honestly if I am not the right person.",
  },
  {
    q: "How do I book?",
    a: "Pick a time on the Calendly link. Availability and any fees are shown on the booking page. Come with one specific question and we will get further, faster.",
  },
];

export default function Call() {
  return (
    <>
      <PageHeader
        eyebrow="Advisory"
        title="Book a call"
        lede="One conversation, one specific problem, one concrete plan. No pitch, no retainer required."
        tightBottom
      />

      <Container className="pb-4">
        <section className="avb overflow-hidden bg-yellow">
          <div className="grid items-stretch md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[280px] border-b-[3px] border-ink md:border-b-0 md:border-r-[3px]">
              <Image
                src="/images/webinar/arunas.jpg"
                alt="Arunas Vismantas"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[30%_20%]"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-12 md:px-12">
              <p className="avtag text-ink/70">Where AI helps</p>
              <p className="mt-3 text-xl font-bold leading-snug text-ink sm:text-2xl">
                Losing sales because nobody answers in time? The same tasks
                repeating every day? On the call we'll look at exactly what AI
                can take over in your business, and you'll leave with a concrete
                plan.
              </p>
              <p className="mt-4 text-sm font-semibold text-ink/70">
                Straight talk, directly with me. No pitch, no obligation.
              </p>
              <div className="mt-6">
                <Button href="#book">Book a time</Button>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <section className="border-b border-line">
        <Container className="py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">
            What I can do for your business
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            From a single AI agent to your entire marketing run by AI. Here is
            where I most often help.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <div key={t.title} className="avb bg-white p-7">
                <h3 className="text-xl font-extrabold tracking-tight">
                  {t.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Embedded scheduler */}
      <section id="book" className="scroll-mt-24 border-b border-line">
        <Container className="py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Pick a time
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Grab a slot that works for you, right here. A free 30-minute call,
            no obligation.
          </p>
          <div className="mt-8">
            <CalendlyInline url={CALENDLY_URL} />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Common questions
          </h2>
          <div className="mt-8 max-w-2xl">
            <FAQ items={faq} />
          </div>
        </Container>
      </section>
    </>
  );
}
