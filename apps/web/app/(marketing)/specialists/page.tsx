import type { Metadata } from "next";

import Link from "next/link";

import { CTASection } from "@/components/marketing/sections/CTA";
import { Hero } from "@/components/marketing/sections/Hero";

export const metadata: Metadata = {
  title: "Каталог специалистов Collabverse",
  description:
    "Дизайнеры, разработчики, маркетологи и проджекты с подтверждёнными навыками. Смотрите профили, рейтинги и приглашайте в проекты.",
  openGraph: {
    title: "Каталог специалистов Collabverse",
    description:
      "Профили исполнителей, рейтинги и кейсы. Найдите специалиста в пару кликов.",
    url: "https://collabverse.ru/specialists",
    type: "article"
  }
};

const roles = [
  "Дизайн",
  "Разработка",
  "Маркетинг",
  "Продюсирование",
  "Контент"
];

export default function SpecialistsPage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="Специалисты"
        title="Каталог экспертов с подтверждёнными навыками"
        description="Выбирайте специалистов по опыту, рейтингу и доступности. Приглашайте в проекты и сохраняйте любимые профили."
        primaryAction={{ label: "Пригласить", href: "/specialists" }}
        secondaryAction={{ label: "Подробнее о рейтинге", href: "/specialists#rating" }}
      />
      <section className="py-16 text-white">
        <div className="marketing-container space-y-8">
          <div className="flex flex-wrap gap-3">
            {roles.map((role) => (
              <button
                key={role}
                type="button"
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                {role}
              </button>
            ))}
          </div>
          <div className="marketing-grid columns-3">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <article key={index} className="marketing-card flex flex-col gap-4 p-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">Специалист #{index}</h3>
                  <p className="mt-2 text-sm text-white/70">Опыт работы с брендами, проекты в Collabverse, рейтинг 4.{index}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/register"
                    className="marketing-btn-primary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                  >
                    Пригласить
                  </Link>
                  <Link
                    href="/specialists#rating"
                    className="marketing-btn-secondary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                  >
                    Подробнее о рейтинге
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="rating" className="py-16 text-white">
        <div className="marketing-container space-y-6">
          <h2 className="text-3xl font-semibold">Как работает рейтинг</h2>
          <p className="max-w-3xl text-base text-white/70">
            Рейтинг учитывает завершённые проекты, отзывы заказчиков, своевременность сдачи задач и участие в верификационных
            программах. Обновляется автоматически после каждого сотрудничества.
          </p>
        </div>
      </section>
      <CTASection
        title="Готовы подключиться к проекту?"
        description="Создайте профиль специалиста, загрузите портфолио и укажите доступность. Команды смогут пригласить вас напрямую."
        primary={{ label: "Создать профиль", href: "/register" }}
        secondary={{ label: "Смотреть проекты", href: "/projects" }}
      />
    </div>
  );
}
