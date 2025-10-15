import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function CommunityRoomsPage() {
  return (
    <PagePlaceholder
      title="Комнаты"
      description="Тематические комнаты и приватные обсуждения."
      actions={[
        { id: 'create-room', label: 'Создать комнату', tone: 'primary' },
        { id: 'invite-community', label: 'Пригласить участников' },
      ]}
    >
      <p>Комнаты помогут собрать экспертов по темам и держать обсуждения в одном месте.</p>
      <p>Вскоре добавим модерацию, закрепление сообщений и подборку материалов.</p>
    </PagePlaceholder>
  );
}
