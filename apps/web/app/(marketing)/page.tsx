import { redirect } from "next/navigation";

import { NAV_V1 } from "@/lib/feature-flags";

export default function MarketingPlaceholderPage() {
  if (!NAV_V1) {
    redirect("/home");
  }

  return (
    <div className="p-8 text-center text-sm text-muted-foreground">
      Навигация v1 будет подключена на Этапе 1. Флаг NAV_V1=on.
    </div>
  );
}
