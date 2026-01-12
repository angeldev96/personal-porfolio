import { getResumeData } from "@/data/resume-data";
import { getDictionary } from "@/i18n/dictionary";
import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/i18n/config";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import { Section } from "@/components/ui/section";
import Image from "next/image";

function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of LOCALES) {
    const resume = getResumeData(locale);
    for (const project of resume.projects) {
      params.push({ locale, slug: project.slug });
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
  const resume = getResumeData(resolvedLocale);
  const project = resume.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";
  const canonicalUrl = `${siteUrl}/${resolvedLocale}/projects/${slug}`;

  return {
    title: `${project.title} - Project`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: canonicalUrl,
      locale: resolvedLocale === "en" ? "en_US" : "es_ES",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const resolvedLocale = resolveLocale(locale);
  const resume = getResumeData(resolvedLocale);
  const dictionary = getDictionary(resolvedLocale);

  const project = resume.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectDetailLabels = dictionary.projectDetail || {
    backToProjects: "Back to Projects",
    technologies: "Technologies",
    features: "Features",
    challenges: "Challenges",
    viewProject: "View Project",
    viewDemo: "View Demo",
    viewRepo: "View Repository",
    gallery: "Gallery",
  };

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16">
      <div className="mx-auto w-full max-w-4xl">
        {/* Back button */}
        <Link
          href={`/${resolvedLocale}#projects`}
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          {projectDetailLabels.backToProjects}
        </Link>

        {/* Project header */}
        <Section className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.link && (
                <Button asChild variant="default">
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    {project.link.label}
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              )}
              {project.videoUrl && (
                <Button asChild variant="outline">
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Play className="size-4" />
                    {projectDetailLabels.viewDemo}
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground mb-3">
              {projectDetailLabels.technologies}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Section>

        {/* Long description */}
        {project.longDescription && (
          <Section className="space-y-4">
            <p className="text-base leading-relaxed">{project.longDescription}</p>
          </Section>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <Section className="space-y-4">
            <h2 className="text-2xl font-bold">{projectDetailLabels.features}</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg border bg-card"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Challenges */}
        {project.challenges && (
          <Section className="space-y-4">
            <h2 className="text-2xl font-bold">{projectDetailLabels.challenges}</h2>
            <p className="text-base leading-relaxed">{project.challenges}</p>
          </Section>
        )}

        {/* Image gallery */}
        {project.images && project.images.length > 0 && (
          <Section className="space-y-4">
            <h2 className="text-2xl font-bold">{projectDetailLabels.gallery}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video overflow-hidden rounded-lg border"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Video embed */}
        {project.videoUrl && (
          <Section className="space-y-4">
            <h2 className="text-2xl font-bold">Demo</h2>
            <div className="relative aspect-video overflow-hidden rounded-lg border">
              {/* For YouTube videos */}
              {project.videoUrl.includes("youtube.com") || project.videoUrl.includes("youtu.be") ? (
                <iframe
                  src={project.videoUrl.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                  title={`${project.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="size-full"
                />
              ) : (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-full items-center justify-center bg-muted text-muted-hover hover:text-foreground transition-colors"
                >
                  <Play className="size-16" />
                </a>
              )}
            </div>
          </Section>
        )}
      </div>
    </main>
  );
}
