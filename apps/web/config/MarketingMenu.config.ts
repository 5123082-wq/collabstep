export type NavItem = {
  id: string;
  label: string;
  href?: string;
  children?: Array<{
    id: string;
    label: string;
    href: string;
    cta?: { label: string; href: string };
  }>;
};

export const marketingMenu: NavItem[] = [
  {
    id: "product",
    label: "Продукт",
    children: [
      {
        id: "overview",
        label: "Обзор платформы",
        href: "/product",
        cta: { label: "Попробовать бесплатно", href: "/register" }
      },
      {
        id: "ai",
        label: "AI-агенты",
        href: "/product/ai",
        cta: { label: "Сгенерировать логотип (демо)", href: "/product/ai" }
      },
      {
        id: "pm",
        label: "Управление проектами",
        href: "/product/pm",
        cta: { label: "Смотреть шаблоны проектов", href: "/product/pm" }
      },
      {
        id: "marketplace",
        label: "Маркетплейс услуг",
        href: "/product/marketplace",
        cta: { label: "Открыть каталог", href: "/product/marketplace" }
      }
    ]
  },
  {
    id: "audience",
    label: "Для кого",
    children: [
      {
        id: "founder",
        label: "Бизнес / Основатель",
        href: "/audience#founder",
        cta: { label: "Создать проект", href: "/register" }
      },
      {
        id: "designers",
        label: "Дизайнеры",
        href: "/audience#designers",
        cta: { label: "Создать профиль дизайнера", href: "/register" }
      },
      {
        id: "devs",
        label: "Разработчики",
        href: "/audience#developers",
        cta: { label: "Создать профиль разработчика", href: "/register" }
      },
      {
        id: "marketers",
        label: "Маркетологи / Копирайтеры",
        href: "/audience#marketers",
        cta: { label: "Создать профиль специалиста", href: "/register" }
      },
      {
        id: "contractors",
        label: "Подрядчики",
        href: "/audience#contractors",
        cta: { label: "Подключить компанию", href: "/register" }
      }
    ]
  },
  {
    id: "projects",
    label: "Проекты",
    children: [
      { id: "feed", label: "Лента открытых проектов", href: "/projects" },
      { id: "cases", label: "Кейсы (истории)", href: "/projects/cases" }
    ]
  },
  {
    id: "specialists",
    label: "Специалисты",
    children: [
      { id: "catalog", label: "Каталог специалистов", href: "/specialists" },
      { id: "rating", label: "Как работает рейтинг", href: "/specialists#rating" }
    ]
  },
  {
    id: "contractors",
    label: "Подрядчики",
    children: [
      { id: "catalog", label: "Каталог поставщиков", href: "/contractors" }
    ]
  },
  {
    id: "pricing",
    label: "Тарифы",
    children: [
      { id: "pro", label: "Для специалистов (Pro/Boost)", href: "/pricing#pro" },
      { id: "teams", label: "Для команд/агентств", href: "/pricing#business" }
    ]
  },
  {
    id: "blog",
    label: "Блог / Гайды",
    children: [
      { id: "articles", label: "Статьи / Плейбуки", href: "/blog" },
      { id: "webinars", label: "Вебинары", href: "/blog#webinars" }
    ]
  },
  { id: "auth", label: "Войти / Регистрация", href: "/login" }
];

export function findCtaHref(itemId: string, childId?: string): string | null {
  const item = marketingMenu.find((entry) => entry.id === itemId);
  if (!item) return null;
  if (item.href && !childId) {
    return item.href;
  }
  if (!item.children || item.children.length === 0) {
    return null;
  }
  if (!childId) {
    const [first] = item.children;
    return first?.cta?.href ?? first?.href ?? null;
  }
  const child = item.children.find((entry) => entry.id === childId);
  if (!child) return null;
  return child.cta?.href ?? child.href ?? null;
}
