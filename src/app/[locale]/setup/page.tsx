import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { getResumeData } from "@/data/resume-data";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);
  
  return {
    title: `${dictionary.setup.title} | Angel Valladares`,
    description: dictionary.setup.description,
  };
}

export default async function SetupPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const dictionary = getDictionary(resolvedLocale);
  const resume = getResumeData(resolvedLocale);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <Link 
          href={`/${resolvedLocale}`}
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {dictionary.setup.backToResume}
        </Link>

        <Section>
          <h1 className="text-3xl font-bold">{dictionary.setup.title}</h1>
          <p className="text-foreground/60 mt-2 font-mono text-sm">
            {dictionary.setup.description}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold mb-4">{dictionary.setup.hardware}</h2>
          <div className="grid gap-4">
            {resume.setup.hardware.map((item) => (
              <Card key={item.name}>
                <CardHeader className="p-4 pb-2">
                  <h3 className="font-semibold">{item.name}</h3>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm font-mono text-foreground/80">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold mb-4">{dictionary.setup.software}</h2>
          <div className="grid gap-4">
            {resume.setup.software.map((item) => (
              <Card key={item.name}>
                <CardHeader className="p-4 pb-2">
                  <h3 className="font-semibold">{item.name}</h3>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm font-mono text-foreground/80">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
