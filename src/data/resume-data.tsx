
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"; // Added DiscordIcon

export const RESUME_DATA = {
  name: "Angel Valladares",
  initials: "AV", // Assuming initials
  location: "Tegucigalpa, Honduras, CST", // Assuming timezone
  locationLink: "https://www.google.com/maps/place/Tegucigalpa", // Link to Tegucigalpa on Google Maps
  about:
    "100% Full-Stack Freelancer (Node/Python) · n8n Automation Specialist · Upwork Top Rated",
  summary: (
    <>
      I am a 100% full-stack freelance software developer with a strong focus on backend development. I specialize in building scalable and efficient server-side applications using Node.js (NestJS, Express) and Python (FastAPI, Flask). My experience spans designing robust APIs, managing data workflows, and integrating AI models into production systems.
      <br />
      <br />
      I have a solid background in implementing AI features such as large language model (LLM) integration, speech recognition, text-to-speech, and other intelligent services. While my core expertise is backend architecture and AI integration, I am also proficient in frontend development using React and Next.js, allowing me to deliver complete, end-to-end web applications.
      <br />
      <br />
      I am a <strong>Top Rated freelancer on Upwork with 100% Job Success Score</strong>. This achievement represents hundreds of hours of high-quality delivery and satisfied clients. My excellent Upwork profile with positive reviews demonstrates my commitment to delivering exceptional work. I focus on building scalable web applications and creating efficient, automated workflows that save businesses time and resources. Whether you need a complex React application or an intricate n8n automation, I deliver high-quality, maintainable code with clear communication and reliable deadlines.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/37201564?v=4", // Replace with your actual avatar URL
  personalWebsiteUrl: null, // You can put your GitHub link here or your personal portfolio URL
  contact: {
    email: "arivalladares2.0@gmail.com",
    tel: null, // If you prefer not to include your phone number
    social: [
      {
        name: "GitHub",
        url: "https://github.com/angeldev96", // Assuming this is your username
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/angel-valladares-422490159/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/angeldev96",
        icon: XIcon,
      }
    ],
  },
  education: [
    {
      school: "Universidad Nacional Autónoma de Honduras (UNAH)",
      degree: "Systems Engineering",
      start: "2016", // Replace with the actual year
      end: 2025, // or graduation year if you have already graduated
    },
  ],
  work: [
    {
      company: "Freelance (Upwork)",
      link: "https://www.upwork.com/freelancers/~0116803452ac7b4ff7",
      badges: [
        "Node.js",
        "NestJS",
        "Express",
        "Python",
        "FastAPI",
        "Flask",
        "n8n",
        "Next.js",
        "React",
        "PostgreSQL",
      ],
      title: "Full-Stack Developer · Top Rated · 100% Job Success",
      logo: null,
      start: "2024",
      end: null,
      description: (
        <>
          As a <strong>Top Rated freelancer with 100% Job Success Score</strong>, I deliver backend-first solutions and end-to-end applications for clients worldwide. My Upwork profile shows hundreds of hours of high-quality delivery with excellent reviews and consistent positive feedback from satisfied clients.
          <ul className="list-inside list-disc">
            <li> <strong>100% Job Success Score:</strong> Proven history of happy clients and exceptional project delivery.</li>
            <li> <strong>Top Rated Badge:</strong> Recognition for consistently delivering high-quality work with excellent client satisfaction.</li>
            <li> Designed and built production-grade REST/GraphQL APIs and services in Node.js and Python.</li>
            <li> Implemented AI-powered features: LLM integrations, speech-to-text, and text-to-speech.</li>
            <li> Created automation workflows and internal tools using n8n, integrating third-party services.</li>
            <li> Delivered full-stack web apps with Next.js/React, focusing on performance and maintainability.</li>
            <li> <strong>Clear communication and reliable deadlines</strong> are my priority for every project.</li>
          </ul>
        </>
      ),
    },
    // You can add more work experiences here
  ],
  skills: [
    "Node.js",
    "NestJS",
    "Express",
    "Python",
    "FastAPI",
    "Flask",
    "n8n",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "GraphQL",
    "REST APIs",
    "Docker",
    "OpenAI API",
    "LLMs",
    "Tailwind CSS",
    "Oracle",
    "SQL Server",
    "HTML/CSS"
    // You can add more skills here
  ],
  projects: [
    {
      title: "n8n Automation Workflows",
      techStack: ["n8n", "Node.js"],
      description: "Production automation workflows and integrations (client-specific details omitted).",
      logo: null,
      link: {
        label: "n8n.io",
        href: "https://n8n.io",
      },
    },

    {
      title: "Mobile App of a Modbus Scanner",
      techStack: ["React Native, Expo"],
      description: "Mobile App of a Modbus Scanner, WIP",
      logo: null, // If you have a logo
      link: {
        label: "Link to project",
        href: "PROJECT_URL",
      },
    },

    {
      title: "E-Commerce Website",
      techStack: ["React , Node, PostgreSQL, Stripe"],
      description: " E-Commerce Website with Stripe Payment Integration.",
      logo: null, // If you have a logo
      link: {
        label: "Link to project",
        href: "https://github.com/angeldev96/partyandgift",
      },
    },
    // You can add more projects here
  ],
} as const;