import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function MarketplacePacksPage() {
  return (
    <PagePlaceholder
      title="Пакеты услуг"
      description="Готовые пакеты и комбинированные предложения."
      actions={[
        { id: 'create-pack', label: 'Собрать пакет', tone: 'primary' },
        { id: 'share-pack', label: 'Поделиться предложением' },
      ]}
    >
      <p>Подготовьте популярные наборы услуг, чтобы ускорить продажи команды.</p>
      <p>Здесь появятся тарифы, описания и быстрый просмотр содержимого пакета.</p>
    </PagePlaceholder>
  );
}
