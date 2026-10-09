"use client";

import { useEffect, useSyncExternalStore } from "react";

type Choice = "light" | "dark" | "system";

const KEY = "zenova-theme";

// Runs before first paint (inlined in <head>) so the page never flashes the
// wrong theme. Kept in sync with apply() below.
export const themeScript = `(function(){try{var c=localStorage.getItem("${KEY}")||"system";var d=c==="dark"||(c==="system"&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.dataset.theme=d?"dark":"light";}catch(e){}})();`;

function apply(choice: Choice) {
  const dark =
    choice === "dark" ||
    (choice === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
}

const options: { value: Choice; label: string; d: string }[] = [
  {
    value: "light",
    label: "Light",
    d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M12 2.5v2 M12 19.5v2 M4.6 4.6l1.4 1.4 M18 18l1.4 1.4 M2.5 12h2 M19.5 12h2 M4.6 19.4 6 18 M18 6l1.4-1.4",
  },
  {
    value: "dark",
    label: "Dark",
    d: "M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z",
  },
  {
    value: "system",
    label: "System",
    d: "M3.5 5.5A1.5 1.5 0 0 1 5 4h14a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 16H5a1.5 1.5 0 0 1-1.5-1.5z M9 20h6 M12 16v4",
  },
];

// The saved choice lives in localStorage; this store lets React read it and
// re-render when it changes (here or in another tab).
const CHANGE = "zenova-theme-change";

function readChoice(): Choice {
  try {
    const v = localStorage.getItem(KEY);
    return v === "light" || v === "dark" ? v : "system";
  } catch {
    return "system";
  }
}

function subscribe(onChange: () => void) {
  // A change made in another tab also has to repaint this one.
  const onStorage = (e: StorageEvent) => {
    if (e.key !== KEY) return;
    apply(readChoice());
    onChange();
  };
  window.addEventListener(CHANGE, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function ThemeToggle() {
  const choice = useSyncExternalStore(subscribe, readChoice, () => "system" as Choice);

  // Follow the system while "System" is selected.
  useEffect(() => {
    if (choice !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [choice]);

  function select(next: Choice) {
    try {
      localStorage.setItem(KEY, next);
    } catch {}
    apply(next);
    window.dispatchEvent(new Event(CHANGE));
  }

  return (
    <div role="radiogroup" aria-label="Colour theme" className="flex items-center rounded-full border border-line bg-sunken p-0.5">
      {options.map((o) => {
        const active = choice === o.value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={o.label}
            title={o.label}
            onClick={() => select(o.value)}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
              active ? "bg-surface text-ink shadow-soft" : "text-slate hover:text-ink"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d={o.d} />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
