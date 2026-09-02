import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
import { faker, fakerEN_IN } from "@faker-js/faker";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  // unique data every run

  const productName = fakerEN_IN.commerce.productName();
  const model = fakerEN_IN.string.alphanumeric(8).toUpperCase();
  const sku = fakerEN_IN.string.alphanumeric(10).toUpperCase();
  const hsn = faker.string.numeric(6);
  const uniqueIdentifier =
    productName.substring(0, 5).toUpperCase() + fakerEN_IN.string.numeric(4);

  await page.getByTestId("menu-item-sales-&-distribution").click();
  await page.getByTestId("submenu-item-products").click();
  await page.getByTestId("EC-PRD-btn-add").click();
  await page.getByTestId("EC-APF-ip-name").fill(productName);
  await page.getByTestId("EC-APF-ip-model").fill(model);
  await page.getByTestId("EC-APF-ip-sku").fill(sku);
  await page.getByTestId("EC-APF-ip-hsn_number").fill(hsn);
  await page.getByTestId("EC-APF-ip-unique_number").fill(uniqueIdentifier);
  await page.getByTestId("EC-APF-ip-uom-search").click();
  await page.getByTestId("EC-APF-btn-uom-option-0").click();
  await page
    .getByTestId("EC-APF-re-description")
    .fill("It is useful for stay cold rooms");
  await page.getByTestId("EC-APF-ip-terms").fill("Use it properly.");
  await page.getByTestId("EC-APF-ip-category-search").click();
  await page
    .locator('[data-testid^="EC-APF-btn-category-option-"]')
    .first()
    .click();
  await page.getByTestId("EC-APF-ip-subcategory-search").click();
  await page
    .locator('[data-testid^="EC-APF-btn-subcategory-option-"]')
    .first()
    .click();
  await page.getByTestId("EC-APF-ip-tag-search").click();
  await page.locator('[data-testid^="EC-APF-btn-tag-option-"]').first().click();
  await page.getByTestId("EC-APF-ip-business-search").click();
  await page
    .locator('[data-testid^="EC-APF-btn-business-option-"]')
    .first()
    .click();
  await page.getByTestId("EC-APF-ip-buyingPrice").fill("15000");
  await page.getByTestId("EC-APF-ip-memberPrice").fill("10000");
  await page.getByTestId("EC-APF-ip-regularPrice").fill("14000");
  await page.getByTestId("EC-APF-ip-marketPrice").fill("14500");
  await page
    .getByTestId("Ecommerce-Product-Add-characteristic-input-0")
    .fill("Big");
  await page.getByTestId("EC-APF-ip-gst").fill("10");
  await page.locator(".relative.inline-flex").first().click();
  await page
    .getByTestId("Ecommerce-Product-Add-add-characteristic-btn")
    .click();
  await page
    .getByTestId("Ecommerce-Product-Add-characteristic-input-1")
    .fill("Best");
  await page.getByTestId("EC-VM-btn-add").click();
  await page.getByTestId("EC-VM-ip-option-name-0").fill("Red");
  await page.getByTestId("EC-VM-ip-option-value-0-0").fill("20000");
  await page.getByTestId("EC-VM-btn-add-another-option").click();
  await page.getByTestId("EC-VM-ip-option-name-1").fill("Black");
  await page.getByTestId("EC-VM-ip-option-value-1-0").fill("25000");
  await page.getByTestId("EC-VM-btn-add-another-option").click();
  await page.getByTestId("EC-VM-ip-option-name-2").fill("White");
  await page.getByTestId("EC-VM-ip-option-value-2-0").fill("15000");
  await page.getByTestId("EC-VM-btn-save-options").click();
  await page.getByTestId("Ecommerce-Product-Add-submit-btn").click();
});
