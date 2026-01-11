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
        start: "April 2025",
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
            Passionate professional combining software development expertise with operational management in the energy sector. Create and maintain applications that optimize operations and monitoring in the electrical plant, while developing web applications for various departments.
            <ul className="list-inside list-disc">
              <li>Developed web applications to optimize electrical plant operations and monitoring systems.</li>
              <li>Managed electrical plant machinery and monitored systems for efficient and safe operation.</li>
              <li>Combined technical and operational knowledge to deliver tailored solutions for business needs.</li>
              <li>Committed to innovation and sustainability, improving existing processes through technology.</li>
              <li>Contributed to a collaborative work environment with continuous improvement mindset.</li>
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
            Provided IT support and development services in a hybrid work environment.
            <ul className="list-inside list-disc">
              <li>Assisted in web development projects using C# and Microsoft SQL Server.</li>
              <li>Provided technical support and maintenance for internal systems.</li>
              <li>Collaborated with cross-functional teams on IT initiatives.</li>
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
              <li>Gained hands-on experience in web development with C# and SQL Server.</li>
              <li>Assisted in developing and maintaining internal applications.</li>
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
              <li>Analyzed and documented system requirements and processes.</li>
              <li>Provided IT support and assistance in telecommunications projects.</li>
              <li>Gained exposure to large-scale telecommunications infrastructure.</li>
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
        slug: "yiddish-jobs",
        title: "Yiddish Jobs",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        description: "Platform helping the Yiddish community in Boro Park, New York find employment. Assisted with web platform development, internal tools, and automation to support job seekers and local businesses.",
        logo: null,
        link: {
          label: "yiddishjobs.com",
          href: "https://www.yiddishjobs.com/",
        },
        longDescription: "A comprehensive job platform built specifically for the Yiddish-speaking community in Boro Park, New York. The platform connects job seekers with local employers, featuring advanced search filters, real-time job postings, and an intuitive interface designed to serve the community's unique needs.",
        images: [],
        features: [
          "Advanced job search with filters for location, job type, and industry",
          "Real-time job posting updates",
          "User-friendly interface optimized for the Yiddish community",
          "Internal tools for employers to manage listings",
          "Responsive design working on all devices",
        ],
        challenges: "Creating a platform that bridges cultural and language barriers while maintaining modern usability standards. Implemented intuitive UI patterns that work seamlessly with RTL text considerations and community-specific workflows.",
      },
      {
        slug: "pinkys-store",
        title: "Pinky's Store",
        techStack: ["Next.js", "React", "Node.js", "PostgreSQL"],
        description: "E-commerce platform and inventory management system for a local cosmetics business. Automated sales processes and provided the owner with an internal tool for efficient inventory tracking and sales management.",
        logo: null,
        link: {
          label: "GitHub",
          href: "https://github.com/angeldev96/pinkys-store",
        },
        longDescription: "A complete e-commerce and inventory management solution designed for a local cosmetics business. The system includes both a customer-facing storefront and an admin dashboard for managing products, tracking inventory, processing orders, and analyzing sales data.",
        images: [],
        features: [
          "Product catalog with image galleries and detailed descriptions",
          "Shopping cart and secure checkout process",
          "Admin dashboard for inventory management",
          "Sales analytics and reporting",
          "Order tracking and status updates",
          "Automated low-stock notifications",
        ],
        challenges: "Building a solution that balances e-commerce functionality with inventory management needs. Created a dual-interface system that serves both customers and business owners through a single, unified platform.",
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
            Profesional apasionado que combina experiencia en desarrollo de software con gestión operativa en el sector energético. Desarrollo y mantengo aplicaciones que optimizan operaciones y monitoreo en la planta eléctrica, además de crear aplicaciones web para varios departamentos.
            <ul className="list-inside list-disc">
              <li>Desarrollé aplicaciones web para optimizar operaciones y sistemas de monitoreo de la planta eléctrica.</li>
              <li>Administré maquinaria de planta eléctrica y monitoreé sistemas para operación eficiente y segura.</li>
              <li>Combiné conocimiento técnico y operacional para entregar soluciones adaptadas a necesidades del negocio.</li>
              <li>Comprometido con la innovación y sostenibilidad, mejorando procesos existentes a través de tecnología.</li>
              <li>Contribuí a un ambiente colaborativo con mentalidad de mejora continua.</li>
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
            Brindé soporte de TI y servicios de desarrollo en entorno de trabajo híbrido.
            <ul className="list-inside list-disc">
              <li>Asistí en proyectos de desarrollo web usando C# y Microsoft SQL Server.</li>
              <li>Proporcioné soporte técnico y mantenimiento de sistemas internos.</li>
              <li>Colaboré con equipos multidisciplinarios en iniciativas de TI.</li>
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
              <li>Adquirí experiencia práctica en desarrollo web con C# y SQL Server.</li>
              <li>Asistí en el desarrollo y mantenimiento de aplicaciones internas.</li>
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
              <li>Analicé y documenté requerimientos y procesos de sistemas.</li>
              <li>Proporcioné soporte de TI y asistencia en proyectos de telecomunicaciones.</li>
              <li>Obtuve exposición a infraestructura de telecomunicaciones a gran escala.</li>
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
        slug: "yiddish-jobs",
        title: "Yiddish Jobs",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        description: "Plataforma que ayuda a la comunidad Yiddish en Boro Park, Nueva York a encontrar empleo. Asistí con el desarrollo de la plataforma web, herramientas internas y automatización para apoyar a buscadores de empleo y negocios locales.",
        logo: null,
        link: {
          label: "yiddishjobs.com",
          href: "https://www.yiddishjobs.com/",
        },
        longDescription: "Una plataforma de empleo completa construida específicamente para la comunidad de habla Yiddish en Boro Park, Nueva York. La plataforma conecta a buscadores de empleo con empleadores locales, con filtros de búsqueda avanzados, publicaciones de empleo en tiempo real y una interfaz intuitiva diseñada para servir las necesidades únicas de la comunidad.",
        images: [],
        features: [
          "Búsqueda avanzada de empleo con filtros por ubicación, tipo y industria",
          "Actualizaciones en tiempo real de publicaciones de empleo",
          "Interfaz fácil de usar optimizada para la comunidad Yiddish",
          "Herramientas internas para empleadores gestionar listados",
          "Diseño responsive que funciona en todos los dispositivos",
        ],
        challenges: "Crear una plataforma que supere las barreras culturales y de idioma manteniendo estándares modernos de usabilidad. Implementé patrones de UI intuitivos que funcionan perfectamente con consideraciones de texto RTL y flujos de trabajo específicos de la comunidad.",
      },
      {
        slug: "pinkys-store",
        title: "Pinky's Store",
        techStack: ["Next.js", "React", "Node.js", "PostgreSQL"],
        description: "Plataforma de e-commerce y sistema de gestión de inventario para un negocio local de cosméticos. Automaticé procesos de ventas y proporcioné a la dueña una herramienta interna para gestión eficiente de inventario y ventas.",
        logo: null,
        link: {
          label: "GitHub",
          href: "https://github.com/angeldev96/pinkys-store",
        },
        longDescription: "Una solución completa de e-commerce y gestión de inventario diseñada para un negocio local de cosméticos. El sistema incluye tanto una tienda para clientes como un panel de administración para gestionar productos, rastrear inventario, procesar pedidos y analizar datos de ventas.",
        images: [],
        features: [
          "Catálogo de productos con galerías de imágenes y descripciones detalladas",
          "Carrito de compras y proceso de pago seguro",
          "Panel de administración para gestión de inventario",
          "Análisis y reportes de ventas",
          "Seguimiento de pedidos y actualizaciones de estado",
          "Notificaciones automáticas de stock bajo",
        ],
        challenges: "Construir una solución que equilibra funcionalidad de e-commerce con necesidades de gestión de inventario. Creé un sistema de doble interfaz que sirve tanto a clientes como a dueños de negocios a través de una plataforma unificada.",
      },
    ],
  },
};

export function getResumeData(locale: Locale = DEFAULT_LOCALE): ResumeData {
  return RESUME_DATA[locale] ?? RESUME_DATA[DEFAULT_LOCALE];
}