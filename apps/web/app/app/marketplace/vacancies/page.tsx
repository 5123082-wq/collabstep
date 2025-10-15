import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function MarketplaceVacanciesPage() {
  return (
    <PagePlaceholder
      title="Вакансии"
      description="Публикация вакансий и отклики специалистов."
      actions={[
        { id: 'new-vacancy', label: 'Создать вакансию', tone: 'primary' },
        { id: 'promote', label: 'Поднять в выдаче' },
        { id: 'invite', label: 'Пригласить специалиста' },
      ]}
    >
      <p>Скоро появится аналитика по просмотрам и быстрый чат с кандидатами.</p>
      <p>Добавьте требования заранее, чтобы получать качественные отклики.</p>
    </PagePlaceholder>
  );
}
