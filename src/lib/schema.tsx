import { SITE_URL } from "./routes";
import { CALLSY_URL, LINKEDIN_URL, THREADS_URL } from "./site";

/**
 * The canonical Person entity. Same @id everywhere so Google and AI engines
 * merge every mention into one entity. Extend sameAs as profiles go live
 * (X, podcast, YouTube, Substack).
 */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Arunas Vismantas",
  url: SITE_URL,
  jobTitle: "Co-founder and CEO of Callsy",
  worksFor: {
    "@type": "Organization",
    name: "Callsy",
    url: CALLSY_URL,
  },
  homeLocation: {
    "@type": "Place",
    name: "Vilnius, Lithuania",
  },
  description:
    "Arunas Vismantas is a five-time founder based in Vilnius, Lithuania, and co-founder and CEO of Callsy, an EU platform for AI voice, SMS, and email agents for ecommerce. He has co-founded and led Podbase, Smart Vision, AdKings, BrandBoosters, and Callsy. He builds AI agents with no formal engineering background and speaks about AI agents, automation, and startup building.",
  knowsAbout: [
    "AI agents",
    "artificial intelligence",
    "building with AI",
    "startups",
    "ecommerce",
    "MCP integrations",
    "startup fundraising",
  ],
  sameAs: [LINKEDIN_URL, THREADS_URL, CALLSY_URL],
};

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      async
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
