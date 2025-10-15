import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function OrgBillingPage() {
  return (
    <PagePlaceholder
      title="Биллинг"
      description="Реквизиты, счета и история оплат организации."
      actions={[
        { id: 'update-details', label: 'Обновить реквизиты', tone: 'primary' },
        { id: 'download-act', label: 'Скачать акт' },
      ]}
    >
      <p>Все платежные документы будут доступны в одном месте и синхронизированы с планами.</p>
      <p>Скоро добавим автоматические счета и напоминания о продлении подписки.</p>
    </PagePlaceholder>
  );
}
