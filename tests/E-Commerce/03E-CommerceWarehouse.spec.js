import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  await page.goto(DASHBOARD);
  test.setTimeout(120000);

  // unique data every run
  const id = Date.now();

  const warehouseName = `Kadam Electronics Warehouse ${id}`;
  const warehouseCode = `WH-${id.toString().slice(-6)}`;

  await page.getByTestId("menu-item-e-commerce").click();
  await page.waitForTimeout(800);

  await page.getByTestId("submenu-item-warehouse").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-WH-btn-add").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-ip-name").fill(warehouseName);
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-ip-code").fill(warehouseCode);
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-ip-address").fill("Parabhani Maharashtra");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-ip-city").fill("Parabhani");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-ip-state").fill("Maharashtra");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-ip-country").fill("India");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-ip-pincode").fill("431401");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-ip-latitude").fill("29");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-ip-longitude").fill("-29");
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-ip-manager-search").click();
  await page.waitForTimeout(800);

  await page.locator("text=Nagesh Kadam").last().click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-tg-status").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-tg-status").click();
  await page.waitForTimeout(800);

  await page.getByTestId("EC-AWH-btn-submit").click();
  await page.waitForTimeout(800);

  await page.locator("span.block.truncate.w-full").first().click();
  await page.waitForTimeout(800);

  await page.getByRole("button", { name: "Back" }).click();
  await page.waitForTimeout(800);
});
