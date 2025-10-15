import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function MarketplaceSpecialistsPage() {
  return (
    <PagePlaceholder
      title="Специалисты"
      description="Каталог исполнителей, рейтинг и доступность."
      actions={[
        { id: 'invite-specialist', label: 'Пригласить специалиста', tone: 'primary' },
        { id: 'filter', label: 'Фильтры по навыкам' },
      ]}
    >
      <p>В каталоге появятся фильтры по ставке, навыкам и отзывам.</p>
      <p>Добавьте избранных специалистов, чтобы быстро собирать команды.</p>
    </PagePlaceholder>
  );
}
