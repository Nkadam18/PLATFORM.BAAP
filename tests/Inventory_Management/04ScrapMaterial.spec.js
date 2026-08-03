import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("Scrap Material Creation", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  await page.getByTestId("menu-item-quality-control").click();

  //   //QC Configuration creation
  //   await page.getByTestId("submenu-item-qc-configuration").click();
  //   await page.getByRole("button", { name: "Add Template" }).click();
  //   await page
  //     .getByRole("textbox", { name: "Raw Material Check - Thermofiber Sheet" })
  //     .fill("Scrap Material");
  //   await page
  //     .locator("div.react-select__value-container.css-hlgwow")
  //     .locator("div")
  //     .nth(1)
  //     .click();
  //   await page.locator(".react-select__option").first().click();
  //   await page
  //     .locator(
  //       "//div[@class='fixed top-0 right-0 h-full w-[90vw] md:w-[30vw] bg-[var(--sidebar-background-color)] shadow-lg z-[70] flex flex-col text-[var(--text-color)] transform transition-transform duration-300 translate-x-0 pointer-events-auto']//div[3]//div[1]//div[1]//div[2]//div[1]//*[name()='svg']",
  //     )
  //     .click();
  //   await page.locator(".react-select__option").first().click();
  //   await page.getByRole("button", { name: "Create Checklist" }).click();
  //   await page.getByRole("textbox", { name: "Sheet Thickness" }).click();
  //   await page.getByRole("textbox", { name: "Sheet Thickness" }).fill("Weight");
  //   await page
  //     .locator(
  //       "//div[@id='root']//div[@class='space-y-4 pt-4 border-t border-[var(--border-color)]']//div[2]//div[1]//div[1]//div[1]//div[2]",
  //     )
  //     .click();
  //   await page.locator(".react-select__option").first().click();
  //   await page
  //     .locator(
  //       "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > form:nth-child(1) > div:nth-child(6) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)",
  //     )
  //     .click();
  //   await page.locator(".react-select__option").first().click();
  //   await page.getByPlaceholder("e.g. 20").fill("12");
  //   await page.getByPlaceholder("e.g. 80").fill("15");
  //   await page.getByRole("textbox", { name: "mm" }).fill("kg");
  //   await page.getByRole("button", { name: "Add Parameter" }).click();

  //   //

  //   await page.getByRole("textbox", { name: "Sheet Thickness" }).click();
  //   await page.getByRole("textbox", { name: "Sheet Thickness" }).fill("Quality");
  //   await page
  //     .locator(
  //       "//div[@id='root']//div[@class='space-y-4 pt-4 border-t border-[var(--border-color)]']//div[2]//div[1]//div[1]//div[1]//div[2]",
  //     )
  //     .click();
  //   await page.locator(".react-select__option").nth(1).click();
  //   await page.getByPlaceholder("Smooth").fill("best");
  //   await page.getByRole("button", { name: "Add Parameter" }).click();

  //   await page.getByRole("button", { name: "Create Template" }).click();
  //   await expect(page.getByText("QC Template created")).toBeVisible();

  //QC inspection creation
  await page.getByTestId("submenu-item-qc-inspection").click();
  await page.getByRole("button", { name: "New Inspection" }).click();
  await page.locator(".react-select__input-container").first().click();
  await page.locator("#react-select-2-input").fill("Nagesh");
  await page.locator(".react-select__option").first().click();
  await page
    .locator(
      "div:nth-child(2) > div > .css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container",
    )
    .first()
    .click();
  await page.locator(".react-select__option").first().click();
  await page
    .locator("div")
    .filter({ hasText: /^Select party type$/ })
    .nth(2)
    .click();
  await page.getByRole("option", { name: "Inhouse" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select QC Type$/ })
    .nth(2)
    .click();
  await page.getByRole("option", { name: "Raw Inward" }).click();
  await page
    .locator(
      "div:nth-child(3) > div:nth-child(2) > .css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container",
    )
    .click();
  await page.locator(".react-select__option").first().click();
  await page
    .locator("div")
    .filter({ hasText: /^Select PO No$/ })
    .nth(2)
    .click();
  await page.locator(".react-select__option").first().click();
  await page
    .locator(
      "div:nth-child(4) > div:nth-child(2) > .css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container",
    )
    .click();
  await page.locator(".react-select__option").first().click();
  await page.getByRole("button", { name: "Next: Fill Checklist" }).click();
  await page.getByPlaceholder("Enter actual value").first().click();
  await page.getByPlaceholder("Enter actual value").first().fill("17");
  await page.getByRole('button', { name: 'Submit Inspection' }).click();
//   await expect(page.getByText("Inspection Created")).toBeVisible();
});
