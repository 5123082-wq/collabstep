import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function ProfilePage() {
  return (
    <PagePlaceholder
      title="Мой профиль"
      description="Карточка специалиста, навыки и доступность."
      actions={[
        { id: 'edit', label: 'Редактировать профиль', tone: 'primary' },
        { id: 'preview', label: 'Просмотр от клиента' },
      ]}
    >
      <p>Добавьте портфолио, ссылки и актуальный график, чтобы вас проще находили.</p>
      <p>Позже появится синхронизация с рейтингом, бейджами и отзывами клиентов.</p>
    </PagePlaceholder>
  );
}
