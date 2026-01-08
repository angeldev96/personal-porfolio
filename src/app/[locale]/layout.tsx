import React from "react";

import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dictionary = getDictionary(resolvedLocale);

  return (
    <div className="min-h-screen">
      <div className="fixed right-4 top-4 z-50 flex gap-2 print:hidden">
        <ThemeToggle label={dictionary.themeToggle.label} />
        <LanguageToggle currentLocale={resolvedLocale} label={dictionary.languageToggle.label} />
      </div>
      {children}
    </div>
  );
}
