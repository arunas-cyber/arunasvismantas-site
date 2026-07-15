import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/meta";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = pageMetadata("imprint");

export default function Imprint() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Imprint"
      updated="Information required for .eu domain holders"
      sections={[
        {
          h: "Site operator",
          p: "This website is operated by Arunas Vismantas, founder of Callsy.",
        },
        {
          h: "Contact",
          p: `Email: ${CONTACT_EMAIL}`,
        },
        {
          h: "Responsibility for content",
          p: "Arunas Vismantas is responsible for the content of this website. Company registration details will be listed here once the operating entity for courses and paid services is finalized.",
        },
      ]}
    />
  );
}
