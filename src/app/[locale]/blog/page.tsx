import { getBlogData } from "@/data/blog-data";
import { getDictionary } from "@/i18n/dictionary";
import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/i18n/config";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock } from "lucide-react";

function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";
  const canonicalUrl = `${siteUrl}/${resolvedLocale}/blog`;
  const title = `${dictionary.blog.title} — Angel Valladares`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description: dictionary.blog.description,
    openGraph: {
      title,
      description: dictionary.blog.description,
      type: "website",
      url: canonicalUrl,
      locale: resolvedLocale === "en" ? "en_US" : "es_ES",
      images: [`${siteUrl}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: dictionary.blog.description,
      site: "@angeldev96",
      images: [`${siteUrl}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/en/blog`,
        es: `${siteUrl}/es/blog`,
        "x-default": `${siteUrl}/en/blog`,
      },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const blogData = getBlogData(resolvedLocale);
  const dictionary = getDictionary(resolvedLocale);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href={`/${resolvedLocale}`}
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          {dictionary.blog.backToHome}
        </Link>

        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            {dictionary.blog.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {dictionary.blog.description}
          </p>
        </div>

        {blogData.posts.length === 0 ? (
          <p className="text-center py-12 text-muted-foreground">
            {dictionary.blog.noPosts}
          </p>
        ) : (
          <div className="space-y-8">
            {blogData.posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${resolvedLocale}/blog/${post.slug}`}
                className="group block"
              >
                <article className="border rounded-lg p-6 transition-all hover:border-primary/50 hover:shadow-md">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-4" />
                        {post.readingTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
