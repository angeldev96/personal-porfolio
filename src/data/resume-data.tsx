
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"; // Added DiscordIcon

export const RESUME_DATA = {
  name: "Angel Valladares",
  initials: "AV", // Assuming initials
  location: "Tegucigalpa, Honduras, CST", // Assuming timezone
  locationLink: "https://www.google.com/maps/place/Tegucigalpa", // Link to Tegucigalpa on Google Maps
  about:
    "Passionate Systems Engineer, Web Developer seeking opportunities.",
  summary: (
    <>
      Web Developer, focused on using technologies like React, Python, MySQL, PostgreSQL, Bootstrap, Tailwind CSS, Oracle, SQL Server, and JavaScript.
      Currently working on Fullstack Development with technologies including Node, MySQL, React, and JS.
    </>
  ),
  avatarUrl: "https://pbs.twimg.com/profile_images/1344667219893039106/I1QRRtpi_400x400.jpg", // Replace with your actual avatar URL
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
      company: "Copenergy", // or "Freelance", or "Seeking Opportunities"
      link: "https://arrayanhn.com/beta/", // If applicable
      badges: ["React", "Node", "MySQL", "MUI", "JavaScript"], // Technologies you use
      title: "FullStack Developer", // Or your current position
      logo: null, // If you have a logo
      start: "2024", // Replace with the actual year
      end: null, // or the end date if you no longer work there
      description: (
        <>
          Description of your responsibilities and achievements in your current job.
          <ul className="list-inside list-disc">
            <li> Development and maintenance of web applications using Node and React.</li>
            <li> Design and optimization of databases in MySQL.</li>
          </ul>
        </>
      ),
    },
    // You can add more work experiences here
  ],
  skills: [
    "React",

    "Python",
    "MySQL",
    "PostgreSQL",
    "MUI",
    "Tailwind CSS",
    "Oracle",
    "SQL Server",
    "JavaScript",
    "Node",
    "MS SQL Server",
    "HTML/CSS"
    // You can add more skills here
  ],
  projects: [
    {
      title: "AI Chatbot Integration",
      techStack: ["Deep Chat", "React"],
      description: "AI Chatbot Integration about my info in my portfolio.",
      logo: null, // If you have a logo
      link: {
        label: "Link to project",
        href: "PROJECT_URL",
      },
    },

    {
      title: "Mobile App of a Modbus Scanner",
      techStack: ["React Native, Expo"],
      description: "Mobile App of a Modbus Scanner.",
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
        href: "PROJECT_URL",
      },
    },
    // You can add more projects here
  ],
} as const;