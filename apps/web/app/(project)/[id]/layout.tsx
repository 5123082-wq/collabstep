import type { ReactNode } from 'react';

interface ProjectLayoutProps {
  children: ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <>
      <span className="sr-only">
        Навигация v1 будет подключена на Этапе 1. Флаг NAV_V1=on.
      </span>
      {children}
    </>
  );
}
