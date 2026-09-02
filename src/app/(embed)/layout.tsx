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
  // Embed pages are meant to live inside other sites' iframes, not in search.
  robots: { index: false, follow: false },
};

/**
 * Bare shell for embeddable tool pages: no nav, no footer, no chrome. Just the
 * tool, so it drops cleanly into someone else's iframe.
 */
export default function EmbedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="h-full bg-white">{children}</body>
    </html>
  );
}
