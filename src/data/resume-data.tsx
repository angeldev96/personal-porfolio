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
    slug: string;
    title: string;
    techStack: readonly string[];
    description: string;
    logo: string | null;
    link?: {
      label: string;
      href: string;
    };
    longDescription?: string;
    images?: string[];
    videoUrl?: string;
    features?: string[];
    challenges?: string;
  }[];
  certificates: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
    credentialId?: string;
    description?: string;
    badgeUrl?: string;
  }[];
  setup: {
    hardware: {
      name: string;
      description: string;
    }[];
    software: {
      name: string;
      description: string;
    }[];
    platforms: {
      name: string;
      description: string;
    }[];
  };
};

const RESUME_DATA: Record<Locale, ResumeData> = {
  en: {
    name: "Angel Valladares",
    initials: "AV",
    location: "Tegucigalpa, Honduras (CST)",
    locationLink: "https://www.google.com/maps/place/Tegucigalpa",
    about:
      "Top Rated Full-Stack Developer · 100% Job Success on Upwork · AI & LLM Integration Specialist",
    summary: (
      <>
        I am a{" "}
        <strong>
          Top Rated freelancer on Upwork with a 100% Job Success Score
        </strong>
        , which places me in the <strong>top 10% of talent</strong> on the
        entire platform. My earnings, consistent delivery, and excellent client
        reviews have earned me this distinction. I invite you to visit my{" "}
        <a
          href="https://www.upwork.com/freelancers/~0116803452ac7b4ff7"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground/70"
        >
          Upwork profile
        </a>{" "}
        to see my track record firsthand.
        <br />
        <br />
        I&apos;m open to working through Upwork or through{" "}
        <strong>independent/direct contracts</strong>—whatever works best for
        you. While I currently work as a freelancer, I&apos;m also very open to{" "}
        <strong>full-time positions</strong>. If you&apos;re a recruiter with a
        full-time role that matches my skill set, don&apos;t hesitate to reach
        out—I&apos;d love to hear from you.
        <br />
        <br />
        On the technical side, I specialize in MERN/PERN stacks, Next.js, and
        Supabase for building modern, scalable web applications. I also have
        deep expertise in <strong>AI and LLM integrations</strong>, including
        chatbots with OpenAI/Claude APIs, RAG systems, AI-powered content
        generation, and speech-to-text/text-to-speech capabilities. I deliver
        complete end-to-end solutions with maintainable code and reliable
        deadlines.
        <br />
        <br />
        Communication is never a barrier: I hold a{" "}
        <strong>B2 English proficiency level</strong>. I am fully capable of
        maintaining professional conversations, participating in technical
        interviews, and collaborating in team meetings without difficulty. My
        written communication is excellent, ensuring clear documentation and
        smooth coordination with international clients.
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
          "MERN",
          "PERN",
          "Next.js",
          "React",
          "Node.js",
          "NestJS",
          "Express",
          "TypeScript",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "MongoDB",
          "Supabase",
          "OpenAI API",
          "LLM Integration",
        ],
        title: "Full-Stack Software Engineer · Top Rated · 100% Job Success",
        logo: null,
        start: "April 2025",
        end: null,
        description: (
          <>
            As a{" "}
            <strong>Top Rated freelancer with 100% Job Success Score</strong>, I
            architect and deliver production-grade applications for global
            clients, specializing in full-stack ecosystems and AI-driven
            automation.
            <ul className="list-inside list-disc">
              <li>
                <strong>AI & LLM Architecture:</strong> Engineered custom RAG
                systems, complex chatbots, and autonomous agents using
                OpenAI/Claude APIs, significantly accelerating business
                workflows.
              </li>
              <li>
                <strong>End-to-End Development:</strong> Design and deployment
                of scalable web apps using MERN/PERN stacks, Next.js, and
                Supabase with a focus on performance and maintainability.
              </li>
              <li>
                <strong>Cloud & Infrastructure:</strong> Proficient in
                Dockerized environments, managing high-performance VPS
                infrastructure for reliable hosting of client and internal
                projects.
              </li>
              <li>
                <strong>Project Leadership:</strong> Directly managed client
                relationships, technical requirements, and production deadlines
                with a proven 100% success rate.
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "Copenergy SA",
        link: "https://www.linkedin.com/company/copenergy-s-a-/",
        badges: [
          "Next.js",
          "Node.js",
          "Python",
          "React",
          "NestJS",
          "SQL Server",
          "PostgreSQL",
        ],
        title: "Full-Stack Developer & Electrical Plant Operator",
        logo: null,
        start: "Jul 2024",
        end: "Dec 2025",
        description: (
          <>
            Passionate professional combining software development expertise
            with operational management in the energy sector. Create and
            maintain applications that optimize operations and monitoring in the
            electrical plant, while developing web applications for various
            departments.
            <ul className="list-inside list-disc">
              <li>
                Developed web applications to optimize electrical plant
                operations and monitoring systems.
              </li>
              <li>
                Managed electrical plant machinery and monitored systems for
                efficient and safe operation.
              </li>
              <li>
                Combined technical and operational knowledge to deliver tailored
                solutions for business needs.
              </li>
              <li>
                Committed to innovation and sustainability, improving existing
                processes through technology.
              </li>
              <li>
                Contributed to a collaborative work environment with continuous
                improvement mindset.
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "DAI",
        link: "https://www.dai.com",
        badges: ["C#", "Microsoft SQL Server", ".NET", "Web Development"],
        title: "IT Auxiliary",
        logo: null,
        start: "Jul 2023",
        end: "Jan 2024",
        description: (
          <>
            Provided IT support and development services in a hybrid work
            environment.
            <ul className="list-inside list-disc">
              <li>
                Assisted in web development projects using C# and Microsoft SQL
                Server.
              </li>
              <li>
                Provided technical support and maintenance for internal systems.
              </li>
              <li>
                Collaborated with cross-functional teams on IT initiatives.
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "DAI",
        link: "https://www.dai.com",
        badges: ["C#", "Web Development", ".NET", "SQL Server"],
        title: "IT Intern",
        logo: null,
        start: "Feb 2023",
        end: "Jun 2023",
        description: (
          <>
            Completed internship focusing on web development and IT support.
            <ul className="list-inside list-disc">
              <li>
                Gained hands-on experience in web development with C# and SQL
                Server.
              </li>
              <li>
                Assisted in developing and maintaining internal applications.
              </li>
              <li>Participated in code reviews and team meetings.</li>
            </ul>
          </>
        ),
      },
      {
        company: "TIGO (Milicom)",
        link: "https://www.tigo.com.hn",
        badges: ["Systems Analysis", "IT Support", "Telecommunications"],
        title: "Systems Analyst Intern",
        logo: null,
        start: "Mar 2019",
        end: "Jul 2019",
        description: (
          <>
            Completed internship at Tigo Honduras as a Systems Analyst.
            <ul className="list-inside list-disc">
              <li>
                Analyzed and documented system requirements and processes.
              </li>
              <li>
                Provided IT support and assistance in telecommunications
                projects.
              </li>
              <li>
                Gained exposure to large-scale telecommunications
                infrastructure.
              </li>
            </ul>
          </>
        ),
      },
    ],
    skills: [
      "AI-Driven Development",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "OpenAI API",
      "Claude API",
      "LLM Integration",
      "RAG Systems",
      "React",
      "TypeScript",
      "Node.js",
      "MERN Stack",
      "PERN Stack",
      "Express",
      "NestJS",
      "GraphQL",
      "REST APIs",
      "API Integration",
      "Docker",
      "Python",
      "FastAPI",
      "MongoDB",
      "Tailwind CSS",
      "HTML/CSS",
    ],
    projects: [
      {
        slug: "yiddish-jobs",
        title: "Yiddish Jobs",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        description:
          "Platform helping the Yiddish community in Boro Park, New York find employment. Assisted with web platform development, internal tools, and automation to support job seekers and local businesses.",
        logo: null,
        link: {
          label: "yiddishjobs.com",
          href: "https://www.yiddishjobs.com/",
        },
        longDescription:
          "A comprehensive job platform built specifically for the Yiddish-speaking community in Boro Park, New York. The platform connects job seekers with local employers, featuring advanced search filters, real-time job postings, and an intuitive interface designed to serve the community's unique needs.",
        images: [],
        features: [
          "Advanced job search with filters for location, job type, and industry",
          "Real-time job posting updates",
          "User-friendly interface optimized for the Yiddish community",
          "Internal tools for employers to manage listings",
          "Responsive design working on all devices",
        ],
        challenges:
          "Creating a platform that bridges cultural and language barriers while maintaining modern usability standards. Implemented intuitive UI patterns that work seamlessly with RTL text considerations and community-specific workflows.",
      },
      {
        slug: "pinkys-store",
        title: "Pinky's Store",
        techStack: ["Next.js", "React", "Node.js", "PostgreSQL"],
        description:
          "E-commerce platform and inventory management system for a local cosmetics business. Automated sales processes and provided the owner with an internal tool for efficient inventory tracking and sales management.",
        logo: null,
        link: {
          label: "GitHub",
          href: "https://github.com/angeldev96/pinkys-store",
        },
        longDescription:
          "A complete e-commerce and inventory management solution designed for a local cosmetics business. The system includes both a customer-facing storefront and an admin dashboard for managing products, tracking inventory, processing orders, and analyzing sales data.",
        images: [],
        features: [
          "Product catalog with image galleries and detailed descriptions",
          "Shopping cart and secure checkout process",
          "Admin dashboard for inventory management",
          "Sales analytics and reporting",
          "Order tracking and status updates",
          "Automated low-stock notifications",
        ],
        challenges:
          "Building a solution that balances e-commerce functionality with inventory management needs. Created a dual-interface system that serves both customers and business owners through a single, unified platform.",
      },
    ],
    certificates: [
      {
        id: "claude-code-in-action",
        title: "Claude Code in Action",
        issuer: "Anthropic Education",
        date: "January 2026",
        credentialUrl: "https://verify.skilljar.com/c/drieo6sfe3kq",
        credentialId: "drieo6sfe3kq",
        description:
          "Comprehensive training on building applications with Claude AI, including API integration, prompt engineering, and production deployment patterns.",
      },
      {
        id: "frontend-g5-one",
        title: "Front-End Training G5 - ONE",
        issuer: "Alura Latam",
        date: "July 2023",
        credentialUrl:
          "https://app.aluracursos.com/degree/certificate/dde9c8e7-ea6c-46ce-b056-ce2bbce39d55",
        credentialId: "dde9c8e7-ea6c-46ce-b056-ce2bbce39d55",
        description:
          "Front-end development certification covering JavaScript, React.js, and modern web development practices.",
      },
      {
        id: "efset-english",
        title: "EFSET English Certificate 56/100 (B2 Upper Intermediate)",
        issuer: "EF Standard English Test (EF SET)",
        date: "October 2022",
        credentialUrl: "https://cert.efset.org/spHzVR",
        description:
          "English language certification at B2 Upper Intermediate level, demonstrating proficiency in English as a foreign language.",
      },
      {
        id: "agent-skills-anthropic",
        title: "Introduction to Agent Skills",
        issuer: "Anthropic Education",
        date: "March 2026",
        credentialUrl: "http://verify.skilljar.com/c/uv55eiorhc2g",
        credentialId: "uv55eiorhc2g",
        description:
          "Developed expertise in building, optimizing, and scaling custom Claude Code skills. The course covered advanced configuration techniques, including the use of SKILL.md frontmatter, progressive disclosure for context-window optimization, and restricted tool access. Gained practical experience in architecting isolated subagents, implementing enterprise-wide deployment strategies, and troubleshooting complex agentic workflows to ensure consistent, standard-aligned performance.",
      },
    ],
    setup: {
      hardware: [
        {
          name: 'MacBook Pro 16" (M1 Pro, 32GB RAM)',
          description:
            "High-performance workstation, incredibly fast and reliable for all development tasks.",
        },
        {
          name: "Logitech MX Master 3S",
          description:
            "Ergonomic and highly recommended mouse for productivity.",
        },
        {
          name: 'Samsung 24" Monitor',
          description: "Secondary display for extended workspace.",
        },
        {
          name: "JBL Headphones",
          description: "High-quality audio for client calls and team meetings.",
        },
        {
          name: "Fiber Optic Internet (200 Mbps)",
          description:
            "Stable and high-speed connection for seamless remote work and client communication.",
        },
        {
          name: "Ecoflow River 2 Max (512Wh)",
          description:
            "Reliable power backup that can keep both the laptop and router running for an entire day in case of power outages.",
        },
        {
          name: "VPS (16GB RAM, 4 vCPU)",
          description:
            "High-performance server for hosting multiple Dockerized applications and services.",
        },
      ],
      software: [
        {
          name: "Dokploy",
          description:
            "Self-hosted PaaS platform managed on my VPS. Hosts multiple instances of Supabase, n8n, backends, frontends, and client demos.",
        },
        {
          name: "OpenCode & Claude Code",
          description:
            "Advanced AI coding agents used daily to accelerate development workflows.",
        },
        {
          name: "ChatGPT Plus (GPT 5.4)",
          description:
            "Latest AI model subscription for complex problem solving and AI-assisted coding through OpenCode.",
        },
        {
          name: "VS Code & Antigravity",
          description:
            "Primary editors for different development use cases, leveraging Antigravity's unique features.",
        },
        {
          name: "Warp",
          description:
            "Modern terminal emulator with AI-powered autocompletion and high speed to save development time.",
        },
        {
          name: "Stitch (Google)",
          description:
            "Used for rapid frontend prototyping with excellent results.",
        },
        {
          name: "Cursor",
          description:
            "AI-native code editor with a monthly subscription for seamless AI integration.",
        },
      ],
      platforms: [
        {
          name: "Upwork",
          description:
            "Primary freelancing platform. Top Rated status with 100% success rate, though I'm fully open to direct contracts off-platform.",
        },
        {
          name: "LinkedIn",
          description:
            "Professional networking and high-quality client acquisition channel.",
        },
        {
          name: "X (Twitter)",
          description:
            "My main source for staying updated with AI trends, following industry leaders, and refining my development process with the latest tools.",
        },
        {
          name: "Reddit",
          description:
            "Used to follow 'state of the art' AI subreddits for deep technical insights and community tips.",
        },
      ],
    },
  },
  es: {
    name: "Angel Valladares",
    initials: "AV",
    location: "Tegucigalpa, Honduras (CST)",
    locationLink: "https://www.google.com/maps/place/Tegucigalpa",
    about:
      "Desarrollador Full-Stack Top Rated · 100% Job Success en Upwork · Especialista en Integraciones de IA y LLM",
    summary: (
      <>
        Soy{" "}
        <strong>
          freelancer Top Rated en Upwork con un 100% Job Success Score
        </strong>
        , lo que me ubica en el <strong>top 10% del talento</strong> de toda la
        plataforma. Mis ganancias, entregas consistentes y excelentes reseñas de
        clientes me han otorgado esta distinción. Te invito a visitar mi{" "}
        <a
          href="https://www.upwork.com/freelancers/~0116803452ac7b4ff7"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground/70"
        >
          perfil de Upwork
        </a>{" "}
        para ver mi historial de primera mano.
        <br />
        <br />
        Estoy abierto a trabajar a través de Upwork o mediante{" "}
        <strong>contratos independientes/directos</strong>—lo que funcione mejor
        para ti. Aunque actualmente trabajo como freelancer, también estoy muy
        interesado en <strong>posiciones full-time</strong>. Si eres reclutador
        y tienes una posición full-time que se adecúe a mis habilidades, no
        dudes en escribirme—me encantaría saber de ti.
        <br />
        <br />
        En lo técnico, me especializo en los stacks MERN/PERN, Next.js y
        Supabase para construir aplicaciones web modernas y escalables. También
        tengo amplia experiencia en <strong>integraciones de IA y LLMs</strong>,
        incluyendo chatbots con APIs de OpenAI/Claude, sistemas RAG, generación
        de contenido con IA, y reconocimiento/síntesis de voz. Entrego
        soluciones completas de extremo a extremo con código mantenible y
        deadlines confiables.
        <br />
        <br />
        El idioma no es una barrera: cuento con un nivel de{" "}
        <strong>inglés B2</strong>. Soy capaz de mantener conversaciones
        profesionales, participar en entrevistas técnicas y colaborar en
        reuniones de equipo sin dificultad. Mi comunicación escrita es
        excelente, asegurando documentación clara y una coordinación fluida con
        clientes internacionales.
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
          "MERN",
          "PERN",
          "Next.js",
          "React",
          "Node.js",
          "NestJS",
          "Express",
          "TypeScript",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "MongoDB",
          "Supabase",
          "OpenAI API",
          "LLM Integration",
        ],
        title:
          "Ingeniero de Software Full-Stack · Top Rated · 100% Job Success",
        logo: null,
        start: "2024",
        end: null,
        description: (
          <>
            Como{" "}
            <strong>freelancer Top Rated con 100% Job Success Score</strong>,
            diseño y construyo aplicaciones de nivel de producción para clientes
            globales, especializándome en automatización impulsada por IA.
            <ul className="list-inside list-disc">
              <li>
                <strong>Arquitectura de IA y LLM:</strong> Implementación de
                sistemas RAG personalizados y agentes autónomos utilizando APIs
                de OpenAI/Claude para optimizar procesos de negocio.
              </li>
              <li>
                <strong>Desarrollo End-to-End:</strong> Creación de aplicaciones
                escalables con stacks MERN/PERN, Next.js y Supabase, priorizando
                el rendimiento y la mantenibilidad.
              </li>
              <li>
                <strong>Infraestructura y Cloud:</strong> Gestión de entornos
                Dockerizados y administración de infraestructura VPS de alto
                rendimiento para el hosting de proyectos de clientes.
              </li>
              <li>
                <strong>Liderazgo Técnico:</strong> Gestión directa de
                requerimientos técnicos y cumplimiento de deadlines críticos con
                un historial de satisfacción del cliente del 100%.
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "Copenergy SA",
        link: "https://www.linkedin.com/company/copenergy-s-a-/",
        badges: [
          "Next.js",
          "Node.js",
          "Python",
          "React",
          "NestJS",
          "SQL Server",
          "PostgreSQL",
        ],
        title: "Desarrollador Full-Stack y Operador de Planta Eléctrica",
        logo: null,
        start: "Jul 2024",
        end: "Dic 2025",
        description: (
          <>
            Profesional apasionado que combina experiencia en desarrollo de
            software con gestión operativa en el sector energético. Desarrollo y
            mantengo aplicaciones que optimizan operaciones y monitoreo en la
            planta eléctrica, además de crear aplicaciones web para varios
            departamentos.
            <ul className="list-inside list-disc">
              <li>
                Desarrollé aplicaciones web para optimizar operaciones y
                sistemas de monitoreo de la planta eléctrica.
              </li>
              <li>
                Administré maquinaria de planta eléctrica y monitoreé sistemas
                para operación eficiente y segura.
              </li>
              <li>
                Combiné conocimiento técnico y operacional para entregar
                soluciones adaptadas a necesidades del negocio.
              </li>
              <li>
                Comprometido con la innovación y sostenibilidad, mejorando
                procesos existentes a través de tecnología.
              </li>
              <li>
                Contribuí a un ambiente colaborativo con mentalidad de mejora
                continua.
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "DAI",
        link: "https://www.dai.com",
        badges: ["C#", "Microsoft SQL Server", ".NET", "Desarrollo Web"],
        title: "Auxiliar de IT",
        logo: null,
        start: "Jul 2023",
        end: "Ene 2024",
        description: (
          <>
            Brindé soporte de TI y servicios de desarrollo en entorno de trabajo
            híbrido.
            <ul className="list-inside list-disc">
              <li>
                Asistí en proyectos de desarrollo web usando C# y Microsoft SQL
                Server.
              </li>
              <li>
                Proporcioné soporte técnico y mantenimiento de sistemas
                internos.
              </li>
              <li>
                Colaboré con equipos multidisciplinarios en iniciativas de TI.
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "DAI",
        link: "https://www.dai.com",
        badges: ["C#", "Desarrollo Web", ".NET", "SQL Server"],
        title: "Pasante de IT",
        logo: null,
        start: "Feb 2023",
        end: "Jun 2023",
        description: (
          <>
            Completé pasantía enfocada en desarrollo web y soporte de TI.
            <ul className="list-inside list-disc">
              <li>
                Adquirí experiencia práctica en desarrollo web con C# y SQL
                Server.
              </li>
              <li>
                Asistí en el desarrollo y mantenimiento de aplicaciones
                internas.
              </li>
              <li>Participé en revisiones de código y reuniones de equipo.</li>
            </ul>
          </>
        ),
      },
      {
        company: "TIGO (Milicom)",
        link: "https://www.tigo.com.hn",
        badges: ["Análisis de Sistemas", "Soporte TI", "Telecomunicaciones"],
        title: "Pasante Analista de Sistemas",
        logo: null,
        start: "Mar 2019",
        end: "Jul 2019",
        description: (
          <>
            Realicé pasantía en Tigo Honduras como Analista de Sistemas.
            <ul className="list-inside list-disc">
              <li>
                Analicé y documenté requerimientos y procesos de sistemas.
              </li>
              <li>
                Proporcioné soporte de TI y asistencia en proyectos de
                telecomunicaciones.
              </li>
              <li>
                Obtuve exposición a infraestructura de telecomunicaciones a gran
                escala.
              </li>
            </ul>
          </>
        ),
      },
    ],
    skills: [
      "AI-Driven Development",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "OpenAI API",
      "Claude API",
      "LLM Integration",
      "RAG Systems",
      "React",
      "TypeScript",
      "Node.js",
      "MERN Stack",
      "PERN Stack",
      "Express",
      "NestJS",
      "GraphQL",
      "REST APIs",
      "API Integration",
      "Docker",
      "Python",
      "FastAPI",
      "MongoDB",
      "Tailwind CSS",
      "HTML/CSS",
    ],
    projects: [
      {
        slug: "yiddish-jobs",
        title: "Yiddish Jobs",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        description:
          "Plataforma que ayuda a la comunidad Yiddish en Boro Park, Nueva York a encontrar empleo. Asistí con el desarrollo de la plataforma web, herramientas internas y automatización para apoyar a buscadores de empleo y negocios locales.",
        logo: null,
        link: {
          label: "yiddishjobs.com",
          href: "https://www.yiddishjobs.com/",
        },
        longDescription:
          "Una plataforma de empleo completa construida específicamente para la comunidad de habla Yiddish en Boro Park, Nueva York. La plataforma conecta a buscadores de empleo con empleadores locales, con filtros de búsqueda avanzados, publicaciones de empleo en tiempo real y una interfaz intuitiva diseñada para servir las necesidades únicas de la comunidad.",
        images: [],
        features: [
          "Búsqueda avanzada de empleo con filtros por ubicación, tipo y industria",
          "Actualizaciones en tiempo real de publicaciones de empleo",
          "Interfaz fácil de usar optimizada para la comunidad Yiddish",
          "Herramientas internas para empleadores gestionar listados",
          "Diseño responsive que funciona en todos los dispositivos",
        ],
        challenges:
          "Crear una plataforma que supere las barreras culturales y de idioma manteniendo estándares modernos de usabilidad. Implementé patrones de UI intuitivos que funcionan perfectamente con consideraciones de texto RTL y flujos de trabajo específicos de la comunidad.",
      },
      {
        slug: "pinkys-store",
        title: "Pinky's Store",
        techStack: ["Next.js", "React", "Node.js", "PostgreSQL"],
        description:
          "Plataforma de e-commerce y sistema de gestión de inventario para un negocio local de cosméticos. Automaticé procesos de ventas y proporcioné a la dueña una herramienta interna para gestión eficiente de inventario y ventas.",
        logo: null,
        link: {
          label: "GitHub",
          href: "https://github.com/angeldev96/pinkys-store",
        },
        longDescription:
          "Una solución completa de e-commerce y gestión de inventario diseñada para un negocio local de cosméticos. El sistema incluye tanto una tienda para clientes como un panel de administración para gestionar productos, rastrear inventario, procesar pedidos y analizar datos de ventas.",
        images: [],
        features: [
          "Catálogo de productos con galerías de imágenes y descripciones detalladas",
          "Carrito de compras y proceso de pago seguro",
          "Panel de administración para gestión de inventario",
          "Análisis y reportes de ventas",
          "Seguimiento de pedidos y actualizaciones de estado",
          "Notificaciones automáticas de stock bajo",
        ],
        challenges:
          "Construir una solución que equilibra funcionalidad de e-commerce con necesidades de gestión de inventario. Creé un sistema de doble interfaz que sirve tanto a clientes como a dueños de negocios a través de una plataforma unificada.",
      },
    ],
    certificates: [
      {
        id: "claude-code-in-action",
        title: "Claude Code in Action",
        issuer: "Anthropic Education",
        date: "enero 2026",
        credentialUrl: "https://verify.skilljar.com/c/drieo6sfe3kq",
        credentialId: "drieo6sfe3kq",
        description:
          "Capacitación completa sobre construcción de aplicaciones con Claude AI, incluyendo integración de API, prompt engineering y patrones de despliegue en producción.",
      },
      {
        id: "frontend-g5-one",
        title: "Formación Front End G5 - ONE",
        issuer: "Alura Latam",
        date: "julio 2023",
        credentialUrl:
          "https://app.aluracursos.com/degree/certificate/dde9c8e7-ea6c-46ce-b056-ce2bbce39d55",
        credentialId: "dde9c8e7-ea6c-46ce-b056-ce2bbce39d55",
        description:
          "Certificación de desarrollo front-end que cubre JavaScript, React.js y prácticas modernas de desarrollo web.",
      },
      {
        id: "efset-english",
        title: "EFSET English Certificate 56/100 (B2 Upper Intermediate)",
        issuer: "EF Standard English Test (EF SET)",
        date: "octubre 2022",
        credentialUrl: "https://cert.efset.org/spHzVR",
        description:
          "Certificación de idioma inglés nivel B2 Upper Intermediate, demostrando dominio de inglés como idioma extranjero.",
      },
      {
        id: "agent-skills-anthropic",
        title: "Introducción a las habilidades de agentes",
        issuer: "Anthropic Education",
        date: "marzo 2026",
        credentialUrl: "http://verify.skilljar.com/c/uv55eiorhc2g",
        credentialId: "uv55eiorhc2g",
        description:
          "Desarrollé experiencia en la creación, optimización y escalado de skills personalizados para Claude Code. El curso cubrió técnicas avanzadas de configuración, incluido el uso de frontmatter en SKILL.md, la divulgación progresiva para optimizar la ventana de contexto y el acceso restringido a herramientas. Adquirí experiencia práctica en la arquitectura de subagentes aislados, la implementación de estrategias de despliegue a nivel empresarial y la resolución de flujos de trabajo agenticos complejos para garantizar un rendimiento consistente y alineado con estándares.",
      },
    ],
    setup: {
      hardware: [
        {
          name: 'MacBook Pro 16" (M1 Pro, 32GB RAM)',
          description:
            "Estación de trabajo de alto rendimiento, increíblemente rápida y confiable.",
        },
        {
          name: "Logitech MX Master 3S",
          description:
            "Mouse ergonómico y altamente recomendado para la productividad.",
        },
        {
          name: 'Monitor Samsung 24"',
          description:
            "Pantalla secundaria para extender el espacio de trabajo.",
        },
        {
          name: "Audífonos JBL",
          description:
            "Audio de alta calidad para llamadas con clientes y reuniones de equipo.",
        },
        {
          name: "Internet de Fibra Óptica (200 Mbps)",
          description:
            "Conexión estable y de alta velocidad para un trabajo remoto fluido y comunicación con clientes.",
        },
        {
          name: "Ecoflow River 2 Max (512Wh)",
          description:
            "Respaldo de energía confiable capaz de mantener la laptop y el router encendidos durante un día completo ante fallas eléctricas.",
        },
        {
          name: "VPS (16GB RAM, 4 vCPU)",
          description:
            "Servidor de alto rendimiento para hosting de múltiples aplicaciones y servicios Dockerizados.",
        },
      ],
      software: [
        {
          name: "Dokploy",
          description:
            "Plataforma PaaS auto-hospedada en mi VPS. Aloja múltiples instancias de Supabase, n8n, backends, frontends y demos de clientes.",
        },
        {
          name: "OpenCode y Cloud Code",
          description:
            "Agentes de código con IA avanzados utilizados diariamente para acelerar los flujos de trabajo de desarrollo.",
        },
        {
          name: "ChatGPT Plus (GPT 5.4)",
          description:
            "Suscripción al último modelo de IA para resolución de problemas complejos y codificación asistida a través de OpenCode.",
        },
        {
          name: "VS Code y Antigravity",
          description:
            "Editores principales para diferentes casos de uso de desarrollo, aprovechando las características únicas de Antigravity.",
        },
        {
          name: "Warp",
          description:
            "Emulador de terminal moderno con autocompletado impulsado por IA y alta velocidad para ahorrar tiempo en desarrollo.",
        },
        {
          name: "Stitch (Google)",
          description:
            "Utilizado para el prototipado rápido de Frontend con excelentes resultados.",
        },
        {
          name: "Cursor",
          description:
            "Editor de código nativo de IA con suscripción mensual para una integración fluida de IA.",
        },
      ],
      platforms: [
        {
          name: "Upwork",
          description:
            "Plataforma principal de freelancing. Estatus Top Rated con 100% de éxito, aunque abierto a contratos directos fuera de la plataforma.",
        },
        {
          name: "LinkedIn",
          description:
            "Red profesional y canal de adquisición de clientes de alta calidad.",
        },
        {
          name: "X (Twitter)",
          description:
            "Mi fuente principal para estar al tanto de las tendencias de IA, siguiendo a líderes industriales y refinando mi proceso con las últimas herramientas.",
        },
        {
          name: "Reddit",
          description:
            "Utilizado para seguir subreddits del 'estado del arte' en IA para obtener conocimientos técnicos profundos y consejos de la comunidad.",
        },
      ],
    },
  },
};

export function getResumeData(locale: Locale = DEFAULT_LOCALE): ResumeData {
  return RESUME_DATA[locale] ?? RESUME_DATA[DEFAULT_LOCALE];
}
