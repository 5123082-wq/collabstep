import Link from "next/link";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@collabverse/ui";

export default function RegisterPage() {
  return (
    <Card className="mx-auto max-w-lg text-left">
      <CardHeader>
        <CardTitle>Создать аккаунт</CardTitle>
        <CardDescription>Зарегистрируйтесь как основатель workspace или специалист.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            <span className="text-muted">Имя</span>
            <input
              type="text"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Александра"
            />
          </label>
          <label className="text-sm">
            <span className="text-muted">Фамилия</span>
            <input
              type="text"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Орлова"
            />
          </label>
        </div>
        <label className="text-sm">
          <span className="text-muted">Рабочий email</span>
          <input
            type="email"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="founder@studio.ai"
          />
        </label>
        <label className="text-sm">
          <span className="text-muted">Пароль</span>
          <input
            type="password"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Минимум 8 символов"
          />
        </label>
        <div className="space-y-2 rounded-2xl border border-border/60 bg-muted/10 p-4 text-xs text-muted">
          <p>Пароль должен содержать цифры, буквы и спецсимволы. Включите 2FA после первого входа.</p>
        </div>
        <Button className="w-full" variant="primary">
          Продолжить
        </Button>
        <p className="text-center text-sm text-muted">
          Уже есть аккаунт? {" "}
          <Link href="/auth/login" className="text-primary underline-offset-2 hover:underline">
            Войти
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
