import type { MetadataRoute } from "next";

import { LOCALES } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";
  const origin = new URL(base).origin;
  const lastModified = new Date();

  const localizedPaths = LOCALES.flatMap((locale) => [
    `${origin}/${locale}`,
    `${origin}/${locale}/upwork-summary`,
  ]);

  const urls = new Set<string>([
    `${origin}/`,
    ...localizedPaths,
  ]);

  return Array.from(urls).map((url) => ({
    url,
    lastModified,
  }));
}
