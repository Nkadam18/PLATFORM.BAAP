import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });
  test.setTimeout(120000);

  await page.waitForTimeout(800);
  await page.getByTestId("menu-item-asset-management").click();
  await page.waitForTimeout(800);
  await page.getByTestId("submenu-item-asset-checkout").click();
  await page.waitForTimeout(800);
  //await page.getByTestId("AM-AC-status-card-expired").click();
  // await page.waitForTimeout(800);
  // await page.getByTestId("AM-AC-status-card-pending_approval").click();
  // await page.waitForTimeout(800);
  // await page.getByTestId("AM-AC-status-card-approved").click();
  // await page.waitForTimeout(800);
  // await page.getByTestId("AM-AC-status-card-total").click();
  // await page.waitForTimeout(800);

  await page.getByTestId("AM-AC-search-checkout-input").click();
  await page.getByTestId("AM-AC-search-checkout-input").fill("Nagesh");
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AC-clear-search-button").click();
  await page.getByTestId("AM-AC-add-checkout-button").click();
  await page.waitForTimeout(800);

  //////////
  // Asset Type
  await page.getByTestId("AM-AC-AAC-asset-type-input").click();
  await page.locator("li.px-3.py-2:visible").first().click();

  // Unique Identifier
  await page.getByTestId("AM-AC-AAC-unique-identifier-input").click();
  await page.locator("div.font-medium").click();
  /////////////////

  await page.waitForTimeout(800);

  await page.getByTestId("AM-AC-AAC-Duration-Start-Date").click();
  await page.waitForTimeout(800);
  await page.getByRole('button', { name: '31' }).click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AC-AAC-Duration-End-Date").click();

  await page.getByTestId("AM-AC-AAC-save-checkout-button").click();
  await page.waitForTimeout(800);
  await page.getByText("Nagesh Sureshrao Kadam").nth(0).click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AR-ARD-tab-workflow").click();
  await page.waitForTimeout(800);
  await page.getByText("Level 1Pending").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AR-ARD-W-approve-button-0-0").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AR-ARD-back-button").click();

  await page.waitForTimeout(800);
  await page.getByRole("link", { name: "Daily Check In/Out" }).click();
  await page.waitForTimeout(800);
  await page.getByTitle("Check Out").first().click();
  await page.waitForTimeout(800);
  await page.getByRole("link", { name: "Activity Logs" }).click();
  await page.waitForTimeout(800);
  await page.getByRole("link", { name: "Daily Check In/Out" }).click();
  await page.waitForTimeout(800);
  await page.getByTitle("Check In").first().click();
  await page.waitForTimeout(800);
  await page.getByRole("link", { name: "Activity Logs" }).click();
  await page.waitForTimeout(800);
});
