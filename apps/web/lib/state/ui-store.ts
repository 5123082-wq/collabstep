import { create } from 'zustand';

interface UIState {
  selectedProjectId: string | null;
  isSidebarOpen: boolean;
  selectProject: (projectId: string | null) => void;
  toggleSidebar: (open?: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  selectedProjectId: null,
  isSidebarOpen: true,
  selectProject: (projectId) => set({ selectedProjectId: projectId }),
  toggleSidebar: (open) =>
    set((state) => ({
      isSidebarOpen: typeof open === 'boolean' ? open : !state.isSidebarOpen,
    })),
}));
