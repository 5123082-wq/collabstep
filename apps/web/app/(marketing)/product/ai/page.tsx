import type { Metadata } from "next";

import { CTASection } from "@/components/marketing/sections/CTA";
import { FeaturesSection } from "@/components/marketing/sections/Features";
import { Hero } from "@/components/marketing/sections/Hero";

export const metadata: Metadata = {
  title: "Collabverse AI-агенты",
  description:
    "AI-помощники для генерации логотипов, лендингов и контента. Автоматизируйте рутинные задачи и ускоряйте запуск кампаний.",
  openGraph: {
    title: "Collabverse AI-агенты",
    description:
      "Создавайте идеи, дизайн и тексты за минуты. AI-агенты Collabverse работают в связке с задачами и проектами.",
    url: "https://collabverse.ru/product/ai",
    type: "article"
  }
};

export default function ProductAiPage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="AI-агенты"
        title="Ваши креативные ассистенты 24/7"
        description="Сгенерируйте визуальную концепцию, текстовую стратегию или тестовый лендинг. Агент подскажет шаги и подготовит материалы."
        primaryAction={{ label: "Сгенерировать логотип (демо)", href: "/product/ai" }}
        secondaryAction={{ label: "Создать тестовый лендинг", href: "/product/ai" }}
      />
      <FeaturesSection
        title="Что умеют AI-агенты"
        columns={2}
        features={[
          {
            id: "logo",
            title: "Логотипы и бренд-паки",
            description: "Создание айдентики по брифу, подбор палитр и экспорт в нужных форматах.",
            href: "/register",
            ctaLabel: "Попробовать"
          },
          {
            id: "landing",
            title: "Лендинги и копирайтинг",
            description: "Готовый лендинг с текстами, секциями и иллюстрациями. Экспорт в редактор за один клик.",
            href: "/register",
            ctaLabel: "Создать лендинг"
          },
          {
            id: "insights",
            title: "Стратегия и подсказки",
            description: "AI анализирует бриф, предлагает план коммуникаций и оповещает команду о критических шагах.",
            href: "/projects",
            ctaLabel: "Открыть проекты"
          },
          {
            id: "collaboration",
            title: "Работа в связке с людьми",
            description: "Агенты подключаются к задачам, сохраняют версию контента и учитывают комментарии команды.",
            href: "/specialists",
            ctaLabel: "Найти специалиста"
          }
        ]}
      />
      <CTASection
        title="AI помогает, вы управляете"
        description="Выберите шаблон агента и добавьте его в проект. Все результаты сохраняются в истории и доступны команде."
        primary={{ label: "Сгенерировать логотип (демо)", href: "/product/ai" }}
        secondary={{ label: "Создать тестовый лендинг", href: "/product/ai" }}
      />
    </div>
  );
}
