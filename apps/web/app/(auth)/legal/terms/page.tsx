import { Card, CardContent, CardHeader, CardTitle } from "@collabverse/ui";

const sections = [
  {
    title: "1. Общие положения",
    text: "Collabverse предоставляет платформу для управления проектами, наймом и AI-ассистентами на условиях, изложенных ниже."
  },
  {
    title: "2. Права и обязанности",
    text: "Пользователь обязуется использовать сервис в рамках закона и корпоративных политик. Команда Collabverse обеспечивает доступность и безопасность."
  },
  {
    title: "3. Оплата и планы",
    text: "Оплата производится через биллинговый модуль с поддержкой эскроу и подписок. Возвраты регулируются отдельными регламентами."
  },
  {
    title: "4. Контент и данные",
    text: "Все данные хранятся с учётом требований GDPR. Пользователь отвечает за законность загружаемого контента."
  }
];

export default function TermsPage() {
  return (
    <Card className="mx-auto max-w-3xl text-left">
      <CardHeader>
        <CardTitle>Условия использования</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-sm leading-6 text-muted">
        {sections.map((section) => (
          <section key={section.title} className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <p className="text-xs text-muted">
          Данный документ является заглушкой. Юридический текст будет добавлен на финальных этапах разработки.
        </p>
      </CardContent>
    </Card>
  );
}
