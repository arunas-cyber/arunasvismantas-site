import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/routes";
import "@/app/globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Funnel pages are for paid/direct traffic, not organic. Keep them out of search.
  robots: { index: false, follow: false },
};

/**
 * Distraction-free shell for the webinar funnel: NO nav, NO footer, no
 * outbound links. The whole point is to keep the visitor on one path.
 */
export default function FunnelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="lt"
      className={`${bricolage.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
