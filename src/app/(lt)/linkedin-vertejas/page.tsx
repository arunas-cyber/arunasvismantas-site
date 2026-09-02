import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("lt-linkedin-vertejas");

const TOOL_URL = "https://linkedin-cringe-translator.lovable.app";

export default function LinkedinVertejas() {
  return (
    <>
      <PageHeader
        eyebrow="Tik dėl juoko"
        title="LinkedIn cringe vertėjas"
        lede="Kiekvienas LinkedIn įrašas skamba kaip TED kalba? Šis įrankis bet kokią normalią mintį paverčia tikru LinkedIn cringe. Susikūriau su AI per vieną vakarą, tiesiog dėl juoko. Išbandyk."
        tightBottom
      />

      <Container className="pt-12 pb-8 sm:pt-16">
        <div className="avb overflow-hidden bg-white">
          <iframe
            src={TOOL_URL}
            title="LinkedIn cringe vertėjas"
            className="block w-full"
            style={{ height: "900px", border: 0 }}
            loading="lazy"
            allow="clipboard-write"
          />
        </div>
      </Container>

      <section className="border-t-[3px] border-ink">
        <Container className="flex flex-wrap items-center justify-between gap-6 py-16">
          <p className="max-w-md text-2xl font-extrabold tracking-tight">
            Šitą susikūriau juokais, per vieną vakarą. Tą patį AI kasdien naudoju
            rimtiems dalykams. Nori tokių įrankių savo versle?
          </p>
          <Button href="/konsultacija">Nemokama konsultacija</Button>
        </Container>
      </section>
    </>
  );
}
