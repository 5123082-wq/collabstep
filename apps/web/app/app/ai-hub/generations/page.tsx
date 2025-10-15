import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function AiGenerationsPage() {
  return (
    <PagePlaceholder
      title="AI Генерации"
      description="История запросов и генераций контента."
      actions={[
        { id: 'start-session', label: 'Новая генерация', tone: 'primary' },
        { id: 'upload-reference', label: 'Загрузить референсы' },
      ]}
    >
      <p>Позже здесь появится галерея с версионированием и быстрыми правками.</p>
      <p>Сессии можно будет сохранять в промпт-библиотеку для команды.</p>
    </PagePlaceholder>
  );
}
