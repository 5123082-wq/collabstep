import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function OrgTeamPage() {
  return (
    <PagePlaceholder
      title="Команда"
      description="Состав организации, роли и доступы."
      actions={[
        { id: 'invite-member', label: 'Пригласить участника', tone: 'primary' },
        { id: 'manage-roles', label: 'Управлять ролями' },
      ]}
    >
      <p>Управляйте доступами, назначайте кураторов и отслеживайте вовлечённость.</p>
      <p>Позже добавим чек-листы онбординга и автоматическое распределение ролей.</p>
    </PagePlaceholder>
  );
}
