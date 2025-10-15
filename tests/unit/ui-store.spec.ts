describe('ui-store persistence', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    // @ts-expect-error cleanup mock window
    delete global.window;
  });

  it('сохраняет пресет фона и раскрытие меню в localStorage', async () => {
    const storageData: Record<string, string> = {};
    const mockStorage = {
      getItem: (key: string) => (key in storageData ? storageData[key] : null),
      setItem: (key: string, value: string) => {
        storageData[key] = value;
      },
      removeItem: (key: string) => {
        delete storageData[key];
      },
      clear: () => {
        Object.keys(storageData).forEach((key) => delete storageData[key]);
      },
      key: (index: number) => Object.keys(storageData)[index] ?? null,
    } as Storage;
    Object.defineProperty(mockStorage, 'length', {
      get: () => Object.keys(storageData).length,
    });

    // @ts-expect-error attach mock window
    global.window = { localStorage: mockStorage };

    const { useUIStore } = await import('@/lib/state/ui-store');
    useUIStore.getState().setBackgroundPreset('grid');
    useUIStore.getState().toggleMenuGroup('projects');

    let stored = storageData['collabverse-app-ui'];
    expect(stored).toBeDefined();
    expect(stored).toContain('grid');
    expect(stored).toContain('projects');

    jest.resetModules();
    // @ts-expect-error reattach mock window after reset
    global.window = { localStorage: mockStorage };
    const { useUIStore: restoredStore } = await import('@/lib/state/ui-store');
    expect(restoredStore.getState().backgroundPreset).toBe('grid');
    expect(restoredStore.getState().expandedMenuGroups).toContain('projects');
    stored = storageData['collabverse-app-ui'];
    expect(stored).toContain('grid');
  });
});
