"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Palette, Sun } from "lucide-react";
import { ACCENT_PRESETS, useTheme } from "@/components/ThemeProvider";

export default function ThemeControls() {
  const { mode, toggleMode, accent, setAccent } = useTheme();
  const [pickerOpen, setPickerOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pickerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPickerOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!popoverRef.current?.contains(event.target as Node)) {
        setPickerOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [pickerOpen]);

  return (
    <div className="flex items-center gap-2">
      <div ref={popoverRef} className="relative">
        <button
          type="button"
          aria-expanded={pickerOpen}
          aria-haspopup="true"
          aria-label="Choose primary color"
          onClick={() => setPickerOpen((open) => !open)}
          className="flex items-center justify-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-2 text-muted hover:text-foreground transition-colors"
        >
          <Palette className="w-4 h-4" aria-hidden="true" />
          <span
            className="h-3 w-3 rounded-full border border-border-strong"
            style={{ background: "var(--accent)" }}
            aria-hidden="true"
          />
        </button>

        {pickerOpen && (
          <div
            role="menu"
            aria-label="Primary color"
            className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-border bg-background-elevated p-4 shadow-2xl z-50"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-subtle">
              Primary color
            </p>
            <div className="mb-3 grid grid-cols-7 gap-2">
              {ACCENT_PRESETS.map((preset) => {
                const selected =
                  accent.toLowerCase() === preset.value.toLowerCase();
                return (
                  <button
                    key={preset.value}
                    type="button"
                    role="menuitemradio"
                    aria-checked={selected}
                    aria-label={preset.name}
                    title={preset.name}
                    onClick={() => setAccent(preset.value)}
                    className={`h-6 w-6 rounded-full border border-border-strong transition-transform hover:scale-110 ${
                      selected
                        ? "ring-2 ring-foreground ring-offset-2 ring-offset-background-elevated"
                        : ""
                    }`}
                    style={{ background: preset.value }}
                  />
                );
              })}
            </div>
            <label className="flex items-center justify-between gap-2 text-xs text-muted">
              Custom
              <input
                type="color"
                value={accent}
                onChange={(event) => setAccent(event.target.value)}
                aria-label="Custom primary color"
                className="h-7 w-10 cursor-pointer rounded border border-border bg-transparent p-0.5"
              />
            </label>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={toggleMode}
        aria-label={
          mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        className="flex items-center justify-center rounded-full border border-border bg-surface p-2 text-muted hover:text-foreground transition-colors"
      >
        {mode === "dark" ? (
          <Sun className="w-4 h-4" aria-hidden="true" />
        ) : (
          <Moon className="w-4 h-4" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
