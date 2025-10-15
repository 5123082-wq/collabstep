import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {
      colors: {
        background: "var(--cv-background)",
        surface: "var(--cv-surface)",
        foreground: "var(--cv-foreground)",
        muted: "var(--cv-muted)",
        primary: {
          DEFAULT: "var(--cv-primary)",
          foreground: "var(--cv-primary-foreground)"
        },
        secondary: {
          DEFAULT: "var(--cv-secondary)",
          foreground: "var(--cv-secondary-foreground)"
        },
        accent: {
          DEFAULT: "var(--cv-accent)",
          foreground: "var(--cv-accent-foreground)"
        },
        destructive: {
          DEFAULT: "var(--cv-destructive)",
          foreground: "var(--cv-destructive-foreground)"
        },
        border: "var(--cv-border)",
        input: "var(--cv-input)",
        ring: "var(--cv-ring)"
      },
      spacing: {
        18: "4.5rem"
      },
      borderRadius: {
        xl: "1.5rem"
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(15, 23, 42, 0.35)"
      },
      fontFamily: {
        sans: ["'InterVariable'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"]
      }
    }
  }
} satisfies Partial<Config>;

export default config;
