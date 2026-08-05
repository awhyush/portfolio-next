import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-sm text-foreground/50 sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with
          Next.js.
        </p>
        <p className="font-mono text-xs">v0.1.0</p>
      </div>
    </footer>
  );
}
