import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { pageMetadata } from "@/lib/meta";
import { articlesForLocale } from "@/content/articles";

export const metadata = pageMetadata("insights-lt");

export default function InsightsLt() {
  const published = articlesForLocale("lt");

  return (
    <>
      <PageHeader
        eyebrow="Įžvalgos"
        title="Gidai ir praktinės pastabos"
        lede="Išsamūs gidai apie dirbtinį intelektą ir atviros pastabos iš startuolio virtuvės. Parašyta mano, išbandyta praktikoje, atnaujinama, kai realybė pasikeičia."
      />
      <Container className="py-16">
        {published.length === 0 ? (
          <div className="avb max-w-xl bg-white p-8">
            <p className="text-lg font-bold">Pirmieji gidai jau ruošiami.</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Pirmiausia: išsamus dirbtinio intelekto gidas ir kaip susikurti
              savo AI asistentą. Užsiprenumeruokite naujienlaiškį ir
              nepraleisite.
            </p>
            <div className="mt-5">
              <Button href="/naujienlaiskis" variant="secondary">
                Prenumeruoti naujienlaiškį
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {published.map(({ article, route }) => (
              <Link
                key={route.key}
                href={route.path}
                className="avb avb-hover flex flex-col bg-white p-7"
              >
                <p className="avtag text-coral">{article.kicker}</p>
                <p className="mt-3 text-xl font-extrabold tracking-tight">
                  {route.title}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {article.lede}
                </p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
