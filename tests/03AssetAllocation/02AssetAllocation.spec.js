import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  //asset allocate from asset allocation

  await page.getByTestId("menu-item-asset-management").click();
  // await page.waitForTimeout(500);
  await page.getByTestId("submenu-item-asset-allocation").click();
  // await page.waitForTimeout(500);
  await page.getByRole("button", { name: "Add Allocation" }).click();
  // await page.waitForTimeout(500);
  await page.getByTestId("AM-AL-user-input").click();
  // await page.waitForTimeout(500);
  await page.getByRole("listitem").filter({ hasText: "Nagesh Sureshrao Kadam" }).click();
  // await page.waitForTimeout(500);

  /////////

  await page.getByTestId("AM-AL-asset-type-input").click();
  // await page.waitForTimeout(500);
  await page.locator("li.px-3.py-2:visible").first().click();
  // await page.waitForTimeout(500);

  await page
    .locator("div")
    .filter({ hasText: /^Search and select assets$/ })
    .first()
    .click();
  // await page.waitForTimeout(500);
  await page.locator('[role="listbox"] div').first().click();
  // await page.waitForTimeout(500);

  ////////////////

  await page.getByTestId("AM-AL-assigned-date-input").click();
  // await page.waitForTimeout(500);
  await page.getByRole("button", { name: "13" }).click();
  // await page.waitForTimeout(500);
  await page.getByTestId("AM-AL-save-allocation-button").click();
  // await page.waitForTimeout(500);
  await page.getByTestId("AM-AA-AAM-users-tab").click();
  // await page.waitForTimeout(500);
  await page.getByTestId("AM-AA-AAM-allocation-tab").click();
  // await page.waitForTimeout(500);
});
