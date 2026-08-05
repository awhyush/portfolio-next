import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-6 px-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <Link href="#" className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#ef233c] rounded-sm rotate-45" />
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
            href={profile.resumeUrl}
            className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/5 px-6 py-2 transition-transform active:scale-95"
          >
            <span className="absolute inset-0 border border-white/10 rounded-full" />
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ef233c_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-[1px] rounded-full bg-black" />
            <span className="relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              Get in touch
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
