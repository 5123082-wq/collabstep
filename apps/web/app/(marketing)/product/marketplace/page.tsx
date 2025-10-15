import type { Metadata } from "next";

import { CTASection } from "@/components/marketing/sections/CTA";
import { FeaturesSection } from "@/components/marketing/sections/Features";
import { Hero } from "@/components/marketing/sections/Hero";

export const metadata: Metadata = {
  title: "Маркетплейс услуг Collabverse",
  description:
    "Каталог проверенных подрядчиков и специалистов. Сравнивайте цены, рейтинги и подключайте команды в один клик.",
  openGraph: {
    title: "Маркетплейс услуг Collabverse",
    description:
      "Каталог поставщиков, рейтинги и прозрачные сметы. Подберите команду под любые задачи.",
    url: "https://collabverse.ru/product/marketplace",
    type: "article"
  }
};

export default function ProductMarketplacePage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="Маркетплейс услуг"
        title="Проверенные подрядчики рядом"
        description="Каталог услуг с рейтингами, кейсами и прозрачными ставками. Сравнивайте офферы и запускайте работу без долгих переговоров."
        primaryAction={{ label: "Открыть каталог", href: "/product/marketplace" }}
        secondaryAction={{ label: "Запросить смету", href: "/contractors" }}
      />
      <FeaturesSection
        title="Преимущества маркетплейса"
        columns={2}
        features={[
          {
            id: "verification",
            title: "Верификация",
            description: "Проверка портфолио, рейтинги и система отзывов. Прозрачность на каждом этапе.",
            href: "/specialists",
            ctaLabel: "Каталог специалистов"
          },
          {
            id: "pricing",
            title: "Прозрачные цены",
            description: "Сравнивайте пакеты, сроки и бюджеты. Получайте несколько смет и выбирайте лучшее предложение.",
            href: "/contractors",
            ctaLabel: "Сравнить цены"
          },
          {
            id: "collab",
            title: "Интеграция с проектами",
            description: "Подрядчики подключаются прямо в задачи, доступна история коммуникации и платежей.",
            href: "/projects",
            ctaLabel: "Лента проектов"
          },
          {
            id: "cases",
            title: "Портфолио",
            description: "Изучайте кейсы, результаты кампаний и отзывы заказчиков.",
            href: "/projects/cases",
            ctaLabel: "Смотреть кейсы"
          }
        ]}
      />
      <CTASection
        title="Подберите команду под любой запрос"
        description="Сформируйте запрос, укажите бюджет и получите несколько смет. Collabverse поможет организовать сотрудничество."
        primary={{ label: "Открыть каталог", href: "/product/marketplace" }}
        secondary={{ label: "Запросить смету", href: "/contractors" }}
      />
    </div>
  );
}
