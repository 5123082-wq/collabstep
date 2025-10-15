export const USER_ROLES = [
  'Администратор',
  'Менеджер',
  'Куратор',
  'Исполнитель',
  'Наблюдатель',
] as const;

export type UserRole = (typeof USER_ROLES)[number];
