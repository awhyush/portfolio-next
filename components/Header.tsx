"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import ThemeControls from "@/components/ThemeControls";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-6 px-4">
      <nav
        aria-label="Primary"
        className="max-w-5xl mx-auto bg-backdrop backdrop-blur-xl border border-border rounded-3xl md:rounded-full px-6 py-3 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <div className="w-5 h-5 bg-accent rounded-sm rotate-45" aria-hidden="true" />
            <span className="text-lg font-bold font-manrope tracking-tight">
              {profile.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ThemeControls />
            </div>
            <a
              href="#resume-viewer"
              className="hidden md:block text-sm font-medium text-muted hover:text-foreground"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="group relative hidden sm:inline-flex items-center justify-center overflow-hidden rounded-full bg-surface px-6 py-2 transition-transform active:scale-95"
            >
              <span className="absolute inset-0 border border-border rounded-full" />
              <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,var(--accent)_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute inset-[1px] rounded-full bg-background" />
              <span className="relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                Get in touch
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </span>
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden rounded-full border border-border bg-surface p-2 text-muted hover:text-foreground"
            >
              {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 flex flex-col gap-1 border-t border-border pt-4">
            <div className="flex justify-center pb-2">
              <ThemeControls />
            </div>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#resume-viewer"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface hover:text-foreground"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-bold uppercase tracking-wider text-accent-foreground"
            >
              Get in touch
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
