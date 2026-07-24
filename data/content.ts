// Single source of truth for all page copy and data.
// Mirrors the approved Claude Design (Portfolio.dc.html): blue accent, name "Winayagatar".

export const SITE_URL = "https://winayagatar.vercel.app";

export const site = {
  name: "Winayagatar",
  fullName: "I Made Winayagatar Arya Bhanu",
  title: "AI Full-Stack Developer & Automation Engineer",
  cliHandle: "winayagatar",
  locationLine1: "Tabanan, Bali",
  locationLine2: "Indonesia",
  relocation: "Open to relocation — Kuala Lumpur, Malaysia",
  heroOneLiner:
    "I build web apps and automation systems. Three products live in production, 50+ bots delivered for clients since 2023.",
  metaDescription:
    "Winayagatar is a full-stack and automation developer who ships production web apps and automation systems, with three products live and 50+ bots delivered since 2023.",
  email: "winayaarya@gmail.com",
  github: "https://github.com/ryuken25",
  githubHandle: "ryuken25",
  telegram: "https://t.me/kenshi25",
  telegramHandle: "kenshi25",
  whatsapp: "https://wa.me/6281338109102",
  resume: "/resume.pdf",
  photo: "/arya.jpg",
  photoWebp: "/arya.webp",
  photoAlt: "Portrait of Winayagatar in a dark suit.",
} as const;

// Blue theme tokens (from the design).
export const theme = {
  bg: "#07090f",
  panel: "#0d111a",
  panelAlt: "#11161f",
  border: "#1e2534",
  borderSoft: "#1b2130",
  hairline: "#161c28",
  text: "#e7ecf5",
  textDim: "#b3bdcd",
  muted: "#939daf",
  muted2: "#8b95a7",
  faint: "#6c7688",
  faint2: "#798395",
  accent: "#4c8df6",
  accentBright: "#8fb8fb",
  accentBrightest: "#c3d9fd",
  accentBorder: "#6ba0f8",
  live: "#34d399",
  wip: "#fbbf24",
} as const;

export interface TermLine {
  mark: string;
  tone: string;
  text: string;
}

export const terminalLines: TermLine[] = [
  { mark: "$", tone: "#4c8df6", text: "winayagatar --status" },
  { mark: "›", tone: "#49525f", text: "checking deployments..." },
  { mark: "●", tone: "#34d399", text: "LIVE  questpay      kenshi-questpay.vercel.app" },
  { mark: "●", tone: "#34d399", text: "LIVE  kenshi-notes  kenshi-notes.vercel.app" },
  { mark: "●", tone: "#34d399", text: "LIVE  ganga-sched   ganga-schedule-universal.vercel.app" },
  { mark: "◐", tone: "#fbbf24", text: "WIP   kenshi-chord  audio → chord, FastAPI + Whisper" },
  { mark: "›", tone: "#49525f", text: "3 live · 50+ bots delivered · since 2023" },
  { mark: "✓", tone: "#4c8df6", text: "open to roles in Kuala Lumpur, Malaysia" },
];

export type Badge = "LIVE" | "IN PROGRESS" | "CLIENT WORK" | "";

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  live: string;
  repo: string;
  badge: Badge;
}

