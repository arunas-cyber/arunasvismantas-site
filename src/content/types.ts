import { type FaqItem } from "@/components/FAQ";

/**
 * Content as data. An article is a typed object, never hand-built JSX.
 * One renderer (ArticleView) gives every piece the same structure, TOC,
 * byline, JSON-LD, and internal links. A translation is just another
 * article whose route has a counterpart.
 *
 * Inline text in `text` fields supports **bold** and [label](href) links.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "faq"; title: string; items: FaqItem[] }
  | { type: "cta"; label: string; href: string; text?: string };

export interface Article {
  /** Key of this article's entry in routes.ts (path, title, keywords live there). */
  routeKey: string;
  kind: "hub" | "spoke";
  /** ISO dates. Byline is always Arunas Vismantas. */
  publishedAt: string;
  updatedAt?: string;
  /** Short kicker above the title, e.g. the pillar name. */
  kicker: string;
  /** Opening paragraph, also used on hub cards. */
  lede: string;
  blocks: Block[];
  /** Route keys of related pages for the internal-links footer. */
  related?: string[];
}
