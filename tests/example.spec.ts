import { test, expect, type Page } from '@playwright/test';

test.describe('Tour of Heroes pages', () => {
  test('should load default route', async ({page}) => {
    await page.goto('http://localhost:4200');

    await expect(page).toHaveURL(/\/dashboard$/);
  });

  test('should allow edits', async ({page}) => {
    await page.goto('http://localhost:4200');

    await page.locator('[data-test="detail-link"]').first().click();

    await expect(page).toHaveURL(/\/detail\/\d+/);

    await page.locator('#hero-name').fill('lorem ipsum');

    await page.locator('[data-test="save-button"]').click();

    await expect(page.locator('[data-test="detail-link"]').first()).toContainText('lorem ipsum');
  });

  test('should search for heroes', async ({page}) => {
    await page.goto('http://localhost:4200');
  })

  test('should delete heroes', async ({page}) => {
    await page.goto('http://localhost:4200/heroes');
  })

  test('should add heroes', async ({page}) => {
    await page.goto('http://localhost:4200/heroes');
  })
});
