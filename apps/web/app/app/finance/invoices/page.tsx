import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function FinanceInvoicesPage() {
  return (
    <PagePlaceholder
      title="Счета"
      description="Выставление и отслеживание счетов по проектам."
      actions={[
        { id: 'new-invoice', label: 'Создать счёт', tone: 'primary' },
        { id: 'send-client', label: 'Отправить клиенту' },
      ]}
    >
      <p>Инвойсы будут связаны с задачами, договорами и платежами в кошельке.</p>
      <p>Добавьте шаблоны реквизитов, чтобы команда могла выставлять счета быстрее.</p>
    </PagePlaceholder>
  );
}
