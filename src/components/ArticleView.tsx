import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";
import { FAQ } from "./FAQ";
import { Inline } from "./Inline";
import { JsonLd } from "@/lib/schema";
import { routeByKey, SITE_URL, type SiteRoute } from "@/lib/routes";
import { type Article, type Block } from "@/content/types";

const strings = {
  en: {
    byline: "By Arunas Vismantas",
    updated: "Updated",
    toc: "In this guide",
    related: "Keep reading",
    home: "Home",
    insights: "Insights",
  },
  lt: {
    byline: "Autorius: Arunas Vismantas",
    updated: "Atnaujinta",
    toc: "Šiame gide",
    related: "Skaitykite toliau",
    home: "Pradžia",
    insights: "Įžvalgos",
  },
};

function formatDate(iso: string, locale: "en" | "lt") {
  return new Date(iso).toLocaleDateString(locale === "en" ? "en-GB" : "lt-LT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-[17px] leading-relaxed text-muted">
          <Inline text={block.text} />
        </p>
      );
    case "h2":
      return (
        <h2
          id={block.id}
          className="scroll-mt-24 pt-4 text-3xl font-extrabold tracking-tight text-ink"
        >
          <Inline text={block.text} />
        </h2>
      );
    case "h3":
      return (
        <h3 className="pt-2 text-xl font-extrabold tracking-tight text-ink">
          <Inline text={block.text} />
        </h3>
      );
    case "ul":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[17px] leading-relaxed text-muted"
            >
              <span aria-hidden className="mt-0.5 font-bold text-coral">
                ★
              </span>
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-[17px] leading-relaxed text-muted"
            >
              <span
                aria-hidden
                className="mt-0.5 font-mono text-sm font-bold text-coral"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="avb bg-yellow px-7 py-6 text-xl font-bold leading-snug tracking-tight text-ink">
          <Inline text={block.text} />
        </blockquote>
      );
    case "table":
      return (
        <figure className="my-2">
          <div className="avb overflow-x-auto bg-white">
            <table className="w-full border-collapse text-left text-[15px]">
              <thead>
                <tr className="border-b-[3px] border-ink">
                  {block.head.map((h, i) => (
                    <th
                      key={i}
                      className="whitespace-nowrap px-4 py-3 font-extrabold text-ink"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className="border-b border-line last:border-0">
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className={`px-4 py-3 align-top leading-relaxed ${
                          c === 0 ? "font-bold text-ink" : "text-muted"
                        }`}
                      >
                        <Inline text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-sm text-muted">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "video": {
      const videoJsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: block.title,
        description: block.title,
        thumbnailUrl: `https://i.ytimg.com/vi/${block.youtubeId}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${block.youtubeId}`,
        contentUrl: `https://www.youtube.com/watch?v=${block.youtubeId}`,
        ...(block.uploadDate ? { uploadDate: block.uploadDate } : {}),
        ...(block.duration ? { duration: block.duration } : {}),
        author: { "@id": `${SITE_URL}/#person` },
      };
      return (
        <figure className="my-2">
          <JsonLd data={videoJsonLd} />
          <div className="avb aspect-video overflow-hidden bg-ink">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${block.youtubeId}`}
              title={block.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </figure>
      );
    }
    case "faq":
      return (
        <div>
          <h2 className="pb-6 text-3xl font-extrabold tracking-tight text-ink">
            {block.title}
          </h2>
          <FAQ items={block.items} />
        </div>
      );
    case "cta":
      return (
        <div className="avb flex flex-wrap items-center justify-between gap-5 bg-ink p-7 text-paper">
          {block.text && (
            <p className="max-w-md text-lg font-bold">{block.text}</p>
          )}
          <Button href={block.href}>{block.label}</Button>
        </div>
      );
  }
}

export function ArticleView({
  article,
  route,
}: {
  article: Article;
  route: SiteRoute;
}) {
  const t = strings[route.locale];
  const homePath = route.locale === "en" ? "/en" : "/";
  const hubPath = route.locale === "en" ? "/en/insights" : "/izvalgos";
  const toc = article.blocks.filter(
    (b): b is Extract<Block, { type: "h2" }> => b.type === "h2",
  );
  const related = (article.related ?? [])
    .map((key) => routeByKey(key))
    .filter((r): r is SiteRoute => Boolean(r));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: route.title,
    description: route.description,
    inLanguage: route.locale,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: { "@id": `${SITE_URL}/#person` },
    ...(article.hero ? { image: `${SITE_URL}${article.hero.src}` } : {}),
    mainEntityOfPage: `${SITE_URL}${route.path}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.home,
        item: `${SITE_URL}${homePath}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.insights,
        item: `${SITE_URL}${hubPath}`,
      },
      { "@type": "ListItem", position: 3, name: route.title },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <section className="border-b-[3px] border-ink">
        <Container className="py-14 sm:py-20">
          <p className="avtag inline-block rounded-lg bg-ink px-3 py-1.5 text-yellow">
            {article.kicker}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {route.title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-lg font-medium leading-relaxed text-muted">
            {article.lede}
          </p>
          <p className="avtag mt-6 text-muted">
            {t.byline} · {formatDate(article.publishedAt, route.locale)}
            {article.updatedAt &&
              ` · ${t.updated} ${formatDate(article.updatedAt, route.locale)}`}
          </p>
          {article.hero && (
            <div className="avb relative mt-10 aspect-[16/9] overflow-hidden bg-paper">
              <Image
                src={article.hero.src}
                alt={article.hero.alt}
                fill
                priority
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </Container>
      </section>

      <Container className="py-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {toc.length > 1 && (
            <nav
              aria-label={t.toc}
              className="top-24 h-fit shrink-0 lg:sticky lg:w-64"
            >
              <p className="avtag text-coral">{t.toc}</p>
              <ol className="mt-4 space-y-2.5 border-l-[2.5px] border-line pl-4">
                {toc.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className="text-sm font-semibold text-muted transition-colors duration-150 hover:text-blue"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <article className="max-w-[68ch] space-y-7">
            {article.blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </article>
        </div>

        {related.length > 0 && (
          <aside className="mt-16 border-t-[3px] border-ink pt-10">
            <p className="avtag text-coral">{t.related}</p>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.key}
                  href={r.path}
                  className="avb avb-hover block bg-white p-6"
                >
                  <p className="text-lg font-extrabold tracking-tight">
                    {r.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {r.description}
                  </p>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </Container>
    </>
  );
}
