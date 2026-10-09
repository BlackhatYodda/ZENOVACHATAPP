import type { Metadata } from "next";
import Image from "next/image";
import { StoreButton } from "@/components/StoreButtons";
import { listDevices, livePlatforms, platforms, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description: `Get ${site.name} on ${listDevices(livePlatforms)}.`,
};

const notes: Record<string, string> = {
  android: "Android 8.0 or later. Updates install automatically from the store.",
  ios: "For iPhone and iPad.",
  web: "Use Zenova in Chrome, Edge, Safari or Firefox on your computer. No install needed.",
  huawei: "For Huawei phones without Google Play.",
  samsung: "For Samsung Galaxy phones and tablets.",
};

const steps = [
  ["Install", `Get ${site.name} free from your app store, or open it in your browser.`],
  ["Verify your number", "Enter your mobile number and the code we send by SMS."],
  ["Set up your profile", "Add a name and photo so friends recognise you."],
  ["Start chatting", "Find friends from your contacts, scan a profile QR code, or share your invite link."],
];

export default function DownloadPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-20">
      <div className="max-w-2xl">
        <Image src="/logo.png" alt="" width={72} height={72} priority />
        <h1 className="mt-8 text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[3.5rem]">Get {site.name}</h1>
        <p className="mt-5 max-w-[48ch] text-[1.125rem] leading-relaxed text-slate">
          Free on every platform below. Your account and chats are the same wherever you sign in.
        </p>
      </div>

      <ul className="mt-14 border-b border-line">
        {platforms.map((p) => (
          <li key={p.id} className="grid items-center gap-5 border-t border-line py-7 sm:grid-cols-[1fr_auto]">
            <div>
              <h2 className="flex items-center gap-3 text-[1.25rem] font-semibold tracking-tight">
                {p.device}
                {!p.url && (
                  <span className="rounded-full bg-sunken px-2.5 py-0.5 text-[12px] font-medium text-slate">Coming soon</span>
                )}
              </h2>
              <p className="mt-1.5 text-[15px] text-slate">{notes[p.id]}</p>
            </div>
            <StoreButton platform={p} />
          </li>
        ))}
      </ul>

      <h2 className="mt-24 text-[1.75rem] font-semibold tracking-[-0.025em]">Set up in a minute</h2>
      <ol className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([title, body], i) => (
          <li key={title} className="border-t border-line pt-6">
            <span className="text-[14px] font-semibold text-brand-ink">Step {i + 1}</span>
            <h3 className="mt-2 font-semibold">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">{body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-16 max-w-[64ch] rounded-2xl bg-sunken p-6 text-[15px] leading-relaxed text-slate">
        <strong className="font-semibold text-ink">Only install {site.name} from the stores linked on this page.</strong>{" "}
        Copies from file-sharing sites or unofficial stores may be modified and unsafe.
      </p>
    </main>
  );
}
