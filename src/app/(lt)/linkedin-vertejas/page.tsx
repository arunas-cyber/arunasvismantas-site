import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { EmbedFrame } from "@/components/EmbedFrame";
import { EmbedCode } from "@/components/EmbedCode";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("lt-linkedin-vertejas");

const TOOL_URL = "https://linkedin.arunasvismantas.eu";

const EMBED_CODE = `<iframe id="lct" src="https://linkedin.arunasvismantas.eu"
  style="width:100%;height:760px;border:0;border-radius:12px"
  loading="lazy" allow="clipboard-write" title="LinkedIn Cringe Translator"></iframe>
<script>addEventListener("message",function(e){if(e.data&&e.data.type==="resize"){var f=document.getElementById("lct");if(f)f.style.height=e.data.height+"px";}});</script>
<p><a href="https://arunasvismantas.eu">LinkedIn Cringe Translator by Arunas Vismantas</a></p>`;

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
          <EmbedFrame src={TOOL_URL} title="LinkedIn cringe vertėjas" />
        </div>
      </Container>

      <Container className="pb-8">
        <EmbedCode
          code={EMBED_CODE}
          triggerLabel="Nori šito įrankio savo svetainėje?"
          heading="Įterpk į savo svetainę"
          instruction="Nukopijuok šį kodą ir įklijuok ten, kur nori, kad atsirastų įrankis."
          copyLabel="Kopijuoti kodą"
          copiedLabel="Nukopijuota ✓"
        />
      </Container>

      <Container className="py-16">
        <section className="avb overflow-hidden bg-ink text-paper">
          <div className="grid items-stretch md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[280px] border-b-[3px] border-ink bg-ink md:border-b-0 md:border-r-[3px]">
              <Image
                src="/images/webinar/arunas.jpg"
                alt="Arunas Vismantas"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[30%_20%]"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-14 md:px-12">
              <p className="max-w-md text-2xl font-extrabold tracking-tight">
                Šitą susikūriau juokais, sporto salėje tarp pratimų 😃. Tą patį
                AI kasdien naudoju rimtiems dalykams. Nori tokių įrankių savo
                versle?
              </p>
              <div className="mt-6">
                <Button href="/konsultacija">Nemokama konsultacija</Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
