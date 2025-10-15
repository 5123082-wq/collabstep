import type { ReactNode } from "react";

import "@/styles/marketing.css";

import { MarketingNavbar } from "@/components/marketing/MarketingNavbar";
import { Footer } from "@/components/marketing/sections/Footer";

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="marketing-page min-h-screen bg-slate-950 text-white">
      <MarketingNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
