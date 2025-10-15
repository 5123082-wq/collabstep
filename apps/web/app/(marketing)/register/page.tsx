import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация в Collabverse",
  description:
    "Выберите роль: заказчик, специалист или подрядчик. Получите доступ к проектам, маркетплейсу услуг и AI-агентам.",
  openGraph: {
    title: "Регистрация в Collabverse",
    description: "Создайте профиль заказчика, специалиста или подрядчика и начинайте работу.",
    url: "https://collabverse.ru/register",
    type: "article"
  }
};

const roles = [
  {
    id: "client",
    title: "Заказчик",
    description: "Создавайте проекты, подключайте специалистов и управляйте подрядчиками.",
    action: "Начать как заказчик"
  },
  {
    id: "specialist",
    title: "Специалист",
    description: "Получайте отклики, участвуйте в проектах и повышайте рейтинг.",
    action: "Создать профиль специалиста"
  },
  {
    id: "contractor",
    title: "Подрядчик",
    description: "Добавляйте компанию, публикуйте услуги и получайте запросы на сметы.",
    action: "Подключить компанию"
  }
];

export default function RegisterPage() {
  return (
    <div className="marketing-surface">
      <section className="flex min-h-[70vh] items-center justify-center py-24">
        <div className="marketing-card w-full max-w-4xl space-y-8 p-10 text-white">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold">Присоединяйтесь к Collabverse</h1>
            <p className="text-sm text-white/70">
              Выберите роль, чтобы настроить рабочее пространство под ваши задачи.
            </p>
          </div>
          <div className="marketing-grid columns-3">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                className="marketing-card space-y-4 p-8 text-left transition hover:border-white/40 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                <div>
                  <h2 className="text-xl font-semibold">{role.title}</h2>
                  <p className="mt-2 text-sm text-white/70">{role.description}</p>
                </div>
                <span className="text-sm font-semibold text-sky-300">{role.action}</span>
              </button>
            ))}
          </div>
          <form className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium">
              Имя
              <input
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-base text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
              />
            </label>
            <label className="text-sm font-medium">
              Email
              <input
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-base text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
              />
            </label>
            <label className="text-sm font-medium">
              Пароль
              <input
                type="password"
                required
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-base text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
              />
            </label>
            <label className="text-sm font-medium">
              Компания (опционально)
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-base text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
              />
            </label>
            <button
              type="submit"
              className="md:col-span-2 marketing-btn-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
