import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function FinanceEscrowPage() {
  return (
    <PagePlaceholder
      title="Эскроу"
      description="Безопасные платежи между заказчиком и исполнителем."
      actions={[
        { id: 'open-escrow', label: 'Открыть эскроу', tone: 'primary' },
        { id: 'release', label: 'Освободить средства' },
      ]}
    >
      <p>Здесь можно будет отслеживать статус работ, milestones и подтверждения сторон.</p>
      <p>Используйте эскроу для крупных этапов, чтобы зафиксировать обязательства.</p>
    </PagePlaceholder>
  );
}
