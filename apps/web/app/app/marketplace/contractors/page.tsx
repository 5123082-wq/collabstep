import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function MarketplaceContractorsPage() {
  return (
    <PagePlaceholder
      title="Подрядчики"
      description="Проверенные студии и агентства для сложных проектов."
      actions={[
        { id: 'invite-contractor', label: 'Запросить предложение', tone: 'primary' },
        { id: 'compare', label: 'Сравнить офферы' },
      ]}
    >
      <p>На странице появится рейтинг, портфолио и условия сотрудничества.</p>
      <p>Выберите подходящего подрядчика и зафиксируйте договор в разделе документов.</p>
    </PagePlaceholder>
  );
}
