import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function SupportTicketsPage() {
  return (
    <PagePlaceholder
      title="Тикеты"
      description="Обращения в поддержку, SLA и статусы."
      actions={[
        { id: 'new-ticket', label: 'Создать тикет', tone: 'primary' },
        { id: 'assign', label: 'Назначить ответственного' },
      ]}
    >
      <p>Тикеты будут группироваться по темам и привязываться к проектам для прозрачности.</p>
      <p>Планируем добавить шаблоны ответов и интеграцию с чатом.</p>
    </PagePlaceholder>
  );
}
