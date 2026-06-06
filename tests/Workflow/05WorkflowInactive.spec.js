import { test, expect } from '@playwright/test';
import { DASHBOARD } from '../login/login';

test.use({
    storageState: 'auth/client.json',
});

test('test', async ({ page }) => {
  await page.goto(DASHBOARD, { waitUntil: 'networkidle' });
    test.setTimeout(120000);

  await page.getByTestId('menu-item-click-workflow').click();
  await page.waitForTimeout(800);
  await page.locator('.relative > button').first().click();
  await page.waitForTimeout(800);
  await page.getByTestId('WF-CN-workflow-status-toggle').click();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: 'Update' }).click();
});


