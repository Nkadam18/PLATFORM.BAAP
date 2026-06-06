import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  await page.goto(DASHBOARD , { waitUntil: "networkidle" });

  //Search input working or not ?
  await page.getByTestId("menu-item-asset-management").click();
  await page.getByTestId("submenu-item-asset-master-data").click();
  await page.getByTestId("AM-AMD-AT-search-asset-types-input").click();
  await page.getByTestId("AM-AMD-AT-search-asset-types-input").fill("");
  await page.getByTestId("AM-AMD-AT-search-asset-types-input").click();
  await page.getByTestId("AM-AMD-AT-search-asset-types-input").click();
  await page.getByTestId("AM-AMD-AT-search-asset-types-input").fill("Charger");
});
