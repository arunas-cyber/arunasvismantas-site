import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SubscribeForm } from "@/components/SubscribeForm";
import { pageMetadata } from "@/lib/meta";
import { LINKEDIN_URL, SUBSTACK_URL } from "@/lib/site";

export const metadata = pageMetadata("newsletter");

const promises = [
  "What I built and what it cost, with real numbers.",
  "AI agent and MCP techniques that survive contact with production.",
  "Honest startup notes from the Baltic trenches: accelerators, pitching, sales.",
];

export default function Newsletter() {
  return (
    <>
      <PageHeader
        eyebrow="Newsletter"
        title="Build notes, not think pieces"
        lede="I write when I have something useful: what I shipped, what it cost, what I would do differently. No schedule theater, no recycled advice."
      />

      <section>
        <Container className="py-16">
          <ul className="max-w-2xl space-y-4">
            {promises.map((p) => (
              <li key={p} className="flex gap-3 text-lg leading-relaxed">
                <span aria-hidden className="mt-1 font-bold text-coral">
                  ¶
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <SubscribeForm
              source="newsletter-en"
              placeholder="Your email"
              cta="Subscribe"
              loadingLabel="Subscribing..."
              success="Thanks! You're on the list."
              error="Something went wrong. Try again."
              note="No spam. Unsubscribe anytime."
            />
          </div>

          {(SUBSTACK_URL || LINKEDIN_URL) && (
            <p className="mt-6 text-sm text-muted">
              {SUBSTACK_URL ? (
                <>
                  Read past issues on{" "}
                  <a
                    href={SUBSTACK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue underline underline-offset-4 hover:text-coral"
                  >
                    Substack
                  </a>
                  .
                </>
              ) : (
                <>
                  Until the newsletter launches, I post the same notes on{" "}
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue underline underline-offset-4 hover:text-coral"
                  >
                    LinkedIn
                  </a>
                  .
                </>
              )}
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
