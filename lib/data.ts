export const profile = {
  name: "Your Name",
  role: "Full-Stack Software Engineer",
  tagline: "I build fast, reliable web apps end to end — from database schema to pixel-perfect UI.",
  location: "Remote",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf",
  bio: [
    "I'm a software engineer who enjoys turning ambiguous problems into shipped products. My focus is full-stack web development — React/Next.js on the front, Node/Postgres on the back — with a bias toward simple, maintainable solutions over clever ones.",
    "Outside of work I like reading about distributed systems, contributing to small open-source tools, and writing about what I learn along the way.",
  ],
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  repo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "orbit",
    title: "Orbit — Team Task Tracker",
    description:
      "A Kanban-style task tracker with real-time updates, built to explore optimistic UI and WebSocket sync at small scale.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    href: "#",
    repo: "#",
    featured: true,
  },
  {
    slug: "pixelforge",
    title: "PixelForge — Image Processing API",
    description:
      "A serverless image transformation API (resize, crop, format conversion) with on-the-fly caching at the edge.",
    tags: ["Node.js", "AWS Lambda", "S3", "CloudFront"],
    href: "#",
    repo: "#",
    featured: true,
  },
  {
    slug: "ledgerly",
    title: "Ledgerly — Personal Finance Dashboard",
    description:
      "A self-hosted expense tracker with CSV import, category rules, and monthly spend visualizations.",
    tags: ["React", "Express", "SQLite", "Chart.js"],
    href: "#",
    repo: "#",
  },
  {
    slug: "notegraph",
    title: "NoteGraph — Linked Notes App",
    description:
      "A Markdown notes app with bidirectional linking and a force-directed graph view of note connections.",
    tags: ["Next.js", "Prisma", "D3.js"],
    href: "#",
    repo: "#",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    category: "Data & Infra",
    items: ["PostgreSQL", "Redis", "Docker", "AWS"],
  },
];

export const experience: {
  role: string;
  company: string;
  period: string;
  points: string[];
}[] = [
  {
    role: "Software Engineer",
    company: "Acme Technologies",
    period: "2023 — Present",
    points: [
      "Led migration of a legacy monolith to a modular Next.js + API service architecture.",
      "Built internal tooling that cut deployment time by 40%.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Bright Labs",
    period: "2022 — 2023",
    points: [
      "Shipped a customer-facing analytics dashboard used by 500+ accounts.",
      "Wrote integration tests that reduced regression bugs by a third.",
    ],
  },
];
