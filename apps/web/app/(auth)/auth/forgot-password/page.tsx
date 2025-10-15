import Link from "next/link";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@collabverse/ui";

export default function ForgotPasswordPage() {
  return (
    <Card className="mx-auto max-w-md text-left">
      <CardHeader>
        <CardTitle>Восстановление пароля</CardTitle>
        <CardDescription>Укажите email, и мы отправим инструкции по сбросу пароля.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <label className="block text-sm">
          <span className="text-muted">Email</span>
          <input
            type="email"
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="you@collabverse.com"
          />
        </label>
        <Button className="w-full" variant="primary">
          Отправить письмо
        </Button>
        <p className="text-center text-sm text-muted">
          Вспомнили пароль? {" "}
          <Link href="/auth/login" className="text-primary underline-offset-2 hover:underline">
            Вернуться ко входу
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
