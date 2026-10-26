import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { CallMock, PhoneMock } from "@/components/PhoneMock";
import { Poster } from "@/components/Poster";
import { StoreButtons } from "@/components/StoreButtons";
import { banner, screenshots, type Screenshot } from "@/lib/screenshots";
import { formatBytes, listDevices, livePlatforms, planLimits, platforms, playEarlyAccess, site } from "@/lib/site";

const features: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "chat",
    title: "One-to-one chats",
    body: "Replies, reactions, edits and read receipts. People you don't know land in message requests, not your inbox.",
  },
  {
    icon: "group",
    title: "Groups and channels",
    body: "Groups with owner and admin roles, and channels for sharing updates with a large audience.",
  },
  {
    icon: "image",
    title: "Photos, videos and files",
    body: "Send photos, videos, voice notes and documents. Pro raises the size limits for large files.",
  },
  {
    icon: "pin",
    title: "Live location",
    body: "Share where you are for a time you choose. Sharing stops on its own when the time runs out.",
  },
  {
    icon: "clock",
    title: "Scheduled messages",
    body: "Write a message now and pick when it goes out.",
  },
  {
    icon: "lock",
    title: "App lock and two-step verification",
    body: "Open Zenova with your fingerprint or face, and add an extra check when you sign in.",
  },
  {
    icon: "moon",
    title: "Focus",
    body: "Let only your pinned chats notify you. Everything else waits quietly with its unread count.",
  },
  {
    icon: "globe",
    title: "Seven languages",
    body: "English, Nepali, Arabic, German, Spanish, French and Turkish.",
  },
];

const faqs = [
  {
    q: "Is Zenova free?",
    a: "Yes. Messages, calls and sharing are free. Zenova Pro is an optional subscription, bought through the app store you installed from, that raises upload size limits.",
  },
  {
    q: "Which phones does Zenova work on?",
    a: `${site.name} is on ${listDevices(livePlatforms)} today. ${platforms.filter((p) => !p.url).map((p) => p.store).join(", ")} are coming soon. Your account and chats are the same wherever you sign in.`,
  },
  {
    q: "How do I sign up?",
    a: "Install the app and enter your mobile number. We send a one-time code by SMS to confirm it is yours.",
  },
  {
    q: "Can people find me by my phone number?",
    a: "Only if you allow it. Your number is not shown on your profile, and you choose who can find you by number in Privacy settings.",
  },
  {
    q: "What happens to old photos and videos?",
    a: "Chat media is removed from our servers after about four months. The copies saved on your phone stay where they are.",
  },
  {
    q: "How do I delete my account?",
    a: "In the app, open Settings and tap Delete Account. If you no longer have the app, follow the steps on our Delete Your Account page.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Showcase />
      <Calls />
      <Security />
      <Pro />
      <Faq />
      <ClosingCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 pb-24 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.1fr_1fr] lg:pb-32">
        <div className="relative z-10">
          <h1 className="max-w-[14ch] text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[4rem] lg:text-[4.75rem]">
            Talk to the people you choose.
          </h1>
          <p className="mt-7 max-w-[44ch] text-[1.125rem] leading-relaxed text-slate sm:text-[1.25rem]">
            {site.name} is one app for messages, group chats, voice and video calls, and sharing photos with the people in your life.
          </p>
          <StoreButtons className="mt-10" />
          <p className="mt-6 text-[14px] text-slate">
            Free to use. Sign in with your phone number.{" "}
            {playEarlyAccess && <>Early access on Google Play; the APK works on any Android phone now.{" "}</>}
            <Link href="/download" className="font-medium text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-brand">
              All platforms
            </Link>
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft blur-3xl lg:left-auto lg:right-0 lg:translate-x-1/4" />
          <Ribbon />
          <div className="relative z-10">
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  );
}

