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
};

export default function LtLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="lt">{children}</RootShell>;
}
