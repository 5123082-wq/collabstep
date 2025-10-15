"use client";

import { useEffect, useMemo, useRef, useState } from 'react';

import projects from '@/app/mock/projects.json';
import tasks from '@/app/mock/tasks.json';
import invoices from '@/app/mock/invoices.json';
import { deepSearch, parseSearchQuery } from '@/lib/search/deepSearch';

import { showTodoToast } from './ToastHost';

const DATASET = {
  projects,
  tasks,
  invoices,
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const isMac = navigator.userAgent.toLowerCase().includes('mac');
      if ((isMac ? event.metaKey : event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 16);
    } else {
      setQuery('');
    }
  }, [open]);

  const results = useMemo(() => deepSearch(query, DATASET), [query]);
  const { kind } = useMemo(() => parseSearchQuery(query), [query]);

  const hint =
    kind === 'tasks'
      ? 'Ищем задачи. Введите номер или название'
      : kind === 'invoices'
        ? 'Ищем счета и платежи'
        : kind === 'projects'
          ? 'Ищем проекты и команды'
          : 'Поиск по проектам, задачам и счетам';

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-40 flex items-start justify-center bg-black/40 px-4 py-12"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-2xl rounded-2xl border border-border/40 bg-background p-4 shadow-2xl">
        <div className="flex items-center justify-between gap-2">
          <div className="flex-1">
            <label htmlFor="command-input" className="sr-only">
              Командная палитра
            </label>
            <input
              id="command-input"
              ref={inputRef}
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="@проект  #задача  $счёт"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-xl border border-border px-3 py-2 text-xs uppercase text-muted transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Esc
          </button>
        </div>
        <p className="mt-2 text-xs text-muted">{hint}</p>
        <div className="mt-4 max-h-72 overflow-y-auto rounded-xl border border-border/40">
          {results.length === 0 ? (
            <p className="px-4 py-6 text-sm text-muted">Ничего не найдено. Попробуйте уточнить запрос.</p>
          ) : (
            <ul className="divide-y divide-border/20">
              {results.map((item) => (
                <li key={`${item.type}-${item.id}`}>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      showTodoToast(`TODO: переход к ${item.title}`);
                    }}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div>
                      <div className="text-sm font-medium">{item.title}</div>
                      {item.description ? (
                        <div className="text-xs text-muted">{item.description}</div>
                      ) : null}
                    </div>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs capitalize text-muted">
                      {item.type}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
