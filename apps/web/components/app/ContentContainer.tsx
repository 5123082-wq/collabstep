import type { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <main className="flex-1 overflow-y-auto" data-testid="app-content">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-8">
        {children}
      </div>
    </main>
  );
}
