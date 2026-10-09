// Stills of real Zenova screens, redrawn in HTML so they stay sharp. Layout,
// colours and controls follow the Android app; every name and message is
// made up.

const ink = "#0f172a";

function PhoneFrame({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`relative w-[300px] rounded-[3rem] bg-[#0e1530] p-[10px] shadow-[0_40px_80px_-20px_rgba(14,21,48,0.45)] ring-1 ${
        dark ? "ring-white/15" : "ring-black/10 dark:ring-white/10"
      }`}
    >
      <div
        className={`flex h-[600px] flex-col overflow-hidden rounded-[2.4rem] font-[family-name:var(--font-app)] ${
          dark ? "bg-[#101114] text-white" : "bg-white text-[#0f172a]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function StatusBar({ dark = false, tint }: { dark?: boolean; tint?: string }) {
  const fg = dark ? "#ffffff" : ink;
  return (
    <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[11px] font-semibold" style={{ background: tint, color: fg }}>
      <span>9:41</span>
      <span className="h-[18px] w-[72px] rounded-full bg-black" aria-hidden="true" />
      <span className="flex items-center gap-1" aria-hidden="true">
        <span className="h-2 w-3 rounded-[2px]" style={{ background: fg }} />
        <span className="rounded-full px-1.5 text-[9px] leading-[14px]" style={{ background: fg, color: dark ? ink : "#fff" }}>83</span>
      </span>
    </div>
  );
}

const icon = {
  back: "M15 5l-7 7 7 7",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M20 20l-4-4",
  video: "M3 7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M16 10l5-3v10l-5-3",
  phone: "M5 3.5h3l1.5 4-2 1.3a10 10 0 0 0 4.7 4.7l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3 5.7a2 2 0 0 1 2-2.2z",
  chevron: "M9 6l6 6-6 6",
  down: "M6 9l6 6 6-6",
  plus: "M12 5v14 M5 12h14",
  mic: "M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z M5.5 11.5a6.5 6.5 0 0 0 13 0 M12 18v3",
  micOff: "M4 4l16 16 M9 9v3a3 3 0 0 0 5 2.2 M15 10V6a3 3 0 0 0-5.7-1.3 M5.5 11.5a6.5 6.5 0 0 0 10.4 5.2 M18.5 11.5c0 .9-.2 1.7-.5 2.5 M12 18v3",
  smile: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M8.5 14a4 4 0 0 0 7 0 M9 9.5h.01 M15 9.5h.01",
  videoOff: "M3 3l18 18 M10 5h4a2 2 0 0 1 2 2v4l5-3v9 M16 16v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",
  speaker: "M4 9.5h3.5L12 5.5v13l-4.5-4H4z M15.5 9a4 4 0 0 1 0 6",
  share: "M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 15.5z M8 20h8 M10 12.5c.5-2.5 2.5-4 5-4 M13 6.5l2 2-2 2",
  people: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M3.5 19c.5-3 2.7-5 5.5-5s5 2 5.5 5 M16 5.5a3 3 0 0 1 0 5.5 M18 14.5c1.5.7 2.4 2.3 2.6 4.5",
  check2: "M2 12.5l4 4 8-9 M10 16.5l1 0 8-9",
} as const;

function Glyph({ d, className, color, width = 1.9, filled = false }: { d: string; className: string; color?: string; width?: number; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? (color ?? "currentColor") : "none"} stroke={color ?? "currentColor"} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

/* ---------------------------------------------------------------- chat */

function Sent({ children, time }: { children: React.ReactNode; time: string }) {
  return (
    <div className="flex flex-col items-end">
      <div className="max-w-[80%] rounded-[20px] bg-[#ff5722] px-4 py-2 text-[14px] leading-snug text-white">{children}</div>
      <Meta time={time} />
    </div>
  );
}

function Received({ from, color, children }: { from: string; color: string; children: React.ReactNode }) {
  return (
    <div className="max-w-[80%] rounded-[20px] bg-[#e2e8f0] px-4 py-2 text-[14px] leading-snug">
      <p className="mb-0.5 text-[11px] font-semibold" style={{ color }}>{from}</p>
      {children}
    </div>
  );
}

function Meta({ time }: { time: string }) {
  return (
    <p className="mt-1 flex items-center gap-1 pr-1 text-[10px] text-[#64748b]">
      <span className="h-1 w-1 rounded-full bg-[#ff5722]" />
      {time}
      <Glyph d={icon.check2} className="h-3.5 w-3.5" color="#ff5722" width={1.6} />
    </p>
  );
}

function DateChip({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto w-fit rounded-xl border border-[#e2e8f0] bg-[#f1f5f9] px-3 py-1 text-[11px] font-semibold">{children}</p>
  );
}

function CallLog({ kind, detail, missed }: { kind: "video" | "voice"; detail: string; missed?: boolean }) {
  return (
    <div className="mx-auto flex w-[88%] items-center gap-2.5 rounded-[18px] bg-[#eef2f7] px-2.5 py-2.5">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${missed ? "bg-[#f3d6dd]" : "bg-[#d9dfe8]"}`}>
        <Glyph d={kind === "video" ? icon.video : icon.phone} className="h-4 w-4" color={missed ? "#b0102f" : "#475569"} filled />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block whitespace-nowrap text-[13px] font-semibold leading-tight">Group {kind} call</span>
        <span className={`block text-[11px] ${missed ? "text-[#b0102f]" : "text-[#64748b]"}`}>{detail}</span>
      </span>
      <Glyph d={icon.chevron} className="h-4 w-4" color="#475569" />
    </div>
  );
}

