import { deepSearch, parseSearchQuery } from '@/lib/search/deepSearch';

describe('deepSearch', () => {
  const dataset = {
    projects: [
      { id: 'prj-1', title: 'Рекламный проект', tagline: 'Комплексная кампания' },
    ],
    tasks: [
      { id: 'task-1', title: 'Настроить рекламу', code: '#789', assignee: 'Антон' },
    ],
    invoices: [
      { id: 'inv-1', title: 'Счёт за рекламу', number: '$5001' },
    ],
  } as const;

  it('распознаёт префиксы @/#/$', () => {
    expect(parseSearchQuery('@alpha')).toEqual({ kind: 'projects', term: 'alpha' });
    expect(parseSearchQuery('#123')).toEqual({ kind: 'tasks', term: '123' });
    expect(parseSearchQuery('$2024')).toEqual({ kind: 'invoices', term: '2024' });
    expect(parseSearchQuery('привет')).toEqual({ kind: 'all', term: 'привет' });
  });

  it('находит задачи по номеру', () => {
    const results = deepSearch('#789', dataset);
    expect(results).toHaveLength(1);
    expect(results[0].type).toBe('task');
    expect(results[0].title).toContain('#789');
  });

  it('возвращает все типы при общем поиске', () => {
    const results = deepSearch('реклама', dataset);
    const types = new Set(results.map((item) => item.type));
    expect(types.has('project')).toBe(true);
    expect(types.has('task')).toBe(true);
    expect(types.has('invoice')).toBe(true);
  });
});
