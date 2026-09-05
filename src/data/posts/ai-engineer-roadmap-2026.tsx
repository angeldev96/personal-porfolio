/* eslint-disable react/no-unescaped-entities */
import React from "react";
import type { BlogPost } from "@/data/blog-data";

const code = "rounded bg-muted px-1.5 py-0.5 text-sm font-mono";
const h2 = "text-2xl font-bold mt-8 mb-4";
const h3 = "text-xl font-semibold mt-6 mb-3";
const ul = "mb-4 list-inside list-disc space-y-2";
const ol = "mb-4 list-inside list-decimal space-y-2";
const quote =
  "mb-4 border-l-4 border-primary/40 pl-4 italic text-foreground/70";
const link = "underline underline-offset-4 hover:text-foreground";

const SOURCES: { label: string; href: string; date: string }[] = [
  {
    label: "JetBrains Research — AI Coding Agents: Adoption Trends",
    href: "https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/",
    date: "Aug 19, 2026",
  },
  {
    label: "DeepLearning.AI — The AI Engineering Skills Map (Andrew Ng)",
    href: "https://www.deeplearning.ai/the-batch/the-ai-engineering-skills-map",
    date: "Aug 14, 2026",
  },
  {
    label: "Pragmatic Engineer — Charity Majors on AI for development",
    href: "https://newsletter.pragmaticengineer.com/p/stop-being-skeptical-about-ai-for",
    date: "Aug 12, 2026",
  },
  {
    label:
      "Latent Space — 5 Trends That Defined AI Engineering at World's Fair 2026",
    href: "https://www.latent.space/p/aiewf26trends",
    date: "Jul 14, 2026",
  },
  {
    label: "Chirag Hasija — How to Interview for an AI Engineer Role in 2026",
    href: "https://chiraghasija.cc/posts/how-to-interview-ai-engineer-role-2026/",
    date: "Jul 8, 2026",
  },
  {
    label:
      "Pragmatic Engineer — State of the software engineering job market in 2026",
    href: "https://newsletter.pragmaticengineer.com/p/state-of-the-job-market-2026",
    date: "May 26, 2026",
  },
  {
    label: "DORA — The ROI of AI-assisted Software Development",
    href: "https://dora.dev/ai/roi/report/",
    date: "May 11, 2026",
  },
  {
    label: "Faros AI — The Acceleration Whiplash",
    href: "https://www.faros.ai/blog/ai-acceleration-whiplash-takeaways",
    date: "Apr 12, 2026",
  },
  {
    label:
      "Axial Search — AI Engineering Jobs in 2026: A Data-Backed Market Map",
    href: "https://axialsearch.com/insights/ai-engineering-jobs",
    date: "Jan–Jul 2026 data",
  },
  {
    label: "Pragmatic Engineer — AI Tooling for Software Engineers in 2026",
    href: "https://newsletter.pragmaticengineer.com/p/ai-tooling-2026",
    date: "Mar 3, 2026",
  },
  {
    label: "Simon Willison — Agentic Engineering Patterns",
    href: "https://simonw.substack.com/p/agentic-engineering-patterns",
    date: "Feb 27, 2026",
  },
  {
    label: "Pragmatic Engineer — Mitchell Hashimoto's new way of writing code",
    href: "https://newsletter.pragmaticengineer.com/p/mitchell-hashimoto",
    date: "Feb 25, 2026",
  },
  {
    label: "METR — Changing our Developer Productivity Experiment Design",
    href: "https://metr.org/blog/2026-02-24-uplift-update/",
    date: "Feb 24, 2026",
  },
  {
    label:
      "OpenAI — Harness engineering: leveraging Codex in an agent-first world",
    href: "https://openai.com/index/harness-engineering/",
    date: "Feb 11, 2026",
  },
  {
    label: "Near — How to Hire a Nearshore AI Engineer from Latin America",
    href: "https://www.hirewithnear.com/blog/nearshore-ai-engineers",
    date: "Jul 23, 2026",
  },
  {
    label: "Anthropic Academy",
    href: "https://anthropic.skilljar.com/",
    date: "2026",
  },
  {
    label: "Hamel Husain — evals-skills for coding agents",
    href: "https://hamelhusain.substack.com/p/evals-skills-for-coding-agents",
    date: "Mar 2026",
  },
  {
    label: "Model Context Protocol — Specification 2026-07-28",
    href: "https://modelcontextprotocol.io/specification/2026-07-28",
    date: "Jul 28, 2026",
  },
];

function Sources({ title }: { title: string }) {
  return (
    <>
      <h2 className={h2}>{title}</h2>
      <ul className="mb-4 list-inside list-disc space-y-1.5 text-sm">
        {SOURCES.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              className={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>{" "}
            <span className="text-muted-foreground">({s.date})</span>
          </li>
        ))}
      </ul>
    </>
  );
}

const SLUG = "from-full-stack-to-ai-engineer-roadmap-2026";
const ISO_DATE = "2026-09-05";

