import { getBlogData, getBlogPost } from "@/data/blog-data";
import { getDictionary } from "@/i18n/dictionary";
import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/i18n/config";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock } from "lucide-react";

function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of LOCALES) {
    const blogData = getBlogData(locale);
    for (const post of blogData.posts) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolvedLocale = resolveLocale(locale);
  const post = getBlogPost(slug, resolvedLocale);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";
  const canonicalUrl = `${siteUrl}/${resolvedLocale}/blog/${slug}`;

  return {
    title: `${post.title} — Angel Valladares`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: canonicalUrl,
      locale: resolvedLocale === "en" ? "en_US" : "es_ES",
      publishedTime: post.date,
      tags: [...post.tags],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);
  const post = getBlogPost(slug, resolvedLocale);

  if (!post) {
    notFound();
  }

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16">
      <article className="mx-auto w-full max-w-3xl">
        <Link
          href={`/${resolvedLocale}/blog`}
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          {dictionary.blog.backToBlog}
        </Link>

        <header className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" />
              {post.readingTime}
            </span>
            <span>
              {dictionary.blog.publishedOn} {post.date}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="text-base leading-relaxed text-foreground/80">
          {post.content}
        </div>
      </article>
    </main>
  );
}
