import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  // Random data every run
  const id = Date.now();
  const discountName = `Diwali Special ${id}`;

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  await page.getByTestId("menu-item-e-commerce").click();
  await page.waitForTimeout(800);

  await page.getByTestId("submenu-item-discounts").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-DSC-btn-add-discount").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-ADSC-ip-name").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-ADSC-ip-name").fill(discountName);
  await page.waitForTimeout(800);

  await page.getByTestId("EC-ADSC-re-description").click();
  await page.waitForTimeout(800);

  await page
    .getByTestId("EC-ADSC-re-description")
    .fill("Discount ! Discount! Discount !");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-ADSC-dd-type").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-ADSC-div-type-option-percentage").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-ADSC-dd-apply-on").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-ADSC-div-apply-on-option-product").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-ADSC-ip-product-search").click();
  await page.waitForTimeout(800);

  await page
    .locator('[data-testid^="EC-ADSC-div-product-option-"]')
    .first()
    .click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-ADSC-ip-value").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-ADSC-ip-value").fill("40");
  await page.waitForTimeout(800);

  await page.getByRole("textbox", { name: "Select date" }).first().click();
  await page.waitForTimeout(800);

  await page.getByRole("button", { name: "25" }).click();
  await page.waitForTimeout(800);

  await page.getByTestId("TimePicker-btn-trigger").first().click();
  await page.waitForTimeout(800);

  await page.getByTestId("TimePicker-hour-1").click();
  await page.waitForTimeout(800);

  await page.getByTestId("TimePicker-minutes-column").getByText("00").click();
  await page.waitForTimeout(800);

  await page.getByTestId("TimePicker-period-AM").click();
  await page.waitForTimeout(800);

  await page.getByRole("textbox", { name: "Select date" }).nth(1).click();
  await page.waitForTimeout(800);

  await page.getByRole("button", { name: "30" }).click();
  await page.waitForTimeout(800);

  await page.getByTestId("TimePicker-btn-trigger").nth(1).click();
  await page.waitForTimeout(800);

  await page.getByTestId("TimePicker-hour-7").click();
  await page.waitForTimeout(800);

  await page.getByTestId("TimePicker-minutes-column").getByText("00").click();
  await page.waitForTimeout(800);

  await page.getByTestId("TimePicker-period-PM").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-ADSC-btn-submit").click();
  await page.waitForTimeout(800);

  await page
    .locator('[data-testid^="EC-DSC-td-discount-name-"]')
    .first()
    .click();
  await page.waitForTimeout(800);

  await page.getByRole("button", { name: "Back" }).click();
  await page.waitForTimeout(800);
});