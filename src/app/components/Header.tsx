import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Dictionary } from "@/i18n/dictionary";
import { type ResumeData } from "@/data/resume-data";

interface LocationLinkProps {
  location: ResumeData["location"];
  locationLink: ResumeData["locationLink"];
  label: string;
}

function LocationLink({ location, locationLink, label }: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label}: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <Button className="size-8" variant="outline" size="icon" asChild>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="size-4" aria-hidden="true" />
      </a>
    </Button>
  );
}

interface ContactButtonsProps {
  contact: ResumeData["contact"];
  personalWebsiteUrl?: string | null;
  labels: Dictionary["header"];
}

function ContactButtons({ contact, personalWebsiteUrl, labels }: ContactButtonsProps) {
  return (
    <div
      className="flex gap-x-1 pt-1 font-mono text-sm text-foreground/80 print:hidden"
      role="list"
      aria-label="Contact links"
    >
      {personalWebsiteUrl && (
        <SocialButton
          href={personalWebsiteUrl}
          icon={GlobeIcon}
          label={labels.personalWebsite}
        />
      )}
      {contact.email && (
        <SocialButton
          href={`mailto:${contact.email}`}
          icon={MailIcon}
          label={labels.email}
        />
      )}
      {contact.tel && (
        <SocialButton
          href={`tel:${contact.tel}`}
          icon={PhoneIcon}
          label={labels.phone}
        />
      )}
      {contact.social.map((social) => (
        <SocialButton
          key={social.name}
          href={social.url}
          icon={social.icon}
          label={social.name}
        />
      ))}
    </div>
  );
}

interface PrintContactProps {
  contact: ResumeData["contact"];
  personalWebsiteUrl?: string | null;
}


function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
  return (
    <div
      className="hidden gap-x-2 font-mono text-sm text-foreground/80 print:flex print:text-[12px]"
      aria-label="Print contact information"
    >
      {personalWebsiteUrl && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={personalWebsiteUrl}
          >
            {new URL(personalWebsiteUrl).hostname}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.email && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.tel && (
        <a
          className="underline hover:text-foreground/70"
          href={`tel:${contact.tel}`}
        >
          {contact.tel}
        </a>
      )}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header({
  resume,
  labels,
}: {
  resume: ResumeData;
  labels: Dictionary["header"];
}) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold" id="resume-name">
          {resume.name}
        </h1>
        <p
          className="max-w-md text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
          aria-labelledby="resume-name"
        >
          {resume.about}
        </p>

        <LocationLink
          location={resume.location}
          locationLink={resume.locationLink}
          label={labels.locationLabel}
        />

        <ContactButtons
          contact={resume.contact}
          personalWebsiteUrl={resume.personalWebsiteUrl}
          labels={labels}
        />

        <PrintContact
          contact={resume.contact}
          personalWebsiteUrl={resume.personalWebsiteUrl}
        />
      </div>

      <Avatar className="size-28" aria-hidden="true">
        <AvatarImage
          alt={`${resume.name}'s profile picture`}
          src={resume.avatarUrl}
        />
        <AvatarFallback>{resume.initials}</AvatarFallback>
      </Avatar>
    </header>
  );
}
