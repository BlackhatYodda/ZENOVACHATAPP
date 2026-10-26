import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Help and contact",
  description: `Get help with ${site.name} or contact our team.`,
};

const topics = [
  {
    title: "I didn't get my sign-in code",
    body: "Check the number and country code, make sure you have signal, and wait a minute before asking for a new code. Too many requests can be paused for a while to stop abuse.",
  },
  {
    title: "My messages show as unreadable on a new phone",
    body: "Text in one-to-one chats is encrypted on your phone with keys that stay on your devices. Restore your keys with your recovery code or PIN when you sign in. Without them, older encrypted messages cannot be read on the new phone.",
  },
  {
    title: "Calls don't ring when the app is closed",
    body: "Allow notifications for Zenova, allow it to show full-screen notifications, and on Android turn off battery optimisation for Zenova. On iPhone, allow notifications and keep Zenova's background refresh on.",
  },
  {
    title: "A file is too large to send",
    body: "Free accounts can send photos up to 5 MB, videos up to 25 MB and files up to 25 MB. Zenova Pro raises these limits.",
  },
  {
    title: "Someone is bothering me",
    body: "Open the chat or profile and choose Block or Report. You can also control who can message you and who can find you by phone number in Privacy settings.",
  },
  {
    title: "Managing or cancelling Pro",
    body: "Pro is billed by the store you bought it from. On Google Play, open Payments and subscriptions → Subscriptions. On iPhone, open Settings → your name → Subscriptions.",
  },
];

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pt-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-[-0.03em] sm:text-[2.75rem]">How can we help?</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate">Answers to common questions, and how to reach us.</p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {topics.map((t) => (
          <div key={t.title} className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-semibold">{t.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate">{t.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">Contact us</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {[
          ["General help", site.supportEmail, "Questions about using the app, bugs, billing."],
          ["Privacy and data", site.privacyEmail, "Access, correction, export or deletion of your data."],
          ["Safety reports", site.safetyEmail, "Abuse, threats or child-safety concerns."],
        ].map(([title, email, body]) => (
          <a
            key={title}
            href={`mailto:${email}`}
            className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand"
          >
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-slate">{body}</p>
            <p className="mt-4 break-all text-sm font-semibold text-brand-ink">{email}</p>
          </a>
        ))}
      </div>
      <p className="mt-8 text-sm text-slate">
        Want to leave? See <Link href="/delete-account" className="text-brand-ink underline underline-offset-4">how to delete your account</Link>.
      </p>
    </main>
  );
}
