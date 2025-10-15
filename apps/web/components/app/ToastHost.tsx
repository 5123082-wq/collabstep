"use client";

import { useEffect, useState } from 'react';

import { emitToast, subscribeToToast, type ToastPayload } from '@/lib/ui/toast';

interface ToastState extends ToastPayload {
  visible: boolean;
}

export function ToastHost() {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToToast((payload) => {
      setToasts((current) => [
        ...current,
        {
          ...payload,
          visible: true,
        },
      ]);
      setTimeout(() => {
        setToasts((current) =>
          current.map((toast) =>
            toast.id === payload.id ? { ...toast, visible: false } : toast,
          ),
        );
      }, 2600);
      setTimeout(() => {
        setToasts((current) => current.filter((toast) => toast.id !== payload.id));
      }, 3200);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <div className="flex w-full max-w-sm flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            aria-live="polite"
            className={`rounded-xl border border-border/40 bg-background/90 px-4 py-3 text-sm text-foreground shadow-lg transition ${
              toast.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export const showTodoToast = (message = 'TODO… скоро будет готово!') => {
  emitToast(message);
};