// The logo's Z ribbon, unrolled into one sweep behind the phone.
function Ribbon() {
  return (
    <svg
      viewBox="0 0 800 700"
      className="pointer-events-none absolute -right-48 top-1/2 h-[760px] w-[880px] -translate-y-1/2 opacity-90 dark:opacity-70 sm:-right-40 lg:-right-64"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ribbon" x1="0" y1="0" x2="800" y2="700" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff3d1f" />
          <stop offset="0.45" stopColor="#ffb300" />
          <stop offset="0.75" stopColor="#3446c2" />
          <stop offset="1" stopColor="#3446c2" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        className="ribbon-path"
        d="M40 120 C 260 60, 620 40, 700 140 C 760 220, 240 420, 200 520 C 170 600, 420 640, 760 600"
        stroke="url(#ribbon)"
        strokeWidth="52"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionHeading({ title, body }: { title: string; body?: string }) {
  return (
    <div>
      <h2 className="max-w-[18ch] text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">{title}</h2>
      {body && <p className="mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed text-slate">{body}</p>}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-sunken">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            title="Everything a conversation needs."
            body="The everyday things you expect from a messenger, plus a few that make it calmer to use."
          />
        </div>
        <ul className="grid gap-x-12 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f.title} className="border-t border-line py-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-brand shadow-soft">
                <Icon name={f.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[1.0625rem] font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Real screens from /public/screenshots, shown in a banner plus a grid.
function Showcase() {
  const gallery: Screenshot[] = [screenshots.allChats, screenshots.connected, screenshots.spaces, screenshots.themes];
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="This is Zenova."
          body="Real screens from the app — your chats, groups and themes, in light and dark."
        />
        <Poster shot={banner} sizes="(max-width: 1152px) 100vw, 1152px" className="mt-10" />
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((shot) => (
            <li key={shot.src}>
              <Poster shot={shot} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 276px" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Calls() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-14 overflow-hidden rounded-[2.5rem] bg-night px-6 py-16 text-white ring-1 ring-white/5 sm:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <div>
          <h2 className="max-w-[16ch] text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">
            Calls that ring like a phone call.
          </h2>
          <p className="mt-5 max-w-[44ch] text-[1.0625rem] leading-relaxed text-white/70">
            Voice and video calls reach your friend&apos;s lock screen even when {site.name} is closed. Start one-to-one, or bring the whole group in.
          </p>
          <ul className="mt-10 space-y-5 text-[15px]">
            {[
              ["phone", "Voice calls with one person or a group"],
              ["video", "Video calls with the front or back camera"],
              ["share", "Share your screen during a call"],
              ["group", "Join a group call from the chat, even after it starts"],
            ].map(([icon, text]) => (
              <li key={text} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] ring-1 ring-white/10">
                  <Icon name={icon as IconName} className="h-5 w-5" />
                </span>
                <span className="text-white/85">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CallMock />
        </div>
      </div>
    </section>
  );
}

function Security() {
  const e2e = ["Text in one-to-one chats"];
  const transit = ["Group and channel messages", "Photos, videos, files and voice notes", "Voice and video calls"];
  return (
    <section id="security" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <SectionHeading
              title="Plain answers about your privacy."
              body="We say exactly what is encrypted on your phone and what is only encrypted on the way to our servers, so you can decide what to share. We don't show ads and we don't sell your data."
            />
            <Link href="/privacy" className="mt-8 inline-block text-[15px] font-medium underline decoration-line decoration-2 underline-offset-[6px] transition-colors hover:decoration-brand">
              Read the Privacy Policy
            </Link>
            <div className="mt-10 hidden lg:block">
              <Poster shot={screenshots.welcome} sizes="(max-width: 1024px) 100vw, 380px" />
            </div>
          </div>

          <div>
            <div className="grid overflow-hidden rounded-3xl border border-line bg-surface shadow-soft sm:grid-cols-2">
              <div className="p-7 sm:p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon name="lock" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[1.0625rem] font-semibold">Encrypted on your phone</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate">Encrypted before it is sent, with keys that stay on your devices.</p>
                <ul className="mt-6 space-y-3 text-[15px]">
                  {e2e.map((t) => (
                    <li key={t} className="flex gap-3"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-line p-7 sm:border-l sm:border-t-0 sm:p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
                  <Icon name="shield" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[1.0625rem] font-semibold">Encrypted in transit</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate">Protected on the way to our servers and stored so only chat members can open it.</p>
                <ul className="mt-6 space-y-3 text-[15px]">
                  {transit.map((t) => (
                    <li key={t} className="flex gap-3"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-indigo" />{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {[
                ["Your number stays private", "It isn't shown on your profile. Contact matching runs on our server and the numbers you check aren't stored."],
                ["Media doesn't live forever", "Chat photos, videos and files are removed from our servers after about four months."],
                ["Crash reports only if you agree", "They never include your messages, contacts or phone number."],
                ["You stay in control", "Block, report, limit who can find you, or delete your account at any time."],
              ].map(([t, b]) => (
                <div key={t}>
                  <dt className="font-semibold">{t}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-slate">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pro() {
  return (
    <section id="pro" className="scroll-mt-20 bg-sunken">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <SectionHeading
            title="Free to use. Pro when files get big."
            body="Messages and calls cost nothing. Zenova Pro is an optional subscription, billed by the app store you installed from, that raises upload limits. You'll see the price in the app before you buy."
          />
          <div className="mt-10 hidden lg:block">
            <Poster shot={screenshots.pro} sizes="(max-width: 1024px) 100vw, 380px" />
          </div>
        </div>
        <div className="overflow-x-auto rounded-3xl border border-line bg-surface px-6 pt-5 pb-2 shadow-soft sm:px-8">
          <table className="w-full min-w-[400px] text-left">
            <caption className="sr-only">Largest upload size on each plan</caption>
            <thead>
              <tr className="text-[14px]">
                <th scope="col" className="pb-4 font-medium text-slate">Largest upload</th>
                <th scope="col" className="pb-4 font-semibold">Free</th>
                <th scope="col" className="pb-4">
                  <span className="rounded-full bg-brand px-3 py-1 text-[13px] font-semibold text-white">Pro</span>
                </th>
              </tr>
            </thead>
            <tbody className="text-[15px]">
              {planLimits.map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <th scope="row" className="py-4 pr-4 font-normal">{row.label}</th>
                  <td className="py-4 pr-4 tabular-nums text-slate">{formatBytes(row.free)}</td>
                  <td className="py-4 font-semibold tabular-nums">{formatBytes(row.pro)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeading title="Questions people ask." />
        <div className="border-b border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-t border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.0625rem] font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <Icon name="plus" className="h-5 w-5 shrink-0 text-slate transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="max-w-[60ch] pb-6 text-[15px] leading-relaxed text-slate">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-night px-8 py-16 text-white ring-1 ring-white/5 sm:px-14 sm:py-20">
        <svg viewBox="0 0 600 300" className="pointer-events-none absolute -right-24 -top-10 h-[420px] w-[840px] opacity-80" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="cta-ribbon" x1="0" y1="0" x2="600" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#ff3d1f" stopOpacity="0" />
              <stop offset="0.35" stopColor="#ff5722" />
              <stop offset="0.7" stopColor="#ffb300" />
              <stop offset="1" stopColor="#24358f" />
            </linearGradient>
          </defs>
          <path d="M100 260 C 260 240, 420 120, 380 60 C 350 10, 470 0, 620 40" stroke="url(#cta-ribbon)" strokeWidth="44" strokeLinecap="round" />
        </svg>
        <div className="relative max-w-lg">
          <h2 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">Your people are a message away.</h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/70">Install {site.name} free and sign in with your phone number.</p>
          <StoreButtons tone="light" className="mt-10" />
        </div>
      </div>
    </section>
  );
}
