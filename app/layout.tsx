import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Analytics } from "@vercel/analytics/next";

const display = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

const SITE_URL = "https://jdm101.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "JDM101 — The Japanese Domestic Market Car Encyclopedia",
    template: "%s | JDM101"
  },
  description:
    "Learn about iconic JDM cars, browse chassis codes and specs, and find the Japanese sports car that matches your budget and driving style with the JDM Matchmaker.",
  keywords: [
    "JDM cars",
    "JDM car database",
    "Japanese cars",
    "Skyline GT-R",
    "Supra MK4",
    "best JDM cars",
    "JDM encyclopedia"
  ],
  openGraph: {
    type: "website",
    siteName: "JDM101",
    title: "JDM101 — The Japanese Domestic Market Car Encyclopedia",
    description:
      "Learn about iconic JDM cars, browse chassis codes and specs, and find your perfect Japanese sports car with the JDM Matchmaker.",
    url: SITE_URL
  },
  twitter: {
    card: "summary_large_image",
    title: "JDM101 — The Japanese Domestic Market Car Encyclopedia",
    description:
      "Learn about iconic JDM cars and find your perfect Japanese sports car with the JDM Matchmaker."
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-graphite-950 text-chalk antialiased`}
      >
        <div className="relative min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
