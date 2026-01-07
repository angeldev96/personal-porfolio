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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cv.jarocki.me"),
};

function getCurrentLocale() {
  const stored = cookies().get("NEXT_LOCALE")?.value;
  return stored && isLocale(stored) ? stored : DEFAULT_LOCALE;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = getCurrentLocale();

  return (
    <html lang={locale} className={inter.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
