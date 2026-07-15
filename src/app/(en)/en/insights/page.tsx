import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { pageMetadata } from "@/lib/meta";
import { articlesForLocale } from "@/content/articles";

export const metadata = pageMetadata("insights");

export default function Insights() {
  const published = articlesForLocale("en");

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Guides and build notes"
        lede="Long-form guides on AI agents and honest notes from building a startup. Written by me, tested in production, updated when reality disagrees."
      />
      <Container className="py-16">
        {published.length === 0 ? (
          <div className="avb max-w-xl bg-white p-8">
            <p className="text-lg font-bold">The first guides are in the works.</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Coming first: building your own AI assistant, and what OpenClaw
              actually is. Join the newsletter and you will not miss them.
            </p>
            <div className="mt-5">
              <Button href="/en/newsletter" variant="secondary">
                Join the newsletter
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {published.map(({ article, route }) => (
              <Link
                key={route.key}
                href={route.path}
                className="avb avb-hover flex flex-col bg-white p-7"
              >
                <p className="avtag text-coral">{article.kicker}</p>
                <p className="mt-3 text-xl font-extrabold tracking-tight">
                  {route.title}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {article.lede}
                </p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