export const projects: Project[] = [
  {
    name: "QuestPay",
    desc: "Web3 creator checkout desk. Built and run solo: UI, database, payment/release flow, production deploy.",
    tags: ["Next.js", "TypeScript", "Neon Postgres"],
    live: "https://kenshi-questpay.vercel.app",
    repo: "https://github.com/ryuken25/kenshi-questpay",
    badge: "LIVE",
  },
  {
    name: "Ganga Schedule Universal",
    desc: "Class-schedule web app with a seasonal UI that shifts with the time of year.",
    tags: ["TypeScript", "Next.js", "Neon"],
    live: "https://ganga-schedule-universal.vercel.app",
    repo: "",
    badge: "LIVE",
  },
  {
    name: "Kenshi Notes",
    desc: "Obsidian-style notes app on a persistent Postgres backend.",
    tags: ["Next.js 16", "Neon Postgres"],
    live: "https://kenshi-notes.vercel.app",
    repo: "",
    badge: "LIVE",
  },
  {
    name: "Mellogang Visuals",
    desc: "Ordering and production-tracking system for a photo/video studio: role-based access (Admin/Editor/Client), payment verification, scheduling, OTP + Google OAuth, PDF invoices.",
    tags: ["PHP", "CodeIgniter 4", "MySQL", "React", "Tailwind"],
    live: "",
    repo: "https://github.com/ryuken25/mellogang-website",
    badge: "CLIENT WORK",
  },
  {
    name: "Kenshi Chord",
    desc: "In progress: building audio-to-chord transcription with Whisper and chord-recognition models on a FastAPI backend.",
    tags: ["Python", "FastAPI", "Whisper", "ML"],
    live: "",
    repo: "https://github.com/ryuken25/kenshi-chord",
    badge: "IN PROGRESS",
  },
  {
    name: "Automation bots",
    desc: "50+ bots for scraping, Telegram/web flows, bulk processing, and multi-account operations. Mostly private client work — happy to walk through them in an interview.",
    tags: ["Python", "Node.js", "Playwright"],
    live: "",
    repo: "",
    badge: "",
  },
];

export const badgeStyles: Record<
  Exclude<Badge, "">,
  { fg: string; bg: string; bd: string }
> = {
  LIVE: { fg: "#34d399", bg: "rgba(52,211,153,0.09)", bd: "rgba(52,211,153,0.32)" },
  "IN PROGRESS": { fg: "#fbbf24", bg: "rgba(251,191,36,0.09)", bd: "rgba(251,191,36,0.3)" },
  "CLIENT WORK": { fg: "#8fb8fb", bg: "rgba(76,141,246,0.12)", bd: "rgba(76,141,246,0.38)" },
};

export const filters = ["All", "Live", "AI & Automation", "Client work"] as const;
export type Filter = (typeof filters)[number];

export interface AlsoShipped {
  label: string;
  href?: string;
}

export const alsoShipped: AlsoShipped[] = [
  { label: "kenshi-downloader.vercel.app", href: "https://kenshi-downloader.vercel.app" },
  { label: "zano-ocr.vercel.app", href: "https://zano-ocr.vercel.app" },
  { label: "VERSE — immersive 3D Web3 site (Three.js / React Three Fiber)" },
  { label: "ShipOS" },
  { label: "starter-auth-api" },
];

export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"] },
  {
    group: "Web",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "REST APIs",
      "Prisma",
      "PostgreSQL (Neon)",
      "MySQL",
      "Supabase",
    ],
  },
  {
    group: "AI & Automation",
    items: [
      "LLM APIs (OpenAI, Claude, Gemini)",
      "AI agents & tool calling",
      "prompt engineering",
      "Playwright scraping",
      "Telegram/web bots",
      "scheduled jobs",
    ],
  },
  {
    group: "Delivery",
    items: ["Git/GitHub", "Vercel", "env & secrets hygiene", "staged releases"],
  },
];

export interface Job {
  role: string;
  meta: string;
  summary: string;
}

export const experience: Job[] = [
  {
    role: "Freelance Full-Stack & Automation Developer",
    meta: "Independent · 2023–Present · Bali, Indonesia",
    summary:
      "Web apps, scraping pipelines, and internal tools for clients — from requirements through deploy and support. Uses LLM APIs for structured extraction and agent workflows, with human review before anything ships.",
  },
  {
    role: "Full-Stack Developer & Video Editor (contract)",
    meta: "Mellogang Visuals · 2025",
    summary:
      "Built the agency's ordering and production-tracking system (PHP, CodeIgniter 4, MySQL, React/Tailwind).",
  },
];

export const about =
  "I am an Informatics graduate (S.Kom) from ITB STIKOM Bali, 2026, and I have been freelancing since 2023. I work AI-first: LLM tooling is part of my daily workflow for speed, but I own the architecture, the code review, and the deploys myself. I am based in Bali and ready to relocate to Malaysia with an employer-sponsored Employment Pass.";

export const credentials =
  "S.Kom Informatics, ITB STIKOM Bali (2026) · BNSP Certified Programmer · 2nd place, OSN-K Informatics 2020";

export const contactCopy =
  "Open to full-time roles in Malaysia or remote, plus contract and freelance work.";
