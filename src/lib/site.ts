// Single source for facts shown across the site. Values marked TODO must be
// confirmed by the app owner before the site goes public.

export const site = {
  name: "Zenova",
  // TODO: confirm the legal name of the business that publishes the app.
  company: "Zenova Labs",
  url: "https://zenova.app",
  tagline: "Chat, call and share with the people who matter.",
  description:
    "Zenova is a messaging app for private chats, groups, channels, voice and video calls, media sharing and live location.",
  packageId: "com.zenova.zenova",
  // TODO: replace with a monitored support inbox.
  supportEmail: "support@zenova.app",
  // TODO: replace with a monitored inbox for privacy and data requests.
  privacyEmail: "privacy@zenova.app",
  // TODO: replace with the inbox that handles child-safety reports.
  safetyEmail: "safety@zenova.app",
  // TODO: confirm the country whose law governs the Terms.
  jurisdiction: "Nepal",
  legalUpdated: "9 October 2026",
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
 * Direct Android download. GitHub serves the asset named zenova.apk from the
 * latest release, so publishing a new release updates this link.
 */
export const apkDownloadUrl =
  "https://github.com/BlackhatYodda/Zenova_Frontend/releases/latest/download/zenova.apk";

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
    url: "https://play.google.com/store/apps/details?id=com.zenova.zenova",
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
    // TODO: web app address, e.g. https://web.zenova.app
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
  { label: "Videos", free: 16 * MB, pro: 2 * GB },
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
