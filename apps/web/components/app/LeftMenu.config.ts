import {
  ActivitySquare,
  BadgeCheck,
  Building2,
  CircleDollarSign,
  Compass,
  FileText,
  Gem,
  GraduationCap,
  Inbox,
  KanbanSquare,
  LifeBuoy,
  LineChart,
  MessageCircle,
  PieChart,
  ShieldCheck,
  Sparkles,
  Users2,
} from 'lucide-react';

import type { MenuItemConfig } from '@/lib/nav/menu-builder';

export const LEFT_MENU_CONFIG: MenuItemConfig[] = [
  {
    id: 'dashboard',
    label: 'Дашборд',
    href: '/app/dashboard',
    description: 'Сводка по проектам, финансам и статусам',
    icon: LineChart,
  },
  {
    id: 'projects',
    label: 'Проекты',
    description: 'Управление проектами и шаблонами',
    icon: KanbanSquare,
    children: [
      {
        id: 'projects-active',
        label: 'Активные проекты',
        href: '/app/projects',
        badge: 8,
      },
      {
        id: 'projects-templates',
        label: 'Шаблоны',
        href: '/app/projects/templates',
        badge: 3,
      },
      {
        id: 'projects-archive',
        label: 'Архив',
        href: '/app/projects/archive',
      },
    ],
  },
  {
    id: 'marketplace',
    label: 'Маркетплейс',
    description: 'Рынок проектов, вакансий и специалистов',
    icon: Compass,
    children: [
      {
        id: 'marketplace-projects',
        label: 'Проекты',
        href: '/app/marketplace/projects',
        badge: 12,
      },
      {
        id: 'marketplace-vacancies',
        label: 'Вакансии',
        href: '/app/marketplace/vacancies',
        badge: 5,
      },
      {
        id: 'marketplace-specialists',
        label: 'Специалисты',
        href: '/app/marketplace/specialists',
      },
      {
        id: 'marketplace-contractors',
        label: 'Подрядчики',
        href: '/app/marketplace/contractors',
      },
      {
        id: 'marketplace-packs',
        label: 'Пакеты услуг',
        href: '/app/marketplace/packs',
      },
    ],
  },
  {
    id: 'ai-hub',
    label: 'AI Hub',
    description: 'AI генерации, промпты и агенты',
    icon: Sparkles,
    children: [
      {
        id: 'ai-generations',
        label: 'Генерации',
        href: '/app/ai-hub/generations',
      },
      {
        id: 'ai-history',
        label: 'История',
        href: '/app/ai-hub/history',
      },
      {
        id: 'ai-prompts',
        label: 'Промпты',
        href: '/app/ai-hub/prompts',
      },
      {
        id: 'ai-agents',
        label: 'Агенты',
        href: '/app/ai-hub/agents',
      },
    ],
  },
  {
    id: 'community',
    label: 'Комьюнити',
    description: 'Питч, комнаты и рейтинг',
    icon: Users2,
    children: [
      {
        id: 'community-pitch',
        label: 'Питч',
        href: '/app/community/pitch',
      },
      {
        id: 'community-rooms',
        label: 'Комнаты',
        href: '/app/community/rooms',
      },
      {
        id: 'community-events',
        label: 'События',
        href: '/app/community/events',
      },
      {
        id: 'community-rating',
        label: 'Рейтинг',
        href: '/app/community/rating',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Финансы',
    description: 'Кошелёк, счета и эскроу',
    icon: CircleDollarSign,
    roles: ['FOUNDER', 'PM', 'ADMIN'],
    children: [
      {
        id: 'finance-wallet',
        label: 'Кошелёк',
        href: '/app/finance/wallet',
      },
      {
        id: 'finance-escrow',
        label: 'Эскроу',
        href: '/app/finance/escrow',
      },
      {
        id: 'finance-invoices',
        label: 'Счета',
        href: '/app/finance/invoices',
      },
      {
        id: 'finance-plans',
        label: 'Планы',
        href: '/app/finance/plans',
      },
      {
        id: 'finance-disputes',
        label: 'Споры',
        href: '/app/finance/disputes',
      },
    ],
  },
  {
    id: 'docs',
    label: 'Документы',
    description: 'Файлы и шаблоны договоров',
    icon: FileText,
    children: [
      {
        id: 'docs-files',
        label: 'Файлы',
        href: '/app/docs/files',
      },
      {
        id: 'docs-contracts',
        label: 'Договоры',
        href: '/app/docs/contracts',
      },
      {
        id: 'docs-brand',
        label: 'Бренд-репозиторий',
        href: '/app/docs/brand-repo',
      },
    ],
  },
  {
    id: 'messages',
    label: 'Сообщения',
    href: '/app/messages',
    description: 'Чаты и обсуждения',
    icon: MessageCircle,
    badge: 4,
  },
  {
    id: 'notifications',
    label: 'Уведомления',
    href: '/app/notifications',
    description: 'Алерты и системные события',
    icon: Inbox,
  },
  {
    id: 'profile',
    label: 'Профиль',
    description: 'Статус и карточка специалиста',
    icon: BadgeCheck,
    children: [
      {
        id: 'profile-overview',
        label: 'Мой профиль',
        href: '/app/profile',
      },
      {
        id: 'profile-rating',
        label: 'Рейтинг',
        href: '/app/profile/rating',
      },
      {
        id: 'profile-badges',
        label: 'Бейджи',
        href: '/app/profile/badges',
      },
      {
        id: 'profile-card',
        label: 'Карточка',
        href: '/app/profile/card',
      },
    ],
  },
  {
    id: 'org',
    label: 'Организация',
    description: 'Команда и биллинг',
    icon: Building2,
    children: [
      {
        id: 'org-team',
        label: 'Команда',
        href: '/app/org/team',
      },
      {
        id: 'org-billing',
        label: 'Биллинг',
        href: '/app/org/billing',
      },
      {
        id: 'org-templates',
        label: 'Процесс-шаблоны',
        href: '/app/org/process-templates',
      },
    ],
  },
  {
    id: 'support',
    label: 'Поддержка',
    description: 'Справка, тикеты и чат',
    icon: LifeBuoy,
    children: [
      {
        id: 'support-help',
        label: 'База знаний',
        href: '/app/support/help',
      },
      {
        id: 'support-tickets',
        label: 'Тикеты',
        href: '/app/support/tickets',
        badge: 2,
      },
      {
        id: 'support-chat',
        label: 'Чат',
        href: '/app/support/chat',
      },
    ],
  },
  {
    id: 'docs-legal',
    label: 'Юридический центр',
    description: 'Контроль договоров и рисков',
    icon: ShieldCheck,
    disabled: true,
  },
  {
    id: 'market-insights',
    label: 'Market Insights',
    description: 'Аналитика рынка',
    icon: PieChart,
    disabled: true,
  },
  {
    id: 'academy',
    label: 'Академия',
    description: 'Обучающие курсы',
    icon: GraduationCap,
    disabled: true,
  },
  {
    id: 'perks',
    label: 'Бонусы',
    description: 'Программы лояльности',
    icon: Gem,
    disabled: true,
  },
  {
    id: 'admin',
    label: 'Админка',
    href: '/app/admin',
    description: 'Управление платформой',
    icon: ActivitySquare,
    roles: ['ADMIN', 'MODERATOR'],
  },
];
