"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { getAlternateLocale, isLocale, type Locale } from "@/i18n/config";

function swapLocale(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${locale}`;
  }

  if (isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  return `/${segments.join("/")}`;
}

export function LanguageToggle({ currentLocale, label }: { currentLocale: Locale; label: string }) {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const nextLocale = getAlternateLocale(currentLocale);

  return (
    <Button
      variant="outline"
      size="sm"
      aria-label={label}
      onClick={() => {
        const target = swapLocale(pathname, nextLocale);
        router.replace(target);
        router.refresh();
      }}
    >
      {nextLocale.toUpperCase()}
    </Button>
  );
}
