import type { Platform, PlatformId } from "@/lib/site";
import { platforms } from "@/lib/site";

type Tone = "dark" | "light";

function StoreMark({ id }: { id: PlatformId }) {
  switch (id) {
    case "android":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path fill="#34A853" d="M3.6 2.2 13.4 12l-9.8 9.8c-.4-.2-.6-.6-.6-1.1V3.3c0-.5.2-.9.6-1.1Z" />
          <path fill="#FBBC04" d="m16.7 15.3-3.3-3.3 3.3-3.3 3.7 2.1c1 .6 1 1.9 0 2.5l-3.7 2Z" />
          <path fill="#EA4335" d="M16.7 15.3 13.4 12l-9.8 9.8c.4.2.9.2 1.4-.1l11.7-6.4Z" />
          <path fill="#4285F4" d="M16.7 8.7 5 2.3c-.5-.3-1-.3-1.4-.1l9.8 9.8 3.3-3.3Z" />
        </svg>
      );
    case "ios":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.9ZM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.4Z" />
        </svg>
      );
    case "apk":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v12 M7 10l5 5 5-5 M5 19h14" />
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden="true">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3.5 9h17 M3.5 15h17 M12 3c2.3 2.4 3.5 5.4 3.5 9s-1.2 6.6-3.5 9c-2.3-2.4-3.5-5.4-3.5-9s1.2-6.6 3.5-9z" />
        </svg>
      );
    default:
      // Generic shopping-bag mark for other Android stores.
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 8h14l-1 12.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20.5z M9 8V6.5a3 3 0 0 1 6 0V8" />
        </svg>
      );
  }
}

export function StoreButton({ platform, tone = "dark" }: { platform: Platform; tone?: Tone }) {
  const live = platform.url !== null;
  const base = "inline-flex h-14 min-w-[172px] items-center gap-3 rounded-2xl pl-4 pr-5";
  const colors =
    tone === "dark"
      ? "bg-ink text-paper shadow-soft"
      : "bg-white text-[#0f1422]";
  const content = (
    <>
      <StoreMark id={platform.id} />
      <span className="flex flex-col leading-none">
        <span className="text-[11px] opacity-70">{live ? platform.verb : "Coming soon to"}</span>
        <span className="mt-1 text-[16px] font-semibold tracking-tight">{platform.store}</span>
      </span>
    </>
  );

  if (!live) {
    return (
      <span
        className={`${base} cursor-default border border-dashed ${
          tone === "dark" ? "border-line text-slate" : "border-white/30 text-white/70"
        }`}
        aria-label={`${platform.store}: coming soon`}
      >
        {content}
      </span>
    );
  }

  const external = !platform.url!.startsWith("/");
  // A file download stays in this tab; stores open in a new one.
  const isFile = platform.id === "apk";
  return (
    <a
      href={platform.url!}
      {...(isFile ? {} : external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={`${platform.verb} ${platform.store}`}
      className={`${base} transition-opacity hover:opacity-85 ${colors}`}
    >
      {content}
    </a>
  );
}

/**
 * Store buttons. Live platforms first; `includeUpcoming` adds the ones that
 * are coming soon (the download page shows everything, heroes stay short).
 */
export function StoreButtons({
  tone = "dark",
  includeUpcoming = false,
  className = "",
}: {
  tone?: Tone;
  includeUpcoming?: boolean;
  className?: string;
}) {
  const list = [...platforms]
    .filter((p) => includeUpcoming || p.url !== null || p.id === "ios" || p.id === "web")
    .sort((a, b) => Number(b.url !== null) - Number(a.url !== null));
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {list.map((p) => (
        <StoreButton key={p.id} platform={p} tone={tone} />
      ))}
    </div>
  );
}
