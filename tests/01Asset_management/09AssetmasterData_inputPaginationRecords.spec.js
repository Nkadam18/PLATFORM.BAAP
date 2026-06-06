import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  ////All records ,pagination and input checked add asset data

  await page.getByTestId("menu-item-asset-management").click();
  await page.getByTestId("submenu-item-asset-master-data").click();
  await page.getByTestId("AM-AMD-M-asset-data-tab").click();
  await page.getByText("Charger - HP").click();
  await page.getByText("Laptop - HP").click();
  await page.getByText("Charger - Dell").click();
  await page.getByText("Laptop - MAC").click();
  await page.getByText("Chair - White").click();
  await page.getByText("Chair - Green").click();
  await page.getByText("Charger - MAC").click();
  await page.getByText("Laptop - Dell").click();
  await page.getByText("Remote - VU").click();
  await page.getByText("Chair - Future").click();
  await page.getByText("Mouse - Lapcare").click();
  await page.getByText("Total Assets").click();
  await page.locator(".lucide.lucide-rotate-ccw").click();
  await page.getByTestId("AM-AMD-AD-search-assets-input").click();
  await page.getByTestId("AM-AMD-AD-search-assets-input").fill("Mouse");
  await page.getByTestId("AM-AMD-AD-asset-name-0").click();
  await page.getByTestId("AM-AMD-AD-ADT-tab-history").click();
  await page.getByTestId("AM-AMD-AD-ADT-back-button").click();
  await page.getByTestId("AM-AMD-AD-pagination-items-per-page-trigger").click();
  await page.getByTestId("AM-AMD-AD-pagination-items-per-page-25").click();
  await page.getByTestId("AM-AMD-AD-pagination-page-1").click();
  await page.getByTestId("AM-AMD-AD-pagination-items-per-page-trigger").click();
  await page.getByTestId("AM-AMD-AD-pagination-items-per-page-10").click();
  await page.getByTestId("AM-AMD-AD-pagination-page-2").click();
  await page.getByTestId("AM-AMD-AD-pagination-page-3").click();
});
