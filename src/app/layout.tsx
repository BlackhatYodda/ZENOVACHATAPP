import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { themeScript } from "@/components/ThemeToggle";
import { site } from "@/lib/site";
import "./globals.css";

// Inter is used only inside the app-screen mockups, matching the app.
const inter = Inter({
  variable: "--font-app",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: private chats, groups and calls`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name}: private chats, groups and calls`,
    description: site.description,
    url: site.url,
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
    images: ["/logo.png"],
  },
  other: { "google-play-app": `app-id=${site.packageId}` },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c10" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${instrument.variable} ${inter.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
