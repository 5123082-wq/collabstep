"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import projects from '@/app/mock/projects.json';
import { useUIStore } from '@/lib/state/ui-store';

import { showTodoToast } from './ToastHost';

interface CreateOption {
  id: string;
  label: string;
  description: string;
  requiresProject?: boolean;
}

const OPTIONS: CreateOption[] = [
  { id: 'project', label: 'Проект', description: 'Создать новый проект команды' },
  { id: 'vacancy', label: 'Вакансию', description: 'Опубликовать вакансию на маркетплейсе' },
  { id: 'task', label: 'Задачу', description: 'Добавить задачу в проект', requiresProject: true },
  { id: 'ai-session', label: 'AI-сессию', description: 'Запустить генерацию с ассистентом' },
  { id: 'contractor-order', label: 'Заказ подрядчику', description: 'Отправить запрос подрядчику' },
  { id: 'payment', label: 'Платёж/Счёт', description: 'Создать счёт или оплату' },
];

interface CreateMenuProps {
  className?: string;
}

export function CreateMenu({ className }: CreateMenuProps) {
  const [open, setOpen] = useState(false);
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const { selectedProjectId, selectProject } = useUIStore((state) => ({
    selectedProjectId: state.selectedProjectId,
    selectProject: state.selectProject,
  }));

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [selectedProjectId],
  );

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!menuRef.current) {
        return;
      }
      if (!menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setProjectDialogOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('mousedown', handleClick);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    const portalNode = document.createElement('div');
    portalNode.setAttribute('data-portal', 'create-menu');
    portalRef.current = portalNode;
    document.body.appendChild(portalNode);
    setPortalReady(true);
    return () => {
      if (portalRef.current) {
        document.body.removeChild(portalRef.current);
        portalRef.current = null;
      }
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!portalReady) {
      return;
    }
    if (projectDialogOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [portalReady, projectDialogOpen]);

  const handleSelect = useCallback(
    (option: CreateOption) => {
      if (option.requiresProject && !selectedProject) {
        setProjectDialogOpen(true);
        setOpen(false);
        return;
      }
      setOpen(false);
      if (option.id === 'task') {
        showTodoToast('TODO: Создание задачи запланировано');
      } else {
        showTodoToast(`TODO: ${option.label}`);
      }
    },
    [selectedProject],
  );

  const handleProjectSelect = useCallback(
    (projectId: string) => {
      selectProject(projectId);
      setProjectDialogOpen(false);
      showTodoToast('TODO: Создание задачи запланировано');
    },
    [selectProject],
  );

  return (
    <div className={`relative ${className ?? ''}`} ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="+ Создать"
      >
        <span aria-hidden="true">+ Создать</span>
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-30 mt-2 w-72 rounded-xl border border-border/40 bg-background/95 p-2 shadow-xl"
        >
          <div className="px-2 pb-2 text-xs text-muted">
            {selectedProject
              ? `Текущий проект: ${selectedProject.title}`
              : 'Без выбранного проекта'}
          </div>
          <ul className="flex flex-col gap-1" aria-label="Быстрое создание">
            {OPTIONS.map((option) => (
              <li key={option.id}>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => handleSelect(option)}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option.label}</span>
                    {option.requiresProject ? (
                      <span className="text-xs text-muted">нужен проект</span>
                    ) : null}
                  </div>
                  <p className="text-xs text-muted">{option.description}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {projectDialogOpen && portalReady && portalRef.current
        ? createPortal(
            <ProjectSelectDialog
              onClose={() => setProjectDialogOpen(false)}
              onSelect={handleProjectSelect}
            />,
            portalRef.current,
          )
        : null}
    </div>
  );
}

interface ProjectSelectDialogProps {
  onClose: () => void;
  onSelect: (projectId: string) => void;
}

function ProjectSelectDialog({ onClose, onSelect }: ProjectSelectDialogProps) {
  const [query, setQuery] = useState('');
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const haystack = `${project.title} ${project.tagline ?? ''}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
  }, [query]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    if (listRef.current) {
      const first = listRef.current.querySelector('button');
      first?.focus({ preventScroll: true });
    }
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4 py-6"
    >
      <div className="w-full max-w-md rounded-2xl border border-border/60 bg-background p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">Выберите проект</h2>
            <p className="text-sm text-muted">
              Для создания задачи нужен контекст проекта — можно выбрать ниже или вернуться позже.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-muted transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>
        <div className="mt-4">
          <label className="text-xs uppercase text-muted" htmlFor="project-search">
            Поиск проекта
          </label>
          <input
            id="project-search"
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Название или тег"
          />
        </div>
        <ul ref={listRef} className="mt-4 flex max-h-56 flex-col gap-2 overflow-y-auto">
          {filtered.length === 0 ? (
            <li className="rounded-lg border border-dashed border-border/40 px-3 py-6 text-center text-sm text-muted">
              Проекты не найдены
            </li>
          ) : (
            filtered.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  onClick={() => onSelect(project.id)}
                  className="w-full rounded-lg border border-border/40 px-3 py-2 text-left text-sm transition hover:border-ring hover:bg-ring/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="font-medium">{project.title}</div>
                  {project.tagline ? (
                    <p className="text-xs text-muted">{project.tagline}</p>
                  ) : null}
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={() => {
              onClose();
              showTodoToast('TODO: переход к созданию проекта');
            }}
            className="rounded-lg border border-border px-3 py-2 text-sm text-muted transition hover:border-ring hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Создать новый проект
          </button>
        </div>
      </div>
    </div>
  );
}
