const EVENT_KEY = 'collabverse:toast';

export interface ToastPayload {
  id: string;
  message: string;
}

export type ToastListener = (payload: ToastPayload) => void;

export const emitToast = (message: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  const detail: ToastPayload = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    message,
  };
  window.dispatchEvent(new CustomEvent<ToastPayload>(EVENT_KEY, { detail }));
};

export const subscribeToToast = (listener: ToastListener) => {
  if (typeof window === 'undefined') {
    return () => undefined;
  }
  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<ToastPayload>;
    listener(customEvent.detail);
  };
  window.addEventListener(EVENT_KEY, handler as EventListener);
  return () => window.removeEventListener(EVENT_KEY, handler as EventListener);
};
