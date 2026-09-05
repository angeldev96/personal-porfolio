import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CircleSlash,
  Radio,
  Sparkles,
  Target,
} from "lucide-react";

import { AiStarfield } from "@/components/roadmap/ai-starfield";
import { Reveal } from "@/components/roadmap/reveal";
import {
  ProgressBar,
  StatusDot,
  StatusPill,
} from "@/components/roadmap/pieces";
import { Badge } from "@/components/ui/badge";
import { getRoadmapData } from "@/data/roadmap-data";
import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";

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
  const roadmap = getRoadmapData(resolvedLocale);
  const canonicalUrl = `${SITE_URL}/${resolvedLocale}/roadmap`;
  const title = `${roadmap.hero.title} ${roadmap.hero.highlight} — Angel Valladares`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: roadmap.hero.subtitle,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/en/roadmap`,
        es: `${SITE_URL}/es/roadmap`,
        "x-default": `${SITE_URL}/en/roadmap`,
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description: roadmap.hero.subtitle,
      type: "website",
      url: canonicalUrl,
      locale: resolvedLocale === "en" ? "en_US" : "es_ES",
      images: [`${SITE_URL}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: roadmap.hero.subtitle,
      site: "@angeldev96",
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const roadmap = getRoadmapData(resolvedLocale);
  const dictionary = getDictionary(resolvedLocale);

  const following = roadmap.signals.filter((s) => s.verdict === "following");
  const ignoring = roadmap.signals.filter((s) => s.verdict === "ignoring");

  return (
    <main className="ai-gradient-scope page-transition relative overflow-hidden">
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden border-b border-border/50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="ai-aurora left-[-10%] top-[-30%] size-[26rem] bg-violet-500"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="ai-aurora right-[-8%] top-[-10%] size-[22rem] bg-cyan-400"
            style={{ animationDelay: "-6s" }}
          />
          <div
            className="ai-aurora bottom-[-40%] left-[35%] size-[24rem] bg-fuchsia-500"
            style={{ animationDelay: "-11s" }}
          />
        </div>

        <AiStarfield className="pointer-events-none absolute inset-0 size-full opacity-70" />

        <div className="relative mx-auto w-full max-w-5xl px-4 py-16 md:px-8 md:py-24">
          <div className="mb-8">
            <Link
              href={`/${resolvedLocale}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              {dictionary.blog.backToHome}
            </Link>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-300">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {roadmap.hero.kicker}
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {roadmap.hero.title}{" "}
            <span className="ai-text-gradient">{roadmap.hero.highlight}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {roadmap.hero.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={`/${resolvedLocale}/blog/${roadmap.hero.postSlug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-transform hover:scale-[1.02]"
            >
              {roadmap.hero.postLabel}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <span className="text-xs text-muted-foreground">
              {roadmap.hero.updatedLabel}:{" "}
              <span className="text-foreground">{roadmap.hero.updatedOn}</span>
            </span>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {roadmap.stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 70}
                className="ai-border-card rounded-xl bg-background/60 p-4 backdrop-blur-sm"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="ai-text-gradient block text-2xl font-bold">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl space-y-20 px-4 py-16 md:px-8 md:py-20">
        {/* --------------------------------------------------------- Right now */}
        <Reveal
          as="section"
          className="ai-border-card rounded-2xl bg-gradient-to-br from-violet-500/[0.07] via-transparent to-cyan-400/[0.07] p-6 md:p-8"
        >
          <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
            <Radio className="size-5 text-violet-500" aria-hidden="true" />
            {roadmap.now.title}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {roadmap.now.description}
          </p>
          <ul className="mt-6 space-y-3">
            {roadmap.now.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ----------------------------------------------------------- Phases */}
        <section>
          <SectionHeading
            title={roadmap.sections.phases.title}
            description={roadmap.sections.phases.description}
          />

          <ol className="relative mt-10 space-y-6 border-l border-border/70 pl-6 md:pl-8">
            {roadmap.phases.map((phase, i) => (
              <Reveal
                as="li"
                key={phase.id}
                delay={i * 60}
                className="relative"
              >
                <span className="absolute -left-[1.9rem] top-6 md:-left-[2.4rem]">
                  <StatusDot status={phase.status} />
                </span>

                <article
                  className={cn(
                    "rounded-2xl border bg-card p-6 transition-colors md:p-7",
                    phase.status === "active"
                      ? "ai-border-card border-transparent"
                      : "border-border hover:border-violet-500/30",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="ai-text-gradient text-sm font-semibold uppercase tracking-wider">
                      {phase.eyebrow}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {phase.period}
                    </span>
                    <StatusPill
                      status={phase.status}
                      label={roadmap.statusLabels[phase.status]}
                      className="ml-auto"
                    />
                  </div>

                  <h3 className="mt-3 text-xl font-bold tracking-tight">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {phase.summary}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <ProgressBar
                      value={phase.progress}
                      label={`${phase.title} — ${phase.progress}%`}
                    />
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {phase.progress}%
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {phase.milestones.map((milestone) => (
                      <li
                        key={milestone.label}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span className="mt-1">
                          <StatusDot status={milestone.status} />
                        </span>
                        <span
                          className={cn(
                            "leading-relaxed",
                            milestone.status === "done"
                              ? "text-muted-foreground line-through decoration-muted-foreground/40"
                              : "text-foreground/90",
                          )}
                        >
                          {milestone.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {phase.focus.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[11px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* -------------------------------------------------------------- Gap */}
        <section>
          <SectionHeading
            title={roadmap.sections.gap.title}
            description={roadmap.sections.gap.description}
          />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {roadmap.gap.map((item, i) => (
              <Reveal
                as="li"
                key={item.skill}
                delay={(i % 2) * 70}
                className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-violet-500/30"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold">{item.skill}</h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {item.level}%
                  </span>
                </div>
                <ProgressBar
                  value={item.level}
                  className="mt-3"
                  label={`${item.skill} — ${item.level}%`}
                />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.note}
                </p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* --------------------------------------------------------- Projects */}
        <section>
          <SectionHeading
            title={roadmap.sections.projects.title}
            description={roadmap.sections.projects.description}
          />

          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {roadmap.projects.map((project, i) => (
              <Reveal
                as="li"
                key={project.n}
                delay={(i % 2) * 70}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-violet-500/40"
              >
                <span
                  aria-hidden="true"
                  className="ai-text-gradient absolute right-4 top-2 select-none text-5xl font-black opacity-20 transition-opacity group-hover:opacity-40"
                >
                  {String(project.n).padStart(2, "0")}
                </span>

                <StatusPill
                  status={project.status}
                  label={roadmap.statusLabels[project.status]}
                />

                <h3 className="mt-3 pr-14 text-lg font-bold leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[11px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* --------------------------------------------------------- Day to day */}
        <section>
          <SectionHeading
            title={roadmap.sections.rituals.title}
            description={roadmap.sections.rituals.description}
          />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roadmap.rituals.map((ritual, i) => (
              <Reveal
                as="li"
                key={ritual.title}
                delay={(i % 3) * 70}
                className="ai-border-card rounded-xl bg-card/80 p-5"
              >
                <Target className="size-4 text-violet-500" aria-hidden="true" />
                <h3 className="mt-3 font-semibold">{ritual.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {ritual.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------------------- Signals */}
        <section>
          <SectionHeading
            title={roadmap.sections.signals.title}
            description={roadmap.sections.signals.description}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <SignalColumn
              tone="following"
              title={roadmap.verdictLabels.following}
              signals={following}
            />
            <SignalColumn
              tone="ignoring"
              title={roadmap.verdictLabels.ignoring}
              signals={ignoring}
            />
          </div>
        </section>

        {/* -------------------------------------------------------------- Log */}
        <section>
          <SectionHeading
            title={roadmap.sections.log.title}
            description={roadmap.sections.log.description}
          />

          {roadmap.log.length === 0 ? (
            <p className="mt-10 text-center text-muted-foreground">
              {roadmap.emptyLog}
            </p>
          ) : (
            <ol className="relative mt-10 space-y-6 border-l border-border/70 pl-6 md:pl-8">
              {roadmap.log.map((entry, i) => (
                <Reveal
                  as="li"
                  key={entry.isoDate}
                  delay={i * 60}
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.65rem] top-2 size-2 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 md:-left-[2.15rem]"
                  />
                  <article className="rounded-xl border border-border bg-card p-5">
                    <time
                      dateTime={entry.isoDate}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {entry.date}
                    </time>
                    <h3 className="mt-1.5 font-semibold">{entry.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {entry.body}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[11px]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ol>
          )}
        </section>
      </div>
    </main>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Reveal>
      <h2 className="text-3xl font-bold tracking-tight">
        <span className="ai-text-gradient">{title}</span>
      </h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
    </Reveal>
  );
}

function SignalColumn({
  tone,
  title,
  signals,
}: {
  tone: "following" | "ignoring";
  title: string;
  signals: { title: string; description: string }[];
}) {
  const isFollowing = tone === "following";
  const Icon = isFollowing ? Sparkles : CircleSlash;

  return (
    <div
      className={cn(
        "rounded-2xl border p-6",
        isFollowing
          ? "border-violet-500/25 bg-violet-500/[0.04]"
          : "border-border bg-muted/30",
      )}
    >
      <h3
        className={cn(
          "flex items-center gap-2 text-sm font-semibold uppercase tracking-wider",
          isFollowing
            ? "text-violet-600 dark:text-violet-300"
            : "text-muted-foreground",
        )}
      >
        <Icon className="size-4" aria-hidden="true" />
        {title}
      </h3>

      <ul className="mt-5 space-y-5">
        {signals.map((signal, i) => (
          <Reveal as="li" key={signal.title} delay={i * 50}>
            <h4
              className={cn(
                "text-sm font-semibold",
                isFollowing
                  ? ""
                  : "text-muted-foreground line-through decoration-muted-foreground/40",
              )}
            >
              {signal.title}
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {signal.description}
            </p>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
