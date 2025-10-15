import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function CommunityPitchPage() {
  return (
    <PagePlaceholder
      title="Питч-панель"
      description="Презентации проектов для комьюнити и инвесторов."
      actions={[
        { id: 'submit-pitch', label: 'Отправить питч', tone: 'primary' },
        { id: 'view-brief', label: 'Открыть шаблон питча' },
      ]}
    >
      <p>Позже появится расписание питч-сессий и обратная связь менторов.</p>
      <p>Загрузите материалы заранее, чтобы команда могла репетировать выступление.</p>
    </PagePlaceholder>
  );
}
