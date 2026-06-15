import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("Create New Quotation Every Run", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });
  

  // Random data every run
  const id = Date.now();
  const firstName = `Nagesh${id}`;
  const lastName = `Kadam${id}`;
  const phone = `9${Math.floor(100000000 + Math.random() * 899999999)}`;

  await page.getByTestId("menu-item-e-commerce").click();
  

  await page
    .getByTestId("submenu-container-e-commerce")
    .getByTestId("submenu-item-quotations")
    .click();
  

  await page.getByTestId("EC-QOT-btn-add").click();
  

  await page.getByTestId("EC-QOT-a-ip-first-name").fill(firstName);
  

  await page.getByTestId("EC-QOT-a-ip-last-name").fill(lastName);
  

  await page.getByTestId("EC-QOT-a-ip-phone").fill(phone);
  

  // First dropdown product
  await page.getByTestId("EC-QOT-a-ip-search").click();
  

  await page
    .locator('[data-testid^="EC-QOT-a-dropdown-item-"]')
    .first()
    .click();
  

  // First variant
  //   await page.getByTestId("EC-QOT-a-btn-variant").click();
  //   

  await page.locator("div.font-medium.text-sm").first().click();
  

  await page.getByTestId("EC-QOT-a-ip-quantity").fill("20");
  

  await page.getByRole("button", { name: "%" }).first().click();
  

  await page.getByTestId("EC-QOT-a-ip-discount").fill("8");
  

  await page.getByTestId("EC-QOT-a-ip-tax").fill("10");
  

  await page.getByTestId("EC-QOT-a-btn-add-update").click();
  

  await page.getByRole("textbox", { name: "Select valid until" }).click();
  

  await page.getByRole("button", { name: "30" }).click();
  

  await page.getByTestId("EC-QOT-a-btn-save-only").click();
  

  // Open latest quotation
  await page
    .locator('[data-testid^="EC-QOT-btn-quotation-number-"]')
    .first()
    .click();
  

  await page.getByRole("button", { name: "Request Changes" }).click();
  

  await page
    .getByRole("textbox", { name: "Enter what needs to be" })
    .fill("Please give more discount");
  

  await page.getByRole("button", { name: "Submit" }).click();
  

  await page.getByText("REQ-").first().click();
  

  await page.getByRole("button", { name: "Approve Request" }).click();
  

  await page.getByRole("button", { name: "Back" }).click();
  

  await page.getByText("REQ-").first().click();
  

  await page.getByRole("button", { name: "Back" }).click();
  

  await page.getByTestId("history-tab").click();
  

  await page.getByTestId("details-tab").click();
  

  await page.getByRole("button", { name: "Approve" }).click();
  

  await page.getByTestId("EC-QOT-btn-back").click();
  

  /////
  await page
    .locator('[data-testid^="EC-QOT-row-"]')
    .first()
    .getByRole("button", { name: "Request Order" })
    .click();
  

  await page.locator('[data-testid^="EC-ORD-btn-edit-"]').first().click();
  

  // Order Status dropdown -> first option
  await page.getByTestId("EC-AOF-dd-order-status-toggle-btn").click();
  

  await page
    .getByRole('button',{name:'Confirmed'})
    .click();
  

  // Payment Type dropdown -> first option
  await page.getByTestId("EC-AOF-dd-payment-type-toggle-btn").click();
  

  await page
    .locator('[data-testid^="EC-AOF-dd-payment-type-option-"]')
    .first()
    .click();
  

  await page.getByTestId("EC-AOF-btn-save-pay").click();
  

  await page.getByRole("button", { name: "Confirm Payment" }).click();
  

  await page.getByTestId("EC-AOF-btn-save-only").click();
  
});
