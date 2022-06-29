import { test, expect, type Page } from '@playwright/test';

test.describe('Visit tour of heroes page', () => {
  test('should load the page', async ({page}) => {
    await page.goto('http://localhost:4200/heroes');

    await expect(page.locator('.heroes')).toContainText([
      'Tornado'
    ]);
  });
});
