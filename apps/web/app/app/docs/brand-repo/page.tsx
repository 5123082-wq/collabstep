import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function DocsBrandRepoPage() {
  return (
    <PagePlaceholder
      title="Бренд-репозиторий"
      description="Гайды по визуальному стилю и бренд-материалы."
      actions={[
        { id: 'add-asset', label: 'Добавить ассет', tone: 'primary' },
        { id: 'share-brand', label: 'Поделиться гайдом' },
      ]}
    >
      <p>Здесь будут храниться лого, гайды по тону голоса и примеры коммуникаций.</p>
      <p>Команды смогут быстро найти нужный файл и отправить клиенту актуальную версию.</p>
    </PagePlaceholder>
  );
}
