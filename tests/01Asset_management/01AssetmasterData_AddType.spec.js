import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  ////////Add type in asset master data

  await page.getByTestId('menu-item-asset-management').click();
  await page.getByTestId('submenu-item-asset-master-data').click();
  await page.getByTestId('AM-AMD-M-asset-type-tab').click();
  await page.getByTestId('AM-AMD-AT-add-type-button').click();
  await page.getByTestId('AM-AMD-AT-add-asset-type-input').click();
  await page.getByTestId('AM-AMD-AT-add-asset-type-input').fill('Bigs-screen');
  await page.getByTestId('AM-AMD-AT-add-asset-code-input').click();
  await page.getByTestId('AM-AMD-AT-add-asset-code-input').fill('BGS');
  await page.getByTestId('AM-AMD-AT-add-asset-subtype-input').click();
  await page.getByTestId('AM-AMD-AT-add-asset-subtype-input').fill('Samsung');
  await page.getByTestId('AM-AMD-AT-add-asset-description-input').click();
  await page.getByTestId('AM-AMD-AT-add-asset-description-input').click();
  await page.getByTestId('AM-AMD-AT-add-asset-description-input').fill('Useful for teach student in modern way');

  await Promise.all([
    // page.waitForLoadState('networkidle'),
    page.getByTestId('AM-AMD-AT-save-asset-type-button').click(),
  ]);
});


