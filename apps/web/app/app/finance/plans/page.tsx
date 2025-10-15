import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function FinancePlansPage() {
  return (
    <PagePlaceholder
      title="Планы и подписки"
      description="Тарифы, лимиты и управление подпиской организации."
      actions={[
        { id: 'upgrade', label: 'Обновить план', tone: 'primary' },
        { id: 'see-benefits', label: 'Что включено?' },
      ]}
    >
      <p>Планы помогут управлять командами, лимитами и дополнительными сервисами.</p>
      <p>Подписка будет синхронизирована с биллингом и договорами организации.</p>
    </PagePlaceholder>
  );
}
