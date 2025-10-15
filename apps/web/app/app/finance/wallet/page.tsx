import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function FinanceWalletPage() {
  return (
    <PagePlaceholder
      title="Кошелёк"
      description="Баланс организации и движения средств."
      actions={[
        { id: 'top-up', label: 'Пополнить кошелёк', tone: 'primary' },
        { id: 'withdraw', label: 'Вывести средства' },
      ]}
    >
      <p>В дальнейшем появятся диаграммы, история транзакций и интеграции с банками.</p>
      <p>Эскроу-платежи и счета будут синхронизированы с документами и проектами.</p>
    </PagePlaceholder>
  );
}
