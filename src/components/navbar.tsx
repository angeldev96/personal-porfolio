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
    roadmap: string;
    blog: string;
    certificates: string;
    setup: string;
  };
  themeLabel: string;
  languageLabel: string;
}

const links = [
  { key: "home", href: "" },
  { key: "roadmap", href: "/roadmap" },
  { key: "blog", href: "/blog" },
  { key: "certificates", href: "/certificates" },
  { key: "setup", href: "/setup" },
] as const;

export function Navbar({
  locale,
  labels,
  themeLabel,
  languageLabel,
}: NavbarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "")
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(`/${locale}${href}`);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 print:hidden">
      <div className="border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:px-8">
          <Link
            href={`/${locale}`}
            className="mr-2 shrink-0 sm:mr-6"
            aria-label="Home"
          >
            <img src="/favicon.ico" alt="" className="size-8" />
          </Link>

          <div className="flex min-w-0 items-center">
            <nav
              className="no-scrollbar flex min-w-0 items-center gap-0.5 overflow-x-auto sm:gap-1"
              aria-label="Main navigation"
            >
              {links.map(({ key, href }) => (
                <Link
                  key={key}
                  href={`/${locale}${href}`}
                  className={cn(
                    "shrink-0 rounded-md px-2 py-1.5 text-xs font-medium transition-colors sm:px-3",
                    key === "roadmap" &&
                      !isActive(href) &&
                      "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent hover:opacity-80",
                    isActive(href)
                      ? "bg-secondary text-secondary-foreground"
                      : key !== "roadmap" &&
                          "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                  )}
                >
                  {labels[key as keyof typeof labels]}
                </Link>
              ))}
            </nav>
            <span
              className="mx-2 h-4 w-px shrink-0 bg-border sm:mx-3"
              role="separator"
            />
            <div className="flex shrink-0 items-center gap-1">
              <ThemeToggle label={themeLabel} />
              <LanguageToggle currentLocale={locale} label={languageLabel} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
