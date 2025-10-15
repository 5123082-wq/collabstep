export type AppRole =
  | 'FOUNDER'
  | 'SPECIALIST'
  | 'CONTRACTOR'
  | 'PM'
  | 'ADMIN'
  | 'MODERATOR'
  | 'OBSERVER';

import type { LucideIcon } from 'lucide-react';

export interface MenuItemConfig {
  id: string;
  label: string;
  href?: string;
  description?: string;
  icon?: LucideIcon;
  badge?: number | string;
  disabled?: boolean;
  roles?: AppRole[];
  children?: MenuItemConfig[];
}

export interface MenuItem extends Omit<MenuItemConfig, 'children'> {
  children?: MenuItem[];
}

const hasAllowedRole = (allowed: AppRole[] | undefined, roles: AppRole[]): boolean => {
  if (!allowed || allowed.length === 0) {
    return true;
  }
  return allowed.some((role) => roles.includes(role));
};

const cloneWithoutEmptyChildren = (item: MenuItemConfig, roles: AppRole[]): MenuItem | null => {
  if (!hasAllowedRole(item.roles, roles)) {
    return null;
  }

  const cloned: MenuItem = {
    id: item.id,
    label: item.label,
    href: item.href,
    description: item.description,
    icon: item.icon,
    badge: item.badge,
    disabled: item.disabled,
    roles: item.roles,
  };

  if (item.children && item.children.length > 0) {
    const builtChildren = item.children
      .map((child) => cloneWithoutEmptyChildren(child, roles))
      .filter((child): child is MenuItem => Boolean(child));

    if (builtChildren.length > 0) {
      cloned.children = builtChildren;
    } else if (!item.href) {
      return null;
    }
  }

  return cloned;
};

export function buildMenu(config: MenuItemConfig[], roles: AppRole[]): MenuItem[] {
  return config
    .map((item) => cloneWithoutEmptyChildren(item, roles))
    .filter((item): item is MenuItem => Boolean(item));
}
