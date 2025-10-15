import type { Metadata } from "next";

import { CTASection } from "@/components/marketing/sections/CTA";
import { FeaturesSection } from "@/components/marketing/sections/Features";
import { Hero } from "@/components/marketing/sections/Hero";

export const metadata: Metadata = {
  title: "Collabverse — обзор платформы",
  description:
    "Узнайте, как Collabverse помогает командам запускать проекты быстрее: AI-агенты, управление задачами, маркетплейс услуг и единая навигация.",
  openGraph: {
    title: "Collabverse — обзор платформы",
    description:
      "AI-агенты, управление задачами и маркетплейс услуг. Один workspace для всей креативной команды.",
    url: "https://collabverse.ru/product",
    type: "article"
  }
};

export default function ProductOverviewPage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="Обзор платформы"
        title="Один workspace. Все процессы под контролем"
        description="AI-агенты, управление задачами, каталог услуг и общая база знаний. Collabverse создаёт единую операционную систему для креативных команд."
        primaryAction={{ label: "Попробовать бесплатно", href: "/register" }}
        secondaryAction={{ label: "Демо", href: "/product" }}
      />
      <FeaturesSection
        title="Ключевые возможности"
        subtitle="Каждый блок платформы связан общими данными, статусами и уведомлениями."
        columns={3}
        features={[
          {
            id: "workspace",
            title: "Единый workspace",
            description: "Объединяйте проекты, команды и подрядчиков. Настраивайте роли, уведомления и витрины услуг.",
            href: "/audience",
            ctaLabel: "Для кого"
          },
          {
            id: "automation",
            title: "Автоматизация",
            description: "AI-подсказки, авто-генерация документов, статусные отчёты и синхронизация задач.",
            href: "/product/ai",
            ctaLabel: "AI-агенты"
          },
          {
            id: "insights",
            title: "Единая аналитика",
            description: "Готовые отчёты по эффективности каналов, загрузке специалистов и окупаемости.",
            href: "/projects/cases",
            ctaLabel: "Кейсы"
          }
        ]}
      />
      <CTASection
        title="Готовы увидеть платформу в деле?"
        description="Зарегистрируйтесь и активируйте тестовый workspace. Приглашайте команду, создавайте проекты и подключайте подрядчиков."
        primary={{ label: "Попробовать бесплатно", href: "/register" }}
        secondary={{ label: "Смотреть тарифы", href: "/pricing" }}
      />
    </div>
  );
}
