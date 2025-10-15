import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function SupportHelpPage() {
  return (
    <PagePlaceholder
      title="База знаний"
      description="Ответы на популярные вопросы и гайды по платформе."
      actions={[
        { id: 'search-guides', label: 'Поиск по базе', tone: 'primary' },
        { id: 'request-article', label: 'Запросить статью' },
      ]}
    >
      <p>Скоро появятся шаблоны гайдов, видео и подсказки внутри приложения.</p>
      <p>Сообщите нам, каких материалов не хватает, и мы добавим их первыми.</p>
    </PagePlaceholder>
  );
}
