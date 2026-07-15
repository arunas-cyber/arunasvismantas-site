import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/meta";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = pageMetadata("terms");

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of use"
      updated="Last updated: July 13, 2026"
      sections={[
        {
          h: "Content",
          p: "Everything on this site is provided for information. It reflects my experience and opinions, not professional legal, financial, or investment advice. Verify anything important against your own situation before acting on it.",
        },
        {
          h: "Intellectual property",
          p: "Texts and original materials on this site are mine unless stated otherwise. You may quote with attribution and a link. Republishing full articles requires written permission.",
        },
        {
          h: "External links",
          p: "Links to external sites are provided in good faith. I am not responsible for their content or availability.",
        },
        {
          h: "Contact",
          p: `Questions about these terms: ${CONTACT_EMAIL}.`,
        },
      ]}
    />
  );
}
