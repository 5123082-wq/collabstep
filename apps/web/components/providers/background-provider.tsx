"use client";

import * as React from "react";
import { backgroundPresets } from "@collabverse/ui";
import { useTheme } from "next-themes";

export type BackgroundPreset = keyof typeof backgroundPresets;

type BackgroundContextValue = {
  preset: BackgroundPreset;
  setPreset: (preset: BackgroundPreset) => void;
};

const BackgroundContext = React.createContext<BackgroundContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "collabverse-background";

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [preset, setPresetState] = React.useState<BackgroundPreset>("mesh");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as
      | BackgroundPreset
      | null;
    if (stored && stored in backgroundPresets) {
      setPresetState(stored);
    }
  }, []);

  const setPreset = React.useCallback((value: BackgroundPreset) => {
    setPresetState(value);
    window.localStorage.setItem(STORAGE_KEY, value);
  }, []);

  const value = React.useMemo(
    () => ({ preset, setPreset }),
    [preset, setPreset]
  );

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundPreset() {
  const ctx = React.useContext(BackgroundContext);
  if (!ctx) {
    throw new Error("useBackgroundPreset must be used within BackgroundProvider");
  }
  return ctx;
}

export function useBackgroundStyle() {
  const { resolvedTheme } = useTheme();
  const { preset } = useBackgroundPreset();
  const themeKey = resolvedTheme === "dark" ? "dark" : "light";
  return {
    backgroundColor: "var(--cv-background)",
    backgroundImage: backgroundPresets[preset][themeKey],
    backgroundSize: preset === "grid" ? "48px 48px" : "cover"
  } as const;
}
