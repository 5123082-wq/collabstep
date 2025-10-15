import { PagePlaceholder } from '@/components/app/PagePlaceholder';

export default function DocsFilesPage() {
  return (
    <PagePlaceholder
      title="Файлы"
      description="Общий репозиторий файлов и материалов по проектам."
      actions={[
        { id: 'upload', label: 'Загрузить файл', tone: 'primary' },
        { id: 'create-folder', label: 'Создать папку' },
      ]}
    >
      <p>Скоро появится предпросмотр, версии и права доступа для каждого документа.</p>
      <p>Используйте раздел, чтобы хранить исходники, брифы и результаты работ.</p>
    </PagePlaceholder>
  );
}
