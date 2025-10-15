import { PagePlaceholder } from '@/components/app/PagePlaceholder';
import { MOCK_USER_ROLES } from '@/lib/auth/mock-roles';

const CAN_ACCESS = MOCK_USER_ROLES.some((role) => role === 'ADMIN' || role === 'MODERATOR');

export default function AdminPage() {
  if (!CAN_ACCESS) {
    return (
      <PagePlaceholder
        title="Админка"
        description="Раздел доступен только администраторам и модераторам."
      >
        <p>У вас нет прав для просмотра административной панели.</p>
        <p>Обратитесь к владельцу организации, чтобы получить роль администратора.</p>
      </PagePlaceholder>
    );
  }

  return (
    <PagePlaceholder
      title="Административная панель"
      description="Управление всей платформой, пользователями и настройками."
      actions={[
        { id: 'manage-users', label: 'Управление пользователями', tone: 'primary' },
        { id: 'feature-flags', label: 'Флаги и эксперименты' },
      ]}
    >
      <p>Здесь появится аудит действий, управление ролями и конфигурация интеграций.</p>
      <p>Добавим редактор витрин, контроль безопасностей и аналитику платформы.</p>
    </PagePlaceholder>
  );
}
