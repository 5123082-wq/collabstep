import Fuse from 'fuse.js';

export type SearchKind = 'projects' | 'tasks' | 'invoices' | 'all';

export interface ProjectEntry {
  id: string;
  title: string;
  tagline?: string;
  status?: string;
}

export interface TaskEntry {
  id: string;
  title: string;
  code?: string;
  projectId?: string;
  assignee?: string;
}

export interface InvoiceEntry {
  id: string;
  title: string;
  number?: string;
  status?: string;
}

export interface SearchDataset {
  projects: ProjectEntry[];
  tasks: TaskEntry[];
  invoices: InvoiceEntry[];
}

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  type: 'project' | 'task' | 'invoice';
  href: string;
}

const baseOptions: Fuse.IFuseOptions<SearchResult> = {
  includeScore: true,
  shouldSort: true,
  threshold: 0.38,
  keys: ['title', 'description'],
};

export const parseSearchQuery = (raw: string): { kind: SearchKind; term: string } => {
  const value = raw.trim();
  if (!value) {
    return { kind: 'all', term: '' };
  }
  const prefix = value[0];
  if (prefix === '@') {
    return { kind: 'projects', term: value.slice(1).trim() };
  }
  if (prefix === '#') {
    return { kind: 'tasks', term: value.slice(1).trim() };
  }
  if (prefix === '$') {
    return { kind: 'invoices', term: value.slice(1).trim() };
  }
  return { kind: 'all', term: value };
};

const formatDatasets = (dataset: SearchDataset): SearchResult[] => {
  const projectResults: SearchResult[] = dataset.projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.tagline ?? project.status,
    type: 'project',
    href: `/app/projects`,
  }));
  const taskResults: SearchResult[] = dataset.tasks.map((task) => {
    const codeLabel = task.code ? `${task.code} — ` : '';
    return {
      id: task.id,
      title: `${codeLabel}${task.title}`,
      description: task.assignee,
      type: 'task',
      href: task.projectId ? `/app/projects/${task.projectId}` : '/app/projects',
    };
  });
  const invoiceResults: SearchResult[] = dataset.invoices.map((invoice) => ({
    id: invoice.id,
    title: invoice.title,
    description: invoice.number ?? invoice.status,
    type: 'invoice',
    href: '/app/finance/invoices',
  }));
  return [...projectResults, ...taskResults, ...invoiceResults];
};

const pickByKind = (kind: SearchKind, dataset: SearchDataset): SearchResult[] => {
  const formatted = formatDatasets(dataset);
  if (kind === 'projects') {
    return formatted.filter((item) => item.type === 'project');
  }
  if (kind === 'tasks') {
    return formatted.filter((item) => item.type === 'task');
  }
  if (kind === 'invoices') {
    return formatted.filter((item) => item.type === 'invoice');
  }
  return formatted;
};

export const deepSearch = (query: string, dataset: SearchDataset): SearchResult[] => {
  const { kind, term } = parseSearchQuery(query);
  const items = pickByKind(kind, dataset);

  if (!term) {
    return items.slice(0, 6);
  }

  const fuse = new Fuse(items, baseOptions);
  return fuse
    .search(term)
    .slice(0, 8)
    .map((result) => result.item);
};
