import React from "react";

import { Navbar } from "@/components/navbar";
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
      <Navbar
        locale={resolvedLocale}
        labels={dictionary.nav}
        themeLabel={dictionary.themeToggle.label}
        languageLabel={dictionary.languageToggle.label}
      />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}
