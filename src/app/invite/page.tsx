import type { Metadata } from "next";
import Image from "next/image";
import { StoreButtons } from "@/components/StoreButtons";
import { site } from "@/lib/site";

// The app's "Invite friends" share sheet links here.
export const metadata: Metadata = {
  title: "You're invited",
  description: `A friend invited you to chat on ${site.name}.`,
  openGraph: {
    title: `Join me on ${site.name}`,
    description: `Chat, call and share on ${site.name}. Free to download.`,
  },
};

export default function InvitePage() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-4 pt-20 text-center sm:px-6">
      <Image src="/logo.png" alt="" width={96} height={96} priority />
      <h1 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-[2.75rem]">A friend invited you to {site.name}</h1>
      <p className="mt-4 text-lg text-slate">Install the app, sign in with your phone number and you&apos;ll find them in your contacts.</p>
      <StoreButtons className="mt-8 justify-center" />
    </main>
  );
}
