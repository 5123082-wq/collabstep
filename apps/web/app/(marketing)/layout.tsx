import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { MarketingShell } from "./MarketingShell";
import { NAV_V1 } from "@/lib/feature-flags";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  if (!NAV_V1) {
    redirect("/home");
  }

  return <MarketingShell>{children}</MarketingShell>;
}
