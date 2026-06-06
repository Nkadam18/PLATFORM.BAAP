import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  await page.getByTestId("menu-item-click-expense").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EXP-btn-add-expense").click();
  await page.waitForTimeout(800);
  await page.getByTestId("EXP-div-type-dropdown").click();
  await page.waitForTimeout(800);
  await page
    .getByTestId("EXP-div-type-field-container")
    .getByText("Misc")
    .click();
  await page.waitForTimeout(800);
  await page.getByTestId("EXP-i-amount").click();
  await page.waitForTimeout(800);

  ///Random cost
  const randomAmount = Math.floor(Math.random() * 900) + 100;
  await page.getByTestId("EXP-i-amount").fill(randomAmount.toString());

  await page.waitForTimeout(800);
  await page.getByTestId("EXP-i-description").click();
//   await page.waitForTimeout(800);
//   await page.getByTestId("EXP-i-description").fill("");
  await page.waitForTimeout(800);
  await page.getByRole("textbox", { name: "Select date" }).click();
  await page.waitForTimeout(800);
  await page.getByRole("button", { name: "20", exact: true }).click();
  await page.waitForTimeout(800);
  await page.getByTestId("EXP-btn-save").click();
  await page.waitForTimeout(800);

  await page.locator("tbody tr").first().getByText("Nagesh Kadam").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EXP-btn-tab-workFlow").click();
  await page.waitForTimeout(800);

  await page.getByText("Level 1Pending").click();
  await page.waitForTimeout(800);
  await page.getByRole("button", { name: "Approve" }).click();
  await page.waitForTimeout(800);

  await page.getByTestId("EXP-btn-tabs-back").click();
  await page.waitForTimeout(800);

  await page.getByRole("checkbox").first().check();
  await page.waitForTimeout(800);

  await page.getByTestId("EXP-btn-push-selected").click();
  await page.waitForTimeout(800);
  await page.getByTestId("PM-PC-filter-month-input").click();
  await page.waitForTimeout(800);
  await page.getByText("April").click();
  await page.waitForTimeout(800);
  await page.getByTestId("PM-PC-filter-year-input").click();
  await page.waitForTimeout(800);
  await page.getByText("2026", { exact: true }).click();
  await page.waitForTimeout(800);
  await page
    .getByRole("button", { name: "Push to Reimbursement" })
    .nth(1)
    .click();
  await page.waitForTimeout(800);
});
