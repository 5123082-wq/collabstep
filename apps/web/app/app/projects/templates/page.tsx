import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function ProjectTemplatesPage() {
  return (
    <PagePlaceholder
      title="Шаблоны проектов"
      description="Готовые процессы и шаблоны брифов для быстрого запуска."
      actions={[
        { id: 'create-template', label: 'Новый шаблон', tone: 'primary' },
        { id: 'browse-library', label: 'Каталог шаблонов' },
      ]}
    >
      <p>На этом экране появится библиотека с тегами и рекомендованными процессами.</p>
      <p>Добавьте шаблоны заранее, чтобы команда могла запускать проекты в один клик.</p>
    </PagePlaceholder>
  );
}
