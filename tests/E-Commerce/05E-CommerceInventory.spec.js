import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  await page.getByTestId("menu-item-e-commerce").click();
  await page.waitForTimeout(800);

  await page.getByTestId("submenu-item-inventory").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-EI-btn-add").click();
  await page.waitForTimeout(800);

  // Product dropdown
  await page.getByTestId("EC-AIF-ip-product-search").click();
  await page.waitForTimeout(800);

  await page
    .locator('[data-testid^="EC-AIF-btn-product-option-"]')
    .first()
    .click();
  await page.waitForTimeout(800);

  // Variant dropdown
  await page.getByTestId("EC-AIF-btn-variant-selector").click();
  await page.waitForTimeout(800);

  await page
    .locator('[data-testid^="EC-AIF-btn-variant-option-"]')
    .first()
    .click();
  await page.waitForTimeout(800);

  // Warehouse dropdown
  await page.getByTestId("EC-AIF-ip-warehouse-search").click();
  await page.waitForTimeout(800);

  await page
    .locator('[data-testid^="EC-AIF-btn-warehouse-option-"]')
    .first()
    .click();
  await page.waitForTimeout(800);

  // Expiry date
  await page.getByRole("textbox", { name: "Select Expiry Date" }).click();
  await page.waitForTimeout(800);

  await page.getByRole("button", { name: "30" }).click();
  await page.waitForTimeout(800);

  // Quantity
  await page.getByTestId("EC-AIF-ip-quantity").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AIF-ip-quantity").fill("200");
  await page.waitForTimeout(800);

  // Min stock
  await page.getByTestId("EC-AIF-ip-min-stock").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AIF-ip-min-stock").fill("20");
  await page.waitForTimeout(800);

  // Save
  await page.getByTestId("EC-AIF-btn-save").click();
  await page.waitForTimeout(800);

  // First row click
  await page.locator('[data-testid^="EC-EI-td-product-name-"]').first().click();
  await page.waitForTimeout(800);

  // Back
  await page.getByTestId("EC-EID-btn-back").click();
  await page.waitForTimeout(800);
});
