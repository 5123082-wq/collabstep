import type { Metadata } from "next";

import Link from "next/link";

import { CTASection } from "@/components/marketing/sections/CTA";
import { Hero } from "@/components/marketing/sections/Hero";

export const metadata: Metadata = {
  title: "Кейсы и истории Collabverse",
  description: "Истории успеха команд, которые развиваются на платформе. Изучайте кейсы и вдохновляйтесь результатами.",
  openGraph: {
    title: "Кейсы и истории Collabverse",
    description: "Портфолио проектов, метрики и отзывы. Узнайте, как команды достигают результатов.",
    url: "https://collabverse.ru/projects/cases",
    type: "article"
  }
};

const caseStudies = [
  {
    id: "brand",
    title: "Ребрендинг международного бренда",
    description: "Команда Collabverse собрала дизайнеров, стратегов и копирайтеров и вывела новый бренд за 6 недель.",
    result: "+35% к узнаваемости"
  },
  {
    id: "app",
    title: "Запуск мобильного приложения",
    description: "Продакт, разработчики и агентство по маркетингу синхронизировали работу в едином workspace.",
    result: "MVP за 3 месяца"
  },
  {
    id: "video",
    title: "Видеокампания для digital-стартапа",
    description: "Подрядчики из маркетплейса подготовили видеопродакшн и медиаплан, увеличив лиды вдвое.",
    result: "ROI 212%"
  }
];

export default function ProjectCasesPage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="Кейсы"
        title="Результаты команд Collabverse"
        description="Проверьте истории клиентов и повторите их путь. Смотрите, какие инструменты помогли им добиться результатов."
        primaryAction={{ label: "Открыть кейс", href: "/projects/cases" }}
        secondaryAction={{ label: "Поделиться кейсом", href: "/register" }}
      />
      <section className="py-16 text-white">
        <div className="marketing-container marketing-grid columns-3">
          {caseStudies.map((item) => (
            <article key={item.id} className="marketing-card flex flex-col gap-4 p-8">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.description}</p>
              </div>
              <div className="text-xs uppercase tracking-wide text-emerald-300">{item.result}</div>
              <Link
                href="/projects/cases"
                className="marketing-btn-secondary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                Открыть кейс
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTASection
        title="Готовы создать свой кейс?"
        description="Расскажите о проекте, добавьте метрики и вдохновите других. Collabverse поможет масштабировать успех."
        primary={{ label: "Опубликовать кейс", href: "/register" }}
        secondary={{ label: "Открыть проекты", href: "/projects" }}
      />
    </div>
  );
}
