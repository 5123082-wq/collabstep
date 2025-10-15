import {
  type LucideIcon,
  Bell,
  Building2,
  FileText,
  Home,
  LayoutDashboard,
  LifeBuoy,
  MessageSquare,
  PackageSearch,
  ShieldCheck,
  Sparkles,
  UserCircle,
  Users,
  Wallet
} from "lucide-react";

export type SecondaryNavItem = {
  id: string;
  label: string;
  href: string;
  description?: string;
};

export type PrimaryNavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  secondary: SecondaryNavItem[];
};

export const primaryNavigation: PrimaryNavItem[] = [
  {
    id: "home",
    label: "Главная",
    icon: Home,
    href: "/home",
    secondary: [
      { id: "home-overview", label: "Обзор", href: "/home" },
      { id: "home-updates", label: "Обновления", href: "/home/updates" },
      { id: "home-reports", label: "Отчёты", href: "/home/reports" }
    ]
  },
  {
    id: "workspaces",
    label: "Workspaces",
    icon: Building2,
    href: "/workspaces",
    secondary: [
      { id: "workspaces-all", label: "Список", href: "/workspaces" },
      { id: "workspaces-create", label: "Создать", href: "/workspaces/new" },
      { id: "workspaces-plans", label: "Планы & Seats", href: "/workspaces/plans" },
      { id: "workspaces-invoices", label: "Инвойсы", href: "/workspaces/invoices" },
      { id: "workspaces-settings", label: "Настройки", href: "/workspaces/settings" }
    ]
  },
  {
    id: "projects",
    label: "Проекты",
    icon: LayoutDashboard,
    href: "/projects",
    secondary: [
      { id: "projects-all", label: "Все проекты", href: "/projects" },
      { id: "projects-portfolio", label: "Портфель", href: "/projects/portfolio" },
      { id: "projects-templates", label: "Шаблоны", href: "/projects/templates" }
    ]
  },
  {
    id: "marketplace",
    label: "Маркетплейс",
    icon: PackageSearch,
    href: "/marketplace",
    secondary: [
      { id: "marketplace-projects", label: "Проекты", href: "/marketplace/projects" },
      { id: "marketplace-specialists", label: "Специалисты", href: "/marketplace/specialists" },
      { id: "marketplace-contractors", label: "Подрядчики", href: "/marketplace/contractors" },
      { id: "marketplace-templates", label: "Шаблоны", href: "/marketplace/templates" },
      { id: "marketplace-project-sales", label: "Проекты на продажу", href: "/marketplace/project-sales" },
      { id: "marketplace-packages", label: "Пакеты запуска", href: "/marketplace/launch-packages" }
    ]
  },
  {
    id: "ai-hub",
    label: "AI-Хаб",
    icon: Sparkles,
    href: "/ai",
    secondary: [
      { id: "ai-logo", label: "Логотип", href: "/ai/logo" },
      { id: "ai-brandbook", label: "Брендбук", href: "/ai/brandbook" },
      { id: "ai-landing", label: "Лендинг", href: "/ai/landing" },
      { id: "ai-marketing", label: "Маркетинг-стратегия", href: "/ai/marketing" },
      { id: "ai-competitors", label: "Анализ конкурентов", href: "/ai/competitors" },
      { id: "ai-content", label: "Контент-план", href: "/ai/content" },
      { id: "ai-history", label: "История", href: "/ai/history" }
    ]
  },
  {
    id: "community",
    label: "Сообщество",
    icon: Users,
    href: "/community",
    secondary: [
      { id: "community-pitches", label: "Питчи", href: "/community/pitches" },
      { id: "community-rooms", label: "Комнаты", href: "/community/rooms" },
      { id: "community-events", label: "События", href: "/community/events" }
    ]
  },
  {
    id: "finance",
    label: "Финансы",
    icon: Wallet,
    href: "/finance",
    secondary: [
      { id: "finance-wallet", label: "Кошелёк", href: "/finance/wallet" },
      { id: "finance-escrow", label: "Эскроу", href: "/finance/escrow" },
      { id: "finance-subscriptions", label: "Подписки", href: "/finance/subscriptions" },
      { id: "finance-plans", label: "Workspace Plans", href: "/finance/workspace-plans" },
      { id: "finance-billing", label: "Счета & Акты", href: "/finance/billing" },
      { id: "finance-disputes", label: "Споры", href: "/finance/disputes" }
    ]
  },
  {
    id: "documents",
    label: "Документы",
    icon: FileText,
    href: "/documents",
    secondary: [
      { id: "documents-library", label: "Библиотека", href: "/documents" },
      { id: "documents-esign", label: "E-sign", href: "/documents/e-sign" },
      { id: "documents-templates", label: "Шаблоны", href: "/documents/templates" }
    ]
  },
  {
    id: "messaging",
    label: "Сообщения",
    icon: MessageSquare,
    href: "/messaging",
    secondary: [
      { id: "messaging-inbox", label: "Входящие", href: "/messaging" },
      { id: "messaging-groups", label: "Группы", href: "/messaging/groups" },
      { id: "messaging-video", label: "Видео-коллы", href: "/messaging/video" }
    ]
  },
  {
    id: "notifications",
    label: "Уведомления",
    icon: Bell,
    href: "/notifications",
    secondary: [
      { id: "notifications-center", label: "Центр", href: "/notifications" },
      { id: "notifications-settings", label: "Настройки", href: "/notifications/settings" }
    ]
  },
  {
    id: "support",
    label: "Поддержка",
    icon: LifeBuoy,
    href: "/support",
    secondary: [
      { id: "support-help", label: "Центр помощи", href: "/support" },
      { id: "support-tickets", label: "Тикеты", href: "/support/tickets" }
    ]
  },
  {
    id: "profile",
    label: "Профиль",
    icon: UserCircle,
    href: "/profile",
    secondary: [
      { id: "profile-overview", label: "Обзор", href: "/profile" },
      { id: "profile-portfolio", label: "Портфолио", href: "/profile/portfolio" },
      { id: "profile-badges", label: "Бейджи", href: "/profile/badges" },
      { id: "profile-settings", label: "Настройки", href: "/profile/settings" }
    ]
  },
  {
    id: "admin",
    label: "Админка",
    icon: ShieldCheck,
    href: "/admin",
    secondary: [
      { id: "admin-moderation-profiles", label: "Модерация профилей", href: "/admin/moderation/profiles" },
      { id: "admin-moderation-jobs", label: "Модерация вакансий", href: "/admin/moderation/jobs" },
      { id: "admin-moderation-templates", label: "Модерация шаблонов", href: "/admin/moderation/templates" },
      { id: "admin-moderation-listings", label: "Модерация листингов", href: "/admin/moderation/listings" },
      { id: "admin-moderation-complaints", label: "Жалобы", href: "/admin/moderation/complaints" },
      { id: "admin-cms", label: "CMS", href: "/admin/cms" },
      { id: "admin-commissions", label: "Комиссии", href: "/admin/commissions" },
      { id: "admin-reports", label: "Отчёты", href: "/admin/reports" },
      { id: "admin-config", label: "Конфигурации", href: "/admin/config" },
      { id: "admin-logs", label: "Логи", href: "/admin/logs" }
    ]
  }
];

