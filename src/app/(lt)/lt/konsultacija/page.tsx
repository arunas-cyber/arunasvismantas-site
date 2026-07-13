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
    body: "Ką AI agentas realiai gali automatizuoti jūsų versle, nuo ko pradėti ir kaip MCP integracijos sujungia jį su jūsų įrankiais.",
  },
  {
    title: "El. prekybos automatizavimas",
    body: "Krepšelių susigrąžinimas, klientų aptarnavimas ir priminimai, kurie atsiperka. Paremta tuo, kas veikia Callsy klientų parduotuvėse.",
  },
  {
    title: "Investicijos ir akseleratoriai",
    body: "Kas iš tikrųjų pajudino Callsy: FirstPick, 500 Global, Latitude59 ir prezentacija nacionalinėje televizijoje. Be teorijos, tik patirtis.",
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
