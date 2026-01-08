import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";

import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev"),
  title: "Angel Valladares | Full-Stack Software Engineer & Web Developer",
  description:
    "Full-stack software engineer and web developer specialized in Node.js, Python, Next.js, and automation with n8n. Upwork Top Rated with 100% Job Success.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Node.js",
    "Python",
    "Next.js",
    "React",
    "n8n",
    "Programador Web",
    "Desarrollador",
    "Ingeniero de Software",
  ],
  authors: [{ name: "Angel Valladares", url: "https://angelvalladares.dev" }],
  creator: "Angel Valladares",
  openGraph: {
    title: "Angel Valladares | Full-Stack Software Engineer & Web Developer",
    description:
      "Full-stack software engineer and web developer specialized in Node.js, Python, Next.js, and automation with n8n. Upwork Top Rated with 100% Job Success.",
    type: "profile",
    locale: "en_US",
    url: "https://angelvalladares.dev",
    siteName: "Angel Valladares Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Valladares | Full-Stack Software Engineer & Web Developer",
    description:
      "Full-stack software engineer and web developer specialized in Node.js, Python, Next.js, and automation with n8n. Upwork Top Rated with 100% Job Success.",
    site: "@angeldev96",
    creator: "@angeldev96",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === "true";

async function getCurrentLocale() {
  const cookieStore = await cookies();
  const stored = cookieStore.get("NEXT_LOCALE")?.value;
  return stored && isLocale(stored) ? stored : DEFAULT_LOCALE;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getCurrentLocale();

  return (
    <html lang={locale} className={inter.className}>
      <body>
        {children}
        {enableAnalytics && <Analytics />}
      </body>
    </html>
  );
}
