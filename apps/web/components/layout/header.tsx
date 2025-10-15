"use client";

import * as React from "react";
import { Command, Menu, MessageCircle, Moon, Plus, Search, Settings, Sun, Wallet } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@collabverse/ui";
import { useModal } from "../providers/modal-provider";
import { useBackgroundPreset, type BackgroundPreset } from "../providers/background-provider";

const quickActions = [
  { id: "create-project", label: "Проект", description: "Создать новый проект" },
  { id: "create-workspace", label: "Workspace", description: "Организация" },
  { id: "create-task", label: "Задача", description: "Быстрая задача" }
];

const backgroundOptions: { id: BackgroundPreset; label: string }[] = [
  { id: "mesh", label: "Mesh" },
  { id: "grid", label: "Grid" },
  { id: "halo", label: "Halo" }
];

export function Header() {
  const { openModal } = useModal();
  const { resolvedTheme, setTheme } = useTheme();
  const { preset, setPreset } = useBackgroundPreset();

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-border/60 bg-surface/80 px-6 backdrop-blur">
      <div className="flex flex-1 items-center gap-4">
        <button
          type="button"
          className="rounded-xl border border-transparent p-2 text-muted transition hover:border-border hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative hidden max-w-md flex-1 items-center md:flex">
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted" />
          <input
            className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none ring-0 transition focus:border-ring focus:ring-2 focus:ring-ring"
            placeholder="Поиск по проектам, людям, документам"
          />
        </div>
        <Button
          variant="primary"
          size="md"
          className="hidden items-center gap-2 md:inline-flex"
          onClick={() => openModal("quick-create", { options: quickActions })}
        >
          <Plus className="h-4 w-4" />
          Создать
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="hidden h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-muted transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:flex"
          onClick={() => openModal("command-palette")}
        >
          <Command className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-muted transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <div className="hidden items-center gap-1 lg:flex">
          {backgroundOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`h-11 rounded-xl border px-4 text-sm font-medium transition ${
                preset === option.id
                  ? "border-ring bg-ring/10 text-foreground"
                  : "border-border bg-background text-muted hover:border-ring hover:text-foreground"
              }`}
              onClick={() => setPreset(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <IconAction icon={Wallet} label="Кошелёк" onClick={() => openModal("wallet")}
        />
        <IconAction icon={MessageCircle} label="Сообщения" onClick={() => openModal("messages")}
        />
        <IconAction icon={Settings} label="Настройки" onClick={() => openModal("workspace-switcher")}
        />
        <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-background px-3 py-2">
          <div className="text-right text-xs text-muted">Workspace</div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-transparent bg-surface px-3 py-2 text-sm font-medium transition hover:border-border hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => openModal("workspace-switcher")}
          >
            Orbit Labs
          </button>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background px-3 py-2">
          <div className="flex flex-col text-right text-xs leading-tight text-muted">
            <span>Анастасия Орлова</span>
            <span>Admin</span>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => openModal("user-menu")}
          >
            AO
          </button>
        </div>
      </div>
    </header>
  );
}

function IconAction({
  icon: Icon,
  label,
  onClick
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="hidden h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-muted transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:flex"
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
