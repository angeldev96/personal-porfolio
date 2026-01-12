import { getResumeData } from "@/data/resume-data";
import { getDictionary } from "@/i18n/dictionary";
import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/i18n/config";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { ArrowLeft, ExternalLink, Award } from "lucide-react";

function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const resume = getResumeData(resolvedLocale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://angelvalladares.dev";
  const canonicalUrl = `${siteUrl}/${resolvedLocale}/certificates`;

  return {
    title: "Certificates & Certifications",
    description: `Professional certifications and credentials obtained by ${resume.name}`,
    openGraph: {
      title: "Certificates & Certifications",
      description: `Professional certifications and credentials obtained by ${resume.name}`,
      type: "website",
      url: canonicalUrl,
      locale: resolvedLocale === "en" ? "en_US" : "es_ES",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function CertificatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const resume = getResumeData(resolvedLocale);
  const dictionary = getDictionary(resolvedLocale);

  const certificates = resume.certificates || [];

  const labels = dictionary.certificates || {
    title: "Certificates & Certifications",
    backToResume: "Back to Resume",
    viewCredential: "View Credential",
    issuedBy: "Issued by",
    credentialId: "Credential ID",
    noCertificates: "No certificates to display.",
  };

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16">
      <div className="mx-auto w-full max-w-4xl">
        {/* Back button */}
        <Link
          href={`/${resolvedLocale}`}
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          {labels.backToResume}
        </Link>

        {/* Header */}
        <Section className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="size-8 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">{labels.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Professional certifications and credentials that validate my expertise and continuous learning.
          </p>
        </Section>

        {/* Certificates list */}
        {certificates.length === 0 ? (
          <Section>
            <p className="text-muted-foreground text-center py-12">{labels.noCertificates}</p>
          </Section>
        ) : (
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <Card key={cert.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-foreground">
                          {labels.issuedBy} {cert.issuer}
                        </span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </CardDescription>
                      {cert.description && (
                        <p className="text-sm text-muted-foreground mt-2">{cert.description}</p>
                      )}
                      {cert.credentialId && (
                        <div className="text-xs font-mono text-muted-foreground">
                          {labels.credentialId}: {cert.credentialId}
                        </div>
                      )}
                    </div>
                    {cert.credentialUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 shrink-0"
                        >
                          {labels.viewCredential}
                          <ExternalLink className="size-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
