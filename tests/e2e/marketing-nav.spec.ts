import { expect, test } from '@playwright/test';

const desktopRoutes: Array<{ trigger: string; link: string; path: string; hash?: string }> = [
  { trigger: 'Продукт', link: 'Обзор платформы', path: '/product' },
  { trigger: 'Для кого', link: 'Бизнес / Основатель', path: '/audience', hash: '#founder' },
  { trigger: 'Проекты', link: 'Лента открытых проектов', path: '/projects' },
  { trigger: 'Специалисты', link: 'Каталог специалистов', path: '/specialists' },
  { trigger: 'Подрядчики', link: 'Каталог поставщиков', path: '/contractors' },
  { trigger: 'Тарифы', link: 'Для специалистов (Pro/Boost)', path: '/pricing', hash: '#pro' },
  { trigger: 'Блог / Гайды', link: 'Статьи / Плейбуки', path: '/blog' }
];

test.describe('маркетинговая навигация', () => {
  test('главная открывается без ошибок', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        errors.push(message.text());
      }
    });
    await page.goto('/');
    await expect(page).toHaveTitle(/Collabverse/);
    expect(errors).toEqual([]);
  });

  test('desktop: наведение и клавиатура открывают подпункты', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Главное меню' });
    const productTrigger = nav.getByRole('button', { name: 'Продукт' });
    await productTrigger.hover();
    await expect(nav.locator('a', { hasText: 'AI-агенты' }).first()).toBeVisible();

    await productTrigger.focus();
    await productTrigger.press('ArrowDown');
    const firstItem = nav.locator('a', { hasText: 'Обзор платформы' }).first();
    await expect(firstItem).toBeFocused();
  });

  for (const route of desktopRoutes) {
    const expectedUrl = `${route.path}${route.hash ?? ''}`;
    test(`desktop: переход ${expectedUrl}`, async ({ page }) => {
      await page.goto('/');
      const nav = page.getByRole('navigation', { name: 'Главное меню' });
      const trigger = nav.getByRole('button', { name: route.trigger });
      await trigger.focus();
      await trigger.press('ArrowDown');
      await nav.locator('a', { hasText: route.link }).first().click();
      await page.waitForURL((url) => {
        const matchesPath = url.pathname === route.path;
        if (!matchesPath) return false;
        return route.hash ? url.hash === route.hash : url.hash === '';
      });
      await expect(page).toHaveURL(new RegExp(`${expectedUrl}$`));
    });
  }

  test('mobile: бургер и аккордеон работают', async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto('/');
    await page.getByRole('button', { name: 'Открыть меню' }).click();
    await page.getByRole('button', { name: 'Продукт' }).click();
    await page
      .getByRole('navigation', { name: 'Мобильное меню' })
      .locator('a', { hasText: 'AI-агенты' })
      .first()
      .click();
    await page.waitForURL('**/product/ai');
    await context.close();
  });
});