export const aiEngineerRoadmapPostEn: BlogPost = {
  slug: SLUG,
  title:
    "From Full-Stack to AI Engineer: How the Elite Code in 2026 and My 3-Year Plan",
  excerpt:
    "I researched how top engineers orchestrate AI agents today, what an AI engineer actually does and gets hired for, and turned it into a concrete roadmap with courses, projects, and a budget.",
  date: "September 5, 2026",
  isoDate: ISO_DATE,
  tags: ["AI Engineering", "Career", "Claude Code", "Agents", "Evals"],
  readingTime: "14 min read",
  content: (
    <>
      <p className="mb-4">
        I have been a full-stack developer for years, and I have never seen the
        industry move this fast. The engineers I admire no longer spend their
        day typing code: they run several AI agents in parallel and spend most
        of their time planning and reviewing. At the same time, a new role, the
        "AI engineer", is absorbing much of what used to be product development.
      </p>
      <p className="mb-4">
        So I spent a day doing proper research: roughly eighty sources,
        prioritizing June to September 2026, and skeptical of anything that
        smelled like vendor marketing. This post is the result. It has three
        parts: how the elite actually work today, what an AI engineer is and
        gets hired for, and the plan I am following to get there over the next
        one to three years. If you are a web developer wondering where to point
        yourself, I hope it saves you some of the uncertainty I felt.
      </p>

      <h2 className={h2}>The verdict in five points</h2>
      <ol className={ol}>
        <li>
          <strong>
            The elite barely write code anymore; they plan, delegate, and
            verify.
          </strong>{" "}
          The dominant workflow is plan → 3–5 agents in isolated git worktrees →
          automatic verification (tests, CI, browser) → risk-based review →
          merge. But only 31% of professional developers are "agentic coders"
          (JetBrains, Aug 2026), so mastering this flow today is still a real
          advantage.
        </li>
        <li>
          <strong>
            "AI engineer" in 2026 means an engineer who builds products on top
            of models via API.
          </strong>{" "}
          RAG, agents with tools, evals, MCP servers, observability, and process
          automation. It is not ML research and it does not require training
          models.
        </li>
        <li>
          <strong>Demand is real and measurable.</strong> AI Engineer is the
          fastest-growing role in the US according to LinkedIn (Jan 2026); there
          were 43,480 US "AI engineering" postings between January and July 2026
          with a median posted salary of $176K; Forward Deployed Engineer
          postings grew 729% year over year (Indeed, Apr 2026).
        </li>
        <li>
          <strong>
            The gap for a full-stack developer is narrower than it looks, but
            concrete.
          </strong>{" "}
          We already have what 95% of postings ask for as a base. What is
          missing: evals and error analysis (the #1 interview signal), retrieval
          quality, context engineering, bounded agent design, cost and latency
          economics, LLM security, and "production-grade" Python.
        </li>
        <li>
          <strong>
            The best-fitting path for a JS/TS developer is "AI product
            engineer".
          </strong>{" "}
          It is the profile Stripe, Vercel, and product startups post
          (TypeScript accepted, Python as a second language), it is more often
          remote, and it is the natural door into Applied AI.
        </li>
      </ol>

      <h2 className={h2}>How the elite code in September 2026</h2>
      <h3 className={h3}>The tools, by weekly use</h3>
      <p className="mb-4">
        JetBrains surveyed more than 15,000 professional developers between May
        and July 2026: 90% use AI coding agents at least weekly, and 68% daily.
        Claude Code leads with 39% weekly use, followed by GitHub Copilot at 21%
        (down from 29%), OpenAI Codex at 16% (up from 3% in January), Cursor at
        12% (down from 18%), OpenCode at 7%, and Antigravity at 6%. Among senior
        engineers the skew is stronger: in the Pragmatic Engineer survey (March
        2026, median 11–15 years of experience) Claude Code is both the most
        used and the most "loved" tool, and 63.5% of Staff+ engineers use agents
        regularly.
      </p>

      <h3 className={h3}>
        The workflow that repeats in every first-hand account
      </h3>
      <p className="mb-4">
        Boris Cherny (creator of Claude Code), OpenAI's "harness engineering"
        team, Mitchell Hashimoto, Simon Willison, Thorsten Ball, and Addy Osmani
        describe, with variations, the same working day:
      </p>
      <ol className={ol}>
        <li>
          <strong>Queue background work first thing.</strong> Three to five
          tasks in cloud agents (Codex cloud, Claude Code web, Cursor cloud):
          maintenance, research, library comparisons, migrations.
        </li>
        <li>
          <strong>Specify before implementing.</strong> Plan mode or a{" "}
          <code className={code}>spec.md</code> iterated with the agent until
          the plan is convincing; often a <em>fresh</em> session critiques the
          plan "as a senior engineer" before approval (the Research → Plan →
          Implement → Review pattern).
        </li>
        <li>
          <strong>Launch 2–5 local agents in isolated worktrees.</strong> One
          git worktree per agent and per orthogonal task, named sessions,
          notifications when one needs input. Cherny runs about five terminals
          plus 5–10 web sessions; Osmani warns that 3–4 in parallel is already
          "mentally taxing".
        </li>
        <li>
          <strong>Every agent gets a verification loop.</strong> Anthropic's
          number one tip: tests (red/green TDD),{" "}
          <code className={code}>curl</code> against the API, a browser through
          Chrome DevTools MCP, lint and typecheck hooks. "Tests are no longer
          even remotely optional" (Willison).
        </li>
        <li>
          <strong>
            AI review before human review, and human review by risk.
          </strong>{" "}
          A different model in a fresh session reviews first; the human reads
          line by line only for auth, payments, secrets, or "when the blast
          radius would be huge" (Ball). PRs of 250 lines or fewer are a common
          gate.
        </li>
        <li>
          <strong>Encode taste into the repo.</strong> A short{" "}
          <code className={code}>CLAUDE.md</code> /{" "}
          <code className={code}>AGENTS.md</code> (about 100 lines, an index
          into <code className={code}>docs/</code>), skills with exit criteria,
          custom linters that enforce the architecture, and updating those files
          with every mistake the agent makes.
        </li>
      </ol>
      <blockquote className={quote}>
        "If I'm coding, I want an agent planning. If they're coding, I want to
        be reviewing." — Mitchell Hashimoto, February 2026
      </blockquote>
      <blockquote className={quote}>
        "Humans steer, agents execute. Corrections are cheap, and waiting is
        expensive." — OpenAI, "Harness engineering", February 2026. A team of
        3→7 engineers shipped ~1M lines and ~1,500 PRs in five months, all
        written by Codex.
      </blockquote>

      <h3 className={h3}>
        What it is costing (the part nobody puts in the pitch)
      </h3>
      <p className="mb-4">
        Faros AI's telemetry across 22,000 developers (April 2026) shows median
        time in review up 441%, incidents per PR up 243%, and bugs per developer
        up 54%. METR's follow-up study (February 2026) could not distinguish the
        productivity gain from zero and declared its own design compromised.
        DORA (May 2026) measures 35–40% gains on simple tasks but 10% or less on
        complex legacy code, and calls the dip the "J-curve" and the
        "instability tax". On security, 2026 brought a prompt-injection CVE in
        Claude Code's GitHub Action, the "Clinejection" supply-chain compromise,
        and "slopsquatting": about 20% of the packages agents recommend do not
        exist.
      </p>
      <p className="mb-4">
        The takeaway for me: the scarce skill is not "using Claude Code". It is
        designing the harness (verification, review, permissions, docs, evals)
        that makes five agents produce code you can defend in production. That
        is what Anthropic, OpenAI, and the AI Engineer World's Fair now call{" "}
        <strong>harness engineering</strong>, and it is the first phase of my
        plan.
      </p>

      <h2 className={h2}>What an AI engineer actually is</h2>
      <p className="mb-4">
        swyx coined the term in 2023 as "the engineer on the application side of
        the API line": to the left of the line, people train models; to the
        right, people build products with them. By 2026, the AI Engineer World's
        Fair (6,000+ attendees) and Andrew Ng's "AI Engineering Skills Map"
        (August 2026) treat it less as a niche and more as{" "}
        <em>where all software engineering is heading</em>. Ng's four skill
        areas: building and deploying AI applications, software engineering
        fundamentals, using coding agents, and "shaping the build" (product
        judgment).
      </p>

      <h3 className={h3}>The titles, decoded</h3>
      <ul className={ul}>
        <li>
          <strong>AI Engineer / LLM Engineer:</strong> builds apps on foundation
          models (RAG, agents, evals, serving). Python in 62% of postings.
        </li>
        <li>
          <strong>AI Product Engineer / Full-stack AI Engineer:</strong> a
          full-stack developer whose features are LLM-powered; owns UX, backend,
          prompts, and evals. Next.js/TS plus Node or Python. Posted by product
          startups, the Vercel ecosystem, Stripe.
        </li>
        <li>
          <strong>Applied AI Engineer:</strong> same as AI engineer but
          customer-adjacent (labs) or embedded in product.
        </li>
        <li>
          <strong>Forward Deployed Engineer (FDE):</strong> embeds with a
          customer and ships LLM apps in their environment; about 60%
          customer-facing, 25–50% travel. Palantir, OpenAI, Anthropic,
          Databricks, Sierra, Harvey.
        </li>
        <li>
          <strong>Agent Engineer:</strong> builds the agents themselves: tool
          use, planning loops, memory, evals.
        </li>
        <li>
          <strong>AgentOps / LLMOps / AI Platform:</strong> runs agents in
          production: tracing, eval pipelines, cost, latency, guardrails.
        </li>
        <li>
          <strong>ML Engineer:</strong> trains, fine-tunes, and serves models. A
          different job.
        </li>
      </ul>

      <h3 className={h3}>What they build and what interviews test</h3>
      <p className="mb-4">
        From real postings: RAG and search over company documents, internal
        copilots and back-office automation over CRM/ERP systems, document
        extraction pipelines (where much of the enterprise value is, not chat),
        customer support and voice agents, coding-agent harnesses, and vertical
        copilots for legal, health, and finance. Stripe's current "AI Engineer"
        posting is a good template: "ship code daily", build internal tools and
        agent-driven automation, know two of Ruby/Node/Python/Next.js, and use
        AI tools in your own workflow. A full-stack JS/TS developer already
        qualifies.
      </p>
      <p className="mb-4">
        Interviews in 2026 weigh four things: evals (moving "beyond vibes" to
        golden datasets, LLM-as-judge validated against human labels, regression
        suites gated in CI), naming RAG failure modes unprompted, judgment about
        when <em>not</em> to build an agent, and cost and latency reasoning
        ("halve the cost of this feature without degrading quality"). And the
        question that opens almost every senior interview: "what has gone wrong
        for you?"
      </p>

      <h2 className={h2}>The market, and remote from Honduras</h2>
      <p className="mb-4">
        Of those 43,480 US postings, 48% are hybrid, 32% fully remote, and 20%
        on-site; 66% are individual-contributor roles. The largest hiring sector
        is professional services (28%), ahead of technology companies (24%): 76%
        of enterprise AI use cases are bought rather than built (Menlo
        Ventures), so somebody has to integrate them into real processes.
        Pragmatic Engineer (May 2026) reports big tech has 50–100% more AI
        engineering listings than a year ago, and that AI engineering
        compensation now exceeds software engineering compensation.
      </p>
      <p className="mb-4">
        The uncomfortable but useful part: Honduras does not appear in any LATAM
        AI-talent guide (Mexico, Argentina, Brazil, Colombia, and Costa Rica
        do). A senior "LATAM remote" AI engineer is quoted at roughly $66K–96K,
        versus $145K–190K for US startup roles that accept contractors abroad,
        and $200K–300K+ for lab FDE roles that mostly require US/UK/EU presence.
        The objective advantage from here is the time zone: UTC-6 is US Central,
        which every nearshore guide lists first. The overall software market is
        soft but "tilting toward seniority" (Indeed Hiring Lab, July 2026).
      </p>
      <blockquote className={quote}>
        "Run towards the waves, and get AI on your resume, immediately… you'll
        be filtered out if you don't have AI experience." — Charity Majors,
        August 2026
      </blockquote>

      <h2 className={h2}>My gap, in order of importance</h2>
      <p className="mb-4">
        What I already have and postings require: production shipping, APIs,
        cloud and CI/CD, TypeScript/Node/React/Next.js, internal tools and
        workflow automation, fluency with coding agents, and product judgment.
        What I am missing, ordered by how often hiring sources cite it:
      </p>
      <ol className={ol}>
        <li>Evals and error analysis.</li>
        <li>
          Retrieval quality, not just "RAG": hybrid search, reranking, failure
          modes.
        </li>
        <li>
          Context engineering: intentional compaction, the long-context "dumb
          zone".
        </li>
        <li>
          Bounded agent design, and knowing when a workflow beats an agent.
        </li>
        <li>
          Cost and latency economics: model routing, caching, structured
          outputs.
        </li>
        <li>
          Security: prompt injection, exfiltration through tools, the OWASP LLM
          Top 10.
        </li>
        <li>
          Observability: tracing, prompt versioning, drift, cost monitoring.
        </li>
        <li>Production-grade Python: FastAPI, Pydantic, async.</li>
        <li>Document pipelines: chunking, OCR, extraction, deduplication.</li>
        <li>
          Fine-tuning basics (low priority): knowing when to choose it over RAG
          or prompting.
        </li>
      </ol>

      <h2 className={h2}>The roadmap, 2026–2029</h2>
      <h3 className={h3}>
        Phase 0 · September–October 2026 · Work like the elite at my current job
      </h3>
      <p className="mb-4">
        Zero cost, immediate return, and the first line of an AI engineer
        résumé. Adopt plan → worktrees → verification → risk-based review on a
        real project; write and maintain the repo's{" "}
        <code className={code}>CLAUDE.md</code>; set up hooks, permission
        allow-lists, and a <code className={code}>/commit-push-pr</code>{" "}
        command; add AI review before human review and measure time-in-review
        for four weeks. Training: Anthropic Academy (Claude Code in Action, MCP
        intro and advanced, Agent Skills and Subagents) and Anthropic's
        engineering posts on effective agents, context engineering, evals, and
        harness design. All free.
      </p>

      <h3 className={h3}>
        Phase 1 · November 2026–February 2027 · Fundamentals in my stack + first
        real project
      </h3>
      <p className="mb-4">
        Anthropic Academy's "Building with the Claude API" (8 hours), Matt
        Pocock's AI SDK v6 Crash Course (the TypeScript AI course: agents, tool
        calling, eval-driven development, guardrails), Chip Huyen's{" "}
        <em>AI Engineering</em>, production Python with FastAPI and Pydantic,
        and the MCP 2026-07-28 spec. Project 1: RAG over the documents of a
        business I help, with hybrid retrieval, reranking, citations, and a
        50-question eval set, instrumented with Langfuse from day one.
      </p>

      <h3 className={h3}>
        Phase 2 · March–June 2027 · Evals and agents, the differentiator
      </h3>
      <p className="mb-4">
        Hamel Husain's free evals material and his{" "}
        <code className={code}>evals-skills</code> repo, the W&B and
        DeepLearning.AI eval courses, Andrew Ng's Agentic AI course, OpenAI's
        "Building Agents" track for breadth, and the Claude Certified Developer
        exam. Projects 2–4: an eval harness with a labeled failure taxonomy and
        a CI regression gate; an MCP server for a real system with OAuth 2.1;
        and a back-office agent built with the Claude Agent SDK, with approval
        hooks and documented cost per run. AI Engineer Miami (April 26–27, 2027)
        is the closest industry event.
      </p>

      <h3 className={h3}>
        Phase 3 · July–December 2027 · Depth, visibility, first applications
      </h3>
      <p className="mb-4">
        Hugging Face's Agents and Context courses, LangGraph's intro for
        durable-state concepts, Google's agents intensive. Projects 5–7: a
        document extraction pipeline with a human review UI, a voice agent for a
        hackathon, and an internal copilot with cost and latency dashboards.
        Contribute to MCP, Langfuse, Promptfoo, or Mastra; publish three
        technical posts with real numbers; start applying to remote AI product
        engineer roles.
      </p>

      <h3 className={h3}>
        Years 2–3 · 2028–2029 · Specialty and senior profile
      </h3>
      <p className="mb-4">
        Stanford CS336 and Karpathy's nanochat to understand models from the
        inside, Raschka's two "from scratch" books, the Berkeley Agentic AI
        MOOC, the Claude Certified Architect track if I move toward architecture
        or consulting, and a conference talk about a system of mine in
        production.
      </p>

      <h3 className={h3}>Budget</h3>
      <p className="mb-4">
        The core costs about $675–885 over twelve months: the AI SDK course
        ($149), Huyen's book (~$50), two months of DeepLearning.AI Pro
        (~$50–60), the CCDV-F exam ($125), and $300–500 in API credits for seven
        projects with eval suites. The $4,200 evals cohort on Maven is out of
        budget and its free material covers most of it; cloud certifications
        only if an employer's stack demands them.
      </p>

      <h2 className={h2}>The seven portfolio projects</h2>
      <p className="mb-4">
        In this order, each with an eval suite and traces, because that
        combination <em>is</em> the portfolio:
      </p>
      <ol className={ol}>
        <li>
          RAG over a real business's documents (Next.js, Vercel AI SDK,
          pgvector, Promptfoo).
        </li>
        <li>
          An eval harness for that RAG, with an LLM judge validated against
          human labels.
        </li>
        <li>
          An MCP server for a real system, OAuth 2.1, published to a registry.
        </li>
        <li>
          A back-office agent: invoices → extraction → validation → ERP, with
          approval hooks.
        </li>
        <li>
          A document extraction pipeline with confidence scores and a human
          review UI.
        </li>
        <li>A voice agent with tool calling.</li>
        <li>
          An internal copilot with OpenTelemetry GenAI spans and cost/latency
          SLOs.
        </li>
      </ol>

      <h2 className={h2}>What not to believe</h2>
      <ul className={ul}>
        <li>
          <strong>"Stack Overflow 2026 results":</strong> the survey opened June
          23 and has not published results; articles quoting "2026" numbers
          recycle 2025 data.
        </li>
        <li>
          <strong>"A million lines in a week" and fleets of 30 agents:</strong>{" "}
          the teams with verifiable throughput credit linters, docs, tests, and
          sandboxes, not autonomy.
        </li>
        <li>
          <strong>Self-reported adoption figures:</strong> "98% of OpenAI
          employees use Codex" and "47% of code is agent-written" are perception
          or vendor data; independent telemetry shows the cost side.
        </li>
        <li>
          <strong>$450K+ FDE salaries:</strong> frontier labs only, with 55–70%
          in equity. FDE and AI roles at ServiceNow, Stripe, or startups sit at
          $130K–235K base.
        </li>
        <li>
          <strong>"Software development will stop mattering":</strong> what
          depreciates is code as the bottleneck. What appreciates is system
          design, verification, product judgment, and integration into business
          processes. swyx: "LLMs reward expertise; they raise the ceiling much
          more than they raise the floor."
        </li>
      </ul>
      <p className="mb-4">
        I will update this post as I move through the phases. If you are on a
        similar path, I would love to compare notes.
      </p>

      <Sources title="Sources" />
    </>
  ),
};

