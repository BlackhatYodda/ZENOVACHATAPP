import type { Metadata } from "next";
import Image from "next/image";
import { StoreButtons } from "@/components/StoreButtons";
import { site } from "@/lib/site";

// Profile QR codes in the app encode https://zenovachat.com/user/<uid> (older ones https://zenova.app/user/<uid>). With the
// app installed, the phone opens the profile in the app; otherwise this page
// asks the visitor to install it. No profile data is looked up or shown here.
export const metadata: Metadata = {
  title: "Open profile",
  description: `Open this profile in ${site.name}.`,
  robots: { index: false },
};

export default function UserLinkPage() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-4 pt-20 text-center sm:px-6">
      <Image src="/logo.png" alt="" width={96} height={96} priority />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Open this profile in {site.name}</h1>
      <p className="mt-4 text-lg text-slate">
        This link opens a {site.name} profile. Install the app, then scan the QR code or tap the link again.
      </p>
      <StoreButtons className="mt-8 justify-center" />
    </main>
  );
}
