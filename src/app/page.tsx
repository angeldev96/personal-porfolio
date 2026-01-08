import { redirect } from "next/navigation";

export const metadata = {
  title: "Angel Valladares | Full-Stack Software Engineer & Web Developer",
  description:
    "Full-stack software engineer and web developer specialized in Node.js, Python, Next.js, and automation with n8n. Upwork Top Rated with 100% Job Success.",
};

export default function Page() {
  redirect("/en");
}
