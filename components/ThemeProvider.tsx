"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export type ThemeMode = "light" | "dark";

export const THEME_STORAGE_KEY = "px-theme";
export const ACCENT_STORAGE_KEY = "px-accent";
export const DEFAULT_ACCENT = "#FF6B50";

export const ACCENT_PRESETS: { name: string; value: string }[] = [
  { name: "Coral", value: "#FF6B50" },
  { name: "Crimson", value: "#ef233c" },
  { name: "Azure", value: "#3b82f6" },
  { name: "Amber", value: "#f59e0b" },
  { name: "Emerald", value: "#22c55e" },
  { name: "Violet", value: "#a855f7" },
  { name: "Cyan", value: "#06b6d4" },
];

type ThemeContextValue = {
  mode: ThemeMode;
  toggleMode: () => void;
  accent: string;
  setAccent: (hex: string) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Reads whatever the inline head script already resolved and wrote to the
 * DOM (localStorage value, or system-preference fallback) before hydration.
 * The provider's initial React state always starts at the SSR default
 * ("dark"/DEFAULT_ACCENT) so the first client render matches the server
 * exactly; this correction runs in a mount-only layout effect, which fires
 * before the browser paints, so returning users with a saved "light"
 * preference never see a flash of the wrong theme, and React never sees a
 * hydration mismatch since the divergent render happens post-hydration.
 */
function readAppliedTheme(): { mode: ThemeMode; accent: string } {
  if (typeof document === "undefined") {
    return { mode: "dark", accent: DEFAULT_ACCENT };
  }
  const domMode = document.documentElement.getAttribute("data-theme");
  const mode: ThemeMode = domMode === "light" ? "light" : "dark";
  const accent =
    window.localStorage.getItem(ACCENT_STORAGE_KEY) ?? DEFAULT_ACCENT;
  return { mode, accent };
}

function accentForegroundFor(hex: string): string {
  const value = hex.replace("#", "");
  if (value.length !== 6) return "#ffffff";
  const r = parseInt(value.substring(0, 2), 16) / 255;
  const g = parseInt(value.substring(2, 4), 16) / 255;
  const b = parseInt(value.substring(4, 6), 16) / 255;
  const linear = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  const luminance =
    0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
  return luminance > 0.55 ? "#0a0a0a" : "#ffffff";
}

function applyTheme(mode: ThemeMode, accent: string) {
  const root = document.documentElement;
  root.setAttribute("data-theme", mode);
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--accent-foreground", accentForegroundFor(accent));
}

/**
 * Inline script source, inlined into <head> in the root layout so the
 * theme/accent are applied before first paint (see Next.js's
 * "preventing flash before hydration" guide). Keep the luminance math in
 * sync with accentForegroundFor above.
 */
export const themeInitScript = `(function(){try{
var mode=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
if(mode!=="light"&&mode!=="dark"){mode=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}
document.documentElement.setAttribute("data-theme",mode);
var accent=localStorage.getItem(${JSON.stringify(ACCENT_STORAGE_KEY)})||${JSON.stringify(DEFAULT_ACCENT)};
document.documentElement.style.setProperty("--accent",accent);
var hex=accent.replace("#","");
var r=parseInt(hex.substring(0,2),16)/255,g=parseInt(hex.substring(2,4),16)/255,b=parseInt(hex.substring(4,6),16)/255;
function lin(c){return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);}
var lum=0.2126*lin(r)+0.7152*lin(g)+0.0722*lin(b);
document.documentElement.style.setProperty("--accent-foreground",lum>0.55?"#0a0a0a":"#ffffff");
}catch(e){}})();`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [accent, setAccentState] = useState<string>(DEFAULT_ACCENT);

  // Mount-only: pick up whatever the inline head script already applied
  // (localStorage or system preference) before this first paint.
  useIsomorphicLayoutEffect(() => {
    const applied = readAppliedTheme();
    setMode(applied.mode);
    setAccentState(applied.accent);
  }, []);

  // Re-applies on every change, and also after React's Strict Mode dev
  // remount clears attributes the inline script set. Runs before paint.
  useIsomorphicLayoutEffect(() => {
    applyTheme(mode, accent);
  }, [mode, accent]);

  const toggleMode = useCallback(() => {
    setMode((current) => {
      const next: ThemeMode = current === "dark" ? "light" : "dark";
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
  }, []);

  const setAccent = useCallback((hex: string) => {
    setAccentState(hex);
    window.localStorage.setItem(ACCENT_STORAGE_KEY, hex);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
