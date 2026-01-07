import { type ResumeData } from "@/data/resume-data";
import { type Dictionary } from "@/i18n/dictionary";
import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: ResumeData["summary"];
  title: Dictionary["summary"]["title"];
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, title, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">
        {title}
      </h2>
      <div
        className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}
