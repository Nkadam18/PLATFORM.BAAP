import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  //update Addeddata in asset master data
  
  await page.getByTestId("menu-item-asset-management").click();
  await page.getByTestId("submenu-item-asset-master-data").click();
  await page.getByTestId("AM-AMD-AT-edit-button-0").click();
  await page.getByTestId("AM-AMD-AT-add-asset-code-input").click();
  await page.getByTestId("AM-AMD-AT-add-asset-code-input").fill("BGSS");
  await page.getByTestId("AM-AMD-AT-save-asset-type-button").click();
});
