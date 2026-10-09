"use client";

import Link from "next/link";
import { useRef } from "react";

export function MobileMenu({ links }: { links: readonly { href: string; label: string }[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => ref.current?.removeAttribute("open");

  return (
    <details ref={ref} className="group relative md:hidden">
      <summary
        aria-label="Menu"
        className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-line [&::-webkit-details-marker]:hidden"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
          <path d="M4 8h16 M4 16h16" className="group-open:hidden" />
          <path d="M6 6l12 12 M18 6 6 18" className="hidden group-open:block" />
        </svg>
      </summary>
      <div className="absolute right-0 top-12 w-56 rounded-2xl border border-line bg-surface p-2 shadow-soft">
        {links.map((item) => (
          <Link key={item.href} href={item.href} onClick={close} className="block rounded-xl px-3 py-2.5 text-[15px] hover:bg-sunken">
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
