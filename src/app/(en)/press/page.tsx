import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/meta";
import { PITCH_VIDEO_URL } from "@/lib/site";

export const metadata = pageMetadata("press");

const items = [
  {
    name: "Rykliai. Lietuva (Shark Tank Lithuania, TV3)",
    year: "2025",
    body: "Pitched Callsy on national television. No deal, but the business was validated on air by two unicorn founders, Tadas Burgaila and Toma Sabaliauskienė.",
    link: { label: "Watch the pitch", href: PITCH_VIDEO_URL },
  },
  {
    name: "Latitude59 Pitch Competition",
    year: "2026",
    body: "One of 7 finalists at the flagship Baltic startup conference, presenting AI workforce agents that automate revenue, activation, and support.",
    link: {
      label: "Announcement",
      href: "https://latitude59.ee/startups-from-estonia-finland-lithuania-and-ukraine-reach-the-finals-of-latitude59s-pitch-competition/",
    },
  },
  {
    name: "FirstPick AI Accelerator",
    year: "2025",
    body: "Callsy was selected for the first AI accelerator in the Baltics, described as an ecommerce AI agent that helps recover lost sales.",
    link: {
      label: "Cohort announcement",
      href: "https://firstpick.vc/blog/firstpick-launches-the-baltics-first-ai-accelerator/",
    },
  },
  {
    name: "500 Global Eurasia Accelerator",
    year: "2025",
    body: "One of 13 startups in Batch 9 of 500 Global's 12-week Eurasia program.",
    link: {
      label: "Announcement",
      href: "https://www.linkedin.com/posts/500eurasia_500global-eurasia-accelerator-activity-7374395084668047360-AjTu",
    },
  },
  {
    name: "F6S",
    year: "2026",
    body: "Callsy ranked #3 Top Company in AI on F6S in March 2026.",
    link: null,
  },
];

export default function Press() {
  return (
    <>
      <PageHeader
        eyebrow="Press"
        title="Stages, screens, and receipts"
        lede="Where Callsy and I have shown up, with sources. For interviews, podcasts, or speaking, get in touch."
      />

      <section className="border-b border-line">
        <Container className="py-16">
          <div className="max-w-3xl divide-y divide-line border-y border-line">
            {items.map((item) => (
              <article key={item.name} className="py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-serif text-xl font-medium">
                    {item.name}
                  </h2>
                  <span className="text-sm text-muted">{item.year}</span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-accent transition-colors duration-200 hover:text-ink"
                  >
                    {item.link.label} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-wrap items-center justify-between gap-6 py-16">
          <p className="max-w-md font-serif text-2xl font-medium tracking-tight">
            Booking a speaker or a guest for your show?
          </p>
          <Button href="/call">Get in touch</Button>
        </Container>
      </section>
    </>
  );
}
