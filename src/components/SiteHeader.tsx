import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-paper/75 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Image src="/logo.png" alt="" width={30} height={30} priority />
          <span className="text-[17px] font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 text-[14px] text-slate md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link
            href="/download"
            className="hidden rounded-full bg-ink px-4 py-2 text-[14px] font-medium text-paper transition-opacity hover:opacity-85 sm:inline-block"
          >
            Get the app
          </Link>
          <MobileMenu links={[...nav, { href: "/download", label: "Get the app" }]} />
        </div>
      </div>
    </header>
  );
}
