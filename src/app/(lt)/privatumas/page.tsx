import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/meta";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = pageMetadata("privacy-lt");

export default function PrivacyLt() {
  return (
    <LegalPage
      eyebrow="Teisinė informacija"
      title="Privatumo politika"
      updated="Atnaujinta: 2026 m. liepos 24 d."
      sections={[
        {
          h: "Ką renka ši svetainė",
          p: "Svetainė naudoja vieną būtiną slapuką, kad įsimintų pasirinktą kalbą, ir nenaudoja analitikos ar reklamos slapukų. Asmens duomenis renka tik tada, kai patys juos pateikiate (žr. skiltį apie jūsų pateikiamus duomenis). Prieglobos paslaugų teikėjo (Vercel) serverių žurnaluose saugumo tikslais gali būti fiksuojami IP adresai.",
        },
        {
          h: "Slapukai",
          p: "Vienintelis pačios svetainės nustatomas slapukas yra funkcinis (NEXT_LOCALE). Jis įsimena, ar naršote lietuvių, ar anglų kalba. Šis slapukas nenaudojamas sekimui, todėl pagal e. privatumo taisykles sutikimo nereikia. Jokie trečiųjų šalių analitikos ar reklamos slapukai nenustatomi. Įterpti YouTube vaizdo įrašai kraunami privatumą tausojančiu režimu (youtube-nocookie.com) ir slapukus nustato tik pradėjus žiūrėti.",
        },
        {
          h: "Jūsų pateikiami duomenys",
          p: "Jei registruojatės į seminarą ar prenumeruojate naujienlaiškį, jūsų nurodytą vardą ir el. paštą saugo el. laiškų platforma, kad galėtų atsiųsti tai, ko prašėte. Prenumeratos galite atsisakyti bet kada, o šiuos duomenis ištrinti galite paprašę žemiau nurodytu kontaktu.",
        },
        {
          h: "Trečiųjų šalių paslaugos",
          p: "Pokalbio rezervacija vyksta per Calendly, o naujienlaiškio ir seminaro laiškus tvarko el. laiškų platforma. Ten pateiktus duomenis šios paslaugos tvarko pagal savo privatumo politikas. Nuorodos į išorines svetaines (YouTube, LinkedIn) veda į paslaugas su savomis politikomis.",
        },
        {
          h: "Jūsų teisės",
          p: `Pagal BDAR galite prašyti susipažinti su savo asmens duomenimis, juos ištaisyti ar ištrinti. Rašykite ${CONTACT_EMAIL} ir atsakysiu per 30 dienų.`,
        },
        {
          h: "Pakeitimai",
          p: "Jei svetainė pradės rinkti ką nors naujo (pavyzdžiui, analitiką), ši politika bus atnaujinta prieš tam pradedant veikti.",
        },
      ]}
    />
  );
}