export const projectTabs = [
  "overview",
  "brief",
  "team",
  "vacancies",
  "applications",
  "tasks",
  "design",
  "development",
  "marketing",
  "contractors",
  "ai",
  "finance",
  "documents",
  "timeline",
  "analytics",
  "settings"
] as const;

export const commandPaletteActions = [
  { id: "create-project", label: "Создать проект", href: "/projects/new" },
  { id: "invite-member", label: "Пригласить участника", href: "/workspaces/invite" },
  { id: "open-command", label: "Открыть Command Palette", href: "#" }
];

export type PageDescriptor = {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
};

const projectPageMap: Record<string, PageDescriptor> = Object.fromEntries(
  projectTabs.map((tab) => [
    `projects/project/${tab}`,
    {
      title: `Проект · ${tab.toUpperCase()}`,
      breadcrumbs: [
        { label: "Проекты", href: "/projects" },
        { label: "Project Alpha", href: "/projects/project" }
      ]
    }
  ])
);

export const pageMap: Record<string, PageDescriptor> = {
  home: { title: "Главная" },
  "home/updates": { title: "Обновления" },
  "home/reports": { title: "Отчёты" },
  workspaces: { title: "Workspaces" },
  "workspaces/new": { title: "Создать Workspace" },
  "workspaces/plans": { title: "Планы & Seats" },
  "workspaces/invoices": { title: "Инвойсы" },
  "workspaces/settings": { title: "Настройки Workspace" },
  marketplace: { title: "Маркетплейс" },
  "marketplace/projects": { title: "Маркетплейс · Проекты" },
  "marketplace/specialists": { title: "Специалисты" },
  "marketplace/contractors": { title: "Подрядчики" },
  "marketplace/templates": { title: "Шаблоны" },
  "marketplace/project-sales": { title: "Проекты на продажу" },
  "marketplace/launch-packages": { title: "Пакеты запуска" },
  projects: { title: "Проекты" },
  "projects/portfolio": { title: "Портфель" },
  "projects/templates": { title: "Проектные шаблоны" },
  "projects/project": {
    title: "Project Alpha",
    breadcrumbs: [{ label: "Проекты", href: "/projects" }]
  },
  "ai/logo": { title: "AI · Логотип" },
  "ai/brandbook": { title: "AI · Брендбук" },
  "ai/landing": { title: "AI · Лендинг" },
  "ai/marketing": { title: "AI · Маркетинг" },
  "ai/competitors": { title: "AI · Анализ конкурентов" },
  "ai/content": { title: "AI · Контент" },
  "ai/history": { title: "AI · История" },
  "finance/wallet": { title: "Кошелёк" },
  "finance/escrow": { title: "Эскроу" },
  "finance/subscriptions": { title: "Подписки" },
  "finance/workspace-plans": { title: "Планы Workspace" },
  "finance/billing": { title: "Счета & Акты" },
  "finance/disputes": { title: "Споры" },
  "community/pitches": { title: "Питчи" },
  "community/rooms": { title: "Комнаты" },
  "community/events": { title: "События" },
  documents: { title: "Документы" },
  "documents/e-sign": { title: "E-sign" },
  "documents/templates": { title: "Документы · Шаблоны" },
  messaging: { title: "Сообщения" },
  "messaging/groups": { title: "Группы" },
  "messaging/video": { title: "Видео-коллы" },
  notifications: { title: "Уведомления" },
  "notifications/settings": { title: "Настройки уведомлений" },
  support: { title: "Поддержка" },
  "support/tickets": { title: "Тикеты" },
  profile: { title: "Профиль" },
  "profile/portfolio": { title: "Портфолио" },
  "profile/badges": { title: "Бейджи" },
  "profile/settings": { title: "Настройки профиля" },
  "admin/moderation/profiles": { title: "Модерация профилей" },
  "admin/moderation/jobs": { title: "Модерация вакансий" },
  "admin/moderation/templates": { title: "Модерация шаблонов" },
  "admin/moderation/listings": { title: "Модерация листингов" },
  "admin/moderation/complaints": { title: "Жалобы" },
  "admin/cms": { title: "CMS" },
  "admin/commissions": { title: "Комиссии" },
  "admin/reports": { title: "Отчёты" },
  "admin/config": { title: "Конфигурации" },
  "admin/logs": { title: "Логи" },
  ...projectPageMap
};

export function resolvePageFromSegments(segments: string[]): PageDescriptor | null {
  const path = segments.join("/") || "home";
  return pageMap[path] ?? null;
}
