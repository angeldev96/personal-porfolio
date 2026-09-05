import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";

/** Where a phase, milestone or project stands right now. */
export type Status = "done" | "active" | "planned";

export type Milestone = {
  label: string;
  status: Status;
};

export type Phase = {
  id: string;
  /** "Phase 0", "Years 2–3" — the short tag above the title. */
  eyebrow: string;
  period: string;
  title: string;
  summary: string;
  status: Status;
  /** 0–100, drives the gradient progress bar. */
  progress: number;
  milestones: Milestone[];
  focus: string[];
};

export type RoadmapProject = {
  n: number;
  title: string;
  description: string;
  stack: string[];
  status: Status;
};

export type LogEntry = {
  date: string;
  /** ISO 8601 (YYYY-MM-DD), used for sorting and <time dateTime>. */
  isoDate: string;
  title: string;
  body: string;
  tags: string[];
};

export type Ritual = {
  title: string;
  description: string;
};

export type Signal = {
  title: string;
  description: string;
  verdict: "following" | "ignoring";
};

export type Stat = {
  value: string;
  label: string;
};

export type GapItem = {
  skill: string;
  note: string;
  /** 0–100 self-assessed coverage today. */
  level: number;
};

export type RoadmapData = {
  hero: {
    kicker: string;
    title: string;
    highlight: string;
    subtitle: string;
    postLabel: string;
    postSlug: string;
    updatedLabel: string;
    updatedOn: string;
  };
  stats: Stat[];
  now: {
    title: string;
    description: string;
    items: string[];
  };
  sections: {
    phases: { title: string; description: string };
    gap: { title: string; description: string };
    projects: { title: string; description: string };
    rituals: { title: string; description: string };
    signals: { title: string; description: string };
    log: { title: string; description: string };
  };
  statusLabels: Record<Status, string>;
  verdictLabels: Record<Signal["verdict"], string>;
  phases: Phase[];
  gap: GapItem[];
  projects: RoadmapProject[];
  rituals: Ritual[];
  signals: Signal[];
  log: LogEntry[];
  emptyLog: string;
};

