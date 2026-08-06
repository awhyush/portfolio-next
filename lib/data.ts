export const profile = {
  name: "ayush sharma",
  role: "Software Engineer · Full-Stack Developer",
  tagline:
    "Software engineer with 2+ years shipping web applications with React.js, TypeScript, Node.js, and Java Spring Boot. From performance optimization to CI/CD deployment across healthcare and fintech products.",
  location: "India",
  email: "workxayush@gmail.com",
  linkedin: "https://linkedin.com/in/awhyush",
  resumeUrl: "/resume.pdf",
  bio: [
    "Software Engineer with 2+ years of experience building and shipping web applications using React.js, TypeScript, Node.js, and Java Spring Boot. Skilled in data structures and algorithms, API development, system performance optimization, automated testing, and CI/CD deployment across healthcare and fintech products.",
  ],
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  points: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "metrofy",
    title: "Metrofy",
    description: "Metro route prediction web app for non-metro cities.",
    tags: ["React.js", "Leaflet.js", "Redux Toolkit", "CSS"],
    points: [
      "Built route-finding using Dijkstra's and Nearest Neighbor algorithms across 100+ mapped locations.",
      "Built an interactive map with geolocation-based view adjustments using Leaflet.js.",
    ],
    url: "https://metrofy.netlify.app/",
  },
  {
    slug: "ytayush",
    title: "YTAyush",
    description: "A YouTube clone built to practice and demonstrate React fundamentals.",
    tags: ["React.js", "CSS"],
    points: [
      "Built as a personal learning project to explore React component architecture and state management.",
    ],
    url: "https://ytayush.netlify.app/",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "WCAG Accessibility",
    ],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "Microservices",
      "API Development",
    ],
  },
  {
    category: "Tools",
    items: [
      "MongoDB",
      "PostgreSQL",
      "CI/CD",
      "CDN",
      "Nginx",
      "Git",
      "Webpack",
      "Jest",
    ],
  },
  {
    category: "Core Concepts",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "System Design",
      "SDLC",
      "Agile/Scrum",
    ],
  },
];

export type ExperienceRole = {
  title: string;
  period: string;
  points: string[];
};

export type Experience = {
  company: string;
  period: string;
  stack?: string[];
} & (
  | { role: string; points: string[]; roles?: undefined }
  | { role?: undefined; points?: undefined; roles: ExperienceRole[] }
);

export const experience: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Bajaj Finserv Health",
    period: "Jan 2025 — Present",
    points: [
      "Reduced initial page load time by 3+ seconds for 100K+ users through code splitting, lazy loading, and bundle optimization.",
      "Built a CDN-based static asset delivery pipeline, cutting asset load times by 30%.",
      "Built a Design Language System adopted across 4+ internal products, increasing UI development speed by 40%.",
      "Built an analytics service to track preauths and shortfalls with reason-level breakdowns, reducing overall shortfall.",
      "Added Jest-based unit testing across the frontend, reducing production bugs.",
      "Built a parameter-based release system for UAT, enabling parallel testing without additional deployments.",
      "Built a date-based versioning system on production enabling instant rollbacks via a release pointer change, removing the need for full Docker image redeployments.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Node.js",
      "Nginx",
      "REST APIs",
      "CDN",
      "Jest",
    ],
  },
  {
    company: "Credmudra / Nidavellirs",
    period: "Jan 2024 — Dec 2024",
    roles: [
      {
        title: "Software Development Engineer",
        period: "Jun 2024 — Dec 2024",
        points: [
          "Built a mobile-first UI with React.js and Tailwind CSS, increasing mobile engagement by 60%.",
          "Implemented JWT/OAuth authentication supporting 1,000+ concurrent user sessions per month.",
          "Set up Jenkins CI/CD pipelines, cutting deployment time by 50%.",
        ],
      },
      {
        title: "Frontend Development Engineer, Internship",
        period: "Jan 2024 — Jun 2024",
        points: [
          "Built a QR-based link platform that scaled to 500+ active links within 2 months.",
          "Built analytics dashboards using eCharts and Firebase for link performance tracking.",
        ],
      },
    ],
    stack: [
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Firebase",
      "Jenkins",
      "eCharts",
    ],
  },
];

export const education = {
  school: "University Institute of Technology, RGPV, Bhopal",
  degree: "B.Tech",
  period: "2020 — 2024",
  detail: "CPI: 8.04/10",
};

export const achievements: string[] = [
  'Awarded "Sharp Shark" at Bajaj Finserv Health for performance optimization and frontend architecture contributions.',
  "Solved 400+ problems on LeetCode, GeeksforGeeks, and other competitive programming platforms.",
];
