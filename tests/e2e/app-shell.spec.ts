import { expect, test } from '@playwright/test';

const MARKETPLACE_ROUTES = [
  '/app/marketplace/projects',
  '/app/marketplace/vacancies',
  '/app/marketplace/specialists',
];

const FINANCE_ROUTES = [
  '/app/finance/wallet',
  '/app/finance/escrow',
  '/app/finance/invoices',
];

const DOC_ROUTES = [
  '/app/docs/files',
  '/app/docs/contracts',
  '/app/docs/brand-repo',
];

test.describe('app shell', () => {
  test('dashboard открывается без ошибок в консоли', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    await page.goto('/app/dashboard');

    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);
  });

  test('раскрытие подменю не меняет ширину контента', async ({ page }) => {
    await page.goto('/app/projects');
    const content = page.locator('[data-testid="app-content"]');
    await expect(content).toBeVisible();
    const initial = await content.boundingBox();
    expect(initial).not.toBeNull();

    const toggle = page.getByRole('button', { name: /Маркетплейс/ });
    await toggle.click();
    await page.waitForTimeout(200);
    const expanded = await content.boundingBox();
    await toggle.click();
    await page.waitForTimeout(200);
    const collapsed = await content.boundingBox();

    expect(expanded?.width).toBeCloseTo(initial!.width, 1);
    expect(collapsed?.width).toBeCloseTo(initial!.width, 1);
  });

  test('ключевые страницы навигации доступны', async ({ page }) => {
    for (const route of [...MARKETPLACE_ROUTES, ...FINANCE_ROUTES, ...DOC_ROUTES]) {
      const response = await page.goto(route);
      expect(response?.ok()).toBeTruthy();
      await expect(page.locator('h1')).toBeVisible();
    }
  });

  test('меню "Создать" ведёт к выбору проекта и учитывает контекст', async ({ page }) => {
    await page.goto('/app/dashboard');
    await page.evaluate(() => {
      localStorage.removeItem('collabverse-app-ui');
    });
    await page.reload();

    await page.getByRole('button', { name: '+ Создать' }).click();
    await expect(page.getByRole('menu')).toBeVisible();
    await page.getByRole('menuitem', { name: 'Задачу' }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText('Выберите проект')).toBeVisible();
    await page.getByRole('button', { name: 'Закрыть' }).click();

    await page.evaluate(() => {
      localStorage.setItem(
        'collabverse-app-ui',
        JSON.stringify({
          state: {
            selectedProjectId: 'prj-neo',
            isSidebarOpen: true,
            backgroundPreset: 'mesh',
            expandedMenuGroups: [],
          },
          version: 0,
        }),
      );
    });
    await page.reload();
    await page.getByRole('button', { name: '+ Создать' }).click();
    await page.getByRole('menuitem', { name: 'Задачу' }).click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await expect(page.getByText('TODO: Создание задачи запланировано')).toBeVisible();
  });

  test('командная палитра открывается по Ctrl+K и ищет задачи', async ({ page }) => {
    await page.goto('/app/dashboard');
    await page.keyboard.press('Control+K');
    const palette = page.getByRole('dialog');
    await expect(palette).toBeVisible();
    await page.keyboard.type('#123');
    await expect(page.getByText('#123')).toBeVisible();
  });

  test('переключатели Mesh/Grid/Halo меняют фон и сохраняют состояние', async ({ page }) => {
    await page.goto('/app/dashboard');
    await expect.poll(() => page.evaluate(() => document.body.className)).toContain('app-background-mesh');
    await page.getByRole('button', { name: 'Grid' }).click();
    await expect.poll(() => page.evaluate(() => document.body.className)).toContain('app-background-grid');
    await page.reload();
    await expect.poll(() => page.evaluate(() => document.body.className)).toContain('app-background-grid');
    await page.getByRole('button', { name: 'Halo' }).click();
    await expect.poll(() => page.evaluate(() => document.body.className)).toContain('app-background-halo');
  });
});
