"use client";

import * as React from "react";
import { ThemeProvider } from "./theme-provider";
import { BackgroundProvider } from "./background-provider";
import { ModalProvider } from "./modal-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <BackgroundProvider>
        <ModalProvider>{children}</ModalProvider>
      </BackgroundProvider>
    </ThemeProvider>
  );
}
