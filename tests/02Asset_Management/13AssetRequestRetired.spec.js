import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  ///APPROVE ASSET REQUEST IN aSSET REQUEST

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
  await page.getByTestId("AM-AR-ARD-tab-manager-action").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AR-ARD-MA-retired-reason-textarea").click();
  await page.waitForTimeout(800);
  await page
    .getByTestId("AM-AR-ARD-MA-retired-reason-textarea")
    .fill("this HDMI cable is fully destroyed");
  await page.waitForTimeout(800);
  await page.getByRole("button", { name: "Save" }).click();
  await page.waitForTimeout(500);
});






