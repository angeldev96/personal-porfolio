/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { DEFAULT_LOCALE, Locale } from "@/i18n/config";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  /** ISO 8601 date (YYYY-MM-DD) for structured data / sitemaps. */
  isoDate: string;
  tags: readonly string[];
  readingTime: string;
};

export type BlogData = {
  posts: BlogPost[];
};

const BLOG_DATA: Record<Locale, BlogData> = {
  en: {
    posts: [
      {
        slug: "building-ai-powered-apps-with-nextjs-and-openai",
        title: "Building AI-Powered Apps with Next.js and OpenAI",
        excerpt:
          "A practical guide to integrating OpenAI's API into your Next.js applications, from chatbots to content generation.",
        date: "May 15, 2026",
        isoDate: "2026-05-15",
        tags: ["Next.js", "OpenAI", "AI", "TypeScript"],
        readingTime: "8 min read",
        content: (
          <>
            <p className="mb-4">
              AI is no longer a futuristic concept—it is here, and it is transforming how we build
              software. As developers, integrating AI capabilities into our applications has become
              increasingly accessible thanks to powerful APIs like OpenAI's.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why Next.js + OpenAI?</h2>
            <p className="mb-4">
              Next.js provides an excellent foundation for AI-powered applications. Its server-side
              rendering, API routes, and edge functions allow you to build fast, secure, and scalable
              AI features. Combined with OpenAI's API, you can create everything from intelligent
              chatbots to automated content generation tools.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Setting Up the API Route</h2>
            <p className="mb-4">
              The first step is to create an API route in Next.js that securely communicates with
              OpenAI. This keeps your API keys safe on the server side and allows you to add
              rate limiting, logging, and error handling.
            </p>

            <p className="mb-4">
              Start by installing the OpenAI SDK and creating a route handler in{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
                app/api/chat/route.ts
              </code>
              . From there, you can stream responses using Server-Sent Events for a real-time chat
              experience.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Streaming Responses</h2>
            <p className="mb-4">
              One of the most impactful patterns is streaming. Instead of waiting for the entire
              response, you stream tokens as they are generated. This provides a better user
              experience and feels more natural.
            </p>

            <p className="mb-4">
              Next.js edge runtime supports streaming natively, making it straightforward to
              implement. The key is to use <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">OpenAIStream</code> and pipe the result directly to the client.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>Always handle errors gracefully and provide fallback responses.</li>
              <li>Implement rate limiting to protect your API key usage.</li>
              <li>Cache responses when possible to reduce costs and latency.</li>
              <li>Use environment variables for all API keys and configuration.</li>
              <li>Add logging for monitoring and debugging.</li>
            </ul>

            <p className="mb-4">
              AI integration is a powerful addition to any developer's toolkit. Start small, iterate
              quickly, and always keep the user experience at the center of your design.
            </p>
          </>
        ),
      },
      {
        slug: "why-solid-fundamentals-matter-more-than-ai-tools",
        title: "Why Solid Fundamentals Matter More Than AI Tools",
        excerpt:
          "In the age of AI-assisted coding, understanding the fundamentals is what separates professionals from 'vibe coders'.",
        date: "April 28, 2026",
        isoDate: "2026-04-28",
        tags: ["Software Engineering", "AI", "Career", "Best Practices"],
        readingTime: "6 min read",
        content: (
          <>
            <p className="mb-4">
              There is a growing trend of developers who rely exclusively on AI tools without
              understanding the underlying principles. I call them "vibe coders"—they generate code
              that looks right but falls apart when it needs to scale or handle edge cases.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Problem with AI-Only Development</h2>
            <p className="mb-4">
              AI tools are incredible accelerators, but they are not replacements for understanding.
              When you do not know why something works, you cannot fix it when it breaks. I have seen
              countless codebases built entirely with AI that collapse under real-world conditions.
            </p>

            <p className="mb-4">
              The issue is not the AI itself—it is the lack of foundational knowledge. Without
              understanding data structures, algorithms, system design, and software architecture,
              you are essentially building a house on sand.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What Fundamentals Really Mean</h2>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>Understanding how the runtime works (event loop, memory management).</li>
              <li>Knowing when and why to use specific data structures.</li>
              <li>Being able to design systems that scale and are maintainable.</li>
              <li>Writing tests and understanding why testing matters.</li>
              <li>Debugging problems systematically instead of guessing.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Right Approach</h2>
            <p className="mb-4">
              Use AI as the powerful accelerator it is—but never depend on it. Learn the fundamentals
              first, then leverage AI to be more productive. This combination is what makes a truly
              effective engineer.
            </p>

            <p className="mb-4">
              When you understand the fundamentals, you can verify AI outputs, fix issues
              confidently, and build solutions that actually work in production. That is the
              difference between a professional and a "vibe coder."
            </p>
          </>
        ),
      },
      {
        slug: "my-development-setup-2026",
        title: "My Development Setup in 2026",
        excerpt:
          "A tour of the tools, hardware, and software I use daily to build modern web applications.",
        date: "April 10, 2026",
        isoDate: "2026-04-10",
        tags: ["Setup", "Tools", "Productivity"],
        readingTime: "5 min read",
        content: (
          <>
            <p className="mb-4">
              As a full-stack developer, my setup is crucial to my productivity. Here is a detailed
              look at the hardware, software, and tools I rely on every day.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Hardware</h2>
            <p className="mb-4">
              I work on a MacBook Pro 16" with an M1 Pro chip and 32GB of RAM. It handles everything
              from running multiple Docker containers to compiling TypeScript without breaking a
              sweat. For power backup, I use an Ecoflow River 2 Max (512Wh) that keeps my laptop and
              router running through power outages—a reality in Honduras.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Software Stack</h2>
            <p className="mb-4">
              My primary code editor is VS Code with the Antigravity extension, and I use Warp as my
              terminal. For AI-assisted development, I use OpenCode, Claude Code, and Cursor—each for
              different use cases.
            </p>

            <p className="mb-4">
              I manage my infrastructure through Dokploy, a self-hosted PaaS on my VPS. This hosts
              multiple Supabase instances, n8n workflows, backend APIs, and client demos.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Productivity Tools</h2>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>Notion for notes and project management.</li>
              <li>Linear for issue tracking and task management.</li>
              <li>Figma for UI/UX collaboration and prototyping.</li>
              <li>Logitech MX Master 3S for ergonomic mouse usage.</li>
            </ul>

            <p className="mb-4">
              The key is not having the most expensive tools—it is having a setup that works for
              your specific workflow and being intentional about every tool you adopt.
            </p>
          </>
        ),
      },
    ],
  },
  es: {
    posts: [
      {
        slug: "building-ai-powered-apps-with-nextjs-and-openai",
        title: "Creando Apps con IA usando Next.js y OpenAI",
        excerpt:
          "Guía práctica para integrar la API de OpenAI en tus aplicaciones Next.js, desde chatbots hasta generación de contenido.",
        date: "15 de mayo, 2026",
        isoDate: "2026-05-15",
        tags: ["Next.js", "OpenAI", "IA", "TypeScript"],
        readingTime: "8 min de lectura",
        content: (
          <>
            <p className="mb-4">
              La IA ya no es un concepto futurista—está aquí y está transformando la forma en que
              construimos software. Como desarrolladores, integrar capacidades de IA en nuestras
              aplicaciones es cada vez más accesible gracias a APIs poderosas como la de OpenAI.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">¿Por qué Next.js + OpenAI?</h2>
            <p className="mb-4">
              Next.js proporciona una base excelente para aplicaciones impulsadas por IA. Su
              renderizado del lado del servidor, rutas API y funciones edge te permiten construir
              características de IA rápidas, seguras y escalables. Combinado con la API de OpenAI,
              puedes crear desde chatbots inteligentes hasta herramientas automatizadas de generación
              de contenido.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Configurando la Ruta API</h2>
            <p className="mb-4">
              El primer paso es crear una ruta API en Next.js que se comunique de forma segura con
              OpenAI. Esto mantiene tus claves API seguras en el servidor y te permite agregar
              rate limiting, logging y manejo de errores.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Respuestas en Streaming</h2>
            <p className="mb-4">
              Uno de los patrones más impactantes es el streaming. En lugar de esperar la respuesta
              completa, los tokens se transmiten a medida que se generan. Esto proporciona una mejor
              experiencia de usuario.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Mejores Prácticas</h2>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>Siempre maneja errores con gracia y proporciona respuestas alternativas.</li>
              <li>Implementa rate limiting para proteger el uso de tu API key.</li>
              <li>Cachea respuestas cuando sea posible para reducir costos y latencia.</li>
              <li>Usa variables de entorno para todas las configuraciones.</li>
              <li>Agrega logging para monitoreo y debugging.</li>
            </ul>

            <p className="mb-4">
              La integración de IA es una adición poderosa al toolkit de cualquier desarrollador.
              Empieza pequeño, itera rápido y siempre mantén la experiencia del usuario en el centro.
            </p>
          </>
        ),
      },
      {
        slug: "why-solid-fundamentals-matter-more-than-ai-tools",
        title: "Por qué los Fundamentos Sólidos Importan Más que las Herramientas de IA",
        excerpt:
          "En la era de la codificación asistida por IA, entender los fundamentos es lo que separa a los profesionales de los 'vibe coders'.",
        date: "28 de abril, 2026",
        isoDate: "2026-04-28",
        tags: ["Ingeniería de Software", "IA", "Carrera", "Mejores Prácticas"],
        readingTime: "6 min de lectura",
        content: (
          <>
            <p className="mb-4">
              Hay una tendencia creciente de desarrolladores que dependen exclusivamente de
              herramientas de IA sin entender los principios subyacentes. Los llamo "vibe
              coders"—generan código que se ve bien pero se desmorona cuando necesita escalar o
              manejar casos extremos.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">El Problema del Desarrollo Solo con IA</h2>
            <p className="mb-4">
              Las herramientas de IA son aceleradores increíbles, pero no reemplazan el
              entendimiento. Cuando no sabes por qué algo funciona, no puedes arreglarlo cuando se
              rompe. He visto innumerables codebases construidos enteramente con IA que colapsan bajo
              condiciones del mundo real.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">El Enfoque Correcto</h2>
            <p className="mb-4">
              Usa la IA como el poderoso acelerador que es—pero nunca dependas de ella. Aprende los
              fundamentos primero, luego aprovecha la IA para ser más productivo. Esta combinación es
              lo que hace a un ingeniero verdaderamente efectivo.
            </p>
          </>
        ),
      },
      {
        slug: "my-development-setup-2026",
        title: "Mi Setup de Desarrollo en 2026",
        excerpt:
          "Un recorrido por las herramientas, hardware y software que uso diariamente para construir aplicaciones web modernas.",
        date: "10 de abril, 2026",
        isoDate: "2026-04-10",
        tags: ["Setup", "Herramientas", "Productividad"],
        readingTime: "5 min de lectura",
        content: (
          <>
            <p className="mb-4">
              Como desarrollador full-stack, mi setup es crucial para mi productividad. Aquí hay una
              mirada detallada al hardware, software y herramientas en las que confío cada día.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Hardware</h2>
            <p className="mb-4">
              Trabajo en una MacBook Pro 16" con chip M1 Pro y 32GB de RAM. Maneja todo, desde
              ejecutar múltiples contenedores Docker hasta compilar TypeScript sin esfuerzo. Para
              respaldo de energía, uso una Ecoflow River 2 Max (512Wh) que mantiene mi laptop y
              router funcionando durante cortes de luz.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Software</h2>
            <p className="mb-4">
              Mi editor de código principal es VS Code con la extensión Antigravity, y uso Warp como
              terminal. Para desarrollo asistido por IA, uso OpenCode, Claude Code y Cursor.
            </p>
          </>
        ),
      },
    ],
  },
};

export function getBlogData(locale: Locale = DEFAULT_LOCALE): BlogData {
  return BLOG_DATA[locale] ?? BLOG_DATA[DEFAULT_LOCALE];
}

export function getBlogPost(slug: string, locale: Locale = DEFAULT_LOCALE): BlogPost | undefined {
  return getBlogData(locale).posts.find((post) => post.slug === slug);
}
