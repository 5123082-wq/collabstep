import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { AppProviders } from "@/components/providers";
import { APP_LOCALE } from "@/lib/feature-flags";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Collabverse",
  description: "CRM для креативных команд"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={APP_LOCALE}
      className={`${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
