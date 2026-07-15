import Link from "next/link";
import { type ReactNode } from "react";

/**
 * Referral/affiliate links must be marked rel="sponsored" per Google's link
 * policies, otherwise they count as a link scheme. Any href matching these
 * gets tagged automatically.
 */
const SPONSORED_PATTERNS = ["/referral/", "ref=", "aff="];

const isSponsored = (href: string) =>
  SPONSORED_PATTERNS.some((p) => href.includes(p));

/**
 * Renders inline **bold** and [label](href) from content strings.
 * Internal hrefs (starting with /) use next/link; external open in new tab.
 * Referral links are automatically rel="sponsored nofollow".
 */
export function Inline({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;

  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      // Recurse so **[label](href)** renders a bold link, not literal markdown.
      nodes.push(
        <strong key={key++}>
          <Inline text={m[1]} />
        </strong>,
      );
    } else {
      const [, , label, href] = m;
      const cls =
        "font-semibold text-blue underline underline-offset-4 transition-colors duration-150 hover:text-coral";
      nodes.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href} className={cls}>
            <Inline text={label} />
          </Link>
        ) : (
          <a
            key={key++}
            href={href}
            className={cls}
            target="_blank"
            rel={
              isSponsored(href)
                ? "sponsored nofollow noopener noreferrer"
                : "noopener noreferrer"
            }
          >
            <Inline text={label} />
          </a>
        ),
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));

  return <>{nodes}</>;
}
