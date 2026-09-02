import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
import { faker, fakerEN_IN } from "@faker-js/faker";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  //create diff one
  const diff = "-" + fakerEN_IN.string.alphanumeric(5).toUpperCase();

  const productCategory = fakerEN_IN.commerce.department() + diff;
  const productSubCategory = fakerEN_IN.commerce.department() + diff;
  const productTag1 = fakerEN_IN.commerce.productAdjective() + diff;
  const productTag2 = fakerEN_IN.commerce.productAdjective() + diff;

  console.log({
    productCategory,
    productSubCategory,
    productTag1,
    productTag2,
  });

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  await page.getByTestId("menu-item-sales-&-distribution").click();
  await page
    .getByTestId("submenu-container-sales-&-distribution")
    .getByTestId("submenu-item-configuration")
    .click();
  ``;

  // PRODUCT CATEGORY
  await page.getByTestId("EC-CFG-btn-tab-category").click();
  await page.getByTestId("EC-CAT-btn-add").click();
  await page.getByTestId("EC-CAT-add-input-name").fill(productCategory);
  await page.getByTestId("EC-CAT-add-search-input-tag").click();
  await page
    .locator('[data-testid^="EC-CAT-add-dropdown-tag-item-"]')
    .first()
    .click();
  await page
    .getByTestId("EC-CAT-add-input-description")
    .fill("usefull in daily life");
  await page.getByTestId("EC-CAT-add-btn-save").click();

  // PRODUCT SUBCATEGORY
  await page.getByTestId("EC-CFG-btn-tab-subcategory").click();
  await page.getByTestId("EC-SUB-btn-add").click();
  await page.getByTestId("EC-SUB-add-input-name").fill(productSubCategory);
  await page.getByTestId("EC-SUB-add-search-input-category").click();
  await page
    .locator('[data-testid^="EC-SUB-add-dropdown-category-item-"]')
    .nth(0)
    .click();
  await page
    .locator(
      '//*[@id="root"]/div/div/div[3]/div/div[2]/div/div/div/div[6]/div[2]/div/div[4]/div[2]/div/input',
    )
    .click();
  await page
    .locator('[data-testid^="EC-SUB-add-dropdown-tag-item-"]')
    .nth(1)
    .click();
  await page
    .getByTestId("custom-rich-text-editor")
    .fill("usful for todys generation");
  await page.getByTestId("EC-SUB-add-btn-save").click();

  // PRODUCT TAGS
  await page.getByTestId("EC-CFG-btn-tab-tags").click();
  await page.getByTestId("EC-TAG-btn-add").click();
  await page.getByTestId("EC-TAG-a-ip-name").fill(productTag1);
  await page.getByTestId("EC-TAG-a-btn-add-list").click();
  await page.getByTestId("EC-TAG-a-ip-name").fill(productTag2);
  await page.getByTestId("EC-TAG-a-ip-name").press("Enter");
  await page.getByTestId("EC-TAG-a-btn-save").click();

  // // BUSINESS TYPE
  // await page.getByTestId("EC-CFG-btn-tab-businesstype").click();
  // await page.getByTestId("EC-BTYPE-btn-add").click();
  // await page.getByTestId("EC-BTYPE-a-ip-name").fill(businessType);
  // await page
  //   .getByTestId("custom-rich-text-editor")
  //   .fill("Auto generated business type");
  // await page.getByTestId("EC-BTYPE-a-btn-save").click();

  // // BUSINESS CATEGORY
  // await page.getByTestId("EC-CFG-btn-tab-productcategory").click();
  // await page.getByTestId("EC-PC-btn-add").click();
  // await page
  //   .getByRole("textbox", { name: "Enter category name" })
  //   .fill(businessCategory);
  // await page.getByRole("textbox", { name: "Search business type" }).click()
  // await page.getByText(businessType).click();
  // await page
  //   .locator(
  //     '//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[2]/div/div[6]/div[3]/div/button[1]',
  //   )
  //   .click();

  // // BUSINESS SUBCATEGORY
  // await page.getByTestId("EC-CFG-btn-tab-productsubcategory").click();
  // await page.getByTestId("EC-PS-btn-add").click();
  // await page.getByTestId("EC-PS-add-input-name").fill(businessSubCategory);
  // await page.getByTestId("EC-PS-add-search-input-category").click();
  // await page.getByText(businessCategory).click();
  // await page
  //   .getByTestId("EC-PS-add-input-description")
  //   .fill("Auto generated business subcategory");
  // await page.getByTestId("EC-PS-add-btn-save").click();

  // // BUSINESS TAGS
  // await page.getByTestId("EC-CFG-btn-tab-producttag").click();
  // await page.getByTestId("EC-PT-btn-add").click();
  // await page.getByTestId("EC-PT-a-ip-name").fill(businessTag1);
  // await page.getByTestId("EC-PT-a-btn-add-list").click();
  // await page.getByTestId("EC-PT-a-ip-name").fill(businessTag2);
  // await page.getByTestId("EC-PT-a-ip-name").press("Enter");
  // await page.getByTestId("EC-PT-a-btn-save").click();

  // // SERVICE CATEGORY
  // await page.getByTestId("EC-CFG-btn-tab-servicecategory").click();
  // await page.getByRole("button", { name: "Add Service Category" }).click();
  // await page
  //   .getByRole("textbox", { name: "Enter category name" })
  //   .fill(serviceCategory);
  // await page
  //   .getByTestId("custom-rich-text-editor")
  //   .fill("Auto generated service category");
  // await page.getByRole("button", { name: "Save" }).click();

  // // SERVICE SUBCATEGORY
  // await page.getByTestId("EC-CFG-btn-tab-servicesubcategory").click();
  // await page.getByRole("button", { name: "Add Service Subcategory" }).click();
  // await page
  //   .getByRole("textbox", { name: "Enter sub category name" })
  //   .fill(serviceSubCategory);
  // await page.getByRole("textbox", { name: "Search categories" }).click();
  // await page.getByText(serviceCategory).click();
  // await page
  //   .getByTestId("custom-rich-text-editor")
  //   .fill("Auto generated service subcategory");
  // await page.getByRole("button", { name: "Save" }).click();

  // NUMBERS CONFIGURATION - QUOTATION
  //   await page.getByTestId("EC-CFG-btn-tab-numbersconfiguration").click();
  //   await page.getByRole("button", { name: "Add Number Configuration" }).click();
  //   await page.locator(".react-select__input-container").first().click();
  //   await page.getByRole("option", { name: "Quotation" }).click();
  //   await page.getByRole("textbox", { name: "e.g. QUO" }).fill(tag1);
  //   await page.getByRole("textbox", { name: "e.g. DRAFT" }).fill(tag2);
  //   await page.getByRole("button", { name: "Save" }).click();

  //   // INVOICE
  //   await page.getByRole("button", { name: "Add Number Configuration" }).click();
  //   await page.locator(".react-select__input-container").first().click();
  //   await page.getByRole("option", { name: "Invoice" }).click();
  //   await page.getByRole("textbox", { name: "e.g. QUO" }).fill(tag1);
  //   await page.getByRole("textbox", { name: "e.g. DRAFT" }).fill(tag2);
  //   await page.getByRole("button", { name: "Save" }).click();

  //   // ORDER
  //   await page.getByRole("button", { name: "Add Number Configuration" }).click();
  //   await page.locator(".react-select__input-container").first().click();
  //   await page.getByRole("option", { name: "Order" }).click();
  //   await page.getByRole("textbox", { name: "e.g. QUO" }).fill(tag1);
  //   await page.getByRole("textbox", { name: "e.g. DRAFT" }).fill(tag2);
  //   await page.getByRole("button", { name: "Save" }).click();
});
