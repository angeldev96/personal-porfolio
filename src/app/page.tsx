import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angel Valladares | Full-Stack Software Engineer & Web Developer",
  description:
    "Full-stack software engineer and web developer specialized in Node.js, Python, Next.js, and automation with n8n. Upwork Top Rated with 100% Job Success.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Node.js",
    "Python",
    "Next.js",
    "React",
    "n8n",
    "Programador Web",
    "Desarrollador",
    "Ingeniero de Software",
  ],
  openGraph: {
    title: "Angel Valladares | Full-Stack Software Engineer & Web Developer",
    description:
      "Full-stack software engineer and web developer specialized in Node.js, Python, Next.js, and automation with n8n. Upwork Top Rated with 100% Job Success.",
    type: "profile",
    url: "https://angelvalladares.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Valladares | Full-Stack Software Engineer & Web Developer",
    description:
      "Full-stack software engineer and web developer specialized in Node.js, Python, Next.js, and automation with n8n. Upwork Top Rated with 100% Job Success.",
    site: "@angeldev96",
  },
};

export default function Page() {
  redirect("/en");
}
