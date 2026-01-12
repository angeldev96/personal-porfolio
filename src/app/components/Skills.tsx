import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { type ResumeData } from "@/data/resume-data";
import { type Dictionary } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

type Skills = ResumeData["skills"];

interface SkillsListProps {
  skills: Skills;
  className?: string;
  label: string;
  ariaLabelledby?: string;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, className, label, ariaLabelledby }: SkillsListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1.5 p-0", className)}
      aria-label={label}
      aria-labelledby={ariaLabelledby}
    >
      {skills.map((skill) => (
        <li key={skill}>
          <Badge className="print:text-[10px]" aria-label={`Skill: ${skill}`}>
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
  title: Dictionary["skills"]["skills"];
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className, title }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        {title}
      </h2>
      <SkillsList skills={skills} ariaLabelledby="skills-section" label={title} />
    </Section>
  );
}
