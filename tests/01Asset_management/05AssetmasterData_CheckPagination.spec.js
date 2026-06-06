import { test, expect } from '@playwright/test';
import { DASHBOARD } from '../login/login';

test.use({
    storageState:"auth/client.json"
});

test('test', async ({ page }) => {
  await page.goto(DASHBOARD,{waitUntil:"networkidle"});

  ///Pagenation is working or not ?
  
  await page.getByTestId('menu-item-asset-management').click();
  await page.getByTestId('submenu-item-asset-master-data').click();
  await page.getByTestId('AM-AMD-AT-pagination-page-2').click();
  await page.getByTestId('AM-AMD-AT-pagination-items-per-page-trigger').click();
  await page.getByTestId('AM-AMD-AT-pagination-items-per-page-25').click();
  await page.getByRole('cell', { name: 'Charger' }).first().click();
});