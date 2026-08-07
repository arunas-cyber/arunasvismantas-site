import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { pageMetadata } from "@/lib/meta";
import { CALENDLY_URL } from "@/lib/site";

export const metadata = pageMetadata("call");

const topics = [
  {
    title: "AI agents and MCP",
    body: "What an AI agent can realistically automate in your business, how to scope the first one, and how MCP integrations connect it to your tools.",
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
              <p className="avtag text-ink/70">Who you'll talk to</p>
              <p className="mt-3 text-xl font-bold leading-snug text-ink sm:text-2xl">
                You'll talk directly with me, Arunas. Five companies, the 500
                Global accelerator, and a national TV pitch behind me. Come with
                one question, leave with a clear plan.
              </p>
              <div className="mt-6">
                <Button href={CALENDLY_URL} external>
                  Pick a time on Calendly
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <section className="border-b border-line">
        <Container className="py-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {topics.map((t) => (
              <div key={t.title} className="avb bg-white p-7">
                <h2 className="text-xl font-extrabold tracking-tight">{t.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href={CALENDLY_URL} external>
              Pick a time on Calendly
            </Button>
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