export function PhoneMock() {
  const tint = "#f9ece8";
  return (
    <PhoneFrame>
      <StatusBar tint={tint} />
      <div className="flex items-center gap-2.5 px-3 pb-3 pt-1" style={{ background: tint }}>
        <Glyph d={icon.back} className="h-5 w-5" />
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#24358f] text-[13px] font-semibold text-white">P</span>
        <span className="min-w-0 flex-1">
          <span className="block text-[15px] font-semibold leading-tight">Pokhara trip</span>
          <span className="block text-[11px] text-[#64748b]">4 members</span>
        </span>
        <Glyph d={icon.search} className="h-[18px] w-[18px]" />
        <Glyph d={icon.video} className="h-[18px] w-[18px]" />
        <Glyph d={icon.phone} className="h-[18px] w-[18px]" />
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-3 pt-3">
        <Received from="Aarav" color="#24358f">Bus leaves Kathmandu at 7. Everyone in?</Received>
        <Sent time="20:14">In! See you at the stop</Sent>
        <DateChip>Today</DateChip>
        <CallLog kind="video" detail="2:15 · 3 joined" />
        <CallLog kind="voice" detail="0:59 · 2 joined" />
        <CallLog kind="video" detail="No one joined" missed />
      </div>

      <div className="flex items-center gap-2 bg-white px-3 pb-4 pt-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#eef2f7]">
          <Glyph d={icon.plus} className="h-5 w-5" color="#ff5722" />
        </span>
        <span className="flex h-10 flex-1 items-center justify-between rounded-full bg-[#eef2f7] pl-4 pr-3 text-[13px] text-[#64748b]">
          Message...
          <Glyph d={icon.smile} className="h-5 w-5" color={ink} width={1.6} />
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#fde6dd]">
          <Glyph d={icon.mic} className="h-5 w-5" color="#ff5722" />
        </span>
      </div>
    </PhoneFrame>
  );
}

/* ---------------------------------------------------------------- call */

function Tile({ initial, name, muted }: { initial: string; name: string; muted?: boolean }) {
  return (
    <div className="relative flex items-center justify-center rounded-[22px] bg-[#1d1f25]">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#32343c] text-[20px] text-white">{initial}</span>
      <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded-full bg-[#111214] px-2.5 py-1 text-[11px]">
        {muted && <Glyph d={icon.micOff} className="h-3 w-3" color="#ef4444" />}
        {name}
      </span>
    </div>
  );
}

function Control({ d, label, end }: { d: string; label: string; end?: boolean }) {
  return (
    <span className="flex flex-col items-center gap-1.5">
      <span className={`flex items-center justify-center rounded-full ${end ? "h-12 w-12 bg-[#ff3b30]" : "h-11 w-11 bg-[#2c2e35]"}`}>
        <Glyph d={d} className={`h-5 w-5 ${end ? "rotate-[135deg]" : ""}`} color="#fff" />
      </span>
      <span className="text-[10px] text-white/90">{label}</span>
    </span>
  );
}

export function CallMock() {
  return (
    <PhoneFrame dark>
      <StatusBar dark />
      <div className="flex items-center gap-3 px-4 pb-4 pt-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d1f25]">
          <Glyph d={icon.down} className="h-5 w-5" color="#fff" />
        </span>
        <span>
          <span className="block text-[16px] font-semibold leading-tight">Pokhara trip</span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
            12:08
            <Glyph d={icon.people} className="ml-1 h-3.5 w-3.5" color="rgba(255,255,255,.7)" width={1.6} />
            4
          </span>
        </span>
      </div>
      <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-2 px-2">
        <Tile initial="A" name="Aarav" muted />
        <Tile initial="M" name="Mira" />
        <Tile initial="S" name="Sam" muted />
        <Tile initial="Y" name="You" />
      </div>
      <div className="flex items-start justify-between px-4 pb-5 pt-4">
        <Control d={icon.mic} label="Mute" />
        <Control d={icon.videoOff} label="Camera" />
        <Control d={icon.speaker} label="Speaker" />
        <Control d={icon.share} label="Share" />
        <Control d={icon.phone} label="End" end />
      </div>
    </PhoneFrame>
  );
}
