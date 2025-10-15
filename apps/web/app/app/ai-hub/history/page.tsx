import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function AiHistoryPage() {
  return (
    <PagePlaceholder
      title="История AI"
      description="Журнал запросов, версий и комментариев команды."
      actions={[
        { id: 'filter', label: 'Фильтровать по проектам' },
        { id: 'export-history', label: 'Экспорт истории', tone: 'primary' },
      ]}
    >
      <p>Вы сможете просматривать обсуждения, оставлять фидбек и повторно запускать генерации.</p>
      <p>История синхронизируется с задачами и проектами для прозрачного контроля.</p>
    </PagePlaceholder>
  );
}
