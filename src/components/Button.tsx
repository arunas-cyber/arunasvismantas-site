import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark" | "ghost";

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-6 text-[15px] font-bold transition-[transform,box-shadow] duration-150";

const boxed =
  "border-[3px] border-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal";

const variants: Record<Variant, string> = {
  primary: `${boxed} bg-yellow text-ink`,
  secondary: `${boxed} bg-white text-ink`,
  dark: `${boxed} bg-ink text-yellow`,
  ghost:
    "px-0 font-bold text-blue transition-colors duration-150 hover:text-coral",
};

export function Button({
  href,
  variant = "primary",
  children,
  external = false,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
}) {
  const cls = `${base} ${variants[variant]}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
