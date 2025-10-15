import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function AiAgentsPage() {
  return (
    <PagePlaceholder
      title="AI Агенты"
      description="Настраиваемые ассистенты для проектных сценариев."
      actions={[
        { id: 'create-agent', label: 'Создать агента', tone: 'primary' },
        { id: 'assign', label: 'Назначить на проект' },
      ]}
    >
      <p>Каждый агент будет иметь роли, доступы и рекомендации по использованию.</p>
      <p>Подготовьте список типовых задач, чтобы ускорить настройку агента.</p>
    </PagePlaceholder>
  );
}
