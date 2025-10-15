import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function MessagesPage() {
  return (
    <PagePlaceholder
      title="Сообщения"
      description="Чаты по проектам, личные сообщения и уведомления."
      actions={[
        { id: 'new-thread', label: 'Новый чат', tone: 'primary' },
        { id: 'mark-read', label: 'Отметить прочитанным' },
      ]}
    >
      <p>В будущих релизах появятся треды, упоминания и быстрые реакции.</p>
      <p>Свяжем сообщения с задачами и документами, чтобы ничего не потерялось.</p>
    </PagePlaceholder>
  );
}
