import Link from "next/link";
import { legalLinks, site } from "@/lib/site";

export function LegalPage({
  title,
  intro,
  path,
  children,
}: {
  title: string;
  intro?: string;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 md:pt-20">
      <div className="grid gap-12 md:grid-cols-[200px_1fr] lg:gap-20">
        <nav aria-label="Legal pages" className="order-last md:order-first">
          <ul className="space-y-1 text-[14px] md:sticky md:top-24">
            {legalLinks.map((l) => {
              const active = l.href === path;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2 transition-colors ${
                      active ? "bg-sunken font-medium text-ink" : "text-slate hover:text-ink"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>
          <h1 className="text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[2.75rem]">{title}</h1>
          <p className="mt-4 text-[14px] text-slate">Last updated {site.legalUpdated}</p>
          {intro && <p className="mt-8 max-w-[62ch] text-[1.125rem] leading-relaxed text-slate">{intro}</p>}
          <article className="prose-legal mt-12">{children}</article>
        </div>
      </div>
    </main>
  );
}
