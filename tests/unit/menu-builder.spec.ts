import { buildMenu } from '@/lib/navigation/menu-builder';

describe('menu builder', () => {
  it('меню по умолчанию — массив', () => {
    const menu = buildMenu();
    expect(Array.isArray(menu)).toBe(true);
    expect(menu).toHaveLength(0);
  });
});
