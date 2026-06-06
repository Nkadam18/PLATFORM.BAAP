import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
test.setTimeout(120000)

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  ///APPROVE ASSET REQUEST IN ASSET REQUEST

  await page.getByTestId("menu-item-asset-management").click();
  await page.waitForTimeout(800);
  await page.getByTestId("submenu-item-asset-requests").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AR-search-requests-input").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AR-search-requests-input").fill("Nagesh");
  await page.waitForTimeout(800);
  await page.getByText("Nagesh Sureshrao Kadam").nth(0).click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AR-ARD-tab-workflow").click();
  await page.waitForTimeout(800);
  await page.getByText("Level 1Pending").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AR-ARD-W-approve-button-0-0").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AR-ARD-tab-manager-action").click();
  await page.waitForTimeout(800);
  await page.getByTestId('AM-AR-ARD-MA-return-reason-input').click();
  await page.waitForTimeout(800);
  await page.getByTestId('AM-AR-ARD-MA-return-reason-input').fill('its not working');
  await page.waitForTimeout(800);
  await page.getByTestId('AM-AR-ARD-MA-return-unique-identifier-input-0').click();
  await page.waitForTimeout(800);
  await page.locator("div.font-medium").first().click();
  await page.waitForTimeout(800);
  await page.getByRole("button", { name: "Save" }).click();
  await page.waitForTimeout(800);

// 

  // await page.waitForTimeout(800);
  // await page
  //   .getByTestId("AM-AR-ARD-MA-allocation-assigned-date-picker")
  //   .click();
  // await page.waitForTimeout(800);
  // await page.getByRole("button", { name: "10" }).click();
  // await page.waitForTimeout(800);

  // const dropdown = page.getByTestId(
  //   "AM-AR-ARD-MA-allocation-unique-identifier-input-0",
  // );
  // await page.waitForTimeout(800);
  // await dropdown.click();
  // await page.locator('[data-testid*="allocation-asset-item"]').first().click();
  // await page.waitForTimeout(800);

  // await page.getByRole("button", { name: "Save" }).click();
  // await page.waitForTimeout(500);
});
