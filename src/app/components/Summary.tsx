import { type ResumeData } from "@/data/resume-data";
import { type Dictionary } from "@/i18n/dictionary";
import { type Locale } from "@/i18n/config";
import { Section } from "../../components/ui/section";
import Link from "next/link";

interface AboutProps {
  summary: ResumeData["summary"];
  title: Dictionary["summary"]["title"];
  mySetupLabel: Dictionary["summary"]["mySetup"];
  locale: Locale;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, title, mySetupLabel, locale, className }: AboutProps) {
  return (
    <Section className={className}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold" id="about-section">
          {title}
        </h2>
        <Link 
          href={`/${locale}/setup`}
          className="text-sm text-foreground/60 hover:text-foreground transition-colors underline decoration-dotted underline-offset-4"
        >
          {mySetupLabel}
        </Link>
      </div>
      <div
        className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px] mt-2"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}
