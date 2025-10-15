import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function NotificationsPage() {
  return (
    <PagePlaceholder
      title="Уведомления"
      description="Системные события, упоминания и важные обновления."
      actions={[
        { id: 'mark-all', label: 'Очистить всё', tone: 'primary' },
        { id: 'settings', label: 'Настроить фильтры' },
      ]}
    >
      <p>Здесь появятся группировки по проектам и интеграции с почтой или Slack.</p>
      <p>Вы сможете управлять частотой уведомлений и назначать ответственных.</p>
    </PagePlaceholder>
  );
}
