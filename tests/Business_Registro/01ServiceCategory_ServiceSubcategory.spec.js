import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  // reusable random generator
  const id = Date.now().toString().slice(-4);

  const serviceCategory = `Home Services ${id}`;
  const serviceSubCategory = `Electrical ${id}`;

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  await page.getByTestId("menu-item-commercial-management").click();

  await page.getByTestId("submenu-item-configuration").nth(2).click();

  // SERVICE CATEGORY
  await page.getByTestId("EC-CFG-btn-tab-servicecategory").click();
  await page.getByRole("button", { name: "Add Service Category" }).click();
  await page
    .locator("#serviceCategoryImage")
    .setInputFiles("C:\\Users\\NK\\Downloads\\Vyapo 1.jpg");
  await page
    .getByRole("textbox", { name: "Enter category name" })
    .fill(serviceCategory);
  await page
    .getByTestId("custom-rich-text-editor")
    .fill("Auto generated service category");
  await page.getByRole("button", { name: "Save" }).nth(1).click();
  await expect(page.getByText("Service category created")).toBeVisible();

  // SERVICE SUBCATEGORY
  await page.getByTestId("EC-CFG-btn-tab-servicesubcategory").click();
  await page.getByRole("button", { name: "Add Service Subcategory" }).click();
  await page
    .locator("#serviceSubCategoryImage")
    .setInputFiles("C:\\Users\\NK\\Downloads\\Vyapo 1.jpg");
  await page
    .getByRole("textbox", { name: "Enter sub category name" })
    .fill(serviceSubCategory);
  await page.getByRole("textbox", { name: "Search categories" }).click();
  await page.getByText(serviceCategory).click();
  await page
    .getByTestId("custom-rich-text-editor")
    .fill("Auto generated service subcategory");
  await page.getByRole("button", { name: "Save" }).nth(1).click();
  await expect(page.getByText("Service sub-category created")).toBeVisible();
});
