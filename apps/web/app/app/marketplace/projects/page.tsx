import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function MarketplaceProjectsPage() {
  return (
    <PagePlaceholder
      title="Маркетплейс проектов"
      description="Подбор внешних проектов и тендеров для команды."
      actions={[
        { id: 'publish', label: 'Опубликовать бриф', tone: 'primary' },
        { id: 'subscribe', label: 'Настроить подбор' },
      ]}
    >
      <p>В будущей версии появятся фильтры по бюджету, срокам и отрасли.</p>
      <p>Подключите уведомления, чтобы не пропускать релевантные запросы.</p>
    </PagePlaceholder>
  );
}
