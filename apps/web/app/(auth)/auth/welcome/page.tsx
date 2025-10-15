import Link from "next/link";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@collabverse/ui";

export default function WelcomePage() {
  return (
    <Card className="mx-auto max-w-2xl text-left">
      <CardHeader>
        <CardTitle>Добро пожаловать в Collabverse</CardTitle>
        <CardDescription>Создайте workspace или присоединитесь к существующему, чтобы начать работу.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-background/80 p-5">
            <h3 className="text-lg font-semibold text-foreground">Создать workspace</h3>
            <p className="mt-2 text-sm text-muted">Настройте бренд, приглашайте команду и управляйте проектами.</p>
            <Button asChild className="mt-4 w-full">
              <Link href="/workspaces/new">Новый workspace</Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-dashed border-border/60 bg-background/60 p-5">
            <h3 className="text-lg font-semibold text-foreground">Присоединиться</h3>
            <p className="mt-2 text-sm text-muted">Воспользуйтесь кодом приглашения или ссылкой для входа в существующую организацию.</p>
            <Button variant="outline" className="mt-4 w-full">
              Ввести код приглашения
            </Button>
          </div>
        </div>
        <div className="grid gap-4 rounded-2xl border border-border/60 bg-muted/10 p-6 text-sm text-muted md:grid-cols-3">
          <div>
            <h4 className="font-semibold text-foreground">Шаг 1</h4>
            <p>Выберите роль и настройте профиль.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Шаг 2</h4>
            <p>Создайте проект или импортируйте шаблон.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Шаг 3</h4>
            <p>Запустите AI-ассистентов и соберите команду.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
