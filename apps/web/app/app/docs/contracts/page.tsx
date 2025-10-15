import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function DocsContractsPage() {
  return (
    <PagePlaceholder
      title="Договоры"
      description="Шаблоны и подписанные договоры по проектам."
      actions={[
        { id: 'new-contract', label: 'Создать договор', tone: 'primary' },
        { id: 'send-sign', label: 'Отправить на подпись' },
      ]}
    >
      <p>Позже добавим интеграцию с электронной подписью и контроль статусов.</p>
      <p>Все договоры будут привязаны к проектам, финансам и задачам.</p>
    </PagePlaceholder>
  );
}
