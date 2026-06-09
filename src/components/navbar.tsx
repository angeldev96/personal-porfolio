"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface NavbarProps {
  locale: Locale;
  labels: {
    home: string;
    blog: string;
    certificates: string;
    setup: string;
  };
  themeLabel: string;
  languageLabel: string;
}

const links = [
  { key: "home", href: "" },
  { key: "blog", href: "/blog" },
  { key: "certificates", href: "/certificates" },
  { key: "setup", href: "/setup" },
] as const;

export function Navbar({ locale, labels, themeLabel, languageLabel }: NavbarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(`/${locale}${href}`);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 print:hidden">
      <div className="border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:px-8">
          <Link
            href={`/${locale}`}
            className="mr-6 shrink-0"
            aria-label="Home"
          >
            <img
              src="/favicon.ico"
              alt=""
              className="size-8"
            />
          </Link>

          <nav className="flex items-center gap-1" aria-label="Main navigation">
            {links.map(({ key, href }) => (
              <Link
                key={key}
                href={`/${locale}${href}`}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  isActive(href)
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                )}
              >
                {labels[key as keyof typeof labels]}
              </Link>
            ))}
            <span className="mx-2 h-4 w-px bg-border" role="separator" />
            <ThemeToggle label={themeLabel} />
            <LanguageToggle currentLocale={locale} label={languageLabel} />
          </nav>
        </div>
      </div>
    </header>
  );
}
