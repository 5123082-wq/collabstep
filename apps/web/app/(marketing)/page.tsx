import type { Metadata } from "next";

import { Hero } from "@/components/marketing/sections/Hero";
import { FeaturesSection } from "@/components/marketing/sections/Features";
import { AudienceSection } from "@/components/marketing/sections/Audience";
import { CTASection } from "@/components/marketing/sections/CTA";

const heroImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 320'>` +
      `<defs>` +
      `<linearGradient id='grad' x1='0%' x2='100%' y1='0%' y2='100%'>` +
      `<stop offset='0%' stop-color='#38bdf8' stop-opacity='0.85'/>` +
      `<stop offset='100%' stop-color='#6366f1' stop-opacity='0.85'/>` +
      `</linearGradient>` +
      `</defs>` +
      `<rect width='400' height='320' rx='32' fill='url(#grad)'/>` +
      `<text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='32' font-family='Inter, sans-serif'>Collabverse</text>` +
      `<text x='50%' y='70%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='16' font-family='Inter, sans-serif' opacity='0.7'>AI + Люди + Проекты</text>` +
      `</svg>`
  );

export const metadata: Metadata = {
  title: "Collabverse — платформа для креативных проектов",
  description:
    "Соединяем бизнес, специалистов и подрядчиков. Запускайте проекты с AI-поддержкой и каталогом услуг, управляйте задачами и ищите команду.",
  openGraph: {
    title: "Collabverse",
    description:
      "Соединяем бизнес, специалистов и подрядчиков. Запускайте проекты с AI-поддержкой и каталогом услуг, управляйте задачами и ищите команду.",
    url: "https://collabverse.ru/",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <div className="marketing-surface">
      <Hero
        eyebrow="Новый способ запускать проекты"
        title={<span className="marketing-gradient-text">Collabverse — всё для роста креативной команды</span>}
        description="Интеллектуальные помощники, шаблоны управления, каталог специалистов и подрядчиков. Сфокусируйтесь на продукте, а мы возьмём на себя операционку."
        image={{ src: heroImage, alt: "Коллаборативная экосистема", width: 400, height: 320 }}
        primaryAction={{ label: "Начать бесплатно", href: "/register" }}
        secondaryAction={{ label: "Посмотреть платформу", href: "/product" }}
      />
      <FeaturesSection
        title="Почему команды выбирают нас"
        subtitle="Комбинируем автоматизацию, человеческую экспертизу и готовые сценарии для запуска кампаний."
        features={[
          {
            id: "ai",
            title: "AI-агенты и подсказки",
            description:
              "Генерация концепций, логотипов, контента и персональных рекомендаций. Агент подскажет следующий шаг в проекте.",
            href: "/product/ai",
            ctaLabel: "AI-демо"
          },
          {
            id: "pm",
            title: "Управление проектами",
            description:
              "Интерактивные дорожные карты, статусы, автоматические уведомления и шаблоны процессов для любой команды.",
            href: "/product/pm",
            ctaLabel: "Шаблоны"
          },
          {
            id: "market",
            title: "Проверенный маркетплейс",
            description:
              "Выбирайте специалистов и подрядчиков по рейтингу, портфолио и отзывам. Всё в одном каталоге Collabverse.",
            href: "/product/marketplace",
            ctaLabel: "Открыть каталог"
          }
        ]}
      />
      <AudienceSection
        title="Кому полезен Collabverse"
        subtitle="Помогаем запускать продукты, развивать бренды и строить карьеру. Все разделы связаны единой навигацией и данными."
        cards={[
          {
            id: "founder",
            title: "Бизнес / Основатель",
            description: "Быстрый старт проектов, контроль бюджета и доступ к проверенным исполнителям.",
            href: "/register",
            ctaLabel: "Создать проект"
          },
          {
            id: "designers",
            title: "Дизайнеры",
            description: "Создавайте портфолио, получайте брифы, используйте AI для ускорения согласований.",
            href: "/register",
            ctaLabel: "Создать профиль дизайнера"
          },
          {
            id: "developers",
            title: "Разработчики",
            description: "Подключайтесь к командам, отслеживайте прогресс и интегрируйте инструменты разработки.",
            href: "/register",
            ctaLabel: "Создать профиль разработчика"
          },
          {
            id: "marketers",
            title: "Маркетологи / Копирайтеры",
            description: "Готовые воронки, аналитика и редактор кампаний с генерацией контента.",
            href: "/register",
            ctaLabel: "Создать профиль специалиста"
          },
          {
            id: "contractors",
            title: "Подрядчики",
            description: "Получайте заказы на комплексные услуги, фиксируйте SLA и автоматизируйте отчётность.",
            href: "/register",
            ctaLabel: "Подключить компанию"
          }
        ]}
      />
      <CTASection
        title="Запустите команду сегодня"
        description="Создайте профиль, выберите шаблон проекта и пригласите команду. Collabverse поможет на каждом шаге — от идеи до релиза."
        primary={{ label: "Начать бесплатно", href: "/register" }}
        secondary={{ label: "Посмотреть тарифы", href: "/pricing" }}
      />
    </div>
  );
}
