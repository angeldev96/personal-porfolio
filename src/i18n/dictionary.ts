import { DEFAULT_LOCALE, Locale } from "./config";

type SectionLabels = {
  about: string;
  work: string;
  education: string;
  skills: string;
  projects: string;
  technologiesUsed: string;
  present: string;
  sideProjects: string;
};

type CertificateLabels = {
  title: string;
  backToResume: string;
  viewCredential: string;
  issuedBy: string;
  credentialId: string;
  noCertificates: string;
};

export type Dictionary = {
  nav: {
    home: string;
    blog: string;
    certificates: string;
    setup: string;
  };
  meta: {
    resumeTitle: string;
    resumeDescription: string;
    upworkTitle: string;
    upworkDescription: string;
  };
  header: {
    personalWebsite: string;
    email: string;
    phone: string;
    locationLabel: string;
    copyEmail: string;
    copiedEmail: string;
    copyFailed: string;
    hireMe: string;
    availableForFreelance: string;
  };
  summary: {
    title: string;
    mySetup: string;
  };
  setup: {
    title: string;
    description: string;
    hardware: string;
    software: string;
    platforms: string;
    backToResume: string;
  };
  work: SectionLabels;
  projects: SectionLabels;
  education: SectionLabels;
  skills: SectionLabels;
  commandMenu: {
    hint: string;
    open: string;
    placeholder: string;
    empty: string;
    actions: string;
    print: string;
    links: string;
  };
  printDrawer: {
    title: string;
    description: string;
    print: string;
    cancel: string;
  };
  languageToggle: {
    label: string;
  };
  themeToggle: {
    label: string;
  };
  projectDetail: {
    backToProjects: string;
    technologies: string;
    features: string;
    challenges: string;
    viewProject: string;
    viewDemo: string;
    viewRepo: string;
    gallery: string;
  };
  certificates: CertificateLabels;
  blog: {
    title: string;
    description: string;
    backToHome: string;
    backToBlog: string;
    readMore: string;
    latestPosts: string;
    noPosts: string;
    tags: string;
    publishedOn: string;
  };
  upwork: {
    heading: string;
    intro: string;
    hiringNote: string;
    hiringNoteDesc: string;
    advantageHeading: string;
    advantages: {
      fundamentals: string;
      aiTools: string;
      reliable: string;
    };
    whyHeading: string;
    whyIntro: string;
    whyBullets: string[];
    technologies: string;
    contact: string;
    contactIntro: string;
    upworkLabel: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      blog: "Blog",
      certificates: "Certificates",
      setup: "Setup",
    },
    meta: {
      resumeTitle: "Full-Stack & AI Developer · Freelancer",
      resumeDescription:
        "Full-Stack & AI freelance developer working with a US-based startup. I build web apps, APIs and AI/LLM features with Next.js and Node for clients worldwide.",
      upworkTitle: "Upwork Summary",
      upworkDescription: "Experienced software engineer with solid fundamentals, AI expertise, and automation skills",
    },
    header: {
      personalWebsite: "Personal website",
      email: "Email",
      phone: "Phone",
      locationLabel: "Location",
      copyEmail: "Copy email",
      copiedEmail: "Email copied",
      copyFailed: "Could not copy email",
      hireMe: "Hire me",
      availableForFreelance: "Available for freelance & contract work",
    },
    summary: { title: "About", mySetup: "My Setup" },
    work: {
      about: "",
      work: "Work Experience",
      education: "",
      skills: "",
      projects: "",
      technologiesUsed: "Technologies used",
      present: "Present",
      sideProjects: "",
    },
    projects: {
      about: "",
      work: "",
      education: "",
      skills: "",
      projects: "Projects",
      technologiesUsed: "Technologies used",
      present: "Present",
      sideProjects: "Impactful Projects",
    },
    education: {
      about: "",
      work: "",
      education: "Education",
      skills: "",
      projects: "",
      technologiesUsed: "",
      present: "Present",
      sideProjects: "",
    },
    skills: {
      about: "",
      work: "",
      education: "",
      skills: "Skills",
      projects: "",
      technologiesUsed: "",
      present: "Present",
      sideProjects: "",
    },
    commandMenu: {
      hint: "Press",
      open: "to open the command menu",
      placeholder: "Type a command or search...",
      empty: "No results found.",
      actions: "Actions",
      print: "Print",
      links: "Links",
    },
    printDrawer: {
      title: "Print resume",
      description: "Download or print a copy.",
      print: "Print",
      cancel: "Cancel",
    },
    languageToggle: {
      label: "Change language",
    },
    themeToggle: {
      label: "Toggle theme",
    },
    projectDetail: {
      backToProjects: "Back to Projects",
      technologies: "Technologies",
      features: "Features",
      challenges: "Challenges",
      viewProject: "View Project",
      viewDemo: "View Demo",
      viewRepo: "View Repository",
      gallery: "Gallery",
    },
    certificates: {
      title: "Certificates & Certifications",
      backToResume: "Back to Resume",
      viewCredential: "View Credential",
      issuedBy: "Issued by",
      credentialId: "Credential ID",
      noCertificates: "No certificates to display.",
    },
    blog: {
      title: "Blog",
      description: "Thoughts on software engineering, AI, and building things that matter.",
      backToHome: "Back to Home",
      backToBlog: "Back to Blog",
      readMore: "Read more",
      latestPosts: "Latest Posts",
      noPosts: "No posts yet.",
      tags: "Tags",
      publishedOn: "Published on",
    },
    upwork: {
      heading: "For Upwork Employers",
      intro:
        "Thank you for visiting my specialized profile for Upwork. As a developer with several years of experience, I possess solid technical fundamentals that make my work more reliable and efficient.",
      hiringNote: "You don't need to hire me through Upwork",
      hiringNoteDesc: "The stats below demonstrate my experience and reliability. We can work together directly—feel free to contact me through any of the channels at the bottom of this page.",
      advantageHeading: "My Competitive Advantage:",
      advantages: {
        fundamentals:
          "Solid Fundamentals: Unlike \"vibe coders\" who rely exclusively on AI without understanding the fundamentals, I have years of experience from before the AI boom. I've fixed countless codebases built only with AI that break when scaling—I understand what's happening under the hood.",
        aiTools:
          "AI as an Accelerator: I use Claude Code, Cursor, and Codex strategically to accelerate development, but I never depend on them. My solid foundation allows me to deliver faster without the code quality issues that plague AI-only developers.",
        reliable:
          "Best of Both Worlds: You get the technical solidity of an experienced developer combined with the efficiency of modern AI tools. Faster delivery, cleaner code, and solutions that scale without breaking.",
      },
      whyHeading: "Why Hire Me?",
      whyIntro:
        "By working with me, you'll get the best of both worlds: the technical solidity of an experienced developer and the efficiency provided by modern AI tools. This translates into:",
      whyBullets: [
        "Cleaner and more maintainable code",
        "Faster detection and resolution of problems",
        "Greater efficiency in development",
        "More robust and scalable solutions",
        "Clear and professional communication throughout the project",
      ],
      technologies: "Technologies",
      contact: "Contact Me",
      contactIntro: "If you're interested in working with me, you can contact me through:",
      upworkLabel: "My Upwork Profile",
    },
    setup: {
      title: "My Setup",
      description: "A collection of the hardware, software, and platforms I use to build and create.",
      hardware: "Hardware",
      software: "Software",
      platforms: "Platforms",
      backToResume: "Back to Resume",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      blog: "Blog",
      certificates: "Certificados",
      setup: "Setup",
    },
    meta: {
      resumeTitle: "Desarrollador Full-Stack & IA · Freelance",
      resumeDescription:
        "Desarrollador full-stack y de IA freelance que colabora con una startup de EE. UU. Construyo apps web, APIs e integraciones de IA para clientes de todo el mundo.",
      upworkTitle: "Resumen Upwork",
      upworkDescription: "Ingeniero de software con fundamentos sólidos, experiencia en IA y automatización",
    },
    header: {
      personalWebsite: "Sitio web",
      email: "Correo",
      phone: "Teléfono",
      locationLabel: "Ubicación",
      copyEmail: "Copiar correo",
      copiedEmail: "Correo copiado",
      copyFailed: "No se pudo copiar el correo",
      hireMe: "Contrátame",
      availableForFreelance: "Disponible para trabajo freelance y por contrato",
    },
    summary: { title: "Sobre mí", mySetup: "Mi Setup" },
    work: {
      about: "",
      work: "Experiencia Laboral",
      education: "",
      skills: "",
      projects: "",
      technologiesUsed: "Tecnologías usadas",
      present: "Actualidad",
      sideProjects: "",
    },
    projects: {
      about: "",
      work: "",
      education: "",
      skills: "",
      projects: "Proyectos",
      technologiesUsed: "Tecnologías usadas",
      present: "Actualidad",
      sideProjects: "Proyectos con impacto",
    },
    education: {
      about: "",
      work: "",
      education: "Educación",
      skills: "",
      projects: "",
      technologiesUsed: "",
      present: "Actualidad",
      sideProjects: "",
    },
    skills: {
      about: "",
      work: "",
      education: "",
      skills: "Habilidades",
      projects: "",
      technologiesUsed: "",
      present: "Actualidad",
      sideProjects: "",
    },
    commandMenu: {
      hint: "Presiona",
      open: "para abrir el menú de comandos",
      placeholder: "Escribe un comando o busca...",
      empty: "Sin resultados.",
      actions: "Acciones",
      print: "Imprimir",
      links: "Enlaces",
    },
    printDrawer: {
      title: "Imprimir currículum",
      description: "Descarga o imprime una copia.",
      print: "Imprimir",
      cancel: "Cancelar",
    },
    languageToggle: {
      label: "Cambiar idioma",
    },
    themeToggle: {
      label: "Cambiar tema",
    },
    projectDetail: {
      backToProjects: "Volver a Proyectos",
      technologies: "Tecnologías",
      features: "Características",
      challenges: "Desafíos",
      viewProject: "Ver Proyecto",
      viewDemo: "Ver Demo",
      viewRepo: "Ver Repositorio",
      gallery: "Galería",
    },
    certificates: {
      title: "Certificados y Acreditaciones",
      backToResume: "Volver al Currículum",
      viewCredential: "Ver Credencial",
      issuedBy: "Emitido por",
      credentialId: "ID de Credencial",
      noCertificates: "No hay certificados para mostrar.",
    },
    upwork: {
      heading: "Para empleadores en Upwork",
      intro:
        "Gracias por visitar mi perfil especializado de Upwork. Como desarrollador con varios años de experiencia, tengo fundamentos técnicos sólidos que hacen mi trabajo más fiable y eficiente.",
      hiringNote: "No necesitas contratarme a través de Upwork",
      hiringNoteDesc: "Las estadísticas abajo demuestran mi experiencia y confiabilidad. Podemos trabajar directamente—no dudes en contactarme por cualquiera de los canales al final de esta página.",
      advantageHeading: "Mi ventaja competitiva:",
      advantages: {
        fundamentals:
          "Fundamentos sólidos: A diferencia de los \"vibe coders\" que dependen exclusivamente de IA sin entender los fundamentos, tengo años de experiencia de antes del auge de la IA. He corregido incontables bases de código construidas solo con IA que se rompen al escalar—entiendo qué pasa bajo el capó.",
        aiTools:
          "IA como acelerador: Uso Claude Code, Cursor y Codex estratégicamente para acelerar el desarrollo, pero nunca dependo de ellas. Mis fundamentos sólidos me permiten entregar más rápido sin los problemas de calidad que aquejan a los desarrolladores que solo usan IA.",
        reliable:
          "Lo mejor de ambos mundos: Obtienes la solidez técnica de un desarrollador experimentado combinada con la eficiencia de las herramientas modernas de IA. Entrega más rápida, código más limpio y soluciones que escalan sin romperse.",
      },
      whyHeading: "¿Por qué contratarme?",
      whyIntro:
        "Al trabajar conmigo obtienes lo mejor de dos mundos: la solidez técnica de un desarrollador experimentado y la eficiencia que aportan las herramientas modernas de IA. Esto se traduce en:",
      whyBullets: [
        "Código más limpio y mantenible",
        "Detección y resolución de problemas más rápida",
        "Mayor eficiencia en desarrollo",
        "Soluciones más robustas y escalables",
        "Comunicación clara y profesional durante todo el proyecto",
      ],
      technologies: "Tecnologías",
      contact: "Contáctame",
      contactIntro: "Si te interesa trabajar conmigo, puedes contactarme por:",
      upworkLabel: "Mi perfil de Upwork",
    },
    blog: {
      title: "Blog",
      description: "Pensamientos sobre ingeniería de software, IA y construir cosas que importan.",
      backToHome: "Volver al Inicio",
      backToBlog: "Volver al Blog",
      readMore: "Leer más",
      latestPosts: "Últimos Artículos",
      noPosts: "Aún no hay artículos.",
      tags: "Etiquetas",
      publishedOn: "Publicado el",
    },
    setup: {
      title: "Mi Setup",
      description: "Una colección del hardware, software y plataformas que utilizo para construir y crear.",
      hardware: "Hardware",
      software: "Software",
      platforms: "Plataformas",
      backToResume: "Volver al Currículum",
    },
  },
};

export function getDictionary(locale: Locale = DEFAULT_LOCALE): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
