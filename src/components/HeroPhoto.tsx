import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const PHOTO = "/images/hero-stage.jpg";

/**
 * Stage photo panel for the hero. Renders only once the file exists at
 * public/images/hero-stage.jpg, so the layout ships before the asset.
 * Brand rules: 3px ink frame, hard shadow, tight off-center crop.
 */
export function HeroPhoto({ label, alt }: { label: string; alt: string }) {
  const exists = fs.existsSync(
    path.join(process.cwd(), "public", PHOTO),
  );
  if (!exists) return null;

  return (
    <div className="avb relative min-h-[260px] overflow-hidden bg-ink lg:min-h-0">
      <Image
        src={PHOTO}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover object-[35%_center]"
      />
      <span className="avtag absolute bottom-4 left-4 rounded-lg bg-ink px-3 py-1.5 text-yellow">
        {label}
      </span>
    </div>
  );
}
