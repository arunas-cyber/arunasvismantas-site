import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/meta";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = pageMetadata("imprint-lt");

export default function ImprintLt() {
  return (
    <LegalPage
      eyebrow="Teisinė informacija"
      title="Rekvizitai"
      updated="Informacija, privaloma .eu domeno valdytojams"
      sections={[
        {
          h: "Svetainės valdytojas",
          p: "Šią svetainę valdo Arunas Vismantas, Callsy įkūrėjas.",
        },
        {
          h: "Kontaktai",
          p: `El. paštas: ${CONTACT_EMAIL}`,
        },
        {
          h: "Atsakomybė už turinį",
          p: "Už svetainės turinį atsako Arunas Vismantas. Įmonės, per kurią bus parduodami mokymai ir mokamos paslaugos, rekvizitai bus paskelbti čia, kai tik bus galutinai pasirinkta veiklos forma.",
        },
      ]}
    />
  );
}
