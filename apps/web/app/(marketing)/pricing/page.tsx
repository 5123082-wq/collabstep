import type { Metadata } from "next";

import Link from "next/link";

import { CTASection } from "@/components/marketing/sections/CTA";
import { Hero } from "@/components/marketing/sections/Hero";

export const metadata: Metadata = {
  title: "Тарифы Collabverse",
  description:
    "Тарифы для специалистов и команд: PRO, Boost и корпоративные планы. Выберите подходящий формат и подключайте команду.",
  openGraph: {
    title: "Тарифы Collabverse",
    description: "PRO и Boost для специалистов, корпоративные планы для агентств и компаний.",
    url: "https://collabverse.ru/pricing",
    type: "article"
  }
};

const specialistPlans = [
  {
    id: "pro",
    title: "PRO",
    price: "1 290 ₽/мес",
    description: "Доступ к AI-агентам, расширенное портфолио, бейджи доверия и до 5 активных проектов.",
    cta: "Оформить PRO"
  },
  {
    id: "boost",
    title: "Boost",
    price: "2 490 ₽/мес",
    description: "Повышенный рейтинг, автоматическая рассылка заявок и приоритет в выдаче проектов.",
    cta: "Оформить PRO"
  }
];

const teamPlans = [
  {
    id: "startup",
    title: "Команды",
    price: "от 9 900 ₽/мес",
    description: "Workspace для 20 участников, интеграции, маркетплейс услуг и базовая поддержка.",
    cta: "Запросить корпоративный"
  },
  {
    id: "agency",
    title: "Агентства",
    price: "индивидуально",
    description: "Неограниченные проекты, white-label, SLA 24/7 и персональный менеджер.",
    cta: "Запросить корпоративный"
  }
];

export default function PricingPage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="Тарифы"
        title="Выберите план под ваши задачи"
        description="Тарифы для специалистов, команд и агентств. Все планы включают AI-помощников и доступ к каталогу услуг."
        primaryAction={{ label: "Оформить PRO", href: "/pricing#pro" }}
        secondaryAction={{ label: "Запросить корпоративный", href: "/pricing#business" }}
      />
      <section id="pro" className="py-16 text-white">
        <div className="marketing-container space-y-6">
          <h2 className="text-3xl font-semibold">Для специалистов</h2>
          <div className="marketing-grid columns-2">
            {specialistPlans.map((plan) => (
              <div key={plan.id} className="marketing-card space-y-4 p-8">
                <div>
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-lg text-white/70">{plan.price}</p>
                </div>
                <p className="text-sm text-white/70">{plan.description}</p>
                <Link
                  href="/register"
                  className="marketing-btn-primary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="business" className="py-16 text-white">
        <div className="marketing-container space-y-6">
          <h2 className="text-3xl font-semibold">Для команд и агентств</h2>
          <div className="marketing-grid columns-2">
            {teamPlans.map((plan) => (
              <div key={plan.id} className="marketing-card space-y-4 p-8">
                <div>
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-lg text-white/70">{plan.price}</p>
                </div>
                <p className="text-sm text-white/70">{plan.description}</p>
                <Link
                  href="/register"
                  className="marketing-btn-secondary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Нужна помощь в выборе?"
        description="Свяжитесь с нами, расскажите о задачах и мы подберём оптимальный план и команду."
        primary={{ label: "Оформить PRO", href: "/pricing#pro" }}
        secondary={{ label: "Запросить корпоративный", href: "/pricing#business" }}
      />
    </div>
  );
}
