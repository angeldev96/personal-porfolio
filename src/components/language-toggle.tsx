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
      variant="ghost"
      size="sm"
      className="h-8 rounded-md px-2.5 text-xs font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
      aria-label={label}
      title={label}
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
