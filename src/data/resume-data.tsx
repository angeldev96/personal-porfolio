import React from "react";
import { DEFAULT_LOCALE, Locale } from "@/i18n/config";

export type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: React.ReactNode;
  avatarUrl: string;
  personalWebsiteUrl: string | null;
  contact: {
    email: string;
    tel: string | null;
    social: {
      name: string;
      url: string;
      icon: "github" | "linkedin" | "x";
    }[];
  };
  education: {
    school: string;
    degree: string;
    start: string;
    end: number | string;
  }[];
  work: {
    company: string;
    link: string;
    badges: readonly string[];
    title: string;
    logo: string | null;
    start: string;
    end: string | null;
    description: React.ReactNode;
  }[];
  skills: readonly string[];
  projects: {
    title: string;
    techStack: readonly string[];
    description: string;
    logo: string | null;
    link?: {
      label: string;
      href: string;
    };
  }[];
};

const RESUME_DATA: Record<Locale, ResumeData> = {
  en: {
    name: "Angel Valladares",
    initials: "AV",
    location: "Tegucigalpa, Honduras (CST)",
    locationLink: "https://www.google.com/maps/place/Tegucigalpa",
    about:
      "Full-Stack Software Engineer & Web Developer (Node.js/Python) · n8n Automation Specialist · Upwork Top Rated",
    summary: (
      <>
        I am a full-stack freelance software engineer with a strong focus on backend web development. I specialize in building scalable and efficient server-side applications using Node.js (NestJS, Express) and Python (FastAPI, Flask). My experience spans designing robust APIs, managing data workflows, and integrating AI models into production systems for startups and established teams.
        <br />
        <br />
        I have a solid background in implementing AI features such as large language model (LLM) integration, speech recognition, text-to-speech, and other intelligent services. While my core expertise is backend architecture and AI integration, I am also proficient in frontend development using React and Next.js, allowing me to deliver complete, end-to-end web applications as a web developer and software engineer.
        <br />
        <br />
        I am a <strong>Top Rated freelancer on Upwork with 100% Job Success Score</strong>. This achievement represents hundreds of hours of high-quality delivery and satisfied clients. My profile highlights clear communication and on-time delivery for companies hiring a software engineer, backend developer, or web developer (programador web). Whether you need a complex React application or an intricate n8n automation, I deliver maintainable code with reliable deadlines.
      </>
    ),
    avatarUrl: "https://avatars.githubusercontent.com/u/37201564?v=4",
    personalWebsiteUrl: "https://angelvalladares.dev",
    contact: {
      email: "arivalladares2.0@gmail.com",
      tel: null,
      social: [
        {
          name: "GitHub",
          url: "https://github.com/angeldev96",
          icon: "github",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/angel-valladares-422490159/",
          icon: "linkedin",
        },
        {
          name: "X",
          url: "https://twitter.com/angeldev96",
          icon: "x",
        },
      ],
    },
    education: [
      {
        school: "Universidad Nacional Autónoma de Honduras (UNAH)",
        degree: "Systems Engineering",
        start: "2016",
        end: 2025,
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
        title: "Full-Stack Software Engineer · Top Rated · 100% Job Success",
        logo: null,
        start: "2024",
        end: null,
        description: (
          <>
            As a <strong>Top Rated freelancer with 100% Job Success Score</strong>, I deliver backend-first solutions and end-to-end applications for clients worldwide. My Upwork profile shows hundreds of hours of high-quality delivery with excellent reviews and consistent positive feedback from satisfied clients.
            <ul className="list-inside list-disc">
              <li>
                <strong>100% Job Success Score:</strong> Proven history of happy clients and exceptional project delivery.
              </li>
              <li>
                <strong>Top Rated Badge:</strong> Recognition for consistently delivering high-quality work with excellent client satisfaction.
              </li>
              <li>Designed and built production-grade REST/GraphQL APIs and services in Node.js and Python.</li>
              <li>Implemented AI-powered features: LLM integrations, speech-to-text, and text-to-speech.</li>
              <li>Created automation workflows and internal tools using n8n, integrating third-party services.</li>
              <li>Delivered full-stack web apps with Next.js/React, focusing on performance and maintainability.</li>
              <li>
                <strong>Clear communication and reliable deadlines</strong> are my priority for every project.
              </li>
            </ul>
          </>
        ),
      },
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
      "HTML/CSS",
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
        techStack: ["React Native", "Expo"],
        description: "Mobile App of a Modbus Scanner, WIP",
        logo: null,
        link: {
          label: "Link to project",
          href: "PROJECT_URL",
        },
      },
      {
        title: "E-Commerce Website",
        techStack: ["React", "Node", "PostgreSQL", "Stripe"],
        description: "E-Commerce Website with Stripe Payment Integration.",
        logo: null,
        link: {
          label: "Link to project",
          href: "https://github.com/angeldev96/partyandgift",
        },
      },
    ],
  },
  es: {
    name: "Angel Valladares",
    initials: "AV",
    location: "Tegucigalpa, Honduras (CST)",
    locationLink: "https://www.google.com/maps/place/Tegucigalpa",
    about:
      "Ingeniero de software y desarrollador web Full-Stack (Node/Python) · Especialista en automatización con n8n · Top Rated en Upwork",
    summary: (
      <>
        Soy un desarrollador web full-stack e ingeniero de software freelance con fuerte enfoque en backend. Construyo aplicaciones de servidor escalables con Node.js (NestJS, Express) y Python (FastAPI, Flask), diseñando APIs robustas, manejando flujos de datos e integrando modelos de IA en producción.
        <br />
        <br />
        Tengo experiencia implementando características de IA como integración de LLMs, reconocimiento de voz y texto a voz. Aunque mi especialidad es la arquitectura backend y la integración de IA, también domino frontend con React y Next.js para entregar aplicaciones web completas, de extremo a extremo, como desarrollador y programador web.
        <br />
        <br />
        Soy <strong>freelancer Top Rated en Upwork con 100% Job Success Score</strong>. Esto representa cientos de horas de entregas de calidad y clientes satisfechos. Mi perfil con reseñas positivas respalda mi compromiso con la excelencia. Me enfoco en construir apps web escalables y flujos automatizados que ahorran tiempo y recursos. Ya sea una app compleja en React o una automatización en n8n, entrego código mantenible y comunicación clara para empresas que buscan un desarrollador o ingeniero de software confiable.
      </>
    ),
    avatarUrl: "https://avatars.githubusercontent.com/u/37201564?v=4",
    personalWebsiteUrl: "https://angelvalladares.dev",
    contact: {
      email: "arivalladares2.0@gmail.com",
      tel: null,
      social: [
        {
          name: "GitHub",
          url: "https://github.com/angeldev96",
          icon: "github",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/angel-valladares-422490159/",
          icon: "linkedin",
        },
        {
          name: "X",
          url: "https://twitter.com/angeldev96",
          icon: "x",
        },
      ],
    },
    education: [
      {
        school: "Universidad Nacional Autónoma de Honduras (UNAH)",
        degree: "Ingeniería en Sistemas",
        start: "2016",
        end: 2025,
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
        title: "Ingeniero de Software Full-Stack · Top Rated · 100% Job Success",
        logo: null,
        start: "2024",
        end: null,
        description: (
          <>
            Como <strong>freelancer Top Rated con 100% Job Success Score</strong>, entrego soluciones backend-first y apps end-to-end para clientes globales. Mi perfil en Upwork muestra cientos de horas de entrega con excelentes reseñas y retroalimentación consistente.
            <ul className="list-inside list-disc">
              <li>
                <strong>100% Job Success Score:</strong> Historial probado de clientes satisfechos y proyectos bien entregados.
              </li>
              <li>
                <strong>Insignia Top Rated:</strong> Reconocimiento por entregar trabajo de calidad con alta satisfacción.
              </li>
              <li>Diseñé y construí APIs REST/GraphQL de producción en Node.js y Python.</li>
              <li>Implementé funciones con IA: integraciones LLM, speech-to-text y text-to-speech.</li>
              <li>Creé flujos de automatización e internal tools con n8n, integrando servicios externos.</li>
              <li>Entregué apps full-stack con Next.js/React enfocadas en rendimiento y mantenibilidad.</li>
              <li>
                <strong>Comunicación clara y deadlines fiables</strong> son prioridad en cada proyecto.
              </li>
            </ul>
          </>
        ),
      },
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
      "HTML/CSS",
    ],
    projects: [
      {
        title: "Automatizaciones con n8n",
        techStack: ["n8n", "Node.js"],
        description: "Flujos de automatización e integraciones en producción (detalles de clientes omitidos).",
        logo: null,
        link: {
          label: "n8n.io",
          href: "https://n8n.io",
        },
      },
      {
        title: "App móvil para escáner Modbus",
        techStack: ["React Native", "Expo"],
        description: "Aplicación móvil de escáner Modbus (en progreso).",
        logo: null,
        link: {
          label: "Link al proyecto",
          href: "PROJECT_URL",
        },
      },
      {
        title: "E-Commerce",
        techStack: ["React", "Node", "PostgreSQL", "Stripe"],
        description: "E-Commerce con integración de pagos Stripe.",
        logo: null,
        link: {
          label: "Repositorio",
          href: "https://github.com/angeldev96/partyandgift",
        },
      },
    ],
  },
};

export function getResumeData(locale: Locale = DEFAULT_LOCALE): ResumeData {
  return RESUME_DATA[locale] ?? RESUME_DATA[DEFAULT_LOCALE];
}