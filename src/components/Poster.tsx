import Image from "next/image";
import type { Screenshot } from "@/lib/screenshots";

/** Rounded frame shared by every screenshot on the site. */
export function Poster({ shot, sizes, className = "" }: { shot: Screenshot; sizes: string; className?: string }) {
  return (
    <Image
      src={shot.src}
      alt={shot.alt}
      width={shot.width}
      height={shot.height}
      sizes={sizes}
      className={`h-auto w-full rounded-3xl ring-1 ring-line ${className}`}
    />
  );
}
