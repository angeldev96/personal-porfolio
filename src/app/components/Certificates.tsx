import { Badge } from "../../components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { type ResumeData } from "../../data/resume-data";
import { type Dictionary } from "@/i18n/dictionary";
import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";

interface CertificatesProps {
  certificates: ResumeData["certificates"];
  labels: Dictionary["certificates"];
  locale: string;
}

export function Certificates({ certificates, labels, locale }: CertificatesProps) {
  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <Section className="print:hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{labels.title}</h2>
        <Link
          href={`/${locale}/certificates`}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          View all
          <ExternalLink className="size-3" />
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.slice(0, 3).map((cert) => (
          <Link
            key={cert.id}
            href={`/${locale}/certificates#${cert.id}`}
            className="group"
          >
            <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 p-4">
              <CardHeader className="space-y-2">
                <div className="flex items-start gap-2">
                  <Award className="size-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1 flex-1 min-w-0">
                    <CardTitle className="text-base group-hover:underline underline-offset-4">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {cert.issuer} • {cert.date}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
