import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function DashboardPage() {
  return (
    <PagePlaceholder
      title="Дашборд"
      description="Сводная панель по проектам, финансам и нагрузке команды."
      actions={[
        { id: 'refresh', label: 'Обновить данные', tone: 'primary' },
        { id: 'customize', label: 'Настроить виджеты' },
      ]}
    >
      <p>Следующий релиз подключит реальные виджеты и KPI для команд.</p>
      <p>Пока что вы можете настроить структуру и договориться о составе данных.</p>
    </PagePlaceholder>
  );
}
