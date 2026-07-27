// import { test, expect } from "@playwright/test";
// import { DASHBOARD } from "../login/login";

// test.use({
//     storageState:'auth/client.json'
// })

// test("test", async ({ page }) => {
//     test.setTimeout(120000);

//   await page.goto(DASHBOARD, { waitUntil: "networkidle" });

//   await page.getByTestId("menu-item-e-commerce").click();
//   await page
//     .getByTestId("submenu-container-e-commerce")
//     .getByTestId("submenu-item-configuration")
//     .click();
//   await page.getByTestId("EC-CFG-btn-tab-category").click();
//   await page.getByTestId("EC-CAT-btn-add").click();
//   await page.getByTestId("EC-CAT-add-input-name").click();
//   await page.getByTestId("EC-CAT-add-input-name").fill("Electronics");
//   await page.getByTestId("EC-CAT-add-search-input-tag").click();
//   await page.getByTestId("EC-CAT-add-input-description").click();
//   await page
//     .getByTestId("EC-CAT-add-input-description")
//     .fill("It is mostly use in home ");
//   await page.getByTestId("EC-CAT-add-btn-save").click();
//   await page.getByTestId("EC-CFG-btn-tab-subcategory").click();
//   await page.getByTestId("EC-SUB-btn-add").click();
//   await page.getByTestId("EC-SUB-add-input-name").click();
//   await page.getByTestId("EC-SUB-add-input-name").fill("Mobile Phones");
//   await page.getByTestId("EC-SUB-add-search-input-category").click();
//   await page
//     .getByTestId(
//       "EC-SUB-add-dropdown-category-item-6bcebeed-81b0-4463-b042-3e346f48fce0",
//     )
//     .click();
//   await page.getByTestId("EC-SUB-add-search-input-tag").click();
//   await page.getByTestId("custom-rich-text-editor").click();
//   await page
//     .getByTestId("custom-rich-text-editor")
//     .fill("Most imp thing in this generation");
//   await page.getByTestId("EC-SUB-add-btn-save").click();
//   await page.getByTestId("EC-CFG-btn-tab-tags").click();
//   await page.getByTestId("EC-TAG-btn-add").click();
//   await page.getByTestId("EC-TAG-a-ip-name").click();
//   await page.getByTestId("EC-TAG-a-ip-name").fill("Limited Edition");
//   await page.getByTestId("EC-TAG-a-btn-add-list").click();
//   await page.getByTestId("EC-TAG-a-ip-name").click();
//   await page.getByTestId("EC-TAG-a-ip-name").fill("Trending");
//   await page.getByTestId("EC-TAG-a-ip-name").press("Enter");
//   await page.getByTestId("EC-TAG-a-btn-save").click();
//   await page.getByTestId("EC-CFG-btn-tab-category").click();
//   await page
//     .getByTestId("EC-CAT-btn-edit-6bcebeed-81b0-4463-b042-3e346f48fce0")
//     .click();
//   await page.getByTestId("EC-CAT-add-search-input-tag").click();
//   await page.getByText("Limited edition").click();
//   await page.getByTestId("EC-CAT-add-btn-save").click();
//   await page.getByTestId("EC-CFG-btn-tab-subcategory").click();
//   await page
//     .getByTestId("EC-SUB-btn-edit-084d806a-7521-4eeb-b7f3-6efe53f8613e")
//     .click();
//   await page.getByTestId("EC-SUB-add-search-input-tag").click();
//   await page.getByText("Trending").click();
//   await page.getByTestId("EC-SUB-add-btn-save").click();
//   await page.getByTestId("EC-CFG-btn-tab-businesstype").click();
//   await page.getByTestId("EC-BTYPE-btn-add").click();
//   await page.getByTestId("EC-BTYPE-a-ip-name").click();
//   await page.getByTestId("EC-BTYPE-a-ip-name").fill("Wholesaler");
//   await page.getByTestId("custom-rich-text-editor").click();
//   await page
//     .getByTestId("custom-rich-text-editor")
//     .fill("Electronics whole saller");
//   await page.getByTestId("EC-BTYPE-a-btn-save").click();
//   await page.getByTestId("EC-BTYPE-a-btn-save").click();
//   await page.getByTestId("EC-CFG-btn-tab-productcategory").click();
//   await page.getByTestId("EC-PC-btn-add").click();
//   await page.getByRole("textbox", { name: "Enter category name" }).click();
//   await page
//     .getByRole("textbox", { name: "Enter category name" })
//     .fill("Electronics Store");
//   await page.getByRole("textbox", { name: "Search business type" }).click();
//   await page.getByText("Wholesaler").click();
//   await page.getByRole("button", { name: "Save" }).click();
//   await page.getByTestId("EC-CFG-btn-tab-productsubcategory").click();
//   await page.getByTestId("EC-PS-btn-add").click();
//   await page.getByTestId("EC-PS-add-input-name").click();
//   await page.getByTestId("EC-PS-add-input-name").fill("Mobile Shop");
//   await page.getByTestId("EC-PS-add-search-input-category").click();
//   await page
//     .getByTestId(
//       "EC-PS-add-dropdown-category-item-988abba4-2999-4a9c-bf30-e786f4c567db",
//     )
//     .click();
//   await page.getByTestId("EC-PS-add-input-description").click();
//   await page
//     .getByTestId("EC-PS-add-input-description")
//     .fill("You can buy mobile from here");
//   await page.getByTestId("EC-PS-add-btn-save").click();
//   await page.getByTestId("EC-CFG-btn-tab-producttag").click();
//   await page.getByTestId("EC-PT-btn-add").click();
//   await page.getByTestId("EC-PT-a-ip-name").click();
//   await page.getByTestId("EC-PT-a-ip-name").fill("Verified");
//   await page.getByTestId("EC-PT-a-btn-add-list").click();
//   await page.getByTestId("EC-PT-a-ip-name").click();
//   await page.getByTestId("EC-PT-a-ip-name").fill("Trusted Seller");
//   await page.getByTestId("EC-PT-a-btn-add-list").click();
//   await page.getByTestId("EC-PT-a-ip-name").click();
//   await page.getByTestId("EC-PT-a-ip-name").fill("Popular");
//   await page.getByTestId("EC-PT-a-ip-name").press("Enter");
//   await page.getByTestId("EC-PT-a-btn-save").click();
//   await page.getByTestId("EC-CFG-btn-tab-servicecategory").click();
//   await page.getByRole("button", { name: "Add Service Category" }).click();
//   await page.getByRole("textbox", { name: "Enter category name" }).click();
//   await page
//     .getByRole("textbox", { name: "Enter category name" })
//     .fill("Home Services");
//   await page.getByTestId("custom-rich-text-editor").click();
//   await page
//     .getByTestId("custom-rich-text-editor")
//     .fill("We are also providing home service");
//   await page.getByRole("button", { name: "Save" }).click();
//   await page.getByTestId("EC-CFG-btn-tab-servicesubcategory").click();
//   await page.getByRole("button", { name: "Add Service Subcategory" }).click();
//   await page.getByRole("textbox", { name: "Enter sub category name" }).click();
//   await page
//     .getByRole("textbox", { name: "Enter sub category name" })
//     .fill("Electrical");
//   await page.getByRole("textbox", { name: "Search categories" }).click();
//   await page.getByText("Home Services").click();
//   await page.getByTestId("custom-rich-text-editor").click();
//   await page
//     .getByTestId("custom-rich-text-editor")
//     .fill("We are repairing you electrical things at your home ");
//   await page.getByRole("button", { name: "Save" }).click();
//   await page.getByTestId("EC-CFG-btn-tab-numbersconfiguration").click();
//   await page.getByRole("button", { name: "Add Number Configuration" }).click();
//   await page.locator(".react-select__input-container").first().click();
//   await page
//     .locator("div")
//     .filter({ hasText: /^Select Document Type$/ })
//     .nth(1)
//     .click();
//   await page.getByRole("option", { name: "Quotation" }).click();
//   await page.getByRole("textbox", { name: "e.g. QUO" }).click();
//   await page.getByRole("textbox", { name: "e.g. QUO" }).fill("QTN");
//   await page.getByRole("textbox", { name: "e.g. DRAFT" }).dblclick();
//   await page.getByRole("textbox", { name: "e.g. DRAFT" }).fill("BAAp");
//   await page
//     .locator("div")
//     .filter({ hasText: /^Hyphen \( - \)$/ })
//     .nth(2)
//     .click();
//   await page.getByRole("option", { name: "Hyphen ( - )" }).click();
//   await page
//     .locator(
//       "div:nth-child(2) > .text-sm.css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container",
//     )
//     .click();
//   await page.getByRole("option", { name: "4 digits" }).click();
//   await page
//     .locator(".flex.items-center.justify-between.py-2.mt-2 > .relative > .w-9")
//     .click();
//   await page.getByRole("button", { name: "Monthly" }).click();
//   await page.getByRole("button", { name: "Save" }).click();
//   await page.getByRole("button", { name: "Add Number Configuration" }).click();
//   await page.locator(".react-select__input-container").first().click();
//   await page.getByRole("option", { name: "Invoice" }).click();
//   await page.getByRole("textbox", { name: "e.g. QUO" }).click();
//   await page.getByRole("textbox", { name: "e.g. QUO" }).fill("INV");
//   await page.getByRole("textbox", { name: "e.g. DRAFT" }).click();
//   await page.getByRole("textbox", { name: "e.g. DRAFT" }).fill("BAAp");
//   await page
//     .locator(
//       ".flex > .text-sm.css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container",
//     )
//     .first()
//     .click();
//   await page.getByRole("option", { name: "Hyphen ( - )" }).click();
//   await page
//     .locator(
//       "div:nth-child(2) > .text-sm.css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container",
//     )
//     .click();
//   await page.getByRole("option", { name: "4 digits" }).click();
//   await page
//     .locator(".flex.items-center.justify-between.py-2.mt-2 > .relative > .w-9")
//     .click();
//   await page.getByRole("button", { name: "Monthly" }).click();
//   await page.getByRole("button", { name: "Save" }).click();
//   await page.getByRole("button", { name: "Add Number Configuration" }).click();
//   await page.locator(".react-select__input-container").first().click();
//   await page.getByRole("option", { name: "Order" }).click();
//   await page.getByRole("textbox", { name: "e.g. QUO" }).click();
//   await page.getByRole("textbox", { name: "e.g. QUO" }).fill("ORd");
//   await page.getByRole("textbox", { name: "e.g. DRAFT" }).click();
//   await page.getByRole("textbox", { name: "e.g. DRAFT" }).fill("BAAp");
//   await page
//     .locator(
//       ".flex > .text-sm.css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container",
//     )
//     .first()
//     .click();
//   await page.getByRole("option", { name: "Hyphen ( - )" }).click();
//   await page
//     .locator(
//       "div:nth-child(2) > .text-sm.css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container",
//     )
//     .click();
//   await page.getByRole("option", { name: "4 digits" }).click();
//   await page
//     .locator(".flex.items-center.justify-between.py-2.mt-2 > .relative > .w-9")
//     .click();
//   await page.getByRole("button", { name: "Monthly" }).click();
//   await page.getByRole("button", { name: "Save" }).click();
// });

