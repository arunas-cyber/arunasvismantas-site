import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("en-linkedin-translator");

const TOOL_URL = "https://linkedin-cringe-translator.lovable.app";

export default function LinkedinTranslator() {
  return (
    <>
      <PageHeader
        eyebrow="Just for fun"
        title="LinkedIn Cringe Translator"
        lede="Every LinkedIn post reads like a TED talk? This tool turns any normal thought into peak LinkedIn cringe. I built it with AI in one evening, purely for fun. Give it a go."
        tightBottom
      />

      <Container className="pt-12 pb-8 sm:pt-16">
        <div className="avb overflow-hidden bg-white">
          <iframe
            src={TOOL_URL}
            title="LinkedIn Cringe Translator"
            className="block w-full"
            style={{ height: "1500px", border: 0 }}
            loading="lazy"
            allow="clipboard-write"
          />
        </div>
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
                I built this one as a joke, in a single evening. I use the same
                AI every day for the serious stuff. Want tools like this in your
                business?
              </p>
              <div className="mt-6">
                <Button href="/en/call">Book a free call</Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
