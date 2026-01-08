import { CommandMenu } from "@/components/command-menu";
import { Header } from "@/app/components/Header";
import { Summary } from "@/app/components/Summary";
import { WorkExperience } from "@/app/components/WorkExperience";
import { Education } from "@/app/components/Education";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { getResumeData } from "@/data/resume-data";
import { getDictionary } from "@/i18n/dictionary";
import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/i18n/config";
import type { Metadata } from "next";
import Script from "next/script";

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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const resume = getResumeData(resolvedLocale);
  const dictionary = getDictionary(resolvedLocale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";
  const canonicalUrl = `${siteUrl}/${resolvedLocale}`;
  const title = `${resume.name} - ${dictionary.meta.resumeTitle}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description: resume.about,
    keywords: [
      "Full-Stack Developer",
      "Software Engineer",
      "Backend Developer",
      "Node.js",
      "Python",
      "Next.js",
      "React",
      "n8n",
      "Programador Web",
      "Desarrollador",
      "Ingeniero de Software",
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/en`,
        es: `${siteUrl}/es`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description: resume.about,
      type: "profile",
      locale: resolvedLocale === "en" ? "en_US" : "es_ES",
      url: canonicalUrl,
      images: [
        {
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${resume.name}'s profile picture`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: resume.about,
      site: "@angeldev96",
      images: [`${siteUrl}/opengraph-image`],
    },
  };
}

export default async function ResumePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const resume = getResumeData(resolvedLocale);
  const dictionary = getDictionary(resolvedLocale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";
  const profileUrl = `${siteUrl}/${resolvedLocale}`;
  const sameAs = resume.contact.social.map((item) => item.url);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resume.name,
    url: profileUrl,
    image: resume.avatarUrl,
    jobTitle: "Full-Stack Software Engineer & Web Developer",
    description: resume.about,
    sameAs,
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${resume.name} | ${dictionary.meta.resumeTitle}`,
    url: profileUrl,
    inLanguage: resolvedLocale === "en" ? "en-US" : "es-ES",
    about: resume.about,
  };

  return (
    <>
      <Script
        id={`ld-person-${resolvedLocale}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <Script
        id={`ld-website-${resolvedLocale}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />

      <main
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
        id="main-content"
      >
      <div className="sr-only">
        <h1>
          {resume.name} - {dictionary.meta.resumeTitle}
        </h1>
      </div>

      <section
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
        aria-label="Resume Content"
      >
        <Header resume={resume} labels={dictionary.header} />

        <div className="space-y-8 print:space-y-4">
          <Summary summary={resume.summary} title={dictionary.summary.title} />

          <WorkExperience work={resume.work} labels={dictionary.work} />

          <Education education={resume.education} labels={dictionary.education} />

          <Skills skills={resume.skills} title={dictionary.skills.skills} />

          <Projects projects={resume.projects} labels={dictionary.projects} />
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu
          links={getCommandMenuLinks(resume, dictionary.header.personalWebsite)}
          labels={dictionary.commandMenu}
        />
      </nav>
      </main>
    </>
  );
}
