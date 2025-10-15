import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function CommunityRatingPage() {
  return (
    <PagePlaceholder
      title="Рейтинг комьюнити"
      description="Очки доверия, активность и достижения участников."
      actions={[
        { id: 'view-leaders', label: 'Смотреть лидеров', tone: 'primary' },
        { id: 'submit-feedback', label: 'Оставить отзыв' },
      ]}
    >
      <p>Рейтинг поможет отмечать вклад, рекомендовать специалистов и находить партнёров.</p>
      <p>В планах — бейджи за активности и автоматические апдейты профилей.</p>
    </PagePlaceholder>
  );
}
