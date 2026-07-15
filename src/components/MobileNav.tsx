"use client";

import { useState } from "react";
import Link from "next/link";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { type Locale } from "@/lib/routes";

interface NavLink {
  href: string;
  title: string;
}

/** Hamburger menu for < lg. Closes on navigation (layout persists across routes). */
export function MobileNav({
  links,
  cta,
  locale,
}: {
  links: NavLink[];
  cta: { href: string; label: string };
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="flex items-center gap-3 lg:hidden">
      <LocaleSwitcher locale={locale} />
      <button
        type="button"
        aria-label={open ? "Uždaryti meniu" : "Atidaryti meniu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border-[3px] border-ink bg-yellow"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#141210"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          {open ? (
            <>
              <path d="M5 5l14 14" />
              <path d="M19 5L5 19" />
            </>
          ) : (
            <>
              <path d="M3 7h18" />
              <path d="M3 12h18" />
              <path d="M3 17h18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 top-[68px] z-40 bg-ink/20"
            onClick={close}
            aria-hidden
          />
          <nav className="fixed inset-x-0 top-[68px] z-40 border-b-[3px] border-ink bg-paper px-5 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="block border-b border-line py-4 text-lg font-bold text-ink"
              >
                {l.title}
              </Link>
            ))}
            <Link
              href={cta.href}
              onClick={close}
              className="mt-4 flex min-h-12 items-center justify-center rounded-xl border-[3px] border-ink bg-yellow px-6 text-[15px] font-bold text-ink"
            >
              {cta.label}
            </Link>
          </nav>
        </>
      )}
    </div>
  );
}
