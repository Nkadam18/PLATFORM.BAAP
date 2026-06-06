import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });
  await page.waitForTimeout(800)
  await page.getByTestId("logout-button").click();
  await page.waitForTimeout(800);
  await page.getByRole("button", { name: "Yes" }).click();
  await page.waitForTimeout(800);
  await page.getByTestId("SI-username-input-password").click();
  await page.waitForTimeout(800);
  await page.getByTestId("SI-username-input-password").fill("7058735643+1");
  await page.waitForTimeout(800);
  await page.getByTestId("SI-password-input-password").click();
  await page.waitForTimeout(800);
  await page.getByTestId("SI-password-input-password").fill("Nagesh@7058");

  await page.waitForTimeout(800);
  await page.getByTestId("SI-submit-button-show").click();
  await page.waitForTimeout(800);
//   await page.goto("https://qa.d3kq8oy4csoq2n.amplifyapp.com/dashboard");
  await page.waitForTimeout(800);
  //
  await page.getByTestId("menu-item-asset-management").click();
  await page.waitForTimeout(800);
  await page.getByTestId("submenu-item-my-asset-requests").click();
  await page.waitForTimeout(800);
  ////

  await page.getByTestId("AM-MAR-raise-request-button").click();
  await page.waitForTimeout(800);

  await page.locator('div').filter({ hasText: /^Search user$/ }).nth(3).click();
  await page.getByRole('option', { name: 'N kadam' }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Select asset$/ })
    .nth(3)
    .click();

  //first click
  await page.getByRole("option").first().click();
  await page.waitForTimeout(800);

  await page.getByTestId("AM-MAR-RR-AAR-priority-dropdown-button").click();
  await page.waitForTimeout(800);
  await page.getByText("Urgent", { exact: true }).click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-MAR-RR-AAR-save-request-button").click();

  // await page.waitForTimeout(800);
  // await page.getByTestId("AM-MAR-search-input").click();
  // await page.getByTestId("AM-MAR-search-input").fill("HDMI");
  // await page.waitForTimeout(800);
  // await page.getByTestId("AM-MAR-clear-search-button").click();
  // await page.getByTestId("AM-MAR-edit-button-0").click();
  // await page.waitForTimeout(800);
  // await page.getByTestId("AM-MAR-RR-AAR-priority-dropdown-button").click();
  // await page.getByRole("listitem").filter({ hasText: "High" }).click();
  // await page.getByTestId("AM-MAR-RR-AAR-save-request-button").click();
  // await page.waitForTimeout(800);

  await page.waitForLoadState("networkidle");
});
