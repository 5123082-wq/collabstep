"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@collabverse/ui";
import { PageHeader } from "@/components/page-header";
import { primaryNavigation, projectTabs, resolvePageFromSegments } from "@/lib/navigation";

const placeholderBlocks = [
  {
    title: "Сводка",
    description: "Карточки ключевых метрик, прогресс, риски и последние изменения."
  },
  {
    title: "Действия",
    description: "Primary/Secondary actions, ведущие к модалкам и дроуерам."
  },
  {
    title: "Таблицы",
    description: "Списки с фильтрами, сортировкой, пустыми состояниями и пагинацией."
  }
];

export default function SegmentsPage({ params }: { params: { segments?: string[] } }) {
  const router = useRouter();
  const segments = useMemo(() => params.segments ?? ["home"], [params.segments]);
  const descriptor = useMemo(() => resolvePageFromSegments(segments), [segments]);
  const path = useMemo(() => segments.join("/"), [segments]);
  const showProjectTabs = segments[0] === "projects" && segments[1] === "project";
  const activeTab = segments[2] ?? "overview";
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    if (!descriptor) {
      router.replace("/home");
    }
  }, [descriptor, router]);

  useEffect(() => {
    const handler = () => forceUpdate((value) => value + 1);
    window.addEventListener("focus", handler);
    return () => window.removeEventListener("focus", handler);
  }, []);

  const primaryActions = useMemo(() => {
    if (!descriptor) return [] as PrimaryAction[];
    return buildPrimaryActions(path);
  }, [descriptor, path]);

  if (!descriptor) {
    return null;
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title={descriptor.title}
        description={descriptor.description}
        breadcrumbs={descriptor.breadcrumbs}
        actions={
          <>
            {primaryActions.map((action) => (
              <Button
                key={action.id}
                variant={action.variant}
                onClick={() => action.handler(action.id)}
              >
                {action.label}
              </Button>
            ))}
          </>
        }
      />
      {showProjectTabs ? <ProjectTabs active={activeTab} /> : null}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {placeholderBlocks.map((block) => (
          <section
            key={block.title}
            className="flex flex-col justify-between rounded-3xl border border-border/60 bg-surface/80 p-6 shadow-soft backdrop-blur"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
              <p className="text-sm text-muted">{block.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted">
              <span className="rounded-full border border-dashed border-border px-3 py-1">
                Loading
              </span>
              <span className="rounded-full border border-dashed border-border px-3 py-1">
                Empty
              </span>
              <span className="rounded-full border border-dashed border-border px-3 py-1">
                Error
              </span>
              <span className="rounded-full border border-dashed border-border px-3 py-1">
                Success
              </span>
            </div>
          </section>
        ))}
      </div>
      <section className="space-y-4 rounded-3xl border border-border/60 bg-surface/80 p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground">Системные компоненты</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {primaryNavigation.slice(0, 4).map((item) => (
            <div key={item.id} className="space-y-2 rounded-2xl border border-border/60 bg-background/60 p-4">
              <h4 className="font-medium text-foreground">{item.label}</h4>
              <p className="text-sm text-muted">
                Ховеры, фокусы и доступность для {item.secondary.length} вложенных разделов.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectTabs({ active }: { active: string }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-border/60 bg-surface/80 p-2 shadow-soft">
      <div className="flex min-w-max gap-2">
        {projectTabs.map((tab) => (
          <a
            key={tab}
            href={`/projects/project/${tab}`}
            className={`rounded-2xl px-4 py-2 text-sm font-medium capitalize transition ${
              active === tab
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted hover:bg-muted/10"
            }`}
          >
            {tab}
          </a>
        ))}
      </div>
    </div>
  );
}

type PrimaryAction = {
  id: string;
  label: string;
  variant: "primary" | "secondary" | "outline";
  handler: (id: string) => void;
};

function buildPrimaryActions(path: string): PrimaryAction[] {
  const modalTrigger = (id: string) => {
    const event = new CustomEvent("cv:action", { detail: { id } });
    window.dispatchEvent(event);
  };

  const actionsForPath: Record<string, PrimaryAction[]> = {
    workspaces: [
      { id: "create-workspace", label: "Новый workspace", variant: "primary", handler: modalTrigger },
      { id: "invite", label: "Пригласить", variant: "secondary", handler: modalTrigger }
    ],
    projects: [
      { id: "new-project", label: "Открыть проект", variant: "primary", handler: modalTrigger },
      { id: "open-brief", label: "Бриф", variant: "outline", handler: modalTrigger }
    ],
    "marketplace/project-sales": [
      { id: "sell-project", label: "Продать проект", variant: "primary", handler: modalTrigger },
      { id: "create-offer", label: "Сделать оффер", variant: "secondary", handler: modalTrigger }
    ]
  };

  const key = Object.keys(actionsForPath).find((candidate) => path.startsWith(candidate));
  return key ? actionsForPath[key] : [];
}
