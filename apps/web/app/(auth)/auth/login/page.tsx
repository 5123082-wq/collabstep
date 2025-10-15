import Link from "next/link";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@collabverse/ui";

export default function LoginPage() {
  return (
    <Card className="mx-auto max-w-lg text-left">
      <CardHeader>
        <CardTitle>Войти в аккаунт</CardTitle>
        <CardDescription>Используйте email и пароль или войдите через рабочее пространство.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <label className="block text-sm">
            <span className="text-muted">Email</span>
            <input
              type="email"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="team@collabverse.com"
            />
          </label>
          <label className="block text-sm">
            <span className="text-muted">Пароль</span>
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="••••••••"
            />
          </label>
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2 text-muted">
            <input type="checkbox" className="h-4 w-4 rounded border-border" />
            Запомнить меня
          </label>
          <Link href="/auth/forgot-password" className="text-primary underline-offset-2 hover:underline">
            Забыли пароль?
          </Link>
        </div>
        <Button className="w-full" variant="primary">
          Войти
        </Button>
        <div className="space-y-3 text-sm">
          <Button className="w-full" variant="outline">
            Войти через Workspace SSO
          </Button>
          <p className="text-center text-muted">
            Нет аккаунта? {" "}
            <Link href="/auth/register" className="text-primary underline-offset-2 hover:underline">
              Создать аккаунт
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