export const aiEngineerRoadmapPostEs: BlogPost = {
  slug: SLUG,
  title:
    "De Full-Stack a AI Engineer: Cómo Programa la Élite en 2026 y Mi Plan a 3 Años",
  excerpt:
    "Investigué cómo orquestan agentes de IA los mejores ingenieros hoy, qué hace en concreto un AI engineer y para qué lo contratan, y lo convertí en un roadmap con cursos, proyectos y presupuesto.",
  date: "5 de septiembre, 2026",
  isoDate: ISO_DATE,
  tags: ["AI Engineering", "Carrera", "Claude Code", "Agentes", "Evals"],
  readingTime: "14 min de lectura",
  content: (
    <>
      <p className="mb-4">
        Llevo años como desarrollador full-stack y nunca había visto a la
        industria moverse tan rápido. Los ingenieros que admiro ya no pasan el
        día escribiendo código: corren varios agentes de IA en paralelo y
        dedican casi todo su tiempo a planificar y revisar. Al mismo tiempo, un
        rol nuevo, el "AI engineer", está absorbiendo buena parte de lo que
        antes era desarrollo de producto.
      </p>
      <p className="mb-4">
        Así que dediqué un día a investigar en serio: unas ochenta fuentes,
        priorizando junio a septiembre de 2026 y desconfiando de todo lo que
        oliera a marketing de proveedor. Este post es el resultado. Tiene tres
        partes: cómo trabaja de verdad la élite hoy, qué es un AI engineer y
        para qué lo contratan, y el plan que estoy siguiendo para llegar ahí en
        los próximos uno a tres años. Si eres desarrollador web y te preguntas
        hacia dónde apuntar, espero que te ahorre parte de la incertidumbre que
        yo sentí.
      </p>

      <h2 className={h2}>El veredicto en cinco puntos</h2>
      <ol className={ol}>
        <li>
          <strong>
            La élite ya casi no escribe código; planifica, delega y verifica.
          </strong>{" "}
          El flujo dominante es plan → 3–5 agentes en git worktrees aislados →
          verificación automática (tests, CI, navegador) → revisión por riesgo →
          merge. Pero solo el 31% de los desarrolladores profesionales son
          "agentic coders" (JetBrains, ago 2026): dominar este flujo hoy sigue
          siendo una ventaja real.
        </li>
        <li>
          <strong>
            "AI engineer" en 2026 es un ingeniero que construye productos sobre
            modelos vía API.
          </strong>{" "}
          RAG, agentes con herramientas, evals, servidores MCP, observabilidad y
          automatización de procesos. No es investigación de ML y no requiere
          entrenar modelos.
        </li>
        <li>
          <strong>La demanda es real y medible.</strong> AI Engineer es el rol
          de mayor crecimiento en EE. UU. según LinkedIn (ene 2026); hubo 43,480
          vacantes de "AI engineering" en EE. UU. entre enero y julio de 2026
          con salario mediano publicado de US$176K; las vacantes de Forward
          Deployed Engineer crecieron 729% interanual (Indeed, abr 2026).
        </li>
        <li>
          <strong>
            La brecha para un full-stack es más estrecha de lo que parece, pero
            concreta.
          </strong>{" "}
          Ya tenemos lo que el 95% de las vacantes pide como base. Falta: evals
          y análisis de errores (la señal #1 en entrevistas), calidad de
          retrieval, context engineering, diseño de agentes acotados, economía
          de costo y latencia, seguridad de LLMs y Python "productivo".
        </li>
        <li>
          <strong>
            La ruta con mejor encaje para un dev JS/TS es "AI product engineer".
          </strong>{" "}
          Es el perfil que publican Stripe, Vercel y las startups de producto
          (TypeScript aceptado, Python como segundo lenguaje), es remoto con más
          frecuencia y es la puerta natural hacia Applied AI.
        </li>
      </ol>

      <h2 className={h2}>Cómo programa la élite en septiembre de 2026</h2>
      <h3 className={h3}>Las herramientas, por uso semanal</h3>
      <p className="mb-4">
        JetBrains encuestó a más de 15,000 desarrolladores profesionales entre
        mayo y julio de 2026: el 90% usa agentes de código al menos semanalmente
        y el 68% a diario. Claude Code lidera con 39% de uso semanal, seguido de
        GitHub Copilot con 21% (bajó de 29%), OpenAI Codex con 16% (subió de 3%
        en enero), Cursor con 12% (bajó de 18%), OpenCode con 7% y Antigravity
        con 6%. Entre ingenieros senior el sesgo es mayor: en la encuesta de
        Pragmatic Engineer (marzo 2026, mediana de 11–15 años de experiencia)
        Claude Code es la herramienta más usada y más "amada", y el 63.5% de los
        Staff+ usa agentes de forma regular.
      </p>

      <h3 className={h3}>
        El flujo que se repite en todos los relatos de primera mano
      </h3>
      <p className="mb-4">
        Boris Cherny (creador de Claude Code), el equipo de "harness
        engineering" de OpenAI, Mitchell Hashimoto, Simon Willison, Thorsten
        Ball y Addy Osmani describen, con variaciones, el mismo día de trabajo:
      </p>
      <ol className={ol}>
        <li>
          <strong>Encolar trabajo de fondo al empezar el día.</strong> Tres a
          cinco tareas en agentes en la nube (Codex cloud, Claude Code web,
          Cursor cloud): mantenimiento, investigación, comparaciones de
          librerías, migraciones.
        </li>
        <li>
          <strong>Especificar antes de implementar.</strong> Plan mode o un{" "}
          <code className={code}>spec.md</code> iterado con el agente hasta que
          el plan convence; a menudo una sesión <em>nueva</em> critica el plan
          "como ingeniero senior" antes de aprobarlo (el patrón Research → Plan
          → Implement → Review).
        </li>
        <li>
          <strong>Lanzar 2–5 agentes locales en worktrees aislados.</strong> Un
          git worktree por agente y por tarea ortogonal, sesiones con nombre,
          notificaciones cuando alguna necesita input. Cherny corre unas cinco
          terminales más 5–10 sesiones web; Osmani advierte que 3–4 en paralelo
          ya es "mentalmente agotador".
        </li>
        <li>
          <strong>Cada agente tiene un bucle de verificación.</strong> El
          consejo número uno de Anthropic: tests (TDD rojo/verde),{" "}
          <code className={code}>curl</code> contra la API, navegador vía Chrome
          DevTools MCP, hooks de lint y typecheck. "Los tests ya no son ni
          remotamente opcionales" (Willison).
        </li>
        <li>
          <strong>
            Revisión por IA antes que humana, y humana por riesgo.
          </strong>{" "}
          Un modelo distinto en sesión fresca revisa primero; el humano lee
          línea por línea solo en auth, pagos, secretos o "cuando el radio de
          explosión sería enorme" (Ball). PRs de 250 líneas o menos como puerta
          habitual.
        </li>
        <li>
          <strong>Codificar el "gusto" en el repo.</strong> Un{" "}
          <code className={code}>CLAUDE.md</code> /{" "}
          <code className={code}>AGENTS.md</code> corto (unas 100 líneas, índice
          hacia <code className={code}>docs/</code>), skills con criterios de
          salida, linters propios que hacen cumplir la arquitectura, y
          actualizar esos archivos con cada error que comete el agente.
        </li>
      </ol>
      <blockquote className={quote}>
        "Si yo estoy programando, quiero un agente planificando. Si ellos están
        programando, quiero estar revisando." — Mitchell Hashimoto, febrero 2026
      </blockquote>
      <blockquote className={quote}>
        "Los humanos dirigen, los agentes ejecutan. Las correcciones son baratas
        y esperar es caro." — OpenAI, "Harness engineering", febrero 2026. Un
        equipo de 3→7 ingenieros entregó ~1M de líneas y ~1,500 PRs en cinco
        meses, todo escrito por Codex.
      </blockquote>

      <h3 className={h3}>
        Lo que está costando (la parte que nadie pone en el pitch)
      </h3>
      <p className="mb-4">
        La telemetría de Faros AI sobre 22,000 desarrolladores (abril 2026)
        muestra el tiempo mediano en revisión +441%, los incidentes por PR +243%
        y los bugs por desarrollador +54%. El estudio de seguimiento de METR
        (febrero 2026) no pudo distinguir la ganancia de productividad de cero y
        declaró comprometido su propio diseño. DORA (mayo 2026) mide mejoras de
        35–40% en tareas simples pero de 10% o menos en código legacy complejo,
        y llama al bache "curva J" e "impuesto de inestabilidad". En seguridad,
        2026 trajo un CVE de inyección de prompt en la GitHub Action de Claude
        Code, el compromiso de cadena de suministro "Clinejection" y el
        "slopsquatting": cerca del 20% de los paquetes que recomiendan los
        agentes no existen.
      </p>
      <p className="mb-4">
        Mi conclusión: la habilidad escasa no es "usar Claude Code". Es diseñar
        el harness (verificación, revisión, permisos, docs, evals) que hace que
        cinco agentes produzcan código que puedas defender en producción. Eso es
        lo que Anthropic, OpenAI y el AI Engineer World's Fair llaman ahora{" "}
        <strong>harness engineering</strong>, y es la primera fase de mi plan.
      </p>

      <h2 className={h2}>Qué es en realidad un AI engineer</h2>
      <p className="mb-4">
        swyx acuñó el término en 2023 como "el ingeniero del lado de la
        aplicación de la línea de la API": a la izquierda de la línea se
        entrenan modelos; a la derecha se construyen productos con ellos. Para
        2026, el AI Engineer World's Fair (más de 6,000 asistentes) y el "AI
        Engineering Skills Map" de Andrew Ng (agosto 2026) lo tratan menos como
        un nicho y más como{" "}
        <em>hacia dónde va toda la ingeniería de software</em>. Las cuatro áreas
        de Ng: construir y desplegar aplicaciones de IA, fundamentos de
        ingeniería de software, usar agentes de código y "shaping the build"
        (criterio de producto).
      </p>

      <h3 className={h3}>Los títulos, descifrados</h3>
      <ul className={ul}>
        <li>
          <strong>AI Engineer / LLM Engineer:</strong> construye apps sobre
          modelos fundacionales (RAG, agentes, evals, serving). Python aparece
          en el 62% de las vacantes.
        </li>
        <li>
          <strong>AI Product Engineer / Full-stack AI Engineer:</strong> un
          full-stack cuyas features son LLM; es dueño de UX, backend, prompts y
          evals. Next.js/TS más Node o Python. Lo publican startups de producto,
          el ecosistema Vercel y Stripe.
        </li>
        <li>
          <strong>Applied AI Engineer:</strong> igual que AI engineer pero cerca
          del cliente (labs) o embebido en producto.
        </li>
        <li>
          <strong>Forward Deployed Engineer (FDE):</strong> se embebe con un
          cliente y despliega LLM apps en su entorno; ~60% cara al cliente,
          25–50% de viajes. Palantir, OpenAI, Anthropic, Databricks, Sierra,
          Harvey.
        </li>
        <li>
          <strong>Agent Engineer:</strong> construye los agentes en sí: tool
          use, bucles de planificación, memoria, evals.
        </li>
        <li>
          <strong>AgentOps / LLMOps / AI Platform:</strong> opera agentes en
          producción: trazas, pipelines de evals, costo, latencia, guardrails.
        </li>
        <li>
          <strong>ML Engineer:</strong> entrena, ajusta y sirve modelos. Es otro
          trabajo.
        </li>
      </ul>

      <h3 className={h3}>Qué construyen y qué evalúan las entrevistas</h3>
      <p className="mb-4">
        Según vacantes reales: RAG y búsqueda sobre documentos de la empresa,
        copilotos internos y automatización de back-office sobre CRM/ERP,
        pipelines de extracción de documentos (donde está gran parte del valor
        empresarial, no en el chat), agentes de soporte y de voz, harness de
        agentes de código y copilotos verticales para legal, salud y finanzas.
        La vacante actual de "AI Engineer" de Stripe es un buen molde: "ship
        code daily", construir herramientas internas y automatización con
        agentes, saber dos de Ruby/Node/Python/Next.js y usar herramientas de IA
        en tu propio flujo. Un full-stack JS/TS ya califica.
      </p>
      <p className="mb-4">
        Las entrevistas de 2026 pesan cuatro cosas: evals (pasar "de las vibras"
        a sets dorados, LLM-as-judge validado contra etiquetas humanas, suites
        de regresión con puerta en CI), nombrar modos de fallo de RAG sin que te
        los pregunten, criterio sobre cuándo <em>no</em> construir un agente, y
        razonamiento de costo y latencia ("reduce el costo de esta feature a la
        mitad sin degradar calidad"). Y la pregunta que abre casi toda
        entrevista senior: "¿qué te ha salido mal?"
      </p>

      <h2 className={h2}>El mercado, y trabajar remoto desde Honduras</h2>
      <p className="mb-4">
        De esas 43,480 vacantes en EE. UU., 48% son híbridas, 32% totalmente
        remotas y 20% presenciales; 66% son roles de contribuidor individual. El
        mayor sector contratante es servicios profesionales (28%), por encima de
        las empresas tecnológicas (24%): el 76% de los casos de uso
        empresariales de IA se compran en vez de construirse (Menlo Ventures),
        así que alguien tiene que integrarlos a los procesos reales. Pragmatic
        Engineer (mayo 2026) reporta que las grandes tecnológicas tienen 50–100%
        más vacantes de AI engineering que hace un año, y que la compensación de
        AI engineering ya supera a la de software engineering.
      </p>
      <p className="mb-4">
        La parte incómoda pero útil: Honduras no aparece en ninguna guía de
        talento de IA en LATAM (sí México, Argentina, Brasil, Colombia y Costa
        Rica). Un AI engineer senior contratado como "LATAM remoto" se cotiza en
        unos US$66K–96K, frente a US$145K–190K en roles de startups de EE. UU.
        que aceptan contratistas en el extranjero, y US$200K–300K+ en roles FDE
        de labs que casi siempre exigen presencia en EE. UU., UK o UE. La
        ventaja objetiva desde aquí es la zona horaria: UTC-6 es la hora Central
        de EE. UU., que todas las guías nearshore ponen primero. El mercado
        general de software está blando pero "inclinándose hacia la seniority"
        (Indeed Hiring Lab, julio 2026).
      </p>
      <blockquote className={quote}>
        "Corre hacia las olas y pon IA en tu CV, de inmediato… te filtrarán si
        no tienes experiencia con IA." — Charity Majors, agosto 2026
      </blockquote>

      <h2 className={h2}>Mi brecha, en orden de importancia</h2>
      <p className="mb-4">
        Lo que ya tengo y las vacantes exigen: shipping en producción, APIs,
        cloud y CI/CD, TypeScript/Node/React/Next.js, herramientas internas y
        automatización de flujos, fluidez con agentes de código y criterio de
        producto. Lo que me falta, ordenado por la frecuencia con que lo citan
        las fuentes de contratación:
      </p>
      <ol className={ol}>
        <li>Evals y análisis de errores.</li>
        <li>
          Calidad de retrieval, no solo "RAG": búsqueda híbrida, reranking,
          modos de fallo.
        </li>
        <li>
          Context engineering: compactación intencional, la "zona tonta" del
          contexto largo.
        </li>
        <li>
          Diseño de agentes acotados, y saber cuándo un flujo le gana a un
          agente.
        </li>
        <li>
          Economía de costo y latencia: routing de modelos, caché, salidas
          estructuradas.
        </li>
        <li>
          Seguridad: inyección de prompt, exfiltración vía herramientas, OWASP
          LLM Top 10.
        </li>
        <li>
          Observabilidad: trazas, versionado de prompts, drift, monitoreo de
          costo.
        </li>
        <li>Python productivo: FastAPI, Pydantic, async.</li>
        <li>
          Pipelines de documentos: chunking, OCR, extracción, deduplicación.
        </li>
        <li>
          Fine-tuning básico (prioridad baja): saber cuándo elegirlo sobre RAG o
          prompting.
        </li>
      </ol>

      <h2 className={h2}>El roadmap, 2026–2029</h2>
      <h3 className={h3}>
        Fase 0 · septiembre–octubre 2026 · Trabajar como la élite en mi empleo
        actual
      </h3>
      <p className="mb-4">
        Costo cero, retorno inmediato y la primera línea de un CV de AI
        engineer. Adoptar plan → worktrees → verificación → revisión por riesgo
        en un proyecto real; escribir y mantener el{" "}
        <code className={code}>CLAUDE.md</code> del repo; configurar hooks,
        allow-lists de permisos y un comando{" "}
        <code className={code}>/commit-push-pr</code>; agregar revisión por IA
        antes de la humana y medir el tiempo en revisión durante cuatro semanas.
        Formación: Anthropic Academy (Claude Code in Action, MCP intro y
        avanzado, Agent Skills y Subagents) y los posts de ingeniería de
        Anthropic sobre agentes efectivos, context engineering, evals y diseño
        de harness. Todo gratis.
      </p>

      <h3 className={h3}>
        Fase 1 · noviembre 2026–febrero 2027 · Fundamentos en mi stack + primer
        proyecto real
      </h3>
      <p className="mb-4">
        "Building with the Claude API" de Anthropic Academy (8 horas), el AI SDK
        v6 Crash Course de Matt Pocock (el curso de IA en TypeScript: agentes,
        tool calling, desarrollo guiado por evals, guardrails),{" "}
        <em>AI Engineering</em> de Chip Huyen, Python productivo con FastAPI y
        Pydantic, y la especificación MCP 2026-07-28. Proyecto 1: RAG sobre los
        documentos de un negocio que ayudo, con retrieval híbrido, reranking,
        citas y un set de evaluación de 50 preguntas, instrumentado con Langfuse
        desde el día uno.
      </p>

      <h3 className={h3}>
        Fase 2 · marzo–junio 2027 · Evals y agentes, el diferenciador
      </h3>
      <p className="mb-4">
        El material gratuito de evals de Hamel Husain y su repo{" "}
        <code className={code}>evals-skills</code>, los cursos de evals de W&B y
        DeepLearning.AI, el curso Agentic AI de Andrew Ng, el track "Building
        Agents" de OpenAI para amplitud, y el examen Claude Certified Developer.
        Proyectos 2–4: un harness de evals con taxonomía de fallos etiquetada y
        puerta de regresión en CI; un servidor MCP para un sistema real con
        OAuth 2.1; y un agente de back-office con el Claude Agent SDK, con hooks
        de aprobación y costo por ejecución documentado. AI Engineer Miami
        (26–27 de abril de 2027) es el evento del sector más cercano.
      </p>

      <h3 className={h3}>
        Fase 3 · julio–diciembre 2027 · Profundidad, visibilidad y primeras
        aplicaciones
      </h3>
      <p className="mb-4">
        Los cursos de Agentes y de Contexto de Hugging Face, la intro a
        LangGraph por los conceptos de estado durable, el intensivo de agentes
        de Google. Proyectos 5–7: un pipeline de extracción de documentos con UI
        de revisión humana, un agente de voz para un hackathon y un copiloto
        interno con dashboards de costo y latencia. Contribuir a MCP, Langfuse,
        Promptfoo o Mastra; publicar tres posts técnicos con números reales;
        empezar a aplicar a roles remotos de AI product engineer.
      </p>

      <h3 className={h3}>
        Años 2–3 · 2028–2029 · Especialidad y perfil senior
      </h3>
      <p className="mb-4">
        Stanford CS336 y nanochat de Karpathy para entender los modelos por
        dentro, los dos libros "from scratch" de Raschka, el MOOC de Agentic AI
        de Berkeley, la ruta Claude Certified Architect si me muevo hacia
        arquitectura o consultoría, y una charla en conferencia sobre un sistema
        mío en producción.
      </p>

      <h3 className={h3}>Presupuesto</h3>
      <p className="mb-4">
        El núcleo cuesta unos US$675–885 en doce meses: el curso del AI SDK
        ($149), el libro de Huyen (~$50), dos meses de DeepLearning.AI Pro
        (~$50–60), el examen CCDV-F ($125) y $300–500 en créditos de API para
        siete proyectos con suites de evals. El cohort de evals de US$4,200 en
        Maven queda fuera del presupuesto y su material gratuito cubre la mayor
        parte; certificaciones cloud solo si el stack de un empleador lo exige.
      </p>

      <h2 className={h2}>Los siete proyectos del portafolio</h2>
      <p className="mb-4">
        En este orden, cada uno con suite de evals y trazas, porque esa
        combinación <em>es</em> el portafolio:
      </p>
      <ol className={ol}>
        <li>
          RAG sobre documentos de un negocio real (Next.js, Vercel AI SDK,
          pgvector, Promptfoo).
        </li>
        <li>
          Un harness de evals para ese RAG, con juez LLM validado contra
          etiquetas humanas.
        </li>
        <li>
          Un servidor MCP para un sistema real, OAuth 2.1, publicado en un
          registro.
        </li>
        <li>
          Un agente de back-office: facturas → extracción → validación → ERP,
          con hooks de aprobación.
        </li>
        <li>
          Un pipeline de extracción de documentos con puntajes de confianza y UI
          de revisión humana.
        </li>
        <li>Un agente de voz con tool calling.</li>
        <li>
          Un copiloto interno con spans OpenTelemetry GenAI y SLOs de costo y
          latencia.
        </li>
      </ol>

      <h2 className={h2}>Qué no creer</h2>
      <ul className={ul}>
        <li>
          <strong>"Resultados Stack Overflow 2026":</strong> la encuesta abrió
          el 23 de junio y no ha publicado resultados; los artículos que citan
          cifras "2026" reciclan datos de 2025.
        </li>
        <li>
          <strong>
            "Un millón de líneas en una semana" y flotas de 30 agentes:
          </strong>{" "}
          los equipos con throughput verificable lo atribuyen a linters, docs,
          tests y sandboxes, no a la autonomía.
        </li>
        <li>
          <strong>Cifras de adopción autoinformadas:</strong> "98% de los
          empleados de OpenAI usan Codex" y "47% del código lo escriben agentes"
          son percepción o datos del proveedor; la telemetría independiente
          muestra el lado de los costos.
        </li>
        <li>
          <strong>Salarios de FDE de US$450K+:</strong> solo en labs frontera y
          con 55–70% en equity. Los roles FDE y de IA en ServiceNow, Stripe o
          startups están en US$130K–235K base.
        </li>
        <li>
          <strong>"El desarrollo de software dejará de importar":</strong> lo
          que se deprecia es el código como cuello de botella. Lo que se aprecia
          es el diseño de sistemas, la verificación, el criterio de producto y
          la integración en procesos de negocio. swyx: "los LLMs premian la
          pericia; suben el techo mucho más que el piso".
        </li>
      </ul>
      <p className="mb-4">
        Iré actualizando este post conforme avance por las fases. Si estás en un
        camino parecido, me encantaría comparar notas.
      </p>

      <Sources title="Fuentes" />
    </>
  ),
};
