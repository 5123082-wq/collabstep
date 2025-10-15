import type { Metadata } from "next";

import Link from "next/link";

import { CTASection } from "@/components/marketing/sections/CTA";
import { Hero } from "@/components/marketing/sections/Hero";

export const metadata: Metadata = {
  title: "Блог и гайды Collabverse",
  description:
    "Свежие статьи, плейбуки и вебинары о запуске проектов, AI и управлении командами. Учитесь и применяйте знания сразу.",
  openGraph: {
    title: "Блог и гайды Collabverse",
    description: "Статьи, плейбуки и вебинары для команд, которые хотят расти быстрее.",
    url: "https://collabverse.ru/blog",
    type: "article"
  }
};

const articles = [
  {
    id: "ai",
    title: "Как использовать AI-агентов для запуска бренда",
    type: "Статья",
    href: "/blog"
  },
  {
    id: "brief",
    title: "Плейбук: идеальный бриф для подрядчика",
    type: "Плейбук",
    href: "/blog"
  },
  {
    id: "webinar",
    title: "Вебинар: управление креативными проектами",
    type: "Вебинар",
    href: "/blog#webinars"
  }
];

export default function BlogPage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="Блог"
        title="Гайды и вдохновение для команд"
        description="Читайте статьи, смотрите вебинары и применяйте готовые плейбуки в своих проектах."
        primaryAction={{ label: "Читать", href: "/blog" }}
        secondaryAction={{ label: "Зарегистрироваться", href: "/register" }}
      />
      <section className="py-16 text-white" id="webinars">
        <div className="marketing-container marketing-grid columns-3">
          {articles.map((article) => (
            <article key={article.id} className="marketing-card space-y-3 p-8">
              <span className="text-xs uppercase tracking-wide text-white/50">{article.type}</span>
              <h3 className="text-xl font-semibold text-white">{article.title}</h3>
              <Link
                href={article.href}
                className="marketing-btn-secondary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                Читать
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTASection
        title="Хотите делиться знаниями?"
        description="Подпишитесь на рассылку, отправьте свою историю или запланируйте совместный вебинар."
        primary={{ label: "Зарегистрироваться", href: "/register" }}
        secondary={{ label: "Отправить материал", href: "/blog" }}
      />
    </div>
  );
}
