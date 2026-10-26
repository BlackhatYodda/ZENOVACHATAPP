// Single source for facts shown across the site. Values marked TODO must be
// confirmed by the app owner before the site goes public.

export const site = {
  name: "Zenova",
  // TODO: confirm the legal name of the business that publishes the app.
  company: "Zenova Labs",
  url: "https://zenovachat.com",
  tagline: "Chat, call and share with the people who matter.",
  description:
    "Zenova is a messaging app for one-to-one chats, groups, channels, voice and video calls, media sharing and live location.",
  packageId: "com.chat.zenova",
  // TODO: replace with a monitored support inbox.
  supportEmail: "support@zenovachat.com",
  // TODO: replace with a monitored inbox for privacy and data requests.
  privacyEmail: "privacy@zenovachat.com",
  // TODO: replace with the inbox that handles child-safety reports.
  safetyEmail: "safety@zenovachat.com",
  // TODO: confirm the country whose law governs the Terms.
  jurisdiction: "Nepal",
  legalUpdated: "25 October 2026",
  languages: [
    "English",
    "नेपाली (Nepali)",
    "العربية (Arabic)",
    "Deutsch (German)",
    "Español (Spanish)",
    "Français (French)",
    "Türkçe (Turkish)",
  ],
} as const;

/**
 * Google Play listing is in closed testing (invited testers only) until
 * production approval. Set to false once the public listing is live.
 */
export const playEarlyAccess = true;

/**
 * Direct Android download, hosted on R2 behind the media domain. It is the
 * Play-signed universal APK from Play Console (App bundle explorer), so it
 * has the same signature as Play installs and people can switch either way.
 * To update: upload the new file to downloads/zenova.apk and edit apkRelease.
 */
export const apkRelease = {
  version: "1.0.1",
  size: "201 MB",
  minAndroid: "Android 8.0",
  sha256: "95a534718f116b5a0e7fd1133ca840a6f3fbcbadf71785793b91135b925d002c",
} as const;

// The version in the query gives each release its own URL, so a browser or
// edge copy of an older file (or of a 404) is never served for a new one.
export const apkDownloadUrl = `https://media.zenovachat.com/downloads/zenova.apk?v=${apkRelease.version}`;

export type PlatformId = "android" | "apk" | "ios" | "web" | "huawei" | "samsung";

export type Platform = {
  id: PlatformId;
  /** The device people recognise ("iPhone and iPad"). */
  device: string;
  /** Where they get it ("App Store"). */
  store: string;
  /** The button's small first line ("Download on the"). */
  verb: string;
  /** Store or web-app link. null shows the platform as "Coming soon". */
  url: string | null;
};

// Every place Zenova can be installed or opened. To launch on a platform,
// set its url; buttons, the download page and copy update on their own.
export const platforms: Platform[] = [
  {
    id: "android",
    device: "Android",
    store: "Google Play",
    verb: "Get it on",
    url: "https://play.google.com/store/apps/details?id=com.chat.zenova",
  },
  {
    id: "apk",
    device: "Android (direct download)",
    store: "Download APK",
    verb: "Or get the",
    // Permanent link: always the newest GitHub release asset named zenova.apk.
    url: apkDownloadUrl,
  },
  {
    id: "ios",
    device: "iPhone and iPad",
    store: "App Store",
    verb: "Download on the",
    // TODO: App Store link, e.g. https://apps.apple.com/app/id<APPLE_ID>
    url: null,
  },
  {
    id: "web",
    device: "Web",
    store: "Open in browser",
    verb: "Use it on the",
    // TODO: web app address, e.g. https://web.zenovachat.com
    url: null,
  },
  {
    id: "huawei",
    device: "Huawei phones",
    store: "AppGallery",
    verb: "Explore it on",
    // TODO: Huawei AppGallery link
    url: null,
  },
  {
    id: "samsung",
    device: "Samsung phones",
    store: "Galaxy Store",
    verb: "Available on",
    // TODO: Samsung Galaxy Store link
    url: null,
  },
];

export const livePlatforms = platforms.filter((p) => p.url !== null);
export const upcomingPlatforms = platforms.filter((p) => p.url === null);

/** "Android, iPhone and iPad and Web" style list, joined naturally. */
export function listDevices(list: Platform[]): string {
  // The APK is another way to get the Android app, not another device.
  const names = list.filter((p) => p.id !== "apk").map((p) => (p.id === "web" ? "the web" : p.device));
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

export const nav = [
  { href: "/#features", label: "Features" },
  { href: "/#security", label: "Security" },
  { href: "/#pro", label: "Pro" },
  { href: "/#faq", label: "FAQ" },
  { href: "/support", label: "Support" },
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/child-safety", label: "Child Safety Standards" },
  { href: "/delete-account", label: "Delete Your Account" },
] as const;

const MB = 1024 * 1024;
const GB = 1024 * MB;

// Mirrors PlanLimits.free / PlanLimits.pro in the mobile app and
// backend/cmd/core/plan_limits.go.
export const planLimits = [
  { label: "Photos", free: 5 * MB, pro: 50 * MB },
  { label: "Videos", free: 25 * MB, pro: 2 * GB },
  { label: "Voice and audio", free: 50 * MB, pro: 500 * MB },
  { label: "Files and documents", free: 25 * MB, pro: 2 * GB },
  { label: "Daily upload total", free: 500 * MB, pro: 20 * GB },
  { label: "Upload total per 30 days", free: 5 * GB, pro: 100 * GB },
] as const;

export function formatBytes(bytes: number): string {
  return bytes >= GB ? `${bytes / GB} GB` : `${bytes / MB} MB`;
}

// Chat media stays on the server for this many days (backend default,
// DefaultMediaRetentionDays). Phones keep their own copy.
export const mediaRetentionDays = 120;
