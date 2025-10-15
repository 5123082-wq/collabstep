"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Tooltip from "@radix-ui/react-tooltip";
import { primaryNavigation } from "@/lib/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const activePrimary = primaryNavigation.find((item) => pathname.startsWith(item.href)) ?? primaryNavigation[0];

  return (
    <aside className="flex h-full w-80 min-w-[20rem] flex-col border-r border-border/60 bg-surface/80 backdrop-blur">
      <div className="flex h-20 items-center gap-3 border-b border-border/60 px-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          CV
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Collabverse</span>
          <span className="text-xs text-muted">AI-powered collaboration</span>
        </div>
      </div>
      <div className="flex flex-1">
        <Tooltip.Provider>
          <nav className="flex w-20 flex-col gap-2 border-r border-border/60 px-3 py-4">
            {primaryNavigation.map((item) => {
              const Icon = item.icon;
              const active = pathname.startsWith(item.href);
              return (
                <Tooltip.Root key={item.id} delayDuration={200}>
                  <Tooltip.Trigger asChild>
                    <Link
                      href={item.href}
                      className={`flex h-12 items-center justify-center rounded-2xl border transition ${
                        active
                          ? "border-ring bg-ring/10 text-foreground shadow-soft"
                          : "border-transparent text-muted hover:border-border hover:bg-muted/10"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content className="rounded-xl bg-surface px-3 py-2 text-xs text-foreground shadow-soft">
                      {item.label}
                      <Tooltip.Arrow className="fill-surface" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              );
            })}
          </nav>
        </Tooltip.Provider>
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
            {activePrimary.label}
          </h2>
          <div className="space-y-1">
            {activePrimary.secondary.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${
                    active
                      ? "border-ring bg-ring/10 text-foreground shadow-soft"
                      : "border-transparent text-muted hover:border-border hover:bg-muted/10"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-muted">⌘{item.label.slice(0, 1)}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
