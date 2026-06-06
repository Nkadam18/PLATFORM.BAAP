import { test, expect } from '@playwright/test';
import { DASHBOARD } from '../login/login';
test.use({
    storageState:"auth/client.json"
})

test('test', async ({ page }) => {
  await page.goto(DASHBOARD,{waitUntil:"networkidle"});

  /////ADD asset in Asset master data
  
  await page.getByTestId('menu-item-asset-management').click();
  await page.getByTestId('submenu-item-asset-master-data').click();
  await page.getByTestId('AM-AMD-M-asset-data-tab').click();
  await page.getByTestId('AM-AMD-AD-add-asset-button').click();
  await page.getByTestId('AM-AMD-AM-asset-type-input').click();
  await page.getByText('Bigs-screen - Samsung').click();
  await page.getByTestId('AM-AMD-AM-unique-identifier-input').click();
  await page.getByTestId('AM-AMD-AM-unique-identifier-input').fill('TBC01BGS001');
  await page.getByTestId('AM-AMD-AM-serial-number-input').click();
  await page.getByTestId('AM-AMD-AM-serial-number-input').fill('TBC01BGS001');
  await page.getByTestId('AM-AMD-AM-save-asset-button').click();
});