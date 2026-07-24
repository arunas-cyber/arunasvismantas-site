import { NextResponse, type NextRequest } from "next/server";

/**
 * Homepage-only geo redirect.
 *
 * The site is LT-default at `/` and English at `/en`. A first-time visitor
 * from outside Lithuania is sent to the English homepage; Lithuanian visitors
 * (and anyone who has already picked a language) stay where they are.
 *
 * SEO guardrails — auto-redirecting by geo is the pattern Google warns can
 * hide locales from crawlers, so this is deliberately narrow:
 *  - only the bare homepage `/` is ever redirected (deep pages, the webinar
 *    funnel, and assets are never touched — see the matcher below);
 *  - crawlers are NEVER redirected, so both `/` (LT) and `/en` stay directly
 *    crawlable at their canonical URLs with hreflang intact;
 *  - it is a temporary 307, and a `NEXT_LOCALE` cookie (set here and by the
 *    language switcher) makes an explicit human choice win permanently, which
 *    also prevents a redirect loop when someone switches back to Lithuanian.
 *  - query strings (utm_*, etc.) are preserved across the redirect.
 */

const BOT_RE =
  /bot|crawler|spider|crawling|slurp|googlebot|bingbot|duckduckbot|baiduspider|yandex|applebot|petalbot|amazonbot|semrush|ahrefs|mj12bot|dotbot|facebookexternalhit|linkedinbot|twitterbot|telegrambot|whatsapp|embedly|quora|pinterest|redditbot|gptbot|oai-searchbot|chatgpt-user|perplexitybot|claudebot|claude-web|anthropic-ai|ccbot|google-extended|bytespider/i;

export function middleware(req: NextRequest) {
  // An explicit language choice always wins (also stops a switch-back loop).
  if (req.cookies.get("NEXT_LOCALE")) return NextResponse.next();

  // Never redirect bots — keep every locale crawlable at its canonical URL.
  const ua = req.headers.get("user-agent") ?? "";
  if (BOT_RE.test(ua)) return NextResponse.next();

  // Vercel injects the visitor's ISO-3166 country. Absent in local dev.
  const country = (req.headers.get("x-vercel-ip-country") ?? "").toUpperCase();

  // Lithuania — or unknown (dev, some proxies/VPNs) — stays on the LT default.
  if (!country || country === "LT") return NextResponse.next();

  // Non-LT human, no saved preference → English homepage (keep the query).
  const url = req.nextUrl.clone();
  url.pathname = "/en";
  const res = NextResponse.redirect(url, 307);
  res.cookies.set("NEXT_LOCALE", "en", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  // Only the bare homepage is a redirect candidate. Nothing else runs middleware.
  matcher: ["/"],
};
