import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site, SITE_URL } from "@/data/content";

// Characterful display face for headings.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Clean, readable body face (deliberately not Inter).
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Monospace for tags, labels, and the terminal log lines.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Arya Bhanu — AI Full-Stack & Automation Developer",
  description: site.metaDescription,
  applicationName: "Arya Bhanu — Portfolio",
  authors: [{ name: site.fullName }],
  keywords: [
    "Full-Stack Developer",
    "Automation Engineer",
    "AI Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "Malaysia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Arya Bhanu",
    title: "Arya Bhanu — AI Full-Stack & Automation Developer",
    description: site.metaDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Arya Bhanu — AI Full-Stack & Automation Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Bhanu — AI Full-Stack & Automation Developer",
    description: site.metaDescription,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0B10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
