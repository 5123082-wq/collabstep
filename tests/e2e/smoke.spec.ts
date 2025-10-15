import { test, expect } from '@playwright/test';

test('главная открывается без ошибок', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      errors.push(message.text());
    }
  });

  await page.goto('/');
  await expect(page).toHaveTitle(/Collabverse/i);
  expect(errors).toEqual([]);
});
