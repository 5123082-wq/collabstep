import type { ReactNode } from 'react';

import { AppTopbar } from '@/components/app/AppTopbar';
import { BackgroundPresetEffect } from '@/components/app/BackgroundPresetEffect';
import { CommandPalette } from '@/components/app/CommandPalette';
import { ContentContainer } from '@/components/app/ContentContainer';
import { RightActionsPanel } from '@/components/app/RightActionsPanel';
import { Sidebar } from '@/components/app/Sidebar';
import { ToastHost } from '@/components/app/ToastHost';
import { MOCK_USER_ROLES } from '@/lib/auth/mock-roles';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen w-full text-foreground">
      <BackgroundPresetEffect />
      <Sidebar roles={MOCK_USER_ROLES} />
      <div className="flex min-h-screen flex-1 flex-col">
        <AppTopbar />
        <div className="flex flex-1 overflow-hidden">
          <ContentContainer>{children}</ContentContainer>
          <RightActionsPanel />
        </div>
      </div>
      <CommandPalette />
      <ToastHost />
    </div>
  );
}
