import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  // Random service name every run
  const id = Date.now();
  const serviceName = `Home Service ${id}`;

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });
  

  await page.getByTestId("menu-item-e-commerce").click();
  

  await page.getByTestId("submenu-item-services").click();
  

  await page.getByRole("button", { name: "Add Service" }).click();
  

  await page
    .getByRole("textbox", { name: "Enter service name" })
    .fill(serviceName);
  

  await page.getByRole("textbox", { name: "Enter price" }).fill("5000");
  

  // Business dropdown first option
  await page.getByRole("textbox", { name: "Search business" }).click();
  

  await page.locator("div.absolute.w-full.mt-1 div.p-2").first().click();
  

  // Category dropdown first option
  await page.getByRole("textbox", { name: "Search categories" }).click();
  

  await page.locator("div.absolute.w-full.mt-1 div.p-2").first().click();
  

  // Subcategory dropdown first option
  await page.getByRole("textbox", { name: "Search subcategories" }).click();
  

  await page.locator("div.absolute.w-full.mt-1 div.p-2").first().click();
  

  await page
    .getByTestId("custom-rich-text-editor")
    .fill("Product is delivered at your home");
  

  await page.getByRole("button", { name: "Save" }).click();
  
});
