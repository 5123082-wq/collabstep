import type { Metadata } from "next";

import { CTASection } from "@/components/marketing/sections/CTA";
import { FeaturesSection } from "@/components/marketing/sections/Features";
import { Hero } from "@/components/marketing/sections/Hero";

export const metadata: Metadata = {
  title: "Управление проектами в Collabverse",
  description:
    "Гибкие дорожные карты, шаблоны процессов и автоматические отчёты. Организуйте проекты и команды в одном workspace.",
  openGraph: {
    title: "Управление проектами в Collabverse",
    description:
      "Шаблоны спринтов, контроль статусов и доступ исполнителей. Управляйте проектами без хаоса.",
    url: "https://collabverse.ru/product/pm",
    type: "article"
  }
};

export default function ProductPmPage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="Управление проектами"
        title="Структура и прозрачность для всей команды"
        description="Собирайте проекты из готовых шаблонов, отслеживайте статусы и запускайте автоматические проверки качества."
        primaryAction={{ label: "Смотреть шаблоны проектов", href: "/product/pm" }}
        secondaryAction={{ label: "Попробовать бесплатно", href: "/register" }}
      />
      <FeaturesSection
        title="Инструменты для операционной ясности"
        columns={2}
        features={[
          {
            id: "templates",
            title: "Готовые шаблоны",
            description: "Спринты, кампании, продакшн. Адаптируйте под свои процессы за минуты.",
            href: "/projects",
            ctaLabel: "Открыть проекты"
          },
          {
            id: "status",
            title: "Единый статус",
            description: "Лента обновлений, риск-алерты и уведомления в чаты. Все знают, что происходит.",
            href: "/projects/cases",
            ctaLabel: "Кейсы"
          },
          {
            id: "collab",
            title: "Совместная работа",
            description: "Комментарирование, упоминания и история версий. Никаких потерянных задач.",
            href: "/specialists",
            ctaLabel: "Найти специалиста"
          },
          {
            id: "report",
            title: "Отчётность",
            description: "Экспорт задач, burn-down диаграммы, тайм-трекер и начисление оплат.",
            href: "/contractors",
            ctaLabel: "Подрядчики"
          }
        ]}
      />
      <CTASection
        title="Соберите проект под ключ"
        description="Выберите шаблон, добавьте команду и назначьте AI-агентов для автоматизации рутины."
        primary={{ label: "Смотреть шаблоны проектов", href: "/product/pm" }}
        secondary={{ label: "Открыть ленту проектов", href: "/projects" }}
      />
    </div>
  );
}
