"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { commandPaletteActions } from "@/lib/navigation";

export type ModalId =
  | "quick-create"
  | "notifications"
  | "messages"
  | "wallet"
  | "workspace-switcher"
  | "user-menu"
  | "command-palette"
  | "generic";

type ModalContextValue = {
  openModal: (id: ModalId, payload?: Record<string, unknown>) => void;
  closeModal: () => void;
};

type ModalState = {
  id: ModalId;
  payload?: Record<string, unknown>;
} | null;

const ModalContext = React.createContext<ModalContextValue | undefined>(undefined);

export function useModal() {
  const ctx = React.useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used inside ModalProvider");
  }
  return ctx;
}

function ModalHost({ state, onClose }: { state: ModalState; onClose: () => void }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!state || !mounted) return null;

  const titleMap: Record<ModalId, string> = {
    "quick-create": "Быстрые действия",
    notifications: "Уведомления",
    messages: "Сообщения",
    wallet: "Кошелёк",
    "workspace-switcher": "Выбор Workspace",
    "user-menu": "Профиль",
    "command-palette": "Command Palette",
    generic: "Действие"
  };

  const renderContent = () => {
    if (state.id === "command-palette") {
      return <CommandPalette onClose={onClose} />;
    }

    return (
      <div className="space-y-4 text-sm leading-6 text-muted">
        <p>
          Здесь будет полноценная форма/шаги согласно спецификации. Пока отображаются фиктивные
          данные: {JSON.stringify(state.payload ?? {}, null, 2)}.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:bg-primary/90"
            onClick={onClose}
          >
            Подтвердить
          </button>
          <button
            type="button"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/10"
            onClick={onClose}
          >
            Отмена
          </button>
        </div>
      </div>
    );
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="mx-4 w-full max-w-xl rounded-2xl bg-surface p-6 shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">{titleMap[state.id]}</h2>
            <p className="text-sm text-muted">
              Демо-модалка: визуализирует действие «{state.id}».
            </p>
          </div>
          <button
            type="button"
            className="rounded-lg p-2 text-muted transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        {renderContent()}
      </div>
    </div>,
    document.body
  );
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<ModalState>(null);

  const openModal = React.useCallback<ModalContextValue["openModal"]>((id, payload) => {
    setState({ id, payload });
  }, []);

  const closeModal = React.useCallback(() => setState(null), []);

  const value = React.useMemo(() => ({ openModal, closeModal }), [openModal, closeModal]);

  React.useEffect(() => {
    const handler = (event: Event) => {
      if (event instanceof CustomEvent) {
        const detail = event.detail as { id: string };
        openModal("generic", { action: detail.id });
      }
    };

    window.addEventListener("cv:action", handler as EventListener);
    return () => window.removeEventListener("cv:action", handler as EventListener);
  }, [openModal]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      <ModalHost state={state} onClose={closeModal} />
    </ModalContext.Provider>
  );
}

function CommandPalette({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = React.useState("");
  const actions = React.useMemo(() => {
    if (!query) return commandPaletteActions;
    return commandPaletteActions.filter((action) =>
      action.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="space-y-4">
      <input
        autoFocus
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Поиск команд..."
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <ul className="max-h-72 space-y-2 overflow-auto pr-1">
        {actions.map((action) => (
          <li key={action.id}>
            <Link
              href={action.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-sm transition hover:border-border hover:bg-muted/10"
            >
              <span>{action.label}</span>
              <kbd className="rounded border border-border bg-muted/20 px-2 py-1 text-xs text-muted">
                ↵
              </kbd>
            </Link>
          </li>
        ))}
        {actions.length === 0 && (
          <li className="rounded-xl border border-dashed border-border px-4 py-6 text-center text-sm text-muted">
            Команд не найдено
          </li>
        )}
      </ul>
    </div>
  );
}
