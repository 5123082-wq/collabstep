import { Card, CardContent, CardHeader, CardTitle } from "@collabverse/ui";

const sections = [
  {
    title: "1. Сбор данных",
    text: "Мы собираем данные аккаунта, настройки workspace и лог активности для улучшения сервиса."
  },
  {
    title: "2. Использование",
    text: "Данные используются для аналитики, персонализации и обеспечения безопасности."
  },
  {
    title: "3. Хранение",
    text: "Инфраструктура располагается в защищённых дата-центрах ЕС, резервные копии шифруются."
  },
  {
    title: "4. Права пользователя",
    text: "Вы можете запросить экспорт или удаление данных, связавшись с поддержкой."
  }
];

export default function PrivacyPage() {
  return (
    <Card className="mx-auto max-w-3xl text-left">
      <CardHeader>
        <CardTitle>Политика конфиденциальности</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-sm leading-6 text-muted">
        {sections.map((section) => (
          <section key={section.title} className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <p className="text-xs text-muted">
          Документ демонстрирует структуру страницы. Финальный юридический текст будет предоставлен позже.
        </p>
      </CardContent>
    </Card>
  );
}
