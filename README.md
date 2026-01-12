# Angel Valladares — Personal Portfolio (Codebase)

Este repositorio contiene la versión fuente del portfolio personal de Angel Valladares, optimizado como currículum web y tarjeta profesional para clientes y empleadores. El objetivo principal es mostrar experiencia, proyectos, certificaciones y facilitar contacto (incluyendo perfil profesional en Upwork).

---

**Live demo:** https://angelvalladares.dev (configurable mediante `NEXT_PUBLIC_SITE_URL`)

## ¿Qué verás aquí? (para un empleador)
- Un portfolio moderno, rápido y optimizado para SEO, con soporte multi-idioma (es/en).
- Página de resumen (About), Proyectos, Certificados, Sección dedicada para clientes de Upwork y enlaces de contacto.
- Implementación pensada para contratación freelance: datos públicos (earnings/badges mencionados en UI) y enlaces directos a perfil de Upwork.

## Tecnologías principales
- Framework: Next.js 15 (App Router)
- Lenguaje: TypeScript + React
- Estilos: Tailwind CSS
- Componentes UI: componentes internos basados en primitives (Card, Button, Badge, Avatar)
- Integraciones: Vercel Analytics (opcional), Open Graph image generation
- Backend ligero: GraphQL route (archivo `src/app/graphql/route.ts`) para propósitos específicos

## Arquitectura y organización
- `src/app`: App Router pages y layouts por locale (`[locale]`).
- `src/data/resume-data.tsx`: fuente principal de datos (nombre, experiencia, proyectos, certificados). Cambia aquí para actualizar contenido sin tocar componentes.
- `src/i18n`: configuración e `dictionary.ts` con textos para `en` y `es`.
- `src/components`: componentes reutilizables (Header, CommandMenu, Certificates, Projects, etc.).
- `src/components/icons` y `src/images/logos`: logos e iconos usados en la UI.
- `public/`: assets públicos (favicon, imágenes públicas).

## SEO y mejoras realizadas
- Metadatos (title, description, openGraph, twitter) centralizados en `src/app/layout.tsx` y en los metadatos de páginas específicas.
- JSON-LD (Person, WebSite) añadido para mejorar rich results y presencia en buscadores.
- i18n: rutas con prefijo `/en` y `/es`, middleware (`middleware.ts`) que redirige al locale por defecto y mantiene cookie `NEXT_LOCALE`.

## Imágenes y optimización
- `next/image` usado en galerías y screenshots. `next.config.js` contiene `images.remotePatterns` para permitir optimización desde `res.cloudinary.com` y `avatars.githubusercontent.com`.
- El favicon se sirve desde `public/favicon.ico` y está apuntado en metadata (`src/app/layout.tsx`).

## Cambios recientes notables
- Reemplazo de `img` por `next/image` para mejorar LCP y ancho de banda.
- Ajustes visuales: mayor espaciado entre certificados para mejorar legibilidad.
- Reemplazo del enlace del portafolio en el header/command menu por el enlace a Upwork (cuando aplica).
- Metadatos SEO actualizados para posicionar la página como "Freelancer Full-Stack en Honduras".

## Ejecutar localmente
Requisitos: Node 18+ (o la versión que el proyecto use en tu entorno). Desde la raíz del repo:

```bash
npm install
npm run dev       # arranca en modo desarrollo (http://localhost:3000)
npm run build     # build de producción
npm run start     # sirve build local
```

Variables útiles (opcional):
- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio (para Open Graph y canonical).
- `NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS=true` — activa Vercel Analytics en producción.

## Tests y lint
- El proyecto corre checks de lint y tipos durante `next build`. Ejecuta `npm run lint` si quieres revisar manualmente.

## Deploy
- Diseñado para desplegar en Vercel (soporta Next.js App Router y funciones necesarias).
- Asegúrate de definir `NEXT_PUBLIC_SITE_URL` en el entorno de producción.

## Cómo actualizar contenido
- Contenido principal: editar `src/data/resume-data.tsx` (textos, proyectos, certificados).
- Traducciones y labels: `src/i18n/dictionary.ts`.
- Nuevas imágenes/logos: poner en `public/` o `src/images/logos/` y referenciarlas desde `resume-data.tsx`.

## Buenas prácticas / recomendaciones SEO
- Mantén las descripciones en `src/i18n/dictionary.ts` cortas y con keywords relevantes (ej. "Freelancer Honduras, Full-Stack Developer, Next.js, Node.js").
- Añade `hreflang`/alternates si publicas en dominios multi-región (ya se setea alternates en metadata).
- Mantén `opengraph-image` actualizado para compartir en redes.

## Contribuir
- Este repo está pensado como CV personal; si quieres proponer cambios, abre un PR con: 1) cambios de contenido en `resume-data.tsx` o `dictionary.ts`, 2) pruebas visuales (screenshots) y 3) descripción breve del motivo.

## Contacto
- Email público: `arivalladares2.0@gmail.com`
- Perfil profesional: https://www.upwork.com/freelancers/~0116803452ac7b4ff7

---
Licencia: `MIT` (revisar archivo `LICENSE` en este repo).

Si quieres, puedo: 1) generar un `README.es.md` con versión en español; 2) agregar un `CONTRIBUTING.md` con guía de cambios; o 3) crear scripts de CI para lint/build. Dime cuál prefieres que haga a continuación.
