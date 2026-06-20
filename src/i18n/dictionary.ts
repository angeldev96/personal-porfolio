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
  };
  header: {
    personalWebsite: string;
    email: string;
    phone: string;
    locationLabel: string;
    copyEmail: string;
    copiedEmail: string;
    copyFailed: string;
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
    },
    header: {
      personalWebsite: "Personal website",
      email: "Email",
      phone: "Phone",
      locationLabel: "Location",
      copyEmail: "Copy email",
      copiedEmail: "Email copied",
      copyFailed: "Could not copy email",
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
    },
    header: {
      personalWebsite: "Sitio web",
      email: "Correo",
      phone: "Teléfono",
      locationLabel: "Ubicación",
      copyEmail: "Copiar correo",
      copiedEmail: "Correo copiado",
      copyFailed: "No se pudo copiar el correo",
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
