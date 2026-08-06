import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  // Random service name every run
  const id = Date.now().toString().slice(-5);
  const serviceName = `Home Service ${id}`;
  const randomClick = Math.floor(Math.random() * 5);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  await page.getByTestId("menu-item-commercial-management").click();
  await page.getByTestId("submenu-item-services").click();

  await page.getByRole("button", { name: "Add Service" }).click();
  await page
    .locator('input[type="file"]')
    .setInputFiles("C:\\Users\\NK\\Downloads\\Vyapo 1.jpg");
  await page
    .getByRole("textbox", { name: "Enter service name" })
    .fill(serviceName);
  await page.getByText("Select service type", { exact: true }).click();
  await page
    .locator("div.absolute.w-full.mt-1 div.p-2")
    .nth(randomClick)
    .click();
  await page.getByRole("textbox", { name: "Enter price" }).fill("5000");

  // Business dropdown first option
  await page.getByRole("textbox", { name: "Search business" }).click();
  await page.locator("div.absolute.w-full.mt-1 div.p-2").first().click();

  // Category dropdown first option
  await page.getByRole("textbox", { name: "Search categories" }).click();
  await expect(
    page.locator("div.absolute.w-full.mt-1 div.p-2").first(),
  ).toBeVisible();
  await page.locator("div.absolute.w-full.mt-1 div.p-2").first().click();

  // Subcategory dropdown first option
  await page.getByRole("textbox", { name: "Search subcategories" }).click();
  await expect(
    page.locator("div.absolute.w-full.mt-1 div.p-2").first(),
  ).toBeVisible();
  await page.locator("div.absolute.w-full.mt-1 div.p-2").first().click();

  await page
    .getByTestId("custom-rich-text-editor")
    .fill("Product is delivered at your home");

  //document fields

  //Pan card document
  await page.getByRole("button", { name: "Add Document" }).click();
  await page.getByPlaceholder("e.g., PAN Card").nth(0).fill("PAN Card");
  await page
    .getByRole("textbox", { name: "e.g., Upload PAN Card copy" })
    .nth(0)
    .fill("Upload PAN Card copy");
  await page.getByText("Required", { exact: true }).nth(0).click();
  await page.getByText("Select formats", { exact: true }).nth(0).click();
  await page.getByText("pdf, jpg, jpeg, png").nth(0).click();
  await page.getByPlaceholder("5").nth(0).fill("5");

  //Aadhar card document
  await page.getByRole("button", { name: "Add Another Document" }).click();
  await page.getByPlaceholder("e.g., PAN Card").nth(1).fill("Aadhar Card");
  await page
    .getByRole("textbox", { name: "e.g., Upload PAN Card copy" })
    .nth(1)
    .fill("Upload Aadhar Card copy");
  await page.getByText("Required", { exact: true }).nth(1).click();
  await page
    .locator(
      "//div[@class='flex items-center justify-between w-full p-2 bg-transparent border border-[var(--border-color)] rounded-md cursor-pointer transition-colors hover:border-[var(--hover-color)]']//*[name()='svg']",
    )
    .nth(1)
    .click();
  await page.getByText("pdf, jpg, jpeg, png").last().click();
  await page.getByPlaceholder("5").nth(1).fill("5");

  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("Service created")).toBeVisible();
});
