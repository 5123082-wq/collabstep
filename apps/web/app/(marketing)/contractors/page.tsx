import type { Metadata } from "next";

import Link from "next/link";

import { CTASection } from "@/components/marketing/sections/CTA";
import { FeaturesSection } from "@/components/marketing/sections/Features";
import { Hero } from "@/components/marketing/sections/Hero";

export const metadata: Metadata = {
  title: "Каталог поставщиков Collabverse",
  description:
    "Подрядчики для дизайна, разработки, маркетинга и продакшна. Запрашивайте сметы, сравнивайте предложения и контролируйте работу в одном месте.",
  openGraph: {
    title: "Каталог поставщиков Collabverse",
    description:
      "Каталог студий и агентств. Сравните цены, подключите компанию и управляйте проектом в Collabverse.",
    url: "https://collabverse.ru/contractors",
    type: "article"
  }
};

const contractorTypes = [
  {
    id: "studio",
    title: "Креативные студии",
    description: "Брендинг, digital, motion-дизайн. Опыт работы с крупными брендами.",
    href: "/contractors",
    ctaLabel: "Запросить смету"
  },
  {
    id: "dev",
    title: "Разработчики",
    description: "Веб, мобильная, no-code команды. Настраиваемые SLA и поддержка.",
    href: "/contractors",
    ctaLabel: "Сравнить цены"
  },
  {
    id: "marketing",
    title: "Маркетинговые агентства",
    description: "Медиаплан, performance, инфлюенс-маркетинг. Прозрачная аналитика.",
    href: "/contractors",
    ctaLabel: "Запросить смету"
  }
];

export default function ContractorsPage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="Подрядчики"
        title="Каталог поставщиков услуг"
        description="Сравнивайте предложения, подключайте компании к проекту и ведите коммуникацию в одном окне."
        primaryAction={{ label: "Запросить смету", href: "/contractors" }}
        secondaryAction={{ label: "Сравнить цены", href: "/contractors" }}
      />
      <FeaturesSection title="Категории услуг" columns={3} features={contractorTypes} />
      <section className="py-16 text-white">
        <div className="marketing-container marketing-card space-y-4 p-8">
          <h2 className="text-2xl font-semibold">Как сравнить предложения</h2>
          <ol className="list-decimal space-y-3 pl-6 text-sm text-white/70">
            <li>Создайте бриф и укажите бюджет.</li>
            <li>Получите несколько смет и сравните цены и условия.</li>
            <li>Выберите поставщика, подключите его в проект и контролируйте задачи.</li>
          </ol>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contractors"
              className="marketing-btn-primary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Запросить смету
            </Link>
            <Link
              href="/projects"
              className="marketing-btn-secondary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Смотреть проекты
            </Link>
          </div>
        </div>
      </section>
      <CTASection
        title="Расширьте доступ к заказчикам"
        description="Добавьте компанию в каталог, настройте тарифы и получайте запросы напрямую."
        primary={{ label: "Подключить компанию", href: "/register" }}
        secondary={{ label: "Сравнить цены", href: "/contractors" }}
      />
    </div>
  );
}
