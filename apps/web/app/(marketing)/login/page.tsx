import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Вход в Collabverse",
  description: "Войдите в аккаунт Collabverse, чтобы управлять проектами, специалистами и заказами.",
  openGraph: {
    title: "Вход в Collabverse",
    description: "Авторизуйтесь и продолжайте работу с проектами и командой.",
    url: "https://collabverse.ru/login",
    type: "article"
  }
};

export default function LoginPage() {
  return (
    <div className="marketing-surface">
      <section className="flex min-h-[70vh] items-center justify-center py-24">
        <div className="marketing-card w-full max-w-md space-y-6 p-10 text-white">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semibold">Войти в Collabverse</h1>
            <p className="text-sm text-white/70">Используйте корпоративную почту или продолжите с SSO.</p>
          </div>
          <form className="space-y-4">
            <label className="block text-left text-sm font-medium">
              Email
              <input
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-base text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
              />
            </label>
            <label className="block text-left text-sm font-medium">
              Пароль
              <input
                type="password"
                required
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-base text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
              />
            </label>
            <button
              type="submit"
              className="w-full marketing-btn-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Войти
            </button>
          </form>
          <div className="text-center text-sm text-white/70">
            Нет аккаунта?{" "}
            <Link
              href="/register"
              className="text-sky-300 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
