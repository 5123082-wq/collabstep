import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function FinanceDisputesPage() {
  return (
    <PagePlaceholder
      title="Споры"
      description="Модерация конфликтов и контроль выплат."
      actions={[
        { id: 'open-dispute', label: 'Открыть спор', tone: 'primary' },
        { id: 'resolve', label: 'Отметить решение' },
      ]}
    >
      <p>В споре фиксируются позиции сторон, файлы доказательств и предложенные решения.</p>
      <p>Можно будет подключить модератора или задать чек-лист для медиации.</p>
    </PagePlaceholder>
  );
}
