import React from "react";

import { LanguageToggle } from "@/components/language-toggle";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const dictionary = getDictionary(locale);

  return (
    <div className="min-h-screen">
      <div className="fixed right-4 top-4 z-50 print:hidden">
        <LanguageToggle currentLocale={locale} label={dictionary.languageToggle.label} />
      </div>
      {children}
    </div>
  );
}
