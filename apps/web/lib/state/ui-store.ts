import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type BackgroundPreset = 'mesh' | 'grid' | 'halo';

interface UIState {
  selectedProjectId: string | null;
  isSidebarOpen: boolean;
  backgroundPreset: BackgroundPreset;
  expandedMenuGroups: string[];
  selectProject: (projectId: string | null) => void;
  toggleSidebar: (open?: boolean) => void;
  setBackgroundPreset: (preset: BackgroundPreset) => void;
  toggleMenuGroup: (groupId: string) => void;
  setMenuGroup: (groupId: string, expanded: boolean) => void;
  resetMenuGroups: (ids?: string[]) => void;
}

const noopStorage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
  clear: () => undefined,
  key: () => null,
  length: 0,
} as Storage;

const storage = createJSONStorage<UIState>(() =>
  typeof window === 'undefined' ? noopStorage : window.localStorage,
);

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      selectedProjectId: null,
      isSidebarOpen: true,
      backgroundPreset: 'mesh',
      expandedMenuGroups: [],
      selectProject: (projectId) => set({ selectedProjectId: projectId }),
      toggleSidebar: (open) =>
        set((state) => ({
          isSidebarOpen: typeof open === 'boolean' ? open : !state.isSidebarOpen,
        })),
      setBackgroundPreset: (preset) => set({ backgroundPreset: preset }),
      toggleMenuGroup: (groupId) => {
        const current = get().expandedMenuGroups;
        const exists = current.includes(groupId);
        set({
          expandedMenuGroups: exists
            ? current.filter((id) => id !== groupId)
            : [...current, groupId],
        });
      },
      setMenuGroup: (groupId, expanded) => {
        const current = new Set(get().expandedMenuGroups);
        if (expanded) {
          current.add(groupId);
        } else {
          current.delete(groupId);
        }
        set({ expandedMenuGroups: Array.from(current) });
      },
      resetMenuGroups: (ids) => {
        set({ expandedMenuGroups: ids ? [...ids] : [] });
      },
    }),
    {
      name: 'collabverse-app-ui',
      storage,
      partialize: (state) => ({
        selectedProjectId: state.selectedProjectId,
        backgroundPreset: state.backgroundPreset,
        expandedMenuGroups: state.expandedMenuGroups,
        isSidebarOpen: state.isSidebarOpen,
      }),
    },
  ),
);
