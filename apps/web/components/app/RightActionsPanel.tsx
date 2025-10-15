"use client";

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { showTodoToast } from './ToastHost';

interface ActionDescriptor {
  id: string;
  label: string;
  description?: string;
}

const actionsByRoute: Record<string, ActionDescriptor[]> = {
  '/app/marketplace/vacancies': [
    { id: 'publish', label: 'Опубликовать вакансию' },
    { id: 'boost', label: 'Поднять в выдаче' },
    { id: 'invite', label: 'Пригласить специалиста' },
  ],
  '/app/marketplace/projects': [
    { id: 'add-brief', label: 'Добавить бриф' },
    { id: 'match', label: 'Подбор команды' },
  ],
  '/app/finance/wallet': [
    { id: 'top-up', label: 'Пополнить кошелёк' },
    { id: 'withdraw', label: 'Вывести средства' },
  ],
  '/app/finance/invoices': [
    { id: 'new-invoice', label: 'Создать счёт' },
    { id: 'send', label: 'Отправить клиенту' },
  ],
  '/app/projects': [
    { id: 'new-task', label: 'Быстрое задание' },
    { id: 'invite-member', label: 'Пригласить участника' },
  ],
  '/app/docs/files': [
    { id: 'upload', label: 'Загрузить файл' },
    { id: 'share', label: 'Поделиться ссылкой' },
  ],
};

const pickActions = (path: string): ActionDescriptor[] => {
  const match = Object.entries(actionsByRoute).find(([route]) =>
    path.startsWith(route),
  );
  return match?.[1] ?? [];
};

export function RightActionsPanel() {
  const pathname = usePathname();
  const actions = useMemo(() => pickActions(pathname), [pathname]);

  if (actions.length === 0) {
    return null;
  }

  return (
    <aside className="sticky top-[96px] hidden h-[calc(100vh-96px)] w-72 shrink-0 flex-col gap-3 border-l border-border/20 bg-background/40 px-4 py-6 xl:flex">
      <h3 className="text-sm font-semibold">Быстрые действия</h3>
      <p className="text-xs text-muted">Контекстные кнопки для текущего раздела.</p>
      <div className="mt-3 flex flex-col gap-2">
        {actions.map((action) => (
          <button
            key={action.id}
            type="button"
            onClick={() => showTodoToast(`TODO: ${action.label}`)}
            className="rounded-xl border border-border/60 px-4 py-2 text-left text-sm transition hover:border-ring hover:bg-ring/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="block font-medium">{action.label}</span>
            {action.description ? (
              <span className="block text-xs text-muted">{action.description}</span>
            ) : null}
          </button>
        ))}
      </div>
    </aside>
  );
}
