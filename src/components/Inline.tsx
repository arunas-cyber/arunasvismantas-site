import Link from "next/link";
import { type ReactNode } from "react";

/**
 * Renders inline **bold** and [label](href) from content strings.
 * Internal hrefs (starting with /) use next/link; external open in new tab.
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
      nodes.push(<strong key={key++}>{m[1]}</strong>);
    } else {
      const [, , label, href] = m;
      const cls =
        "font-semibold text-blue underline underline-offset-4 transition-colors duration-150 hover:text-coral";
      nodes.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href} className={cls}>
            {label}
          </Link>
        ) : (
          <a
            key={key++}
            href={href}
            className={cls}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ),
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));

  return <>{nodes}</>;
}
