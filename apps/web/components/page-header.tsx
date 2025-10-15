import * as React from "react";
import { Breadcrumbs } from "./ui/breadcrumbs";

export function PageHeader({
  title,
  description,
  breadcrumbs,
  actions
}: {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
  actions?: React.ReactNode;
}) {
  return (
    <div className="space-y-4 rounded-3xl border border-border/60 bg-surface/80 p-6 shadow-soft backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          {breadcrumbs && breadcrumbs.length > 0 ? <Breadcrumbs items={breadcrumbs} /> : null}
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
          {description ? <p className="max-w-2xl text-sm text-muted">{description}</p> : null}
        </div>
        {actions ? <div className="flex flex-wrap justify-end gap-2">{actions}</div> : null}
      </div>
    </div>
  );
}
