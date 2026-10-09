import Image from "next/image";
import Link from "next/link";
import { legalLinks, site } from "@/lib/site";

const appLinks = [
  { href: "/download", label: "Download" },
  { href: "/#features", label: "Features" },
  { href: "/#pro", label: "Zenova Pro" },
  { href: "/support", label: "Help and contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-28 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={28} height={28} />
            <span className="font-semibold tracking-tight">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-slate">{site.tagline}</p>
        </div>
        <FooterColumn title="App" links={appLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
      </div>
      <div className="mx-auto max-w-6xl border-t border-line px-4 py-6 text-[12px] text-slate sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.company}. Google Play is a trademark of Google LLC. Apple, iPhone, iPad and App Store are trademarks of Apple Inc. AppGallery is a trademark of Huawei. Galaxy Store is a trademark of Samsung.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="text-[13px] font-semibold">{title}</h2>
      <ul className="mt-4 space-y-3 text-[14px] text-slate">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
