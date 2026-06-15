import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  await page.getByTestId("menu-item-asset-management").click();
  
  await page.getByTestId("submenu-item-asset-allocation").click();
  await page.waitForTimeout(500)
  await page.getByRole('button', { name: 'Add Allocation' }).click();
  await page.waitForTimeout(500)
  await page.getByTestId('AM-AL-user-input').click();
  await page.getByTestId('AM-AL-user-input').fill('Nagesh kadam');
  await page.waitForTimeout(500)
  await page.getByRole('listitem').filter({ hasText: 'Nagesh kadam' }).click();
  await page.waitForTimeout(500)
  await page.getByTestId('AM-AL-asset-type-input').click();
  await page.waitForTimeout(500)
  await page.locator('li.px-3.py-2:visible').first().click();
  await page.waitForTimeout(500)
  await page.locator('div').filter({ hasText: /^Search and select assets$/ }).nth(2).click();
  await page.waitForTimeout(500)
  await page.getByRole('option').first().click();
  await page.waitForTimeout(500)
  await page.getByTestId('AM-AL-assigned-date-input').click();
  await page.waitForTimeout(500)
  await page.getByRole('button', { name: '13', exact: true }).click();
  await page.waitForTimeout(500)
  await page.getByTestId('AM-AL-save-allocation-button').click();
  await page.waitForTimeout(500)
  await page.locator('//*[@id="root"]/div/div/div[3]/div/div[2]/a[2]').click();
  await page.waitForTimeout(800)
  await page.locator(".block.truncate.w-full").nth(0).click();
  await page.waitForTimeout(2000)
});
