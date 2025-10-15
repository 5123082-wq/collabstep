import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@collabverse/ui";

export default function ResetPasswordPage() {
  return (
    <Card className="mx-auto max-w-md text-left">
      <CardHeader>
        <CardTitle>Создать новый пароль</CardTitle>
        <CardDescription>Введите новый пароль и подтвердите его. После сохранения вы будете перенаправлены в систему.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <label className="block text-sm">
          <span className="text-muted">Новый пароль</span>
          <input
            type="password"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Минимум 8 символов"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Подтверждение</span>
          <input
            type="password"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Повторите пароль"
          />
        </label>
        <Button className="w-full" variant="primary">
          Сохранить новый пароль
        </Button>
      </CardContent>
    </Card>
  );
}
