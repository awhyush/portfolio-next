"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
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
        className="max-w-5xl mx-auto bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-full px-6 py-3 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#ef233c] rounded-sm rotate-45" aria-hidden="true" />
            <span className="text-lg font-bold font-manrope tracking-tight">
              {profile.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#resume-viewer"
              className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="group relative hidden sm:inline-flex items-center justify-center overflow-hidden rounded-full bg-white/5 px-6 py-2 transition-transform active:scale-95"
            >
              <span className="absolute inset-0 border border-white/10 rounded-full" />
              <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ef233c_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute inset-[1px] rounded-full bg-black" />
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
              className="md:hidden rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 hover:text-white"
            >
              {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 flex flex-col gap-1 border-t border-white/10 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#resume-viewer"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-[#ef233c] px-3 py-2.5 text-center text-sm font-bold uppercase tracking-wider text-white"
            >
              Get in touch
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
