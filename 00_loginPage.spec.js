import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByTestId('AM-AR-ARD-MA-retired-reason-textarea').click();
  await page.getByTestId('AM-AR-ARD-MA-retired-reason-textarea').fill('this HDMI cable is fully destroyed');
});