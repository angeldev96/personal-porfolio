import { CommandMenu } from "@/components/command-menu";
import { Header } from "@/app/components/Header";
import { Summary } from "@/app/components/Summary";
import { WorkExperience } from "@/app/components/WorkExperience";
import { Education } from "@/app/components/Education";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { BlogSection } from "@/app/components/BlogSection";
import { Certificates } from "@/app/components/Certificates";
import { getResumeData } from "@/data/resume-data";
import { getDictionary } from "@/i18n/dictionary";
import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/i18n/config";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";

function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

function getCommandMenuLinks(
  resume: ReturnType<typeof getResumeData>,
  personalWebsiteLabel: string,
) {
  const links = [] as { url: string; title: string }[];

  if (resume.personalWebsiteUrl) {
    links.push({
      url: resume.personalWebsiteUrl,
      title: personalWebsiteLabel,
    });
  }

  return [
    ...links,
    ...resume.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
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
  const resume = getResumeData(resolvedLocale);
  const dictionary = getDictionary(resolvedLocale);
  const canonicalUrl = `${SITE_URL}/${resolvedLocale}`;
  const title = `${resume.name} - ${dictionary.meta.resumeTitle}`;
  const description = dictionary.meta.resumeDescription;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [
      "Angel Valladares",
      "Freelance Full-Stack Developer",
      "Hire full-stack developer",
      "Full-Stack Developer",
      "Software Engineer",
      "Backend Developer",
      "Node.js",
      "Python",
      "Next.js",
      "React",
      "AI integration",
      "LLM integration",
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: "profile",
      locale: resolvedLocale === "en" ? "en_US" : "es_ES",
      url: canonicalUrl,
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${resume.name} — ${dictionary.meta.resumeTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@angeldev96",
      creator: "@angeldev96",
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const resume = getResumeData(resolvedLocale);
  const dictionary = getDictionary(resolvedLocale);
  const profileUrl = `${SITE_URL}/${resolvedLocale}`;
  const inLanguage = resolvedLocale === "en" ? "en-US" : "es-ES";
  const sameAs = resume.contact.social.map((item) => item.url);

  const personLd = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: resume.name,
    url: profileUrl,
    image: resume.avatarUrl,
    jobTitle: "Full-Stack Software Engineer & Freelance Developer",
    description: resume.about,
    email: `mailto:${resume.contact.email}`,
    knowsAbout: [...resume.skills],
    sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business inquiries",
      email: resume.contact.email,
      availableLanguage: ["English", "Spanish"],
    },
  };

  const websiteLd = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: `${resume.name} | ${dictionary.meta.resumeTitle}`,
    url: profileUrl,
    inLanguage,
    about: { "@id": `${SITE_URL}/#person` },
  };

  const profilePageLd = {
    "@type": "ProfilePage",
    "@id": `${profileUrl}#profilepage`,
    url: profileUrl,
    name: `${resume.name} — ${dictionary.meta.resumeTitle}`,
    inLanguage,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [personLd, websiteLd, profilePageLd],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
        id="main-content"
      >
        <section
          className="mx-auto w-full max-w-2xl space-y-8 bg-background print:space-y-4 dark:bg-background"
          aria-label="Resume Content"
        >
          <Header resume={resume} labels={dictionary.header} />

          <div className="space-y-8 print:space-y-4">
            <Summary
              summary={resume.summary}
              title={dictionary.summary.title}
              mySetupLabel={dictionary.summary.mySetup}
              locale={resolvedLocale}
            />

            <WorkExperience work={resume.work} labels={dictionary.work} />

            <Projects
              projects={resume.projects}
              labels={dictionary.projects}
              locale={resolvedLocale}
            />

            <Education
              education={resume.education}
              labels={dictionary.education}
            />

            <Skills skills={resume.skills} title={dictionary.skills.skills} />

            <BlogSection
              locale={resolvedLocale}
              title={dictionary.blog.latestPosts}
              readMore={dictionary.blog.readMore}
            />

            <Certificates
              certificates={resume.certificates}
              labels={dictionary.certificates}
              locale={resolvedLocale}
            />
          </div>
        </section>

        <nav className="print:hidden" aria-label="Quick navigation">
          <CommandMenu
            links={getCommandMenuLinks(
              resume,
              dictionary.header.personalWebsite,
            )}
            labels={dictionary.commandMenu}
          />
        </nav>
      </main>
    </>
  );
}
