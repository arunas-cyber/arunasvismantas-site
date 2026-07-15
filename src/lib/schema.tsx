import { SITE_URL } from "./routes";
import { CALLSY_URL, LINKEDIN_URL, THREADS_URL, YOUTUBE_URL } from "./site";

const PERSON_ID = `${SITE_URL}/#person`;
const OG_IMAGE = `${SITE_URL}/og.jpg`;

/**
 * The canonical Person entity. Same @id everywhere so Google and AI engines
 * merge every mention into one entity. Extend sameAs as profiles go live
 * (X, podcast, YouTube, Substack, F6S, Crunchbase).
 */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Arunas Vismantas",
  url: SITE_URL,
  image: OG_IMAGE,
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
  nationality: "Lithuanian",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Oxford Brookes University",
  },
  award: [
    "Latitude59 2026 Pitch Competition finalist (top 7)",
    "F6S #3 Top Company in AI (2026, for Callsy)",
    "FirstPick AI Accelerator, the first in the Baltics",
    "500 Global Eurasia Accelerator, Batch 9",
  ],
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
    "public speaking",
  ],
  sameAs: [LINKEDIN_URL, THREADS_URL, YOUTUBE_URL, CALLSY_URL],
};

/** Site-level entity. Declares the site and its author/publisher. */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Arunas Vismantas",
  description:
    "The personal site of Arunas Vismantas: a five-time founder and AI builder. Guides, talks, and build notes on AI agents, building with AI, and startups.",
  inLanguage: ["en", "lt"],
  publisher: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
};

/** ProfilePage wrapper for the About page (Google's type for a person profile). */
export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE_URL}/en/about`,
  mainEntity: { "@id": PERSON_ID },
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
