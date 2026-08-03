import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("Raw Material Creation", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  //
  //for unique name
  const uniqueName = [...Array(6)]
    .map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26)))
    .join("");

  //for unique number
  const uniqumobileNumber = `9${Date.now().toString().slice(-9)}`;

  //for unique business name
  const uniqueBusinessName = Math.random().toString(36).substring(2, 8);

  //for unique category name and code
  const uniqueCodeandCategory = `9${Date.now().toString().slice(-5)}`;

  //random click in dropdown
  const randomClick = Math.floor(Math.random() * 4);

  // //for job

  // await page.getByTestId("menu-item-crm").click();
  // await page.getByTestId("submenu-item-leads").click();
  // await page.getByTestId("CRM-L-add-new-button").click();
  // await page.getByTestId("CRM-L-add-leads-full-name-input").click();
  // await page.getByTestId("CRM-L-add-leads-full-name-input").fill(uniqueName);
  // await page.getByTestId("CRM-L-add-leads-phone-number-input").click();
  // await page
  //   .getByTestId("CRM-L-add-leads-phone-number-input")
  //   .fill(uniqumobileNumber);
  // await page.getByTestId("CRM-L-add-leads-business-name-input").click();
  // await page
  //   .getByTestId("CRM-L-add-leads-business-name-input")
  //   .fill(uniqueBusinessName);
  // await page.getByTestId("CRM-L-add-leads-address-textarea").click();
  // await page
  //   .getByTestId("CRM-L-add-leads-address-textarea")
  //   .fill("Parabhani, Maharashtra");

  // await page.getByRole("button", { name: "Save" }).click();
  // await expect(page.getByText("Lead added successfully!")).toBeVisible();

  // await page.locator('[data-testid^="CRM-L-lead-name"]').first().click();
  // await page.getByTestId("CRM-L-additional-info-create-project-button").click();

  // await expect(page.getByText("Project created successfully!")).toBeVisible();

  //for purchase order

  //category creation in configuration
  // await page.getByTestId("menu-item-vendor-management").click();

  // await page
  //   .locator('//*[@id="root"]/div/div/div[1]/div[2]/div[19]/div/ul/li[6]/a')
  //   .click();
  // await page.getByRole("button", { name: "Add Category" }).click();
  // await page.getByTestId("Vendor-Category-name-input").click();
  // await page
  //   .getByTestId("Vendor-Category-name-input")
  //   .fill("Education-" + uniqueCodeandCategory);
  // await page.getByTestId("Vendor-Category-code-input").click();
  // await page
  //   .getByTestId("Vendor-Category-code-input")
  //   .fill("Code-" + uniqueCodeandCategory);

  // await page.getByRole("button", { name: "Save" }).click();
  // await expect(page.getByText("Vendor Category Created")).toBeVisible();

  //PURCHASE REQUEST CREATION

  await page.getByTestId("menu-item-vendor-management").click();
  await page.getByTestId("submenu-item-purchase-requests").click();
  await expect(
    page.getByRole("heading", { name: "Purchase Requests" }),
  ).toBeVisible();

  await page.getByTestId("PR-PRP-create-request-button").click();
  await page.getByRole('textbox', { name: 'Select date' }).click();
  await expect(page.getByRole('button', { name: 'August' })).toBeVisible();

  await page.getByRole("button", { name: "31" }).click();
  await page.getByRole("button", { name: "Select Priority" }).click();
  await page.locator("li.px-3.py-2").nth(randomClick).click();
  await expect(page.locator("li.px-3.py-2")).toHaveCount(0);

  await page.getByTestId("PR-CPR-vendor-category-input").click();
  await page.getByTestId("PR-CPR-vendor-category-input").fill("Eduction-94");
  await page.getByText("Eduction-94").click();
  await page.getByTestId("PR-CPR-vendor-input").click();
  await page.getByTestId("PR-CPR-vendor-input").fill("Nn Kadam");
  await page.getByText("Nn Kadam").click();
  await page.getByTestId("PR-CPR-job-id-input").click();
  await page.locator("li.px-4.py-2").first().click();
  await page.getByRole("textbox", { name: "Enter Item Name" }).click();
  await page.locator("li.px-4.py-2").nth(randomClick).click();
  await page.getByPlaceholder("Qty").click();
  await page.getByPlaceholder("Qty").fill("20");
  await page.getByTestId('PR-CPR-measure-input-unit-0').click();
  await page.getByText("piece").click();

  await page.getByTestId('PR-CPR-unit-input-0').click();
  await page.getByTestId('PR-CPR-unit-input-0').fill('200')
  await page.getByTestId('PR-CPR-add-button-0').click();

  await page.getByRole("button", { name: "Select Warehouse" }).click();
  await page.locator("li.px-3.py-2").first().click();
  await expect(
    page.getByRole("button", { name: "Baap Electronics Warehouse" }),
  ).toBeVisible();

  // await page.getByRole("button", { name: "Immediate Payment" }).click();
  // await page
  //   .getByRole("listitem")
  //   .filter({ hasText: "Immediate Payment" })
  //   .click();
  // await expect(
  //   page.getByRole("button", { name: "Select Priority" }),
  // ).toBeVisible();

  await page.getByTestId("PR-CPR-save-button").click();

  //Create Purchase Order
  await page
    .locator('[data-testid^="PR-PRP-create-order-button-"]')
    .nth(0)
    .click();
  await page.getByRole("button", { name: "Select Payment Term" }).click();
  await page.getByText("Cash").click();
  await expect(page.getByRole("button", { name: "Cash" })).toBeVisible();

  await page.getByTestId("PO-CAO-save-button").click();
  await expect(page.getByText("Purchase Order Created")).toBeVisible();

  await page.getByTestId("submenu-item-purchase-orders").click();
  await page.locator('[data-testid^="PO-ORP-edit-button-"]').nth(0).click();
  await page.getByRole("button", { name: "Approved" }).click();
  await page
    .locator("div[data-testid='PO-CAO-sidebar'] li:nth-child(3)")
    .click();
  await page.getByRole("button", { name: "Update" }).click();
  await expect(page.getByText("Purchase order updated")).toBeVisible();

  //Raw Material Creation
  await page.getByTestId("menu-item-inventory-management").click();
  await page.getByTestId("submenu-item-inventory").click();
  // await page.getByText('Raw Material').click();
  await page.getByTestId("EC-EI-btn-add").click();

  await page.getByTestId("EC-AIF-ip-job-search").click();
  await page.locator("div.font-medium").first().click();
  await page.getByTestId("EC-AIF-ip-purchase-order-search").click();
  await page.locator("div.font-medium").first().click();
  await page.getByPlaceholder("Enter quantity").fill("19");
  await page.getByTestId("EC-AIF-ip-warehouse-search").click();
  await page.locator("div.font-medium.flex.items-center.gap-2").first().click();
  await page.getByPlaceholder("Select Expiry Date", { exact: true }).click();
  await page.getByRole("button", { name: "31" }).click();
  await page.getByTestId("EC-AIF-btn-save").click();
  await expect(page.getByText("Inventory Created")).toBeVisible();
});
