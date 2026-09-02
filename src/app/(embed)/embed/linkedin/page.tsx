import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Cringe Translator",
};

const TOOL_URL = "https://linkedin-cringe-translator.lovable.app";

/**
 * Bare embeddable version of the tool: just the app, full-bleed, so other sites
 * can drop it into an iframe. The backlink lives in the attribution line of the
 * embed snippet on the host page, not here.
 */
export default function EmbedLinkedin() {
  return (
    <iframe
      src={TOOL_URL}
      title="LinkedIn Cringe Translator"
      style={{ width: "100%", height: "100vh", border: 0 }}
      allow="clipboard-write"
    />
  );
}
