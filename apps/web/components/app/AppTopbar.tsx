"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  Bell,
  MessageCircle,
  Search,
  Wallet,
} from 'lucide-react';

import { useUIStore, type BackgroundPreset } from '@/lib/state/ui-store';

import { CreateMenu } from './CreateMenu';
import { showTodoToast } from './ToastHost';

const PRESETS: { id: BackgroundPreset; label: string }[] = [
  { id: 'mesh', label: 'Mesh' },
  { id: 'grid', label: 'Grid' },
  { id: 'halo', label: 'Halo' },
];

export function AppTopbar() {
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const backgroundPreset = useUIStore((state) => state.backgroundPreset);
  const setBackgroundPreset = useUIStore((state) => state.setBackgroundPreset);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    const escHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProfileOpen(false);
      }
    };
    window.addEventListener('mousedown', handler);
    window.addEventListener('keydown', escHandler);
    return () => {
      window.removeEventListener('mousedown', handler);
      window.removeEventListener('keydown', escHandler);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-border/30 bg-background/95 backdrop-blur">
      <div className="flex items-center gap-4 px-6 py-4">
        <Link href="/app/dashboard" className="flex items-center gap-2 text-sm font-semibold">
          <Image src="/logo.svg" alt="Collabverse" width={28} height={28} className="rounded" />
          Collabverse
        </Link>
        <div className="relative hidden min-w-[280px] flex-1 items-center md:flex">
          <label htmlFor="global-search" className="sr-only">
            Поиск по проектам, задачам и людям
          </label>
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted" />
          <input
            id="global-search"
            className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Поиск по проектам / задачам / людям"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                showTodoToast('TODO: глобальный поиск в разработке');
              }
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <CreateMenu className="block" />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-muted transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => showTodoToast('TODO: уведомления скоро подключим')}
            aria-label="Уведомления"
          >
            <Bell className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-muted transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:inline-flex"
            onClick={() => showTodoToast('TODO: сообщения скоро подключим')}
            aria-label="Сообщения"
          >
            <MessageCircle className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-muted transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:inline-flex"
            onClick={() => showTodoToast('TODO: кошелёк в разработке')}
            aria-label="Кошелёк"
          >
            <Wallet className="h-5 w-5" />
          </button>
          <div className="hidden items-center gap-2 rounded-xl border border-border/60 bg-background px-2 py-1 lg:flex">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => setBackgroundPreset(preset.id)}
                className={`rounded-lg px-3 py-1 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  backgroundPreset === preset.id
                    ? 'bg-primary/10 text-foreground'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => setProfileOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-haspopup="menu"
              aria-expanded={profileOpen}
            >
              <span className="hidden text-left text-xs text-muted sm:block">
                <span className="block text-foreground">Анастасия Орлова</span>
                <span className="block">{pathname.includes('/admin') ? 'Администратор' : 'Founder'}</span>
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-primary-foreground">
                AO
              </span>
            </button>
            {profileOpen ? (
              <div
                role="menu"
                className="absolute right-0 z-30 mt-2 w-48 rounded-xl border border-border/40 bg-background/95 p-2 shadow-xl"
              >
                <button
                  type="button"
                  role="menuitem"
                  className="w-full rounded-lg px-3 py-2 text-left text-sm transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => {
                    setProfileOpen(false);
                    showTodoToast('TODO: переход в профиль');
                  }}
                >
                  Профиль
                </button>
                <button
                  type="button"
                  role="menuitem"
                  className="w-full rounded-lg px-3 py-2 text-left text-sm transition hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => {
                    setProfileOpen(false);
                    showTodoToast('TODO: настройки скоро будут');
                  }}
                >
                  Настройки
                </button>
                <button
                  type="button"
                  role="menuitem"
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-destructive transition hover:bg-destructive/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => {
                    setProfileOpen(false);
                    showTodoToast('TODO: выход из системы');
                  }}
                >
                  Выход
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
