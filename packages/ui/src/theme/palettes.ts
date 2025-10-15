export type ThemePalette = Record<string, string>;

export const lightPalette: ThemePalette = {
  "--cv-background": "#f5f6fa",
  "--cv-surface": "#ffffff",
  "--cv-foreground": "#0f172a",
  "--cv-muted": "#64748b",
  "--cv-border": "#e2e8f0",
  "--cv-input": "#cbd5f5",
  "--cv-ring": "#6366f1",
  "--cv-primary": "#4f46e5",
  "--cv-primary-foreground": "#f8fafc",
  "--cv-secondary": "#0ea5e9",
  "--cv-secondary-foreground": "#f0f9ff",
  "--cv-accent": "#f97316",
  "--cv-accent-foreground": "#fff7ed",
  "--cv-destructive": "#ef4444",
  "--cv-destructive-foreground": "#fef2f2"
};

export const darkPalette: ThemePalette = {
  "--cv-background": "#0f172a",
  "--cv-surface": "#111827",
  "--cv-foreground": "#f8fafc",
  "--cv-muted": "#cbd5f5",
  "--cv-border": "#1f2937",
  "--cv-input": "#334155",
  "--cv-ring": "#a855f7",
  "--cv-primary": "#6366f1",
  "--cv-primary-foreground": "#e0e7ff",
  "--cv-secondary": "#0ea5e9",
  "--cv-secondary-foreground": "#cffafe",
  "--cv-accent": "#f97316",
  "--cv-accent-foreground": "#fff7ed",
  "--cv-destructive": "#f87171",
  "--cv-destructive-foreground": "#fee2e2"
};

export const backgroundPresets = {
  mesh: {
    light: "radial-gradient(circle at 10% 20%, rgba(99,102,241,0.12) 0, transparent 40%), radial-gradient(circle at 90% 30%, rgba(14,165,233,0.15) 0, transparent 45%), radial-gradient(circle at 50% 80%, rgba(249,115,22,0.1) 0, transparent 50%)",
    dark: "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.24) 0, transparent 45%), radial-gradient(circle at 80% 20%, rgba(14,165,233,0.2) 0, transparent 50%), radial-gradient(circle at 50% 80%, rgba(249,115,22,0.18) 0, transparent 55%)"
  },
  grid: {
    light: "linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
    dark: "linear-gradient(90deg, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(180deg, rgba(148,163,184,0.2) 1px, transparent 1px)"
  },
  halo: {
    light: "radial-gradient(circle at center, rgba(79,70,229,0.16) 0, transparent 60%)",
    dark: "radial-gradient(circle at center, rgba(79,70,229,0.28) 0, transparent 60%)"
  }
} as const;
