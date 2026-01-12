import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";

import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";
import { getResumeData } from "@/data/resume-data";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev"),
  title: "Angel Valladares — Full-Stack Developer & Freelancer in Honduras",
  description:
    "Top-rated freelance Full-Stack Developer based in Tegucigalpa, Honduras. Specializes in Next.js, Node.js, React, TypeScript, Python, Supabase and AI/LLM integrations. Hire a reliable freelancer for web apps, APIs and AI features.",
  keywords: [
    "Freelancer Honduras",
    "Full-Stack Developer Honduras",
    "Freelance developer Tegucigalpa",
    "Full-Stack Developer",
    "Software Engineer",
    "Node.js",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Angel Valladares", url: "https://angelvalladares.dev" }],
  creator: "Angel Valladares",
  openGraph: {
    title: "Angel Valladares — Full-Stack Developer & Freelancer in Honduras",
    description:
      "Top-rated freelance Full-Stack Developer based in Tegucigalpa, Honduras. Specializes in Next.js, Node.js, React, TypeScript, Python, Supabase and AI/LLM integrations.",
    type: "profile",
    locale: "en_US",
    url: "https://angelvalladares.dev",
    siteName: "Angel Valladares Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Valladares — Full-Stack Developer & Freelancer in Honduras",
    description:
      "Top-rated freelance Full-Stack Developer based in Tegucigalpa, Honduras. Specializes in Next.js, Node.js, React, TypeScript, Python, Supabase and AI/LLM integrations.",
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
  icons: {
    icon: "/favicon.ico",
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
  const resume = getResumeData(locale);

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getTheme() {
                  const storedTheme = localStorage.getItem('portfolio-theme');
                  if (storedTheme) {
                    return storedTheme;
                  }
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }

                const theme = getTheme();
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: resume.name,
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev",
              image: resume.avatarUrl,
              jobTitle: resume.work?.[0]?.title || "Full-Stack Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: resume.location || "Tegucigalpa",
                addressCountry: "HN",
              },
              sameAs: [
                resume.personalWebsiteUrl || process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev",
                ...resume.contact.social.map((s) => s.url),
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
        {enableAnalytics && <Analytics />}
      </body>
    </html>
  );
}
