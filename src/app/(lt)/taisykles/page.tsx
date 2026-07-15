import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/meta";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = pageMetadata("terms-lt");

export default function TermsLt() {
  return (
    <LegalPage
      eyebrow="Teisinė informacija"
      title="Naudojimosi taisyklės"
      updated="Atnaujinta: 2026 m. liepos 13 d."
      sections={[
        {
          h: "Turinys",
          p: "Visa svetainės informacija pateikiama pažintiniais tikslais. Ji atspindi mano patirtį ir nuomonę, bet nėra teisinė, finansinė ar investavimo konsultacija. Prieš priimdami svarbius sprendimus, pasitikrinkite pagal savo situaciją.",
        },
        {
          h: "Intelektinė nuosavybė",
          p: "Svetainės tekstai ir originali medžiaga priklauso man, nebent nurodyta kitaip. Cituoti galima nurodant šaltinį ir nuorodą. Norint perpublikuoti visą straipsnį, reikalingas raštiškas sutikimas.",
        },
        {
          h: "Išorinės nuorodos",
          p: "Nuorodos į kitas svetaines pateikiamos gera valia. Už jų turinį ir pasiekiamumą neatsakau.",
        },
        {
          h: "Kontaktai",
          p: `Klausimai dėl šių taisyklių: ${CONTACT_EMAIL}.`,
        },
      ]}
    />
  );
}
