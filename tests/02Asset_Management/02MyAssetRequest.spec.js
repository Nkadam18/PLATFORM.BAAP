import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
  slowMo: 600,
});

test("test", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  //raise request in my asset request

  await page.getByTestId("menu-item-asset-management").click();
  await page.waitForTimeout(800);
  await page.getByTestId("submenu-item-my-asset-requests").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-MAR-raise-request-button").click();
  await page.waitForTimeout(800);
  await page.locator(".react-select__input-container").first().click();
  await page.getByRole("option", { name: "Nagesh Kadam" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select asset$/ })
    .nth(3)
    .click();

  //first click
  await page.getByRole("option").first().click();
  await page.waitForTimeout(800);

  await page.getByTestId("AM-MAR-RR-AAR-priority-dropdown-button").click();
  await page.getByText("Urgent", { exact: true }).click();
  await page.getByTestId("AM-MAR-RR-AAR-save-request-button").click();

  await page.waitForTimeout(800);
  await page.getByTestId("AM-MAR-search-input").click();
  await page.getByTestId("AM-MAR-search-input").fill("HDMI");
  await page.waitForTimeout(800);
  await page.getByTestId("AM-MAR-clear-search-button").click();
  await page.getByTestId("AM-MAR-edit-button-0").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-MAR-RR-AAR-priority-dropdown-button").click();
  await page.getByRole("listitem").filter({ hasText: "High" }).click();
  await page.getByTestId("AM-MAR-RR-AAR-save-request-button").click();
  await page.waitForTimeout(800);

  await page.waitForLoadState("networkidle");
});
