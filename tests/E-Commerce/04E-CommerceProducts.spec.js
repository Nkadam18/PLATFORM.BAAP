import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  // unique data every run
  const id = Date.now();

  const productName = `Godraj AC ${id}`;
  const model = `AC-${id.toString().slice(-4)}`;
  const sku = `${id.toString().slice(-6)}`;
  const hsn = `${id.toString().slice(-9)}`;
  const uniqueNumber = `GDAC${id.toString().slice(-5)}`;

  await page.getByTestId("menu-item-e-commerce").click();
  await page.waitForTimeout(800);

  await page.getByTestId("submenu-item-products").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-PRD-btn-add").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-name").fill(productName);
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-model").fill(model);
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-sku").fill(sku);
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-hsn_number").fill(hsn);
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-unique_number").fill(uniqueNumber);
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-uom-search").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-btn-uom-option-0").click();
  await page.waitForTimeout(800);

  await page
    .getByTestId("EC-APF-re-description")
    .fill("It is useful for stay cold rooms");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-terms").fill("Use it properly.");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-category-search").click();
  await page.waitForTimeout(800);

  await page
    .locator('[data-testid^="EC-APF-btn-category-option-"]')
    .first()
    .click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-subcategory-search").click();
  await page.waitForTimeout(800);

  await page.locator('[data-testid^="EC-APF-btn-subcategory-option-"]').first().click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-tag-search").click();
  await page.waitForTimeout(800);

  await page.locator('[data-testid^="EC-APF-btn-tag-option-"]').first().click();
  await page.waitForTimeout(800);

  // await page.getByTestId("EC-APF-ip-tag-search").click();
  // await page.waitForTimeout(800);

  // await page.getByText("Trendingansoi").click();
  // await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-business-search").click();
  await page.waitForTimeout(800);

  await page.locator('[data-testid^="EC-APF-btn-business-option-"]').first().click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-buyingPrice").fill("15000");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-memberPrice").fill("10000");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-regularPrice").fill("14000");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-marketPrice").fill("14500");
  await page.waitForTimeout(800);

  await page
    .getByTestId("Ecommerce-Product-Add-characteristic-input-0")
    .fill("Big");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-APF-ip-gst").fill("10");
  await page.waitForTimeout(800);

  await page
    .getByTestId("Ecommerce-Product-Add-add-characteristic-btn")
    .click();
  await page.waitForTimeout(800);

  await page
    .getByTestId("Ecommerce-Product-Add-characteristic-input-1")
    .fill("Best");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-VM-btn-add").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-VM-ip-option-name-0").fill("Red");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-VM-ip-option-value-0-0").fill("20000");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-VM-btn-add-another-option").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-VM-ip-option-name-1").fill("Black");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-VM-ip-option-value-1-0").fill("25000");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-VM-btn-add-another-option").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-VM-ip-option-name-2").fill("White");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-VM-ip-option-value-2-0").fill("15000");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-VM-btn-save-options").click();
  await page.waitForTimeout(800);

  await page.getByTestId("Ecommerce-Product-Add-submit-btn").click();
  await page.waitForTimeout(800);
});
