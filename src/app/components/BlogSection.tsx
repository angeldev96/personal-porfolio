import { getBlogData } from "@/data/blog-data";
import { type Locale } from "@/i18n/config";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogSectionProps {
  locale: Locale;
  title: string;
  readMore: string;
}

export function BlogSection({ locale, title, readMore }: BlogSectionProps) {
  const blogData = getBlogData(locale);
  const latestPosts = blogData.posts.slice(0, 2);

  if (latestPosts.length === 0) return null;

  return (
    <Section className="print:hidden">
      <h2 className="text-xl font-bold" id="blog-section">
        {title}
      </h2>
      <div className="space-y-3">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group block"
          >
            <article className="border rounded-lg p-4 transition-all hover:border-primary/50 hover:shadow-sm">
              <div className="space-y-2">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {readMore}
        <ArrowRight className="size-4" />
      </Link>
    </Section>
  );
}
