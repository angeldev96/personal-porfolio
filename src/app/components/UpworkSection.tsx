import { Section } from "../../components/ui/section";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface UpworkSectionProps {
  heading: string;
  description: string;
  ctaLabel: string;
  locale: string;
}

export function UpworkSection({ heading, description, ctaLabel, locale }: UpworkSectionProps) {
  return (
    <Section className="print:hidden">
      <div className="rounded-lg border bg-muted/50 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{heading}</h3>
            <p className="text-sm text-muted-foreground max-w-xl">{description}</p>
          </div>
          <Button asChild className="shrink-0">
            <Link href={`/${locale}/upwork-summary`} className="inline-flex items-center gap-2">
              {ctaLabel}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
