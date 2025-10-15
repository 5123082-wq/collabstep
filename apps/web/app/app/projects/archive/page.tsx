import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function ProjectArchivePage() {
  return (
    <PagePlaceholder
      title="Архив проектов"
      description="Завершённые проекты, отчёты и материалы для анализа."
      actions={[
        { id: 'restore', label: 'Вернуть в работу' },
        { id: 'export', label: 'Экспортировать отчёт', tone: 'primary' },
      ]}
    >
      <p>Здесь появятся фильтры по статусу, заказчику и дате завершения.</p>
      <p>Используйте архив для подготовки кейсов и повторных запусков.</p>
    </PagePlaceholder>
  );
}
