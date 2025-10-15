import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function SupportChatPage() {
  return (
    <PagePlaceholder
      title="Чат поддержки"
      description="Онлайн-чат с модераторами и саппортом."
      actions={[
        { id: 'start-chat', label: 'Начать чат', tone: 'primary' },
        { id: 'attach-log', label: 'Приложить лог' },
      ]}
    >
      <p>Чат позволит оперативно решить вопрос и прикрепить материалы сразу к тикету.</p>
      <p>Мы добавим шаблоны вопросов и быстрые ответы для типовых ситуаций.</p>
    </PagePlaceholder>
  );
}
