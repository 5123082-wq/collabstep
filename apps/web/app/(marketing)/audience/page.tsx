import type { Metadata } from "next";

import { AudienceSection } from "@/components/marketing/sections/Audience";
import { CTASection } from "@/components/marketing/sections/CTA";
import { FeaturesSection } from "@/components/marketing/sections/Features";
import { Hero } from "@/components/marketing/sections/Hero";

export const metadata: Metadata = {
  title: "Для кого Collabverse",
  description:
    "Платформа для основателей, дизайнеров, разработчиков, маркетологов и подрядчиков. Соединяем команды и проекты в одном пространстве.",
  openGraph: {
    title: "Для кого Collabverse",
    description:
      "Collabverse помогает бизнесу, специалистам и подрядчикам работать вместе. Единая платформа для роста.",
    url: "https://collabverse.ru/audience",
    type: "article"
  }
};

export default function AudiencePage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="Для кого"
        title="Экосистема для всей креативной индустрии"
        description="Каждая роль получает инструменты и контекст: от брифов и задач до аналитики и выплат."
        primaryAction={{ label: "Начать бесплатно", href: "/register" }}
        secondaryAction={{ label: "Узнать о тарифах", href: "/pricing" }}
      />
      <AudienceSection
        title="Роли и сценарии"
        subtitle="Выбирайте свой сценарий: создавайте проекты, подключайте исполнителей, продавайте услуги и развивайте личный бренд."
        cards={[
          {
            id: "founder",
            title: "Бизнес / Основатель",
            description: "От брифа до релиза. Управляйте командой, бюджетом и подрядчиками из одного окна.",
            href: "/register",
            ctaLabel: "Создать проект"
          },
          {
            id: "designers",
            title: "Дизайнеры",
            description: "AI-помощники, портфолио, быстрые согласования и система рейтинга.",
            href: "/register",
            ctaLabel: "Создать профиль дизайнера"
          },
          {
            id: "developers",
            title: "Разработчики",
            description: "Доступ к задачам, интеграции с git и единая база знаний по проекту.",
            href: "/register",
            ctaLabel: "Создать профиль разработчика"
          },
          {
            id: "marketers",
            title: "Маркетологи / Копирайтеры",
            description: "Редактор кампаний, генерация контента и проверка гипотез по данным.",
            href: "/register",
            ctaLabel: "Создать профиль специалиста"
          },
          {
            id: "contractors",
            title: "Подрядчики",
            description: "Оцифрованные сметы, контроль SLA и прозрачная коммуникация с заказчиком.",
            href: "/register",
            ctaLabel: "Подключить компанию"
          }
        ]}
      />
      <FeaturesSection
        title="Что получает каждая роль"
        columns={3}
        features={[
          {
            id: "visibility",
            title: "Полная прозрачность",
            description: "Общая картина по статусам и задачам, уведомления и автоматические отчёты."
          },
          {
            id: "growth",
            title: "Развитие и рост",
            description: "Рейтинги, бейджи, витрины услуг и рекомендации по прокачке навыков."
          },
          {
            id: "collab",
            title: "Коллаборация",
            description: "Общая база знаний, комментарии и привязка документов к задачам."
          }
        ]}
      />
      <CTASection
        title="Присоединяйтесь к экосистеме"
        description="Создайте профиль и расскажите о своих задачах или услугах. Collabverse поможет найти команду и клиентов."
        primary={{ label: "Зарегистрироваться", href: "/register" }}
        secondary={{ label: "Открыть каталог специалистов", href: "/specialists" }}
      />
    </div>
  );
}
