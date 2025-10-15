import {
  type LucideIcon,
  Bell,
  Building2,
  FileText,
  Home,
  LayoutDashboard,
  LifeBuoy,
  Megaphone,
  MessageSquare,
  PackageSearch,
  Palette,
  ShieldCheck,
  Sparkles,
  UserCircle,
  Users,
  Wallet
} from "lucide-react";
import { pageBlueprints } from "@/data/page-blueprints";

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

const nav = <T extends SecondaryNavItem[]>(items: T) => items;

export const primaryNavigation: PrimaryNavItem[] = [
  {
    id: "home",
    label: "Главная",
    icon: Home,
    href: "/home",
    secondary: nav([
      { id: "home-overview", label: "Обзор", href: "/home" },
      { id: "home-updates", label: "Обновления", href: "/home/updates" },
      { id: "home-reports", label: "Отчёты", href: "/home/reports" }
    ])
  },
  {
    id: "workspaces",
    label: "Workspaces",
    icon: Building2,
    href: "/workspaces",
    secondary: nav([
      { id: "workspaces-all", label: "Список", href: "/workspaces" },
      { id: "workspaces-create", label: "Создать", href: "/workspaces/new" },
      { id: "workspaces-plans", label: "Планы & Seats", href: "/workspaces/plans" },
      { id: "workspaces-invoices", label: "Инвойсы", href: "/workspaces/invoices" },
      { id: "workspaces-settings", label: "Настройки", href: "/workspaces/settings" },
      { id: "workspaces-audit", label: "Аудит-лог", href: "/workspaces/audit" }
    ])
  },
  {
    id: "projects",
    label: "Проекты",
    icon: LayoutDashboard,
    href: "/projects",
    secondary: nav([
      { id: "projects-all", label: "Все проекты", href: "/projects" },
      { id: "projects-portfolio", label: "Портфель", href: "/projects/portfolio" },
      { id: "projects-templates", label: "Шаблоны", href: "/projects/templates" },
      { id: "projects-hub", label: "Project Hub", href: "/projects/project/overview" }
    ])
  },
  {
    id: "marketplace",
    label: "Маркетплейс",
    icon: PackageSearch,
    href: "/marketplace",
    secondary: nav([
      { id: "marketplace-projects", label: "Проекты", href: "/marketplace/projects" },
      { id: "marketplace-specialists", label: "Специалисты", href: "/marketplace/specialists" },
      { id: "marketplace-contractors", label: "Подрядчики", href: "/marketplace/contractors" },
      { id: "marketplace-templates", label: "Шаблоны", href: "/marketplace/templates" },
      { id: "marketplace-project-sales", label: "Проекты на продажу", href: "/marketplace/project-sales" },
      { id: "marketplace-packages", label: "Пакеты запуска", href: "/marketplace/launch-packages" }
    ])
  },
  {
    id: "ai-hub",
    label: "AI-Хаб",
    icon: Sparkles,
    href: "/ai/logo",
    secondary: nav([
      { id: "ai-logo", label: "Логотип", href: "/ai/logo" },
      { id: "ai-brandbook", label: "Брендбук", href: "/ai/brandbook" },
      { id: "ai-landing", label: "Лендинг", href: "/ai/landing" },
      { id: "ai-marketing", label: "Маркетинг-стратегия", href: "/ai/marketing" },
      { id: "ai-competitors", label: "Анализ конкурентов", href: "/ai/competitors" },
      { id: "ai-content", label: "Контент-план", href: "/ai/content" },
      { id: "ai-history", label: "История", href: "/ai/history" }
    ])
  },
  {
    id: "community",
    label: "Сообщество",
    icon: Users,
    href: "/community/pitches",
    secondary: nav([
      { id: "community-pitches", label: "Питчи", href: "/community/pitches" },
      { id: "community-rooms", label: "Комнаты", href: "/community/rooms" },
      { id: "community-events", label: "События", href: "/community/events" }
    ])
  },
  {
    id: "finance",
    label: "Финансы",
    icon: Wallet,
    href: "/finance/wallet",
    secondary: nav([
      { id: "finance-wallet", label: "Кошелёк", href: "/finance/wallet" },
      { id: "finance-escrow", label: "Эскроу", href: "/finance/escrow" },
      { id: "finance-subscriptions", label: "Подписки", href: "/finance/subscriptions" },
      { id: "finance-plans", label: "Workspace Plans", href: "/finance/workspace-plans" },
      { id: "finance-billing", label: "Счета & Акты", href: "/finance/billing" },
      { id: "finance-disputes", label: "Споры", href: "/finance/disputes" }
    ])
  },
  {
    id: "documents",
    label: "Документы",
    icon: FileText,
    href: "/documents",
    secondary: nav([
      { id: "documents-library", label: "Библиотека", href: "/documents" },
      { id: "documents-e-sign", label: "E-sign", href: "/documents/e-sign" },
      { id: "documents-templates", label: "Шаблоны", href: "/documents/templates" }
    ])
  },
  {
    id: "messaging",
    label: "Сообщения",
    icon: MessageSquare,
    href: "/messaging",
    secondary: nav([
      { id: "messaging-inbox", label: "Входящие", href: "/messaging" },
      { id: "messaging-groups", label: "Группы", href: "/messaging/groups" },
      { id: "messaging-video", label: "Видео-колл", href: "/messaging/video" }
    ])
  },
  {
    id: "notifications",
    label: "Уведомления",
    icon: Bell,
    href: "/notifications",
    secondary: nav([
      { id: "notifications-center", label: "Центр", href: "/notifications" },
      { id: "notifications-settings", label: "Настройки", href: "/notifications/settings" }
    ])
  },
  {
    id: "support",
    label: "Поддержка",
    icon: LifeBuoy,
    href: "/support",
    secondary: nav([
      { id: "support-help", label: "Центр помощи", href: "/support" },
      { id: "support-tickets", label: "Тикеты", href: "/support/tickets" }
    ])
  },
  {
    id: "growth",
    label: "Рост",
    icon: Megaphone,
    href: "/growth/share-to-earn",
    secondary: nav([
      { id: "growth-share", label: "Share-to-Earn", href: "/growth/share-to-earn" },
      { id: "growth-referrals", label: "Рефералы", href: "/growth/referrals" }
    ])
  },
  {
    id: "settings",
    label: "Настройки",
    icon: Palette,
    href: "/settings/appearance",
    secondary: nav([
      { id: "settings-appearance", label: "Тема", href: "/settings/appearance" },
      { id: "settings-shortcuts", label: "Шорткаты", href: "/settings/shortcuts" },
      { id: "settings-notifications", label: "Уведомления", href: "/settings/notifications" }
    ])
  },
  {
    id: "profile",
    label: "Профиль",
    icon: UserCircle,
    href: "/profile",
    secondary: nav([
      { id: "profile-overview", label: "Обзор", href: "/profile" },
      { id: "profile-portfolio", label: "Портфолио", href: "/profile/portfolio" },
      { id: "profile-badges", label: "Бейджи", href: "/profile/badges" },
      { id: "profile-settings", label: "Настройки", href: "/profile/settings" }
    ])
  },
  {
    id: "admin",
    label: "Админка",
    icon: ShieldCheck,
    href: "/admin/moderation/profiles",
    secondary: nav([
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
    ])
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
  { id: "command-create-project", label: "Создать проект", href: "/projects" },
  { id: "command-invite-member", label: "Пригласить участника", href: "/workspaces" },
  { id: "command-open-share", label: "Открыть Share-to-Earn", href: "/growth/share-to-earn" },
  { id: "command-open-settings", label: "Тема & фон", href: "/settings/appearance" },
  { id: "command-open-ai", label: "AI Хаб", href: "/ai/logo" }
];

export type PageDescriptor = {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
};

export const pageMap: Record<string, PageDescriptor> = Object.fromEntries(
  Object.entries(pageBlueprints).map(([path, blueprint]) => [
    path,
    {
      title: blueprint.title,
      description: blueprint.description,
      breadcrumbs: blueprint.breadcrumbs
    }
  ])
);

export function resolvePageFromSegments(segments: string[]): PageDescriptor | null {
  const path = segments.join("/") || "home";
  return pageMap[path] ?? null;
}
