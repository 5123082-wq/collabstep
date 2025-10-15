import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function CommunityEventsPage() {
  return (
    <PagePlaceholder
      title="События"
      description="Митапы, созвоны и мастер-классы комьюнити."
      actions={[
        { id: 'create-event', label: 'Запланировать событие', tone: 'primary' },
        { id: 'announce', label: 'Отправить анонс' },
      ]}
    >
      <p>Календарь событий поможет синхронизировать всю сеть и собрать обратную связь.</p>
      <p>Скоро добавим интеграцию с календарями и автоматические напоминания.</p>
    </PagePlaceholder>
  );
}
