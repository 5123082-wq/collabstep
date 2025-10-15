import type { ReactNode } from "react";

import { MarketingShell } from "../(marketing)/MarketingShell";

export default function MarketingPreviewLayout({ children }: { children: ReactNode }) {
  return <MarketingShell>{children}</MarketingShell>;
}
