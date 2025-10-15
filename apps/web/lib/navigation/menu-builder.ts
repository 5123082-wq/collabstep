export type MenuItem = {
  id: string;
  label: string;
  href: string;
};

export function buildMenu(items: MenuItem[] = []): MenuItem[] {
  return Array.isArray(items) ? items : [];
}
