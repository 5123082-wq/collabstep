"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, DataTable } from "@collabverse/ui";
import { PageHeader } from "@/components/page-header";
import { useModal } from "@/components/providers/modal-provider";
import { pageBlueprints, type PageBlueprint } from "@/data/page-blueprints";
import { primaryNavigation, projectTabs, resolvePageFromSegments } from "@/lib/navigation";

function getBlueprint(path: string): PageBlueprint | undefined {
  return pageBlueprints[path];
}

export default function SegmentsPage({ params }: { params: { segments?: string[] } }) {
  const router = useRouter();
  const { openModal } = useModal();
  const segments = useMemo(() => params.segments ?? ["home"], [params.segments]);
  const descriptor = useMemo(() => resolvePageFromSegments(segments), [segments]);
  const path = useMemo(() => segments.join("/"), [segments]);
  const blueprint = useMemo(() => getBlueprint(path) ?? getBlueprint("home"), [path]);
  const showProjectTabs = segments[0] === "projects" && segments[1] === "project";
  const activeTab = segments[2] ?? "overview";
  const [_, forceUpdate] = useState(0);

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

  if (!descriptor || !blueprint) {
    return null;
  }

  const actions = blueprint.actions ?? [];
  const sections = blueprint.sections ?? [];
  const tables = blueprint.tables ?? [];
  const modals = blueprint.modals ?? [];
  const states = blueprint.states ?? [];
  const checklist = blueprint.checklist ?? [];
  const notes = blueprint.notes ?? [];

  return (
    <div className="space-y-8">
      <PageHeader
        title={descriptor.title}
        description={descriptor.description}
        breadcrumbs={descriptor.breadcrumbs}
        actions={
          <>
            {actions.map((action) => (
              <Button
                key={action.id}
                variant={action.variant ?? "primary"}
                onClick={() => action.modalId && openModal(action.modalId, { source: path, action: action.id })}
              >
                {action.label}
              </Button>
            ))}
          </>
        }
      />

      {showProjectTabs ? <ProjectTabs active={activeTab} /> : null}

      {states.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Состояния</CardTitle>
            <CardDescription>Все ключевые состояния должны быть визуализированы.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {states.map((state) => (
              <Badge key={state} variant="soft" className="capitalize">
                {state}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ) : null}

      {checklist.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Чек-лист</CardTitle>
            <CardDescription>Обязательные действия для страницы.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-border text-[10px] font-semibold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}

      {sections.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.title} className="h-full">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                {section.description ? <CardDescription>{section.description}</CardDescription> : null}
              </CardHeader>
              <CardContent>
                {section.tags ? (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {section.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                ) : null}
                {section.items ? (
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted">Раздел требует уточнения элементов.</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : null}

      {tables.length > 0 ? (
        <div className="space-y-6">
          {tables.map((table) => (
            <Card key={table.name}>
              <CardHeader>
                <CardTitle>{table.name}</CardTitle>
                {table.description ? <CardDescription>{table.description}</CardDescription> : null}
              </CardHeader>
              <CardContent>
                <DataTable
                  columns={table.columns.map((label, index) => ({
                    key: `${table.name}-${index}`,
                    label
                  }))}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : null}

      {modals.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Модальные окна</CardTitle>
            <CardDescription>Каждое действие должно открывать визуальную заготовку.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {modals.map((modal) => (
              <Button
                key={modal.id}
                variant="outline"
                onClick={() => openModal(modal.id, { source: path })}
                className="justify-start px-5"
              >
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold">{modal.label}</span>
                  {modal.description ? (
                    <span className="text-xs text-muted">{modal.description}</span>
                  ) : null}
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      ) : null}

      {notes.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Заметки</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </CardContent>
        </Card>
      ) : null}

      <Card>
        <CardHeader>
          <CardTitle>Системные компоненты</CardTitle>
          <CardDescription>Проверить доступность и состояния для базовых элементов UI.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {primaryNavigation.slice(0, 6).map((item) => (
            <div key={item.id} className="space-y-2 rounded-2xl border border-border/60 bg-background/60 p-4">
              <h4 className="font-medium text-foreground">{item.label}</h4>
              <p className="text-sm text-muted">
                Навигация уровня 1 с {item.secondary.length} вложенными разделами и подсказками.
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
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
