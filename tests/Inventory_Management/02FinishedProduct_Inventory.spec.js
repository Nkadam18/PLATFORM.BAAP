import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("Finished Product Creation", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  await page.getByTestId("menu-item-inventory-management").click();
  await page.getByTestId("submenu-item-inventory").click();

  await page.getByRole("button", { name: "Finished Product" }).click();
  await page.getByTestId("EC-EI-btn-add").click();

  // Product dropdown
  await page.getByTestId("EC-AIF-ip-product-search").click();

  await page
    .locator('[data-testid^="EC-AIF-btn-product-option-"]')
    .first()
    .click();

  // Variant dropdown
  await page.getByTestId("EC-AIF-btn-variant-selector").click();

  await page
    .locator('[data-testid^="EC-AIF-btn-variant-option-"]')
    .first()
    .click();

  // Warehouse dropdown
  await page.getByTestId("EC-AIF-ip-warehouse-search").click();

  await page
    .locator('[data-testid^="EC-AIF-btn-warehouse-option-"]')
    .first()
    .click();

  // Expiry date
  await page.getByRole("textbox", { name: "Select Expiry Date" }).click();

  await page.getByRole("button", { name: "31" }).click();

  // Quantity
  await page.getByTestId("EC-AIF-ip-quantity").click();

  await page.getByTestId("EC-AIF-ip-quantity").fill("200");

  // Min stock
  await page.getByTestId("EC-AIF-ip-min-stock").click();

  await page.getByTestId("EC-AIF-ip-min-stock").fill("20");

  // Save
  await page.getByTestId("EC-AIF-btn-save").click();

  // First row click
  await page.locator('[data-testid^="EC-EI-td-product-name-"]').first().click();

  // Back
  await page.getByTestId("EC-EID-btn-back").click();
});
