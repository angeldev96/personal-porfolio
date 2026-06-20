import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Angel Valladares — Full-Stack & AI Developer",
    short_name: "Angel Valladares",
    description:
      "Portfolio of Angel Valladares, freelance full-stack & AI software engineer. Available for web apps, APIs and AI/LLM integrations.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
