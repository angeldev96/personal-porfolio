import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Upwork Summary`,
  description: "Experienced developer with solid fundamentals and AI expertise",
  openGraph: {
    title: `${RESUME_DATA.name} - Upwork Summary`,
    description: "Experienced developer with solid fundamentals and AI expertise",
    type: "profile",
    locale: "en_US",
  },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  const links = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    });
  }

  return [
    ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function UpworkSummaryPage() {
  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
      id="main-content"
    >
      <div className="sr-only">
        <h1>{RESUME_DATA.name}&apos;s Upwork Profile</h1>
      </div>

      <section
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
        aria-label="Upwork Summary Content"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{RESUME_DATA.name}</h1>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.about}
          </p>
          <div className="flex gap-x-1 text-muted-foreground">
            {RESUME_DATA.location}
          </div>
        </div>

        <div className="space-y-8 print:space-y-4">
          <Section>
            <h2 className="text-xl font-bold" id="upwork-profile-section">
              For Upwork Employers
            </h2>
            <div
              className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
              aria-labelledby="upwork-profile-section"
            >
              <p className="mb-4">
                Thank you for visiting my specialized profile for Upwork. As a developer with several years of experience, 
                I possess solid technical fundamentals that make my work more reliable and efficient.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">My Competitive Advantage:</h3>
              
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Solid Fundamentals:</strong> Unlike newer developers known as "vibe coders" 
                  who rely exclusively on AI tools without understanding the fundamental concepts, my experience 
                  allows me to identify and solve complex problems efficiently.
                </li>
                <li>
                  <strong>Experience with AI Tools:</strong> I know current AI tools perfectly 
                  and use them strategically to accelerate development, always maintaining control over the code and 
                  understanding exactly what I'm implementing.
                </li>
                <li>
                  <strong>Accelerated and Reliable Development:</strong> The combination of my fundamental knowledge with the efficient use 
                  of AI tools allows me to deliver projects in less time, without the problems faced by 
                  developers who only rely on AI without understanding where errors might occur.
                </li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-2">Why Hire Me?</h3>
              
              <p className="mb-4">
                By working with me, you'll get the best of both worlds: the technical solidity of an experienced developer 
                and the efficiency provided by modern AI tools. This translates into:
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Cleaner and more maintainable code</li>
                <li>Faster detection and resolution of problems</li>
                <li>Greater efficiency in development</li>
                <li>More robust and scalable solutions</li>
                <li>Clear and professional communication throughout the project</li>
              </ul>
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-md bg-secondary px-3 py-1 text-xs font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Contact Me</h2>
            <div className="text-pretty font-mono text-sm text-foreground/80">
              <p>If you're interested in working with me, you can contact me through:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Email: {RESUME_DATA.contact.email}</li>
                <li>Upwork: <a href="https://www.upwork.com/freelancers/~01ae446fd0e1c79c86" className="text-blue-600 hover:underline">My Upwork Profile</a></li>
                {RESUME_DATA.contact.social.map((social) => (
                  <li key={social.name}>
                    {social.name}: <a href={social.url} className="text-blue-600 hover:underline">{social.url}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}