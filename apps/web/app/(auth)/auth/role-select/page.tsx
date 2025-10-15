import Link from "next/link";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@collabverse/ui";

const roles = [
  {
    id: "customer",
    title: "Заказчик",
    description: "Запускайте проекты, управляйте бюджетами и приглашайте подрядчиков.",
    perks: ["Брифы", "Эскроу", "AI контроль"]
  },
  {
    id: "specialist",
    title: "Специалист",
    description: "Выполняйте задачи, проходите AI-оценку и получайте офферы.",
    perks: ["Профиль", "Отклики", "AI-портфолио"]
  },
  {
    id: "contractor",
    title: "Подрядчик",
    description: "Собирайте команды, продавайте пакеты и участвуйте в витрине Marketplace.",
    perks: ["Пакеты", "Сметы", "Трекинг"]
  }
] as const;

export default function RoleSelectPage() {
  return (
    <Card className="mx-auto max-w-3xl text-left">
      <CardHeader>
        <CardTitle>Выберите роль</CardTitle>
        <CardDescription>Роль влияет на стартовый онбординг и доступные модули. Можно переключить позже.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-3">
        {roles.map((role) => (
          <div key={role.id} className="flex flex-col justify-between rounded-2xl border border-border/60 bg-background/80 p-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
              <p className="text-sm text-muted">{role.description}</p>
              <ul className="space-y-2 text-xs text-muted">
                {role.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="mt-6 w-full" variant="outline">
              Выбрать
            </Button>
          </div>
        ))}
      </CardContent>
      <div className="px-6 pb-6 text-sm text-muted">
        <Link href="/auth/welcome" className="text-primary underline-offset-2 hover:underline">
          Продолжить без выбора роли
        </Link>
      </div>
    </Card>
  );
}
