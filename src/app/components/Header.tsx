"use client";

import React, { useEffect, useRef, useState } from "react";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
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

type SocialIconName = "github" | "linkedin" | "x";

const socialIconMap: Record<SocialIconName, React.ElementType> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
};

function SocialButton({ href, icon, label }: { href: string; icon: SocialIconName; label: string }) {
  const Icon = socialIconMap[icon];

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
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  const showToast = (message: string) => {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    setToastMessage(message);
    toastTimer.current = setTimeout(() => setToastMessage(null), 2000);
  };

  const copyEmail = async () => {
    if (!contact.email) return;
    try {
      await navigator.clipboard?.writeText(contact.email);
      showToast(labels.copiedEmail);
    } catch (error) {
      console.error("Failed to copy email", error);
      showToast(labels.copyFailed);
    }
  };

  return (
    <ul
      className="flex list-none gap-x-1 p-0 pt-1 font-mono text-sm text-foreground/80 print:hidden"
      aria-label="Contact links"
    >
      {personalWebsiteUrl && (
        <li>
          <Button className="size-8" variant="outline" size="icon" asChild>
            <a
              href={personalWebsiteUrl}
              aria-label={labels.personalWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlobeIcon className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </li>
      )}
      {contact.email && (
        <li>
          <Button
            className="size-8"
            variant="outline"
            size="icon"
            aria-label={`${labels.email}: copy to clipboard`}
            title={labels.copyEmail}
            onClick={copyEmail}
            type="button"
          >
            <MailIcon className="size-4" aria-hidden="true" />
          </Button>
        </li>
      )}
      {contact.tel && (
        <li>
          <Button className="size-8" variant="outline" size="icon" asChild>
            <a
              href={`tel:${contact.tel}`}
              aria-label={labels.phone}
            >
              <PhoneIcon className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </li>
      )}
      {contact.social.map((social) => (
        <li key={social.name}>
          <SocialButton
            href={social.url}
            icon={social.icon}
            label={social.name}
          />
        </li>
      ))}

      {toastMessage && (
        <div
          className="fixed left-1/2 bottom-6 -translate-x-1/2 rounded-md bg-foreground px-3 py-1 text-xs font-medium text-background shadow-lg"
          role="status"
          aria-live="polite"
        >
          {toastMessage}
        </div>
      )}
    </ul>
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
