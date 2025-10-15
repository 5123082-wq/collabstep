import type { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <span className="sr-only">
        Навигация v1 будет подключена на Этапе 1. Флаг NAV_V1=on.
      </span>
      {children}
    </>
  );
}
