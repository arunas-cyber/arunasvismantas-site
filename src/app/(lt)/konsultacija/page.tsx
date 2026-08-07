import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { pageMetadata } from "@/lib/meta";
import { CALENDLY_URL } from "@/lib/site";

export const metadata = pageMetadata("call-lt");

const topics = [
  {
    title: "AI agentai ir MCP",
    body: "Ką AI agentas realiai gali automatizuoti jūsų versle, nuo ko pradėti ir kaip MCP integracijos sujungia jį su turimais įrankiais.",
  },
  {
    title: "El. prekybos automatizavimas",
    body: "Krepšelių susigrąžinimas, klientų aptarnavimas ir priminimai, kurie atsiperka. Paremta tuo, kas veikia Callsy klientų parduotuvėse.",
  },
  {
    title: "Investicijos ir akseleratoriai",
    body: "Kas iš tikrųjų pajudino Callsy: FirstPick, 500 Global, Latitude59 ir pasirodymas nacionalinėje televizijoje. Be teorijos, tik patirtis.",
  },
];

const faq: FaqItem[] = [
  {
    q: "Kam skirtas šis pokalbis?",
    a: "Steigėjams, el. parduotuvių vadovams ir komandoms, kurios nori tiesaus atsakymo apie AI agentus prieš skirdamos biudžetą. Jei svarstote, ar kurti patiems, pirkti ar palaukti, šis pokalbis sutaupys savaites.",
  },
  {
    q: "Ką gausiu po pokalbio?",
    a: "Konkretų veiksmų planą: ką automatizuoti pirmiausia, kokie įrankiai tinka jūsų sistemai ir ko neverta daryti. Dalinuosi tikrais pavyzdžiais, ne skaidrėmis.",
  },
  {
    q: "Ar galite viską padaryti už mus?",
    a: "Kartais. Jei jūsų atvejis tinka Callsy, tai greičiausias kelias. Dėl individualių agentų ar MCP darbų aptariame apimtį pokalbio metu, ir jei nesu tinkamas žmogus, pasakysiu tiesiai.",
  },
  {
    q: "Kaip rezervuoti laiką?",
    a: "Pasirinkite laiką per Calendly nuorodą. Galimi laikai ir kaina matomi rezervacijos puslapyje. Ateikite su vienu konkrečiu klausimu ir nueisime toliau, greičiau.",
  },
];

export default function CallLt() {
  return (
    <>
      <PageHeader
        eyebrow="Konsultacija"
        title="Rezervuokite pokalbį"
        lede="Vienas pokalbis, viena konkreti problema, vienas aiškus planas. Jokio pardavinėjimo, jokių įsipareigojimų."
      />

      <Container className="pb-4">
        <section className="avb overflow-hidden bg-yellow">
          <div className="grid items-stretch md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[280px] border-b-[3px] border-ink md:border-b-0 md:border-r-[3px]">
              <Image
                src="/images/webinar/arunas.jpg"
                alt="Arunas Vismantas"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[30%_20%]"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-12 md:px-12">
              <p className="avtag text-ink/70">Su kuo kalbėsitės</p>
              <p className="mt-3 text-xl font-bold leading-snug text-ink sm:text-2xl">
                Kalbėsitės tiesiogiai su manimi, Arunu. Penkios įmonės, 500
                Global akseleratorius ir pasirodymas Rykliuose. Ateikite su vienu
                klausimu, išeikite su aiškiu planu.
              </p>
              <div className="mt-6">
                <Button href={CALENDLY_URL} external>
                  Pasirinkti laiką per Calendly
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <section className="border-b border-line">
        <Container className="py-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {topics.map((t) => (
              <div key={t.title} className="avb bg-white p-7">
                <h2 className="text-xl font-extrabold tracking-tight">{t.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href={CALENDLY_URL} external>
              Pasirinkti laiką per Calendly
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Dažni klausimai
          </h2>
          <div className="mt-8 max-w-2xl">
            <FAQ items={faq} />
          </div>
        </Container>
      </section>
    </>
  );
}
