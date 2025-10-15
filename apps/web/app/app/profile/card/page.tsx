import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function ProfileCardPage() {
  return (
    <PagePlaceholder
      title="Карточка специалиста"
      description="Публичная карточка для заказчиков и партнёров."
      actions={[
        { id: 'share-card', label: 'Поделиться карточкой', tone: 'primary' },
        { id: 'copy-link', label: 'Скопировать ссылку' },
      ]}
    >
      <p>Карточку можно будет кастомизировать под разные предложения и роли.</p>
      <p>Подготовьте описания услуг и портфолио, чтобы быстро отвечать клиентам.</p>
    </PagePlaceholder>
  );
}
