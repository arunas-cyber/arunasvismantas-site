import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/meta";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = pageMetadata("privacy-lt");

export default function PrivacyLt() {
  return (
    <LegalPage
      eyebrow="Teisinė informacija"
      title="Privatumo politika"
      updated="Atnaujinta: 2026 m. liepos 13 d."
      sections={[
        {
          h: "Ką renka ši svetainė",
          p: "Svetainė nenaudoja sekimo slapukų ir pati nerenka asmens duomenų. Prieglobos paslaugų teikėjo (Vercel) serverių žurnaluose saugumo tikslais gali būti fiksuojami IP adresai.",
        },
        {
          h: "Trečiųjų šalių paslaugos",
          p: "Pokalbio rezervacija vyksta per Calendly, o naujienlaiškio prenumeratą tvarko naujienlaiškio platforma. Ten įvestus duomenis šios paslaugos tvarko pagal savo privatumo politikas. Nuorodos į išorines svetaines (YouTube, LinkedIn) veda į paslaugas su savomis politikomis.",
        },
        {
          h: "Jūsų teisės",
          p: `Pagal BDAR galite prašyti susipažinti su savo asmens duomenimis, juos ištaisyti ar ištrinti. Rašykite ${CONTACT_EMAIL} ir atsakysiu per 30 dienų.`,
        },
        {
          h: "Pakeitimai",
          p: "Jei svetainė pradės rinkti ką nors naujo (pavyzdžiui, analitiką ar formas), ši politika bus atnaujinta prieš tam pradedant veikti.",
        },
      ]}
    />
  );
}
