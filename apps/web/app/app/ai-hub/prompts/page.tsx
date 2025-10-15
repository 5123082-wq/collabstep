import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function AiPromptsPage() {
  return (
    <PagePlaceholder
      title="Промпты"
      description="Библиотека лучших подсказок и сценариев для AI."
      actions={[
        { id: 'add-prompt', label: 'Добавить промпт', tone: 'primary' },
        { id: 'share', label: 'Поделиться с командой' },
      ]}
    >
      <p>Создавайте подборки промптов для типовых задач и делитесь ими с коллегами.</p>
      <p>Появятся теги, статистика использования и контроль версий.</p>
    </PagePlaceholder>
  );
}
