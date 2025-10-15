"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo } from 'react';

import { buildMenu, type AppRole, type MenuItem } from '@/lib/nav/menu-builder';
import { useUIStore } from '@/lib/state/ui-store';

import { LEFT_MENU_CONFIG } from './LeftMenu.config';

interface SidebarProps {
  roles: AppRole[];
}

const isPathActive = (currentPath: string, target?: string) => {
  if (!target) {
    return false;
  }
  if (currentPath === target) {
    return true;
  }
  return currentPath.startsWith(`${target}/`);
};

export function Sidebar({ roles }: SidebarProps) {
  const pathname = usePathname();
  const menu = useMemo(() => buildMenu(LEFT_MENU_CONFIG, roles), [roles]);
  const expandedGroups = useUIStore((state) => state.expandedMenuGroups);
  const toggleGroup = useUIStore((state) => state.toggleMenuGroup);
  const setMenuGroup = useUIStore((state) => state.setMenuGroup);

  useEffect(() => {
    menu.forEach((item) => {
      if (!item.children) {
        return;
      }
      const hasActiveChild = item.children.some((child) =>
        isPathActive(pathname, child.href),
      );
      if (hasActiveChild && !expandedGroups.includes(item.id)) {
        setMenuGroup(item.id, true);
      }
    });
  }, [expandedGroups, menu, pathname, setMenuGroup]);

  return (
    <aside
      className="hidden w-72 shrink-0 flex-col border-r border-border/30 bg-background/95 px-4 py-6 lg:flex"
      role="navigation"
      aria-label="Основная навигация"
    >
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
        {menu.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            pathname={pathname}
            isExpanded={expandedGroups.includes(item.id)}
            onToggle={() => toggleGroup(item.id)}
          />
        ))}
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  item: MenuItem;
  pathname: string;
  isExpanded: boolean;
  onToggle: () => void;
}

function SidebarItem({ item, pathname, isExpanded, onToggle }: SidebarItemProps) {
  const Icon = item.icon;
  const hasChildren = Boolean(item.children?.length);
  const isActive = isPathActive(pathname, item.href);
  const childActive =
    hasChildren && item.children?.some((child) => isPathActive(pathname, child.href));

  if (item.disabled) {
    return (
      <div
        className="group flex flex-col gap-1 rounded-xl border border-transparent px-3 py-2 text-sm text-muted focus-within:border-border focus-within:bg-muted/10"
        aria-disabled
      >
        <div className="flex items-center gap-2 text-muted">
          {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
          <span>{item.label}</span>
        </div>
        {item.description ? (
          <p className="text-xs text-muted/80">{item.description}</p>
        ) : null}
      </div>
    );
  }

  if (hasChildren) {
    return (
      <div className="rounded-xl">
        <button
          type="button"
          onClick={onToggle}
          className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-ring ${
            childActive
              ? 'border-ring bg-ring/10 text-foreground'
              : 'border-transparent text-muted hover:border-border hover:bg-muted/10'
          }`}
          aria-expanded={isExpanded}
        >
          <span className="flex items-center gap-2">
            {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
            <span>{item.label}</span>
          </span>
          <span className="text-xs">{isExpanded ? '−' : '+'}</span>
        </button>
        <div className={`${isExpanded ? 'mt-2 flex flex-col gap-1' : 'hidden'}`}>
          {item.children?.map((child) => {
            const childIsActive = isPathActive(pathname, child.href);
            return (
              <Link
                key={child.id}
                href={child.href ?? '#'}
                className={`flex items-center justify-between rounded-lg px-4 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-ring ${
                  childIsActive
                    ? 'bg-ring/10 text-foreground'
                    : 'text-muted hover:bg-muted/10'
                }`}
              >
                <span>{child.label}</span>
                {child.badge ? (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-foreground/80">
                    {child.badge}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href ?? '#'}
      className={`flex items-center justify-between rounded-xl border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-ring ${
        isActive
          ? 'border-ring bg-ring/10 text-foreground'
          : 'border-transparent text-muted hover:border-border hover:bg-muted/10'
      }`}
    >
      <span className="flex items-center gap-2">
        {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
        <span>{item.label}</span>
      </span>
      {item.badge ? (
        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-foreground/80">
          {item.badge}
        </span>
      ) : null}
    </Link>
  );
}
