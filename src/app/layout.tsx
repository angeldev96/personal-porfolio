import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import React from "react";

import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";
import { getResumeData } from "@/data/resume-data";
import { getDictionary } from "@/i18n/dictionary";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";

const enableAnalytics =
  process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === "true";

async function getCurrentLocale() {
  const cookieStore = await cookies();
  const stored = cookieStore.get("NEXT_LOCALE")?.value;
  return stored && isLocale(stored) ? stored : DEFAULT_LOCALE;
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getCurrentLocale();
  const resume = getResumeData(locale);
  const dictionary = getDictionary(locale);
  const title = `${resume.name} — ${dictionary.meta.resumeTitle}`;
  const description = dictionary.meta.resumeDescription;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [
      "Angel Valladares",
      "Freelance Full-Stack Developer",
      "Hire full-stack developer",
      "Full-Stack Developer",
      "Software Engineer",
      "Node.js",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "AI integration",
      "LLM integration",
    ],
    authors: [{ name: resume.name, url: SITE_URL }],
    creator: resume.name,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      type: "profile",
      locale: locale === "en" ? "en_US" : "es_ES",
      url: `${SITE_URL}/${locale}`,
      siteName: `${resume.name} — Portfolio`,
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${resume.name} — ${dictionary.meta.resumeTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@angeldev96",
      creator: "@angeldev96",
      images: [`${SITE_URL}/opengraph-image`],
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
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getCurrentLocale();

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://avatars.githubusercontent.com"
        />
        <link
          rel="dns-prefetch"
          href="https://avatars.githubusercontent.com"
        />
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
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <div className="page-transition">{children}</div>
        </ThemeProvider>
        {enableAnalytics && <Analytics />}
      </body>
    </html>
  );
}
