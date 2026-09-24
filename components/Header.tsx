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
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6">
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-sm font-black text-background"
            aria-hidden="true"
          >
            {profile.name.charAt(0).toUpperCase()}
          </span>
          <span className="text-base font-bold tracking-tight">
            {profile.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-subtle hover:text-foreground transition-colors"
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
            className="hidden md:block text-sm text-subtle hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="btn-invert hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider"
          >
            Get in touch
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden rounded-full border border-border bg-backdrop backdrop-blur-md p-2 text-muted hover:text-foreground"
          >
            {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="mx-auto mt-4 flex max-w-7xl flex-col gap-1 rounded-3xl border border-border bg-backdrop-strong backdrop-blur-xl p-4 md:hidden"
        >
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
            className="btn-coral mt-2 rounded-lg px-3 py-2.5 text-center text-sm font-extrabold uppercase tracking-wider"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
