import type { Metadata } from "next";
import { RootShell } from "@/components/RootShell";
import { SITE_URL } from "@/lib/routes";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arunas Vismantas | Founder, AI builder, speaker",
    template: "%s | Arunas Vismantas",
  },
  description:
    "Founder of Callsy. I build AI agents, teach founders to build their own AI assistants, and speak about startups, ecommerce, and AI.",
  openGraph: {
    type: "website",
    siteName: "Arunas Vismantas",
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
};

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="en">{children}</RootShell>;
}
