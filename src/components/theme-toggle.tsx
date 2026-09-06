"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const toggleClass =
  "size-8 rounded-md px-0 text-muted-foreground hover:bg-secondary/50 hover:text-foreground";

export function ThemeToggle({ label }: { label: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className={toggleClass} disabled>
        <SunIcon className="size-4" aria-hidden="true" />
      </Button>
    );
  }

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <Button
      variant="ghost"
      size="sm"
      className={toggleClass}
      aria-label={label}
      title={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <SunIcon className="size-4" aria-hidden="true" />
      ) : (
        <MoonIcon className="size-4" aria-hidden="true" />
      )}
    </Button>
  );
}