import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  // reusable random generator
  const id = Date.now();

  // only letters for tags (no number / no special chars)
  const randomWord = (prefix) =>
    `${prefix}${Math.random()
      .toString(36)
      .replace(/[^a-z]/g, "")
      .slice(0, 5)}`;

  const category = `Electronics ${id}`;
  const subCategory = `Mobile Phones ${id}`;
  const tag1 = randomWord("Limited");
  const tag2 = randomWord("Trending");

  const businessType = `Wholesaler ${id}`;
  const businessCategory = `Electronics Store ${id}`;
  const businessSubCategory = `Mobile Shop ${id}`;
  const businessTag1 = randomWord("Verified");
  const businessTag2 = randomWord("Trusted");

  const serviceCategory = `Home Services ${id}`;
  const serviceSubCategory = `Electrical ${id}`;

  const quotationPrefix = `QTN${id}`;
  const invoicePrefix = `INV${id}`;
  const orderPrefix = `ORD${id}`;

  const suffix = `FY${id}`;

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  await page.getByTestId("menu-item-sales-&-distribution").click();

  await page
    .getByTestId("submenu-container-sales-&-distribution")
    .getByTestId("submenu-item-configuration")
    .click();

  // PRODUCT CATEGORY
  await page.getByTestId("EC-CFG-btn-tab-category").click();

  await page.getByTestId("EC-CAT-btn-add").click();

  await page.getByTestId("EC-CAT-add-input-name").fill(category);

  await page.getByTestId("EC-CAT-add-search-input-tag").click();

  await page
    .locator('[data-testid^="EC-CAT-add-dropdown-tag-item-"]')
    .first()
    .click();

  await page
    .getByTestId("EC-CAT-add-input-description")
    .fill("Electronics use in daily life");

  await page.getByTestId("EC-CAT-add-btn-save").click();

  // PRODUCT SUBCATEGORY
  await page.getByTestId("EC-CFG-btn-tab-subcategory").click();

  await page.getByTestId("EC-SUB-btn-add").click();

  await page.getByTestId("EC-SUB-add-input-name").fill(subCategory);

  await page.getByTestId("EC-SUB-add-search-input-category").click();

  await page.getByText(category).click();

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

  await page.getByTestId("EC-TAG-a-ip-name").fill(tag1);

  await page.getByTestId("EC-TAG-a-btn-add-list").click();

  await page.getByTestId("EC-TAG-a-ip-name").fill(tag2);

  await page.getByTestId("EC-TAG-a-ip-name").press("Enter");

  await page.getByTestId("EC-TAG-a-btn-save").click();

  // BUSINESS TYPE
  await page.getByTestId("EC-CFG-btn-tab-businesstype").click();

  await page.getByTestId("EC-BTYPE-btn-add").click();

  await page.getByTestId("EC-BTYPE-a-ip-name").fill(businessType);

  await page
    .getByTestId("custom-rich-text-editor")
    .fill("Auto generated business type");

  await page.getByTestId("EC-BTYPE-a-btn-save").click();

  // BUSINESS CATEGORY
  await page.getByTestId("EC-CFG-btn-tab-productcategory").click();

  await page.getByTestId("EC-PC-btn-add").click();

  await page
    .getByRole("textbox", { name: "Enter category name" })
    .fill(businessCategory);

  await page.getByRole("textbox", { name: "Search business type" }).click();

  await page.getByText(businessType).click();

  await page
    .locator(
      '//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[2]/div/div[6]/div[3]/div/button[1]',
    )
    .click();

  // BUSINESS SUBCATEGORY
  await page.getByTestId("EC-CFG-btn-tab-productsubcategory").click();

  await page.getByTestId("EC-PS-btn-add").click();

  await page.getByTestId("EC-PS-add-input-name").fill(businessSubCategory);

  await page.getByTestId("EC-PS-add-search-input-category").click();

  await page.getByText(businessCategory).click();

  await page
    .getByTestId("EC-PS-add-input-description")
    .fill("Auto generated business subcategory");

  await page.getByTestId("EC-PS-add-btn-save").click();

  // BUSINESS TAGS
  await page.getByTestId("EC-CFG-btn-tab-producttag").click();

  await page.getByTestId("EC-PT-btn-add").click();

  await page.getByTestId("EC-PT-a-ip-name").fill(businessTag1);

  await page.getByTestId("EC-PT-a-btn-add-list").click();

  await page.getByTestId("EC-PT-a-ip-name").fill(businessTag2);

  await page.getByTestId("EC-PT-a-ip-name").press("Enter");

  await page.getByTestId("EC-PT-a-btn-save").click();

  // // SERVICE CATEGORY
  // await page.getByTestId("EC-CFG-btn-tab-servicecategory").click();
  //
  // await page.getByRole("button", { name: "Add Service Category" }).click();
  //
  // await page
  //   .getByRole("textbox", { name: "Enter category name" })
  //   .fill(serviceCategory);
  //
  // await page
  //   .getByTestId("custom-rich-text-editor")
  //   .fill("Auto generated service category");
  //
  // await page.getByRole("button", { name: "Save" }).click();
  //

  // // SERVICE SUBCATEGORY
  // await page.getByTestId("EC-CFG-btn-tab-servicesubcategory").click();
  //
  // await page.getByRole("button", { name: "Add Service Subcategory" }).click();
  //
  // await page
  //   .getByRole("textbox", { name: "Enter sub category name" })
  //   .fill(serviceSubCategory);
  //
  // await page.getByRole("textbox", { name: "Search categories" }).click();
  //
  // await page.getByText(serviceCategory).click();
  //
  // await page
  //   .getByTestId("custom-rich-text-editor")
  //   .fill("Auto generated service subcategory");
  //
  // await page.getByRole("button", { name: "Save" }).click();
  //
  /////////

  // NUMBERS CONFIGURATION - QUOTATION
  //   await page.getByTestId("EC-CFG-btn-tab-numbersconfiguration").click();
  //
  //   await page.getByRole("button", { name: "Add Number Configuration" }).click();
  //

  //   await page.locator(".react-select__input-container").first().click();
  //
  //   await page.getByRole("option", { name: "Quotation" }).click();
  //

  //   await page.getByRole("textbox", { name: "e.g. QUO" }).fill(tag1);
  //
  //   await page.getByRole("textbox", { name: "e.g. DRAFT" }).fill(tag2);
  //

  //   await page.getByRole("button", { name: "Save" }).click();
  //

  //   // INVOICE
  //   await page.getByRole("button", { name: "Add Number Configuration" }).click();
  //

  //   await page.locator(".react-select__input-container").first().click();
  //
  //   await page.getByRole("option", { name: "Invoice" }).click();
  //

  //   await page.getByRole("textbox", { name: "e.g. QUO" }).fill(tag1);
  //
  //   await page.getByRole("textbox", { name: "e.g. DRAFT" }).fill(tag2);
  //

  //   await page.getByRole("button", { name: "Save" }).click();
  //

  //   // ORDER
  //   await page.getByRole("button", { name: "Add Number Configuration" }).click();
  //

  //   await page.locator(".react-select__input-container").first().click();
  //
  //   await page.getByRole("option", { name: "Order" }).click();
  //

  //   await page.getByRole("textbox", { name: "e.g. QUO" }).fill(tag1);
  //
  //   await page.getByRole("textbox", { name: "e.g. DRAFT" }).fill(tag2);
  //

  //   await page.getByRole("button", { name: "Save" }).click();
  //
});
