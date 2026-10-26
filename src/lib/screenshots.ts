// Marketing screenshots shipped in /public/screenshots. One list so the
// homepage, download page and social cards stay in sync. Widths and heights
// are the real pixel sizes, so next/image reserves the right space.

export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Wide banner used for full-width strips and social sharing. */
export const banner: Screenshot = {
  src: "/screenshots/Zenova Conversations, One Place.png",
  alt: "Zenova on two phones: your conversations, one place.",
  width: 1798,
  height: 875,
};

export const screenshots = {
  /** Chat list, bright orange. */
  allChats: {
    src: "/screenshots/Zenova_ All Your Chats, One Place.png",
    alt: "Zenova chat list with unread counts, typing status and filters.",
    width: 941,
    height: 1672,
  },
  /** Group chat with replies and reactions. */
  connected: {
    src: "/screenshots/Zenova_ Every Conversation Connected.png",
    alt: "A Zenova group chat with replies, reactions and voice messages.",
    width: 941,
    height: 1672,
  },
  /** Welcome screen. */
  welcome: {
    src: "/screenshots/Zenova_ Simple. Secure.png",
    alt: "The Zenova welcome screen: simple, secure, reliable.",
    width: 941,
    height: 1672,
  },
  /** Chat list, dark background. */
  spaces: {
    src: "/screenshots/Zenova_ Your People, Your Spaces.png",
    alt: "The Zenova chat list on a dark background.",
    width: 940,
    height: 1672,
  },
  /** Light and dark chat side by side. */
  themes: {
    src: "/screenshots/Zenova_ Day or Night Chat Themes.png",
    alt: "The same Zenova chat in the light theme and the dark theme.",
    width: 941,
    height: 1672,
  },
  /** Pro plan comparison inside the app. */
  pro: {
    src: "/screenshots/Zenova Pro Upgrade Showcase.png",
    alt: "The Zenova Pro screen comparing free and Pro upload limits.",
    width: 940,
    height: 1672,
  },
} as const satisfies Record<string, Screenshot>;

export type ScreenshotKey = keyof typeof screenshots;
