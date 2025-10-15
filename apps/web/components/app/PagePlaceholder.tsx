"use client";

import type { ReactNode } from 'react';

import { showTodoToast } from './ToastHost';

interface PlaceholderAction {
  id: string;
  label: string;
  tone?: 'primary' | 'secondary';
}

interface PagePlaceholderProps {
  title: string;
  description: string;
  actions?: PlaceholderAction[];
  children?: ReactNode;
}

export function PagePlaceholder({ title, description, actions = [], children }: PagePlaceholderProps) {
  return (
    <section className="rounded-2xl border border-border/20 bg-background/70 p-6 shadow-sm">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-muted">{description}</p>
      </header>
      {actions.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {actions.map((action) => (
            <button
              key={action.id}
              type="button"
              onClick={() => showTodoToast(`TODO: ${action.label}`)}
              className={`rounded-xl px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                action.tone === 'primary'
                  ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90'
                  : 'border border-border/60 text-muted hover:text-foreground'
              }`}
            >
              {action.label}
            </button>
          ))}
        </div>
      ) : null}
      {children ? <div className="mt-6 space-y-4 text-sm text-muted">{children}</div> : null}
    </section>
  );
}
