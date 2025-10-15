import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@collabverse/ui";

export default function OtpVerifyPage() {
  return (
    <Card className="mx-auto max-w-md text-left">
      <CardHeader>
        <CardTitle>Подтвердите email</CardTitle>
        <CardDescription>Мы отправили шестизначный код на ваш email. Введите его ниже.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="h-14 w-full rounded-xl border border-border bg-background text-center text-lg font-semibold focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring"
            />
          ))}
        </div>
        <Button className="w-full" variant="primary">
          Подтвердить
        </Button>
        <p className="text-center text-sm text-muted">
          Не получили письмо? <button className="text-primary underline-offset-2 hover:underline">Отправить ещё раз</button>
        </p>
      </CardContent>
    </Card>
  );
}
