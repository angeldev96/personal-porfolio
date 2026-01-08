import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
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
  const canonicalUrl = `${siteUrl}/${resolvedLocale}/upwork-summary`;
  const title = `${resume.name} - ${dictionary.meta.upworkTitle}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description: dictionary.meta.upworkDescription,
    keywords: [
      "Upwork Top Rated",
      "Full-Stack Developer",
      "Software Engineer",
      "Programador Freelance",
      "Desarrollador Web",
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/en/upwork-summary`,
        es: `${siteUrl}/es/upwork-summary`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description: dictionary.meta.upworkDescription,
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
      description: dictionary.meta.upworkDescription,
      images: [`${siteUrl}/opengraph-image`],
      site: "@angeldev96",
    },
  };
}

export default async function UpworkSummaryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const resume = getResumeData(resolvedLocale);
  const dictionary = getDictionary(resolvedLocale);
  const upworkProfile = resume.work[0]?.link ?? "https://www.upwork.com/freelancers/~0116803452ac7b4ff7";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";
  const pageUrl = `${siteUrl}/${resolvedLocale}/upwork-summary`;

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resume.name,
    url: pageUrl,
    image: resume.avatarUrl,
    jobTitle: resume.work[0]?.title || "Full-Stack Software Engineer",
    sameAs: [upworkProfile, ...resume.contact.social.map((item) => item.url)],
  };

  return (
    <>
      <Script
        id={`ld-upwork-person-${resolvedLocale}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      <main
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
        id="main-content"
      >
      <div className="sr-only">
        <h1>
          {resume.name}&apos;s Upwork Profile
        </h1>
      </div>

      <section
        className="mx-auto w-full max-w-2xl space-y-8 bg-background dark:bg-background print:space-y-4"
        aria-label="Upwork Summary Content"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{resume.name}</h1>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {resume.about}
          </p>
          <div className="flex gap-x-1 text-muted-foreground">{resume.location}</div>
        </div>

        <div className="space-y-8 print:space-y-4">
          <Section>
            <h2 className="text-xl font-bold" id="upwork-profile-section">
              {dictionary.upwork.heading}
            </h2>
            <div
              className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px] space-y-4"
              aria-labelledby="upwork-profile-section"
            >
              <p>{dictionary.upwork.intro}</p>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{dictionary.upwork.advantageHeading}</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>{dictionary.upwork.advantages.fundamentals}</li>
                  <li>{dictionary.upwork.advantages.aiTools}</li>
                  <li>{dictionary.upwork.advantages.reliable}</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{dictionary.upwork.whyHeading}</h3>
                <p>{dictionary.upwork.whyIntro}</p>
                <ul className="list-disc space-y-2 pl-5">
                  {dictionary.upwork.whyBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">{dictionary.upwork.technologies}</h2>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-md bg-secondary px-3 py-1 text-xs font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">{dictionary.upwork.contact}</h2>
            <div className="text-pretty font-mono text-sm text-foreground/80 space-y-2">
              <p>{dictionary.upwork.contactIntro}</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  {dictionary.header.email}: {resume.contact.email}
                </li>
                <li>
                  Upwork: {" "}
                  <a
                    href={upworkProfile}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.upwork.upworkLabel}
                  </a>
                </li>
                {resume.contact.social.map((social) => (
                  <li key={social.name}>
                    {social.name}: {" "}
                    <a
                      href={social.url}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
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
