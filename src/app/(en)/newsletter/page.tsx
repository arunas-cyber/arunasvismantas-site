import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
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
                <span aria-hidden className="mt-1 text-accent">
                  ¶
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            {SUBSTACK_URL ? (
              <Button href={SUBSTACK_URL} external>
                Subscribe on Substack
              </Button>
            ) : (
              <div className="max-w-md rounded border border-line p-6">
                <p className="text-sm leading-relaxed text-muted">
                  The newsletter launches soon. Until then, I post the same
                  notes on LinkedIn.
                </p>
                <div className="mt-4">
                  <Button href={LINKEDIN_URL} external variant="secondary">
                    Follow on LinkedIn
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
