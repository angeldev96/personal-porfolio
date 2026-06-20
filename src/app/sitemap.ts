import type { MetadataRoute } from "next";

import { getBlogData } from "@/data/blog-data";
import { getResumeData } from "@/data/resume-data";
import { LOCALES } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";
  const origin = new URL(base).origin;
  const lastModified = new Date();

  const localizedPaths = LOCALES.flatMap((locale) => [
    `${origin}/${locale}`,
    `${origin}/${locale}/blog`,
    `${origin}/${locale}/certificates`,
    `${origin}/${locale}/setup`,
    `${origin}/${locale}/upwork-summary`,
    ...getBlogData(locale).posts.map(
      (post) => `${origin}/${locale}/blog/${post.slug}`,
    ),
    ...getResumeData(locale).projects.map(
      (project) => `${origin}/${locale}/projects/${project.slug}`,
    ),
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
