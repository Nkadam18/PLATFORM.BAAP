import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
    storageState:"auth/client.json"
})

test("test", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });
  // New order every run
  const id = Date.now();
  const firstName = `Nagesh${id}`;

  await page.getByTestId("menu-item-e-commerce").click();
  

  await page.getByTestId("submenu-item-orders").click();
  

  await page.getByTestId("EC-ORD-btn-add").click();
  

  await page.getByTestId("EC-AOF-ip-customer-first-name").click();
  

  await page.getByTestId("EC-AOF-ip-customer-first-name").fill(firstName);
  

  await page.getByTestId("EC-AOF-ip-customer-last-name").click();
  

  await page.getByTestId("EC-AOF-ip-customer-last-name").fill("Kadam");
  

  await page.getByTestId("EC-AOF-ip-customer-phone").click();
  

  await page.getByTestId("EC-AOF-ip-customer-phone").fill("8762763871");
  

  // Product dropdown first option only
  await page.getByTestId("EC-AOF-ip-product-search").click();
  

  await page
    .locator('[data-testid^="EC-AOF-btn-product-option-"]')
    .first()
    .click();
  

  await page
    .locator('[data-testid^="EC-AOF-btn-variant-option-"]')
    .first()
    .click();
  

  await page.getByRole("textbox", { name: "Select delivery date" }).click();
  

  await page.getByRole("button", { name: "27" }).click();
  

  await page.getByTestId("EC-AOF-ip-quantity").click();
  

  await page.getByTestId("EC-AOF-ip-quantity").fill("50");
  

  await page.getByTestId("EC-AOF-btn-add-update").click();
  

  await page.getByTestId("EC-AOF-dd-order-status-toggle-btn").click();
  

  await page.getByTestId("EC-AOF-dd-order-status-option-1").click();
  

  await page.getByTestId("EC-AOF-dd-payment-type-toggle-btn").click();
  

  await page.getByTestId("EC-AOF-dd-payment-type-option-0").click();
  

  await page.getByTestId("EC-AOF-btn-save-pay").click();
  

  await page.getByRole("button", { name: "Confirm Payment" }).click();
  

  await page.getByTestId("EC-AOF-btn-close-sidebar").click();
  
});
