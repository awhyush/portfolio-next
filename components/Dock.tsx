"use client";

import { Home, User, LayoutGrid, Wrench, ArrowUpRight } from "lucide-react";

const dockLinks = [
  { href: "#main-content", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: LayoutGrid },
  { href: "#skills", label: "Skills", icon: Wrench },
];

export default function Dock() {
  return (
    <nav
      aria-label="Quick navigation"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 px-2"
    >
      <div className="dock-glass flex items-center gap-1 rounded-2xl p-1.5 shadow-2xl">
        {dockLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-label={link.label}
            title={link.label}
            className="dock-item flex h-10 w-10 items-center justify-center rounded-xl text-muted hover:text-foreground"
          >
            <link.icon className="h-4 w-4" aria-hidden="true" />
          </a>
        ))}
        <span
          className="mx-1 h-6 w-px bg-border-strong"
          aria-hidden="true"
        />
        <a
          href="#contact"
          className="btn-coral flex h-10 items-center gap-1.5 rounded-xl px-4 text-xs font-extrabold uppercase tracking-wide"
        >
          Get in touch
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}
