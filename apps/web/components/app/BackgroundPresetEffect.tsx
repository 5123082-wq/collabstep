"use client";

import { useEffect } from 'react';

import { useUIStore } from '@/lib/state/ui-store';

const CLASSES = ['app-background-mesh', 'app-background-grid', 'app-background-halo'];

export function BackgroundPresetEffect() {
  const preset = useUIStore((state) => state.backgroundPreset);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    const body = document.body;
    CLASSES.forEach((className) => body.classList.remove(className));
    const targetClass = `app-background-${preset}`;
    body.classList.add(targetClass);
  }, [preset]);

  return null;
}
