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
  const title = `${post.title} — Angel Valladares`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: canonicalUrl,
      locale: resolvedLocale === "en" ? "en_US" : "es_ES",
      publishedTime: post.isoDate,
      tags: [...post.tags],
      images: [`${siteUrl}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      site: "@angeldev96",
      images: [`${siteUrl}/opengraph-image`],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/en/blog/${slug}`,
        es: `${siteUrl}/es/blog/${slug}`,
        "x-default": `${siteUrl}/en/blog/${slug}`,
      },
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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";
  const postUrl = `${siteUrl}/${resolvedLocale}/blog/${slug}`;
  const author = {
    "@type": "Person",
    name: "Angel Valladares",
    url: `${siteUrl}/${resolvedLocale}`,
  };

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    inLanguage: resolvedLocale === "en" ? "en-US" : "es-ES",
    keywords: [...post.tags],
    url: postUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    image: `${siteUrl}/opengraph-image`,
    author,
    publisher: author,
  };

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
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
            <Link
              href={`/${resolvedLocale}`}
              className="font-medium text-foreground hover:underline"
            >
              Angel Valladares
            </Link>
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
