import type { Metadata } from "next";
import { RootShell } from "@/components/RootShell";
import { SITE_URL } from "@/lib/routes";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arunas Vismantas | Startuolio įkūrėjas, AI praktikas",
    template: "%s | Arunas Vismantas",
  },
  description:
    "Callsy įkūrėjas. Kuriu AI agentus, mokau susikurti savo AI asistentą, vedu renginius apie startuolius ir dirbtinį intelektą.",
  openGraph: {
    type: "website",
    siteName: "Arunas Vismantas",
    locale: "lt_LT",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
};

export default function LtLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="lt">{children}</RootShell>;
}
