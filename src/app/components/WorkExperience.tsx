import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { type ResumeData } from "@/data/resume-data";
import { type Dictionary } from "@/i18n/dictionary";
import { cn } from "@/lib/utils";

type WorkExperience = ResumeData["work"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
  label: string;
}

/**
 * Renders a list of badges for work experience
 */
function BadgeList({ className, badges, label }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1.5 p-0", className)}
      aria-label={label}
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="text-xs print:px-1.5 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
  presentLabel: string;
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end, presentLabel }: WorkPeriodProps) {
  return (
    <div
      className="text-sm font-medium text-muted-foreground tabular-nums"
      aria-label={`Employment period: ${start} to ${end ?? presentLabel}`}
    >
      {start} - {end ?? presentLabel}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline font-semibold"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
  labels: {
    technologiesUsed: string;
    present: string;
  };
}

/**
 * Individual work experience card component
 */
function WorkExperienceItem({ work, labels }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description } = work;

  return (
    <Card className="py-3 print:py-2">
      <CardHeader className="print:space-y-1 space-y-2">
        {/* Company and Period */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-base font-semibold leading-none print:text-sm">
            <CompanyLink company={company} link={link} />
          </h3>
          <WorkPeriod start={start} end={end} presentLabel={labels.present} />
        </div>

        {/* Job Title */}
        <h4 className="font-mono text-sm font-medium leading-none print:text-[12px] text-foreground/90">
          {title}
        </h4>

        {/* Badges - Always in separate section */}
        <BadgeList
          badges={badges}
          label={labels.technologiesUsed}
        />
      </CardHeader>

      <CardContent>
        <div className="text-xs text-foreground/80 print:text-[10px] text-pretty leading-relaxed">
          {description}
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: ResumeData["work"];
  labels: Dictionary["work"];
}

/**
 * Main work experience section component
 */
export function WorkExperience({ work, labels }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        {labels.work}
      </h2>
      <div className="space-y-4 print:space-y-2" role="feed" aria-labelledby="work-experience">
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`} role="article">
            <WorkExperienceItem work={item} labels={labels} />
          </article>
        ))}
      </div>
    </Section>
  );
}
