import { SITE_URL } from "./routes";
import { CALLSY_URL, LINKEDIN_URL } from "./site";

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
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Callsy",
    url: CALLSY_URL,
  },
  knowsAbout: [
    "AI agents",
    "artificial intelligence",
    "startups",
    "ecommerce",
    "MCP integrations",
  ],
  sameAs: [LINKEDIN_URL, CALLSY_URL],
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
