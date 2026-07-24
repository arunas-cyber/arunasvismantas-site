"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { type Locale } from "@/lib/routes";

/**
 * Essential-cookies notice.
 *
 * The site sets only one functional cookie (NEXT_LOCALE, language preference),
 * which under GDPR/ePrivacy is strictly necessary and needs no consent. So this
 * is an honest acknowledgement notice, not an Accept/Reject consent gate. If
 * analytics or ad pixels are ever added, upgrade this to a real consent gate
 * that blocks them until the visitor opts in.
 *
 * Mounted in RootShell → shows on the main site, not the distraction-free
 * webinar funnel (which sets no cookies of its own).
 */

const COOKIE = "cookie_notice";

const copy = {
  lt: {
    text: "Naudojame tik būtinus slapukus, kad svetainė veiktų ir įsimintų tavo kalbą. Jokios analitikos ar reklamos sekiklių.",
    policy: "Privatumo politika",
    policyHref: "/privatumas",
    ok: "Gerai",
    aria: "Slapukų pranešimas",
  },
  en: {
    text: "We use only essential cookies, including one that remembers your language. No analytics, no ad trackers.",
    policy: "Privacy policy",
    policyHref: "/en/privacy",
    ok: "Got it",
    aria: "Cookie notice",
  },
} as const;

export function CookieNotice({ locale }: { locale: Locale }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const acknowledged = document.cookie
      .split("; ")
      .some((c) => c.startsWith(`${COOKIE}=`));
    if (!acknowledged) setShow(true);
  }, []);

  if (!show) return null;

  const t = copy[locale];

  function dismiss() {
    document.cookie = `${COOKIE}=1; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    setShow(false);
  }

  return (
    <div
      role="region"
      aria-label={t.aria}
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md sm:left-4 sm:right-auto sm:mx-0"
    >
      <div className="avb bg-ink p-5 text-paper">
        <p className="text-[14px] leading-relaxed text-paper/90">
          {t.text}{" "}
          <Link
            href={t.policyHref}
            className="font-semibold text-yellow underline underline-offset-2"
          >
            {t.policy}
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="mt-4 inline-flex min-h-10 items-center justify-center rounded-xl border-[3px] border-ink bg-yellow px-5 py-2 text-[15px] font-extrabold text-ink shadow-brutal-sm transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
        >
          {t.ok}
        </button>
      </div>
    </div>
  );
}
