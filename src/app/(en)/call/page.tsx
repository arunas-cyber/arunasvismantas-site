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

      <section className="border-b border-line">
        <Container className="py-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {topics.map((t) => (
              <div key={t.title} className="rounded border border-line p-6">
                <h2 className="font-serif text-xl font-medium">{t.title}</h2>
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
          <h2 className="font-serif text-3xl font-medium tracking-tight">
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
