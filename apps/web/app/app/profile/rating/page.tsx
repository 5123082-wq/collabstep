import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function ProfileRatingPage() {
  return (
    <PagePlaceholder
      title="Мой рейтинг"
      description="Баллы доверия и отзывы от команд."
      actions={[
        { id: 'request-review', label: 'Запросить отзыв', tone: 'primary' },
        { id: 'share-rating', label: 'Поделиться ссылкой' },
      ]}
    >
      <p>Рейтинг формируется по завершённым проектам, оценкам и активности в сообществе.</p>
      <p>Планируем добавить рекомендации коллег и значки за экспертизу.</p>
    </PagePlaceholder>
  );
}
