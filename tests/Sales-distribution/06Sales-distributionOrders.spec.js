import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
import { faker, fakerEN_IN } from "@faker-js/faker";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  // New order every run
  const firstName = fakerEN_IN.person.firstName();
  const lastName = fakerEN_IN.person.lastName();
  const phone =
    fakerEN_IN.helpers.arrayElement(["6", "7", "8", "9"]) +
    fakerEN_IN.string.numeric(9);

  await page.getByTestId("menu-item-sales-&-distribution").click();
  await page.getByTestId("submenu-item-orders").click();
  await page.getByTestId("EC-ORD-btn-add").click();
  await page.getByTestId("EC-AOF-ip-customer-first-name").click();
  await page.getByTestId("EC-AOF-ip-customer-first-name").fill(firstName);
  await page.getByTestId("EC-AOF-ip-customer-last-name").click();
  await page.getByTestId("EC-AOF-ip-customer-last-name").fill(lastName);
  await page.getByTestId("EC-AOF-ip-customer-phone").click();
  await page.getByTestId("EC-AOF-ip-customer-phone").fill(phone);

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
