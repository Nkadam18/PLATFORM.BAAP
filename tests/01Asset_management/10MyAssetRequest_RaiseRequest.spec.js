import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  //raise asset request in my asset request
  
  await page.getByTestId("menu-item-asset-management").click();
  await page.getByTestId("submenu-item-my-asset-requests").click();
  await page.getByTestId("AM-MAR-raise-request-button").click();
  await page.getByTestId("AM-MAR-RR-AAR-user-input").click();
  await page.getByText("Nagesh Sureshrao Kadam").nth(1).click();
  await page.getByTestId("AM-MAR-RR-AAR-asset-type-input").click();
  await page.getByText("Bigs-screen - Samsung").click();
  await page.getByTestId("AM-MAR-RR-AAR-priority-dropdown-button").click();
  await page.getByText("High", { exact: true }).click();
  await page.getByTestId("AM-MAR-RR-AAR-save-request-button").click();
});