const ROADMAP_DATA: Record<Locale, RoadmapData> = {
  en: {
    hero: {
      kicker: "Living document",
      title: "Road to",
      highlight: "AI Engineer",
      subtitle:
        "Full-stack today, AI engineer by 2029. Every phase, every project, every habit — and the parts I get wrong. Updated as I go, not written after the fact.",
      postLabel: "Read the full research post",
      postSlug: "from-full-stack-to-ai-engineer-roadmap-2026",
      updatedLabel: "Last updated",
      updatedOn: "September 5, 2026",
    },
    stats: [
      { value: "Phase 0", label: "Current phase" },
      { value: "0 / 7", label: "Portfolio projects shipped" },
      { value: "10", label: "Skill gaps tracked" },
      { value: "2029", label: "Target senior profile" },
    ],
    now: {
      title: "What I'm doing right now",
      description:
        "The honest snapshot. If it isn't on this list this week, it isn't happening this week.",
      items: [
        "Running plan → worktrees → verification → risk-based review on a real client project, not a toy repo.",
        "Writing and maintaining CLAUDE.md, hooks and permission allow-lists for every repo I touch.",
        "Working through Anthropic Academy: Claude Code in Action, MCP intro and advanced, Agent Skills and Subagents.",
        "Measuring time-in-review for four weeks so Phase 0 ends with a number, not a feeling.",
        "Reading Anthropic's engineering posts on effective agents, context engineering, evals and harness design.",
      ],
    },
    sections: {
      phases: {
        title: "The phases",
        description:
          "Sep 2026 → 2029. Each phase has an end condition, not just an end date.",
      },
      gap: {
        title: "My gap, honestly",
        description:
          "Ordered by how often hiring sources cite it. The bar is where I am today, not where I want to be.",
      },
      projects: {
        title: "The seven projects",
        description:
          "Each one ships with an eval suite and traces — that combination is the portfolio.",
      },
      rituals: {
        title: "Day to day",
        description: "The habits underneath the roadmap. Boring on purpose.",
      },
      signals: {
        title: "Following / ignoring",
        description:
          "What I actually act on, and the noise I decided to skip. Both cost time.",
      },
      log: {
        title: "Progress log",
        description: "Short entries as things land. Newest first.",
      },
    },
    statusLabels: {
      done: "Done",
      active: "In progress",
      planned: "Planned",
    },
    verdictLabels: {
      following: "Following",
      ignoring: "Ignoring",
    },
    phases: [
      {
        id: "phase-0",
        eyebrow: "Phase 0",
        period: "Sep – Oct 2026",
        title: "Work like the elite at my current job",
        summary:
          "Zero cost, immediate return, and the first line of an AI engineer résumé. Change how I work before changing what I study.",
        status: "active",
        progress: 35,
        focus: ["Claude Code", "Agent harness", "CI review"],
        milestones: [
          {
            label: "Adopt plan → worktrees → verification → risk-based review on a real project",
            status: "active",
          },
          { label: "Write and maintain the repo's CLAUDE.md", status: "done" },
          {
            label: "Set up hooks, permission allow-lists and a /commit-push-pr command",
            status: "active",
          },
          {
            label: "Add AI review before human review, measure time-in-review for four weeks",
            status: "planned",
          },
          {
            label: "Anthropic Academy: Claude Code in Action, MCP, Agent Skills and Subagents",
            status: "active",
          },
        ],
      },
      {
        id: "phase-1",
        eyebrow: "Phase 1",
        period: "Nov 2026 – Feb 2027",
        title: "Fundamentals in my stack + first real project",
        summary:
          "Learn the API layer properly in TypeScript, add production Python, then ship one retrieval system that a real business actually uses.",
        status: "planned",
        progress: 0,
        focus: ["Claude API", "AI SDK v6", "FastAPI", "RAG"],
        milestones: [
          { label: "Anthropic Academy — Building with the Claude API (8h)", status: "planned" },
          {
            label: "Matt Pocock's AI SDK v6 Crash Course: agents, tool calling, eval-driven development",
            status: "planned",
          },
          { label: "Chip Huyen — AI Engineering", status: "planned" },
          { label: "Production Python: FastAPI, Pydantic, async", status: "planned" },
          { label: "MCP 2026-07-28 spec, end to end", status: "planned" },
          {
            label: "Project 1: RAG with hybrid retrieval, reranking, citations, 50-question eval set, Langfuse from day one",
            status: "planned",
          },
        ],
      },
      {
        id: "phase-2",
        eyebrow: "Phase 2",
        period: "Mar – Jun 2027",
        title: "Evals and agents — the differentiator",
        summary:
          "The part most portfolios skip, and the part senior interviews are actually built around.",
        status: "planned",
        progress: 0,
        focus: ["Evals", "LLM-as-judge", "Agent SDK", "MCP servers"],
        milestones: [
          { label: "Hamel Husain's free evals material + the evals-skills repo", status: "planned" },
          { label: "W&B and DeepLearning.AI eval courses, Andrew Ng's Agentic AI", status: "planned" },
          { label: "Claude Certified Developer exam", status: "planned" },
          {
            label: "Project 2: eval harness with a labeled failure taxonomy and a CI regression gate",
            status: "planned",
          },
          { label: "Project 3: MCP server for a real system, OAuth 2.1", status: "planned" },
          {
            label: "Project 4: back-office agent on the Claude Agent SDK, approval hooks, documented cost per run",
            status: "planned",
          },
          { label: "AI Engineer Miami — April 26–27, 2027", status: "planned" },
        ],
      },
      {
        id: "phase-3",
        eyebrow: "Phase 3",
        period: "Jul – Dec 2027",
        title: "Depth, visibility, first applications",
        summary:
          "Stop learning in private. Contribute, publish numbers, and start applying to remote AI product engineer roles.",
        status: "planned",
        progress: 0,
        focus: ["Open source", "Writing", "Job search"],
        milestones: [
          { label: "Hugging Face Agents and Context courses, LangGraph intro, Google's agents intensive", status: "planned" },
          { label: "Project 5: document extraction pipeline with a human review UI", status: "planned" },
          { label: "Project 6: voice agent for a hackathon", status: "planned" },
          { label: "Project 7: internal copilot with cost and latency dashboards", status: "planned" },
          { label: "Contribute to MCP, Langfuse, Promptfoo or Mastra", status: "planned" },
          { label: "Publish three technical posts with real numbers", status: "planned" },
          { label: "Start applying to remote AI product engineer roles", status: "planned" },
        ],
      },
      {
        id: "years-2-3",
        eyebrow: "Years 2–3",
        period: "2028 – 2029",
        title: "Specialty and senior profile",
        summary:
          "Understand models from the inside, pick a specialty, and talk about a system of mine that runs in production.",
        status: "planned",
        progress: 0,
        focus: ["Fundamentals", "Architecture", "Speaking"],
        milestones: [
          { label: "Stanford CS336 and Karpathy's nanochat", status: "planned" },
          { label: "Raschka's two 'from scratch' books", status: "planned" },
          { label: "Berkeley Agentic AI MOOC", status: "planned" },
          { label: "Claude Certified Architect track, if I move toward architecture or consulting", status: "planned" },
          { label: "A conference talk about a production system of mine", status: "planned" },
        ],
      },
    ],
    gap: [
      { skill: "Evals and error analysis", note: "The single most cited gap. Golden datasets, LLM-as-judge validated against human labels.", level: 15 },
      { skill: "Retrieval quality", note: "Not just 'RAG': hybrid search, reranking, naming failure modes unprompted.", level: 30 },
      { skill: "Context engineering", note: "Intentional compaction and the long-context dumb zone.", level: 40 },
      { skill: "Bounded agent design", note: "Including knowing when a plain workflow beats an agent.", level: 35 },
      { skill: "Cost and latency economics", note: "Model routing, caching, structured outputs.", level: 30 },
      { skill: "LLM security", note: "Prompt injection, exfiltration through tools, OWASP LLM Top 10.", level: 20 },
      { skill: "Observability", note: "Tracing, prompt versioning, drift, cost monitoring.", level: 25 },
      { skill: "Production Python", note: "FastAPI, Pydantic, async. My stack is TypeScript-first.", level: 35 },
      { skill: "Document pipelines", note: "Chunking, OCR, extraction, deduplication.", level: 20 },
      { skill: "Fine-tuning basics", note: "Low priority: mostly knowing when to pick it over RAG or prompting.", level: 10 },
    ],
    projects: [
      { n: 1, title: "RAG over a real business's documents", description: "Hybrid retrieval, reranking and citations over documents a business depends on — not a demo corpus.", stack: ["Next.js", "Vercel AI SDK", "pgvector", "Promptfoo"], status: "planned" },
      { n: 2, title: "Eval harness for that RAG", description: "An LLM judge validated against human labels, with a labeled failure taxonomy.", stack: ["Promptfoo", "Langfuse", "CI"], status: "planned" },
      { n: 3, title: "MCP server for a real system", description: "OAuth 2.1, published to a registry, used by something other than my own laptop.", stack: ["MCP", "OAuth 2.1", "TypeScript"], status: "planned" },
      { n: 4, title: "Back-office agent", description: "Invoices → extraction → validation → ERP, with approval hooks and documented cost per run.", stack: ["Claude Agent SDK", "Hooks", "ERP"], status: "planned" },
      { n: 5, title: "Document extraction pipeline", description: "Confidence scores and a human review UI, because extraction without review is a liability.", stack: ["Python", "FastAPI", "OCR"], status: "planned" },
      { n: 6, title: "Voice agent with tool calling", description: "Built for a hackathon, so the deadline is external.", stack: ["Realtime API", "Tools"], status: "planned" },
      { n: 7, title: "Internal copilot", description: "OpenTelemetry GenAI spans, cost and latency SLOs on a dashboard someone else reads.", stack: ["OTel", "Grafana", "Agent SDK"], status: "planned" },
    ],
    rituals: [
      { title: "Ship in the open", description: "Every project gets a repo, a README with real numbers, and a post. Private work teaches me; public work gets me hired." },
      { title: "Evals before features", description: "No new capability lands without something that can tell me it regressed. Vibes are not a test suite." },
      { title: "One real user", description: "Every project points at a real business or a real person. Demo corpora hide the failure modes that interviews ask about." },
      { title: "Measure the boring number", description: "Time-in-review, cost per run, p95 latency. Claims without numbers are opinions." },
      { title: "Agents on real repos", description: "Plan, worktrees, verification, risk-based review — on production work, daily, not on toy problems." },
      { title: "Write the post while it's fresh", description: "Notes decay fast. This page exists so I can't quietly rewrite history later." },
    ],
    signals: [
      { title: "Evals as the hiring filter", description: "Moving beyond vibes: golden datasets, LLM-as-judge validated against humans, regression suites gated in CI.", verdict: "following" },
      { title: "'What has gone wrong for you?'", description: "The question that opens almost every senior interview. Worth having three real answers ready.", verdict: "following" },
      { title: "Time zone as the real advantage", description: "UTC-6 is US Central. Every nearshore guide lists it first, and Honduras appears in none of the LATAM AI-talent guides.", verdict: "following" },
      { title: "Buy-over-build enterprise reality", description: "76% of enterprise AI use cases are bought, not built. Someone has to integrate them into real processes — that's the job.", verdict: "following" },
      { title: "'A million lines in a week'", description: "Teams with verifiable throughput credit linters, docs, tests and sandboxes — not fleets of 30 autonomous agents.", verdict: "ignoring" },
      { title: "Self-reported adoption stats", description: "'98% of employees use X' and '47% of code is agent-written' are perception or vendor data.", verdict: "ignoring" },
      { title: "$450K FDE salary screenshots", description: "Frontier labs only, 55–70% in equity, and mostly requiring US/UK/EU presence.", verdict: "ignoring" },
      { title: "The $4,200 evals cohort", description: "Out of budget, and the free material covers most of it. Cloud certs only if an employer's stack demands them.", verdict: "ignoring" },
    ],
    log: [
      {
        date: "September 5, 2026",
        isoDate: "2026-09-05",
        title: "Roadmap goes public",
        body: "Published the research post and turned it into this page. Making the plan visible is the cheapest form of accountability I know.",
        tags: ["Phase 0", "Writing"],
      },
      {
        date: "September 1, 2026",
        isoDate: "2026-09-01",
        title: "Phase 0 starts",
        body: "CLAUDE.md written for the main client repo. Hooks and permission allow-lists next, then four weeks of time-in-review measurements.",
        tags: ["Phase 0", "Claude Code"],
      },
    ],
    emptyLog: "No entries yet.",
  },

  es: {
    hero: {
      kicker: "Documento vivo",
      title: "Camino a",
      highlight: "AI Engineer",
      subtitle:
        "Full-stack hoy, AI engineer en 2029. Cada fase, cada proyecto, cada hábito — y también lo que hago mal. Se actualiza sobre la marcha, no después.",
      postLabel: "Leer el post completo",
      postSlug: "from-full-stack-to-ai-engineer-roadmap-2026",
      updatedLabel: "Última actualización",
      updatedOn: "5 de septiembre de 2026",
    },
    stats: [
      { value: "Fase 0", label: "Fase actual" },
      { value: "0 / 7", label: "Proyectos publicados" },
      { value: "10", label: "Brechas en seguimiento" },
      { value: "2029", label: "Perfil senior objetivo" },
    ],
    now: {
      title: "Qué estoy haciendo ahora",
      description:
        "La foto honesta. Si algo no está en esta lista esta semana, esta semana no está pasando.",
      items: [
        "Aplico plan → worktrees → verificación → revisión por riesgo en un proyecto real de cliente, no en un repo de juguete.",
        "Escribo y mantengo CLAUDE.md, hooks y allow-lists de permisos en cada repo que toco.",
        "Avanzo en Anthropic Academy: Claude Code in Action, MCP básico y avanzado, Agent Skills y Subagents.",
        "Mido el tiempo en revisión durante cuatro semanas para que la Fase 0 cierre con un número, no con una sensación.",
        "Leo los posts de ingeniería de Anthropic sobre agentes efectivos, context engineering, evals y diseño de harness.",
      ],
    },
    sections: {
      phases: {
        title: "Las fases",
        description:
          "Sep 2026 → 2029. Cada fase tiene una condición de cierre, no solo una fecha.",
      },
      gap: {
        title: "Mi brecha, sin adornos",
        description:
          "Ordenada por cuánto la citan las fuentes de contratación. La barra es dónde estoy hoy, no dónde quiero estar.",
      },
      projects: {
        title: "Los siete proyectos",
        description:
          "Cada uno sale con su suite de evals y sus trazas — esa combinación es el portafolio.",
      },
      rituals: {
        title: "Día a día",
        description: "Los hábitos debajo del roadmap. Aburridos a propósito.",
      },
      signals: {
        title: "Sigo / ignoro",
        description:
          "Lo que de verdad aplico y el ruido que decidí saltarme. Ambos cuestan tiempo.",
      },
      log: {
        title: "Bitácora",
        description: "Entradas cortas conforme avanzo. Lo más reciente primero.",
      },
    },
    statusLabels: {
      done: "Hecho",
      active: "En progreso",
      planned: "Planeado",
    },
    verdictLabels: {
      following: "Sigo",
      ignoring: "Ignoro",
    },
    phases: [
      {
        id: "phase-0",
        eyebrow: "Fase 0",
        period: "Sep – Oct 2026",
        title: "Trabajar como la élite en mi trabajo actual",
        summary:
          "Costo cero, retorno inmediato y la primera línea de un CV de AI engineer. Cambiar cómo trabajo antes de cambiar qué estudio.",
        status: "active",
        progress: 35,
        focus: ["Claude Code", "Harness de agentes", "Revisión en CI"],
        milestones: [
          { label: "Adoptar plan → worktrees → verificación → revisión por riesgo en un proyecto real", status: "active" },
          { label: "Escribir y mantener el CLAUDE.md del repo", status: "done" },
          { label: "Configurar hooks, allow-lists de permisos y un comando /commit-push-pr", status: "active" },
          { label: "Sumar revisión con AI antes de la humana y medir el tiempo en revisión durante cuatro semanas", status: "planned" },
          { label: "Anthropic Academy: Claude Code in Action, MCP, Agent Skills y Subagents", status: "active" },
        ],
      },
      {
        id: "phase-1",
        eyebrow: "Fase 1",
        period: "Nov 2026 – Feb 2027",
        title: "Fundamentos en mi stack + primer proyecto real",
        summary:
          "Aprender bien la capa de API en TypeScript, sumar Python de producción y publicar un sistema de recuperación que un negocio real use.",
        status: "planned",
        progress: 0,
        focus: ["Claude API", "AI SDK v6", "FastAPI", "RAG"],
        milestones: [
          { label: "Anthropic Academy — Building with the Claude API (8h)", status: "planned" },
          { label: "AI SDK v6 Crash Course de Matt Pocock: agentes, tool calling, desarrollo guiado por evals", status: "planned" },
          { label: "Chip Huyen — AI Engineering", status: "planned" },
          { label: "Python de producción: FastAPI, Pydantic, async", status: "planned" },
          { label: "Spec de MCP 2026-07-28, de punta a punta", status: "planned" },
          { label: "Proyecto 1: RAG con recuperación híbrida, reranking, citas, set de 50 preguntas y Langfuse desde el día uno", status: "planned" },
        ],
      },
      {
        id: "phase-2",
        eyebrow: "Fase 2",
        period: "Mar – Jun 2027",
        title: "Evals y agentes — el diferenciador",
        summary:
          "La parte que casi todos los portafolios se saltan, y sobre la que giran las entrevistas senior.",
        status: "planned",
        progress: 0,
        focus: ["Evals", "LLM como juez", "Agent SDK", "Servidores MCP"],
        milestones: [
          { label: "Material gratuito de evals de Hamel Husain + el repo evals-skills", status: "planned" },
          { label: "Cursos de evals de W&B y DeepLearning.AI, Agentic AI de Andrew Ng", status: "planned" },
          { label: "Examen Claude Certified Developer", status: "planned" },
          { label: "Proyecto 2: harness de evals con taxonomía de fallos etiquetada y gate de regresión en CI", status: "planned" },
          { label: "Proyecto 3: servidor MCP para un sistema real, OAuth 2.1", status: "planned" },
          { label: "Proyecto 4: agente de back-office con el Claude Agent SDK, hooks de aprobación y costo por ejecución documentado", status: "planned" },
          { label: "AI Engineer Miami — 26–27 de abril de 2027", status: "planned" },
        ],
      },
      {
        id: "phase-3",
        eyebrow: "Fase 3",
        period: "Jul – Dic 2027",
        title: "Profundidad, visibilidad y primeras aplicaciones",
        summary:
          "Dejar de aprender en privado. Contribuir, publicar números y empezar a aplicar a puestos remotos de AI product engineer.",
        status: "planned",
        progress: 0,
        focus: ["Open source", "Escribir", "Búsqueda de empleo"],
        milestones: [
          { label: "Cursos de Agents y Context de Hugging Face, intro a LangGraph, intensivo de agentes de Google", status: "planned" },
          { label: "Proyecto 5: pipeline de extracción documental con UI de revisión humana", status: "planned" },
          { label: "Proyecto 6: agente de voz para un hackathon", status: "planned" },
          { label: "Proyecto 7: copiloto interno con dashboards de costo y latencia", status: "planned" },
          { label: "Contribuir a MCP, Langfuse, Promptfoo o Mastra", status: "planned" },
          { label: "Publicar tres posts técnicos con números reales", status: "planned" },
          { label: "Empezar a aplicar a puestos remotos de AI product engineer", status: "planned" },
        ],
      },
      {
        id: "years-2-3",
        eyebrow: "Años 2–3",
        period: "2028 – 2029",
        title: "Especialidad y perfil senior",
        summary:
          "Entender los modelos por dentro, elegir especialidad y hablar de un sistema mío que corre en producción.",
        status: "planned",
        progress: 0,
        focus: ["Fundamentos", "Arquitectura", "Charlas"],
        milestones: [
          { label: "Stanford CS336 y nanochat de Karpathy", status: "planned" },
          { label: "Los dos libros 'from scratch' de Raschka", status: "planned" },
          { label: "MOOC de Agentic AI de Berkeley", status: "planned" },
          { label: "Track Claude Certified Architect, si me muevo hacia arquitectura o consultoría", status: "planned" },
          { label: "Una charla de conferencia sobre un sistema mío en producción", status: "planned" },
        ],
      },
    ],
    gap: [
      { skill: "Evals y análisis de errores", note: "La brecha más citada. Datasets dorados, LLM como juez validado contra etiquetas humanas.", level: 15 },
      { skill: "Calidad de recuperación", note: "No solo 'RAG': búsqueda híbrida, reranking y nombrar los modos de fallo sin que te pregunten.", level: 30 },
      { skill: "Context engineering", note: "Compactación intencional y la zona tonta del contexto largo.", level: 40 },
      { skill: "Diseño de agentes acotados", note: "Incluye saber cuándo un workflow simple le gana a un agente.", level: 35 },
      { skill: "Economía de costo y latencia", note: "Ruteo de modelos, caché, salidas estructuradas.", level: 30 },
      { skill: "Seguridad en LLM", note: "Prompt injection, exfiltración vía herramientas, OWASP LLM Top 10.", level: 20 },
      { skill: "Observabilidad", note: "Trazas, versionado de prompts, drift, monitoreo de costo.", level: 25 },
      { skill: "Python de producción", note: "FastAPI, Pydantic, async. Mi stack es TypeScript primero.", level: 35 },
      { skill: "Pipelines documentales", note: "Chunking, OCR, extracción, deduplicación.", level: 20 },
      { skill: "Bases de fine-tuning", note: "Baja prioridad: sobre todo saber cuándo elegirlo antes que RAG o prompting.", level: 10 },
    ],
    projects: [
      { n: 1, title: "RAG sobre documentos de un negocio real", description: "Recuperación híbrida, reranking y citas sobre documentos de los que un negocio depende — no un corpus de demo.", stack: ["Next.js", "Vercel AI SDK", "pgvector", "Promptfoo"], status: "planned" },
      { n: 2, title: "Harness de evals para ese RAG", description: "Un juez LLM validado contra etiquetas humanas, con taxonomía de fallos etiquetada.", stack: ["Promptfoo", "Langfuse", "CI"], status: "planned" },
      { n: 3, title: "Servidor MCP para un sistema real", description: "OAuth 2.1, publicado en un registro y usado por algo más que mi laptop.", stack: ["MCP", "OAuth 2.1", "TypeScript"], status: "planned" },
      { n: 4, title: "Agente de back-office", description: "Facturas → extracción → validación → ERP, con hooks de aprobación y costo por ejecución documentado.", stack: ["Claude Agent SDK", "Hooks", "ERP"], status: "planned" },
      { n: 5, title: "Pipeline de extracción documental", description: "Puntajes de confianza y UI de revisión humana, porque extraer sin revisar es un pasivo.", stack: ["Python", "FastAPI", "OCR"], status: "planned" },
      { n: 6, title: "Agente de voz con tool calling", description: "Hecho para un hackathon, así la fecha límite es externa.", stack: ["Realtime API", "Tools"], status: "planned" },
      { n: 7, title: "Copiloto interno", description: "Spans de OpenTelemetry GenAI, SLOs de costo y latencia en un dashboard que alguien más lee.", stack: ["OTel", "Grafana", "Agent SDK"], status: "planned" },
    ],
    rituals: [
      { title: "Publicar en abierto", description: "Cada proyecto lleva repo, README con números reales y un post. Lo privado me enseña; lo público me contrata." },
      { title: "Evals antes que features", description: "Ninguna capacidad nueva entra sin algo que me avise si se degradó. Las vibras no son una suite de pruebas." },
      { title: "Un usuario real", description: "Cada proyecto apunta a un negocio o una persona real. Los corpus de demo esconden los fallos que preguntan en entrevistas." },
      { title: "Medir el número aburrido", description: "Tiempo en revisión, costo por ejecución, latencia p95. Una afirmación sin números es una opinión." },
      { title: "Agentes en repos reales", description: "Plan, worktrees, verificación y revisión por riesgo — en trabajo de producción, a diario, no en ejercicios." },
      { title: "Escribir el post en caliente", description: "Las notas se pudren rápido. Esta página existe para no reescribir la historia después." },
    ],
    signals: [
      { title: "Los evals como filtro de contratación", description: "Salir de las vibras: datasets dorados, LLM como juez validado contra humanos, suites de regresión con gate en CI.", verdict: "following" },
      { title: "'¿Qué se te ha roto?'", description: "La pregunta que abre casi toda entrevista senior. Vale la pena tener tres respuestas reales listas.", verdict: "following" },
      { title: "La zona horaria como ventaja real", description: "UTC-6 es US Central. Toda guía de nearshore la lista primero, y Honduras no aparece en ninguna guía de talento AI de LATAM.", verdict: "following" },
      { title: "La realidad de comprar en vez de construir", description: "76% de los casos de uso de AI empresarial se compran, no se construyen. Alguien tiene que integrarlos a procesos reales — ese es el trabajo.", verdict: "following" },
      { title: "'Un millón de líneas en una semana'", description: "Los equipos con throughput verificable lo atribuyen a linters, docs, tests y sandboxes — no a flotas de 30 agentes autónomos.", verdict: "ignoring" },
      { title: "Estadísticas de adopción autorreportadas", description: "'98% de los empleados usa X' y '47% del código lo escriben agentes' son percepción o datos de vendor.", verdict: "ignoring" },
      { title: "Capturas de sueldos FDE de $450K", description: "Solo laboratorios frontier, 55–70% en equity y casi siempre exigen presencia en US/UK/EU.", verdict: "ignoring" },
      { title: "El cohorte de evals de $4,200", description: "Fuera de presupuesto, y el material gratuito cubre casi todo. Certificaciones cloud solo si el stack de un empleador lo exige.", verdict: "ignoring" },
    ],
    log: [
      {
        date: "5 de septiembre de 2026",
        isoDate: "2026-09-05",
        title: "El roadmap se hace público",
        body: "Publiqué el post de investigación y lo convertí en esta página. Hacer visible el plan es la forma más barata de rendir cuentas que conozco.",
        tags: ["Fase 0", "Escribir"],
      },
      {
        date: "1 de septiembre de 2026",
        isoDate: "2026-09-01",
        title: "Arranca la Fase 0",
        body: "CLAUDE.md escrito para el repo principal del cliente. Siguen hooks y allow-lists de permisos, y luego cuatro semanas midiendo el tiempo en revisión.",
        tags: ["Fase 0", "Claude Code"],
      },
    ],
    emptyLog: "Todavía no hay entradas.",
  },
};

export function getRoadmapData(locale: Locale = DEFAULT_LOCALE): RoadmapData {
  return ROADMAP_DATA[locale] ?? ROADMAP_DATA[DEFAULT_LOCALE];
}
