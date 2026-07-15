import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/meta";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = pageMetadata("privacy");

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      updated="Last updated: July 13, 2026"
      sections={[
        {
          h: "What this site collects",
          p: "This site does not set tracking cookies and does not collect personal data on its own pages. Server logs kept by the hosting provider (Vercel) may include IP addresses for security and operations.",
        },
        {
          h: "Third-party services",
          p: "Booking a call happens on Calendly, and newsletter subscriptions are handled by the newsletter provider. Each processes the data you enter there under its own privacy policy. Links to external sites (YouTube, LinkedIn) lead to services with their own policies.",
        },
        {
          h: "Your rights",
          p: `Under the GDPR you may request access to, correction of, or deletion of your personal data. Contact ${CONTACT_EMAIL} and I will respond within 30 days.`,
        },
        {
          h: "Changes",
          p: "If this site starts collecting anything new (for example analytics or forms), this policy will be updated before that goes live.",
        },
      ]}
    />
  );
}
