// Single source of truth for all page copy.
// Edit text here without touching components.

export const SITE_URL = "https://arya-bhanu.vercel.app";

export const site = {
  name: "Arya Bhanu",
  fullName: "I Made Winayagatar Arya Bhanu",
  title: "AI Full-Stack Developer & Automation Engineer",
  location: "Tabanan, Bali, Indonesia",
  relocation: "Open to relocation — Kuala Lumpur, Malaysia",
  heroOneLiner:
    "I build web apps and automation systems. Three products live in production, 50+ bots delivered for clients since 2023.",
  metaDescription:
    "Arya Bhanu is a full-stack and automation developer who ships production web apps and automation systems, with three products live and 50+ bots delivered since 2023.",
  email: "winayaarya@gmail.com",
  github: "https://github.com/ryuken25",
  githubHandle: "ryuken25",
  telegram: "https://t.me/kenshi25",
  telegramHandle: "kenshi25",
  resume: "/resume.pdf",
} as const;

export const proof = [
  { value: "3", label: "live apps in production" },
  { value: "50+", label: "automation bots delivered" },
  { value: "2023", label: "freelancing since" },
] as const;

// Terminal / deploy-log signature. Built from the three real live apps.
export const liveApps = [
  { name: "questpay", host: "kenshi-questpay.vercel.app" },
  { name: "kenshi-notes", host: "kenshi-notes.vercel.app" },
  { name: "ganga-schedule", host: "ganga-schedule-universal.vercel.app" },
] as const;

export type Badge = "LIVE" | "IN PROGRESS" | "CLIENT WORK";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  live?: string;
  repo?: string;
  badge?: Badge;
}

export const projects: Project[] = [
  {
    name: "QuestPay",
    description:
      "Web3 creator checkout desk. Built and run solo: UI, database, payment/release flow, and production deploy.",
    tech: ["Next.js", "TypeScript", "Neon Postgres"],
    live: "https://kenshi-questpay.vercel.app",
    repo: "https://github.com/ryuken25/kenshi-questpay",
    badge: "LIVE",
  },
  {
    name: "Kenshi Chord",
    description:
      "AI chord detection, in progress: building audio-to-chord transcription with Whisper and chord-recognition models on a FastAPI backend.",
    tech: ["Python", "FastAPI", "Whisper", "ML"],
    repo: "https://github.com/ryuken25/kenshi-chord",
    badge: "IN PROGRESS",
  },
  {
    name: "Mellogang Visuals",
    description:
      "Ordering and production-tracking system for a photo/video studio: role-based access (Admin/Editor/Client), payment verification, scheduling, OTP + Google OAuth, and PDF invoices.",
    tech: ["PHP", "CodeIgniter 4", "MySQL", "React", "Tailwind"],
    repo: "https://github.com/ryuken25/mellogang-website",
    badge: "CLIENT WORK",
  },
  {
    name: "Kenshi Notes",
    description:
      "Obsidian-style notes app on a persistent Postgres backend.",
    tech: ["Next.js 16", "Neon Postgres"],
    live: "https://kenshi-notes.vercel.app",
    badge: "LIVE",
  },
  {
    name: "Ganga Schedule Universal",
    description: "Class-schedule web app with a seasonal UI.",
    tech: ["TypeScript", "Next.js", "Neon"],
    live: "https://ganga-schedule-universal.vercel.app",
    badge: "LIVE",
  },
  {
    name: "Automation bots",
    description:
      "50+ bots for scraping, Telegram/web flows, bulk processing, and multi-account operations. Mostly private client work — happy to walk through them in an interview.",
    tech: ["Python", "Node.js", "Playwright"],
  },
];

export interface AlsoShipped {
  label: string;
  href?: string;
  note?: string;
}

export const alsoShipped: AlsoShipped[] = [
  { label: "kenshi-downloader.vercel.app", href: "https://kenshi-downloader.vercel.app" },
  { label: "zano-ocr.vercel.app", href: "https://zano-ocr.vercel.app" },
  { label: "VERSE", note: "immersive 3D Web3 site — Three.js / R3F" },
  { label: "ShipOS" },
  { label: "starter-auth-api" },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
  },
  {
    label: "Web",
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
    label: "AI & Automation",
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
    label: "Delivery",
    items: ["Git/GitHub", "Vercel", "env & secrets hygiene", "staged releases"],
  },
];

export interface Job {
  role: string;
  org: string;
  period: string;
  place?: string;
  summary: string;
}

export const experience: Job[] = [
  {
    role: "Freelance Full-Stack & Automation Developer",
    org: "Independent",
    period: "2023–Present",
    place: "Bali, Indonesia",
    summary:
      "Web apps, scraping pipelines, and internal tools for clients — from requirements through deploy and support. Uses LLM APIs for structured extraction and agent workflows, with human review before anything ships.",
  },
  {
    role: "Full-Stack Developer & Video Editor (contract)",
    org: "Mellogang Visuals",
    period: "2025",
    summary:
      "Built the agency's ordering and production-tracking system (PHP, CodeIgniter 4, MySQL, React/Tailwind).",
  },
];

export const about = [
  "I'm an Informatics graduate (S.Kom) from ITB STIKOM Bali, 2026, and I've been freelancing since 2023.",
  "I work AI-first: I use LLM tooling every day for speed, but I own the architecture, the code review, and the deploys myself.",
  "I'm based in Bali and ready to relocate to Malaysia on an employer-sponsored Employment Pass.",
] as const;

export const credentials =
  "S.Kom Informatics, ITB STIKOM Bali (2026) · BNSP Certified Programmer · 2nd place, OSN-K Informatics 2020";

export const contact = {
  copy:
    "Open to full-time roles in Malaysia or remote, plus contract and freelance work.",
  availability: "Available now · replies within a day",
} as const;
