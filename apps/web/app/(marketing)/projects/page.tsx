import type { Metadata } from "next";

import Link from "next/link";

import { CTASection } from "@/components/marketing/sections/CTA";
import { Hero } from "@/components/marketing/sections/Hero";

export const metadata: Metadata = {
  title: "Открытые проекты Collabverse",
  description:
    "Лента активных проектов, фильтры по индустриям и кнопки для отклика. Найдите работу мечты и подключайтесь к командам.",
  openGraph: {
    title: "Открытые проекты Collabverse",
    description: "Фильтры по направлениям, стадии проектов и быстрые отклики. Работайте с лучшими командами.",
    url: "https://collabverse.ru/projects",
    type: "article"
  }
};

const filters = [
  { id: "industry", label: "Индустрия" },
  { id: "format", label: "Формат" },
  { id: "budget", label: "Бюджет" },
  { id: "status", label: "Стадия" }
];

const projects = [
  {
    id: "alpha",
    title: "Запуск бренда питания",
    description: "Нужны дизайнер, копирайтер и специалист по соцсетям. Запуск через 4 недели.",
    stage: "Бриф" 
  },
  {
    id: "beta",
    title: "Редизайн мобильного приложения",
    description: "Команда ищет UI/UX и фронтенд разработчика. Работа по спринтам.",
    stage: "Дизайн"
  },
  {
    id: "gamma",
    title: "Видео-продакшн для кампании",
    description: "Продакшн-студия собирает команду: режиссёр, оператор, монтажёр.",
    stage: "Продакшн"
  }
];

export default function ProjectsPage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="Открытые проекты"
        title="Подключайтесь к командам и создавайте будущее"
        description="Фильтруйте проекты, следите за стадиями и отправляйте отклики."
        primaryAction={{ label: "Откликнуться", href: "/projects" }}
        secondaryAction={{ label: "Смотреть стадию", href: "/projects" }}
      />
      <section className="py-16 text-white">
        <div className="marketing-container space-y-8">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="marketing-grid columns-3">
            {projects.map((project) => (
              <article key={project.id} className="marketing-card flex flex-col gap-4 p-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{project.description}</p>
                </div>
                <div className="text-xs uppercase tracking-wide text-white/40">Стадия: {project.stage}</div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/register"
                    className="marketing-btn-primary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                  >
                    Откликнуться
                  </Link>
                  <Link
                    href="/projects"
                    className="marketing-btn-secondary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                  >
                    Смотреть стадию
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Поделитесь своим проектом"
        description="Оставьте бриф, выберите формат сотрудничества и получите отклики от специалистов и студий."
        primary={{ label: "Создать проект", href: "/register" }}
        secondary={{ label: "Кейсы и истории", href: "/projects/cases" }}
      />
    </div>
  );
}
