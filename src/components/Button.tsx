import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded px-6 text-sm font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-paper hover:bg-ink",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost: "px-0 text-accent hover:text-ink",
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
