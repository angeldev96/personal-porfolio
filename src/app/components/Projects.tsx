import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { type ResumeData } from "../../data/resume-data";
import { type Dictionary } from "@/i18n/dictionary";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type ProjectTags = readonly string[];

interface ProjectTagsProps {
  tags: ProjectTags;
  label: string;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags, label }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label={label}
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: ProjectTags;
  externalLink?: string;
  tagsLabel: string;
  locale: string;
}

/**
 * Card component displaying project information
 */
function ProjectCard({
  slug,
  title,
  description,
  tags,
  externalLink,
  tagsLabel,
  locale,
}: ProjectCardProps) {
  return (
    <Link
      href={`/${locale}/projects/${slug}`}
      className="h-full group"
      aria-label={`View ${title} project details`}
    >
      <Card
        className="flex h-full flex-col overflow-hidden border p-3 transition-all hover:shadow-md hover:border-primary/50"
        role="article"
      >
        <CardHeader>
          <div className="space-y-1">
            <CardTitle className="text-base flex items-center justify-between">
              <span className="group-hover:underline underline-offset-4">
                {title}
              </span>
              {externalLink && (
                <ExternalLink className="size-4 text-muted-foreground" />
              )}
            </CardTitle>
            <CardDescription
              className="text-pretty font-mono text-xs print:text-[10px]"
              aria-label="Project description"
            >
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <ProjectTags tags={tags} label={tagsLabel} />
        </CardContent>
      </Card>
    </Link>
  );
}

interface ProjectsProps {
  projects: ResumeData["projects"];
  labels: Dictionary["projects"];
  locale: string;
}

/**
 * Section component displaying all side projects
 */
export function Projects({ projects, labels, locale }: ProjectsProps) {
  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12">
      <h2 className="text-xl font-bold" id="side-projects">
        {labels.sideProjects || labels.projects}
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
        role="feed"
        aria-labelledby="side-projects"
      >
        {projects.map((project) => (
          <article
            key={project.slug}
            className="h-full"
            role="article"
          >
            <ProjectCard
              slug={project.slug}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              externalLink={project.link?.href}
              tagsLabel={labels.technologiesUsed}
              locale={locale}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
