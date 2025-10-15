"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { darkPalette, lightPalette } from "@collabverse/ui";

function ThemeTokens() {
  const { resolvedTheme } = useTheme();
  React.useEffect(() => {
    const palette = resolvedTheme === "dark" ? darkPalette : lightPalette;
    const root = document.documentElement;
    Object.entries(palette).forEach(([token, value]) => {
      root.style.setProperty(token, value);
    });
  }, [resolvedTheme]);
  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
    >
      <ThemeTokens />
      {children}
    </NextThemeProvider>
  );
}
