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

export type Dictionary = {
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
  };
  summary: {
    title: string;
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
  chatBot: {
    title: string;
    inputPlaceholder: string;
    initialMessage: string;
    errorMessage: string;
    fallbackMessage: string;
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
  upwork: {
    heading: string;
    intro: string;
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
    meta: {
      resumeTitle: "Resume",
      resumeDescription: "Full-stack software engineer and web developer specializing in Node.js, Python, and Next.js",
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
    },
    summary: { title: "About" },
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
    chatBot: {
      title: "Chat Assistant",
      inputPlaceholder: "Type your message...",
      initialMessage: "Hello! How can I help you today?",
      errorMessage: "Sorry, there was an error processing your request.",
      fallbackMessage: "Sorry, I could not generate a response.",
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
    upwork: {
      heading: "For Upwork Employers",
      intro:
        "Thank you for visiting my specialized profile for Upwork. As a developer with several years of experience, I possess solid technical fundamentals that make my work more reliable and efficient.",
      advantageHeading: "My Competitive Advantage:",
      advantages: {
        fundamentals:
          "Solid Fundamentals: Unlike newer developers known as \"vibe coders\" who rely exclusively on AI tools without understanding the fundamental concepts, my experience allows me to identify and solve complex problems efficiently.",
        aiTools:
          "Experience with AI Tools: I know current AI tools perfectly and use them strategically to accelerate development, always maintaining control over the code and understanding exactly what I'm implementing.",
        reliable:
          "Accelerated and Reliable Development: The combination of my fundamental knowledge with the efficient use of AI tools allows me to deliver projects in less time, without the problems faced by developers who only rely on AI without understanding where errors might occur.",
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
  },
  es: {
    meta: {
      resumeTitle: "Currículum",
      resumeDescription: "Ingeniero de software full-stack y desarrollador web especializado en Node.js, Python y Next.js",
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
    },
    summary: { title: "Sobre mí" },
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
    chatBot: {
      title: "Asistente de chat",
      inputPlaceholder: "Escribe tu mensaje...",
      initialMessage: "¡Hola! ¿En qué puedo ayudarte hoy?",
      errorMessage: "Hubo un error procesando tu solicitud.",
      fallbackMessage: "No pude generar una respuesta.",
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
    upwork: {
      heading: "Para empleadores en Upwork",
      intro:
        "Gracias por visitar mi perfil especializado de Upwork. Como desarrollador con varios años de experiencia, tengo fundamentos técnicos sólidos que hacen mi trabajo más fiable y eficiente.",
      advantageHeading: "Mi ventaja competitiva:",
      advantages: {
        fundamentals:
          "Fundamentos sólidos: A diferencia de desarrolladores nuevos conocidos como \"vibe coders\" que dependen exclusivamente de herramientas de IA sin comprender los conceptos base, mi experiencia me permite identificar y resolver problemas complejos de forma eficiente.",
        aiTools:
          "Experiencia con IA: Conozco a fondo las herramientas actuales de IA y las uso de manera estratégica para acelerar el desarrollo, manteniendo siempre el control del código y entendiendo exactamente qué implemento.",
        reliable:
          "Desarrollo más rápido y confiable: La combinación de mis fundamentos con el uso eficiente de IA me permite entregar proyectos en menos tiempo, sin los problemas de quienes solo dependen de la IA sin entender dónde pueden aparecer errores.",
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
  },
};

export function getDictionary(locale: Locale = DEFAULT_LOCALE): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
