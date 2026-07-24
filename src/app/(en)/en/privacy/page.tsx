import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/meta";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = pageMetadata("privacy");

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      updated="Last updated: July 24, 2026"
      sections={[
        {
          h: "What this site collects",
          p: "This site uses one essential cookie to remember your language and sets no analytics or advertising cookies. It collects personal data only when you choose to submit it (see Forms below). Server logs kept by the hosting provider (Vercel) may include IP addresses for security and operations.",
        },
        {
          h: "Cookies",
          p: "The only cookie set by the site itself is a functional one (NEXT_LOCALE) that remembers whether you view the site in Lithuanian or English. It is not used for tracking, so under the ePrivacy rules it needs no consent. No third-party analytics or advertising cookies are set. Embedded YouTube videos load in privacy-enhanced mode (youtube-nocookie.com) and set cookies only if you press play.",
        },
        {
          h: "Forms you submit",
          p: "If you register for a webinar or subscribe to the newsletter, the name and email you enter are stored by the email provider so you can be sent what you asked for. You can unsubscribe at any time, and you can ask for that data to be deleted using the contact below.",
        },
        {
          h: "Third-party services",
          p: "Booking a call happens on Calendly, and newsletter and webinar emails are handled by the email provider. Each processes the data you enter there under its own privacy policy. Links to external sites (YouTube, LinkedIn) lead to services with their own policies.",
        },
        {
          h: "Your rights",
          p: `Under the GDPR you may request access to, correction of, or deletion of your personal data. Contact ${CONTACT_EMAIL} and I will respond within 30 days.`,
        },
        {
          h: "Changes",
          p: "If this site starts collecting anything new (for example analytics), this policy will be updated before that goes live.",
        },
      ]}
    />
  );
}
