import { LEFT_MENU_CONFIG } from '@/components/app/LeftMenu.config';
import { buildMenu } from '@/lib/nav/menu-builder';

describe('app menu builder', () => {
  it('скрывает админку для обычных ролей', () => {
    const menu = buildMenu(LEFT_MENU_CONFIG, ['FOUNDER']);
    const adminEntry = menu.find((item) => item.id === 'admin');
    expect(adminEntry).toBeUndefined();
  });

  it('отображает финансы только для уполномоченных ролей', () => {
    const specialistMenu = buildMenu(LEFT_MENU_CONFIG, ['SPECIALIST']);
    expect(specialistMenu.some((item) => item.id === 'finance')).toBe(false);

    const pmMenu = buildMenu(LEFT_MENU_CONFIG, ['PM']);
    expect(pmMenu.some((item) => item.id === 'finance')).toBe(true);
  });

  it('возвращает вложенных потомков для доступных ролей', () => {
    const adminMenu = buildMenu(LEFT_MENU_CONFIG, ['ADMIN']);
    const adminEntry = adminMenu.find((item) => item.id === 'admin');
    expect(adminEntry).toBeDefined();
    expect(adminEntry?.href).toBe('/app/admin');
  });
});
