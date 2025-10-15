import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function ProfileBadgesPage() {
  return (
    <PagePlaceholder
      title="Бейджи"
      description="Награды и подтверждённые навыки специалиста."
      actions={[
        { id: 'apply-badge', label: 'Запросить бейдж', tone: 'primary' },
        { id: 'view-programs', label: 'Программы признания' },
      ]}
    >
      <p>Бейджи помогают быстро понять сильные стороны специалиста.</p>
      <p>В планах — автоматическая выдача за KPI и вручную модерируемые награды.</p>
    </PagePlaceholder>
  );
}
