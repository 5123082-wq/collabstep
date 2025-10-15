import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function ProjectsPage() {
  return (
    <PagePlaceholder
      title="Проекты"
      description="Здесь будут активные проекты, статусы и дорожные карты."
      actions={[
        { id: 'new-project', label: 'Создать проект', tone: 'primary' },
        { id: 'import', label: 'Импортировать из шаблона' },
      ]}
    >
      <p>Планируется доска с фильтрами по статусу, бюджетам и руководителям.</p>
      <p>Используйте быстрые действия справа, чтобы подготовить список задач и команду.</p>
    </PagePlaceholder>
  );
}
