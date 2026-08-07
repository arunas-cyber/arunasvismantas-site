"use client";

import Script from "next/script";

/**
 * Inline Calendly scheduler, framed in an .avb card and tinted with Signal
 * Blue to match the brand. Loads Calendly's widget.js lazily; the script
 * auto-initializes any .calendly-inline-widget[data-url] on the page.
 *
 * Note: this embeds a third-party iframe from calendly.com. Booking data is
 * processed by Calendly under its own policy (already disclosed in the privacy
 * page).
 */
export function CalendlyInline({ url }: { url: string }) {
  const src = `${url}?hide_gdpr_banner=0&primary_color=2e4bff`;
  return (
    <div className="avb overflow-hidden bg-white">
      <div
        className="calendly-inline-widget"
        data-url={src}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
