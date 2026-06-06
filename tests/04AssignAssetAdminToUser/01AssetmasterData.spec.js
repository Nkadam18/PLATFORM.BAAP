// import { test, expect } from "@playwright/test";
// import { DASHBOARD } from "../login/login";
// test.use({
//     storageState:"auth/client.json"
// })

// test("test", async ({ page }) => {
//     test.setTimeout(120000);

//   await page.goto(DASHBOARD, { waitUntil: "networkidle" });

//   //Asset master data in asset management

//   await page.getByTestId("menu-item-asset-management").click();
//   await page.getByTestId("submenu-item-asset-master-data").click();
//   await page.getByTestId("AM-AMD-M-asset-type-tab").click();
//   await page.getByTestId("AM-AMD-AT-add-type-button").click();
//   await page.getByTestId("AM-AMD-AT-add-asset-type-input").click();
//   await page.getByTestId("AM-AMD-AT-add-asset-type-input").fill("HDMI-Cable");
//   await page.getByTestId("AM-AMD-AT-add-asset-code-input").click();
//   await page.getByTestId("AM-AMD-AT-add-asset-code-input").fill("HDMI");
//   await page.getByTestId("AM-AMD-AT-add-asset-subtype-input").click();
//   await page.getByTestId("AM-AMD-AT-add-asset-subtype-input").fill("Samsung");
//   await page.getByTestId("AM-AMD-AT-add-asset-description-input").click();
//   await page
//     .getByTestId("AM-AMD-AT-add-asset-description-input")
//     .fill("Useful for connect laptop to big-screen");
//   await page.getByTestId("AM-AMD-AT-save-asset-type-button").click();
//   await page.getByTestId("AM-AMD-AT-edit-button-0").click();
//   await page.getByTestId("AM-AMD-AT-add-asset-code-input").click();
//   await page.getByTestId("AM-AMD-AT-add-asset-code-input").fill("HDMIi");
//   await page.getByTestId("AM-AMD-AT-save-asset-type-button").click();
//   await page.getByTestId("AM-AMD-AT-search-asset-types-input").click();
//   await page.getByTestId("AM-AMD-AT-search-asset-types-input").fill("Hdmi");
//   await page.getByText("HDMI-Cable").click();
//   await page.locator(".lucide.lucide-x > path:nth-child(2)").click();
//   await page.getByTestId("AM-AMD-AT-pagination-page-2").click();
//   await page.getByTestId("AM-AMD-AT-pagination-items-per-page-trigger").click();
//   await page.getByTestId("AM-AMD-AT-pagination-items-per-page-25").click();
//   await page.getByTestId("AM-AMD-AT-pagination-items-per-page-trigger").click();
//   await page.getByTestId("AM-AMD-AT-pagination-items-per-page-10").click();
//   await page.getByTestId("AM-AMD-M-asset-data-tab").click();
//   await page.getByTestId("AM-AMD-AD-add-asset-button").click();
//   await page.getByTestId("AM-AMD-AM-asset-type-input").click();
//   await page.getByText("HDMI-Cable - Samsung").click();
//   await page.getByTestId("AM-AMD-AM-unique-identifier-input").click();
//   await page
//     .getByTestId("AM-AMD-AM-unique-identifier-input")
//     .fill("TBC01BGS001");
//   await page
//     .getByTestId("AM-AMD-AM-unique-identifier-input")
//     .press("ArrowLeft");
//   await page
//     .getByTestId("AM-AMD-AM-unique-identifier-input")
//     .press("ArrowLeft");
//   await page
//     .getByTestId("AM-AMD-AM-unique-identifier-input")
//     .press("ArrowLeft");
//   await page
//     .getByTestId("AM-AMD-AM-unique-identifier-input")
//     .fill("TBC01HDMI001");
//   await page.getByTestId("AM-AMD-AM-serial-number-input").click();
//   await page
//     .getByTestId("AM-AMD-AM-serial-number-input")
//     .fill("\t TBC01BGS001");
//   await page.getByTestId("AM-AMD-AM-serial-number-input").press("ArrowLeft");
//   await page.getByTestId("AM-AMD-AM-serial-number-input").press("ArrowLeft");
//   await page.getByTestId("AM-AMD-AM-serial-number-input").press("ArrowLeft");
//   await page.getByTestId("AM-AMD-AM-serial-number-input").fill("TBC01HDMI001");
//   await page.getByTestId("AM-AMD-AM-save-asset-button").click();
//   await page.getByTestId("AM-AMD-AD-search-assets-input").click();
//   await page.getByTestId("AM-AMD-AD-search-assets-input").fill("Hdmi");
//   await page.locator(".lucide.lucide-x > path:nth-child(2)").click();
//   await page.getByText("Charger - HP10").click();
//   await page.getByText("Laptop - HP10").click();
//   await page.getByText("Charger - Dell10").click();
//   await page.getByText("Remote - VU10").click();
//   await page.getByText("Chair - Future ...10").click();
//   await page.getByText("Charger - MAC10").click();
//   await page.getByText("Laptop - MAC10").click();
//   await page.getByText("Chair - White10").click();
//   await page.getByText("Chair - Green10").click();
//   await page.getByText("Laptop - Dell10").click();
//   await page.getByText("Mouse - Lapcare3").click();
//   await page.locator('//*[@id="root"]/div/div/div[3]/div/div[3]/div/div[1]/div/div[1]/div/div[13]/div/p').click();
//   await page.locator('//*[@id="root"]/div/div/div[3]/div/div[3]/div/div[1]/div/div[1]/div/div[1]/div/p').click();
//   await page.locator(".lucide.lucide-rotate-ccw").click();
// });

import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  const unique = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  const assetType = `HDMI-Cable-${unique}`;
  const assetCode = `HDMI${unique}`;
  const subType = `Samsung-${unique}`;
  const uniqueId = `TBC01HDMI${unique}`;
  const serialNo = `SN${unique}`;

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  //Asset master data in asset management

  await page.getByTestId("menu-item-asset-management").click();
  await page.waitForTimeout(800);
  await page.getByTestId("submenu-item-asset-master-data").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AMD-M-asset-type-tab").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AMD-AT-add-type-button").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AMD-AT-add-asset-type-input").click();
  await page.getByTestId("AM-AMD-AT-add-asset-type-input").fill(assetType);
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AT-add-asset-code-input").click();
  await page.getByTestId("AM-AMD-AT-add-asset-code-input").fill(assetCode);
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AT-add-asset-subtype-input").click();
  await page.getByTestId("AM-AMD-AT-add-asset-subtype-input").fill(subType);
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AT-add-asset-description-input").click();
  await page
    .getByTestId("AM-AMD-AT-add-asset-description-input")
    .fill("Useful for connect laptop to big-screen");
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AT-save-asset-type-button").click();
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AT-edit-button-0").click();
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AT-add-asset-code-input").click();
  await page
    .getByTestId("AM-AMD-AT-add-asset-code-input")
    .fill(`${assetCode}1`);
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AT-save-asset-type-button").click();
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AT-search-asset-types-input").click();
  await page.getByTestId("AM-AMD-AT-search-asset-types-input").fill("Hdmi");
  await page.waitForTimeout(800);

  await page.getByText(assetType).click();
  await page.waitForTimeout(800);

  await page.locator(".lucide.lucide-x > path:nth-child(2)").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AMD-AT-pagination-page-2").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AMD-AT-pagination-items-per-page-trigger").click();
  await page.getByTestId("AM-AMD-AT-pagination-items-per-page-25").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AMD-AT-pagination-items-per-page-trigger").click();
  await page.getByTestId("AM-AMD-AT-pagination-items-per-page-10").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AMD-M-asset-data-tab").click();

  /////////
  await page.getByTestId("AM-AMD-AD-add-asset-button").click();
  await page.waitForTimeout(800);
  await page.getByTestId("AM-AMD-AM-asset-type-input").click();

  await page.getByText(new RegExp(assetType)).click();
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AM-unique-identifier-input").click();
  await page.getByTestId("AM-AMD-AM-unique-identifier-input").fill(uniqueId);
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AM-serial-number-input").click();
  await page.getByTestId("AM-AMD-AM-serial-number-input").fill(serialNo);
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AM-save-asset-button").click();
  await page.waitForTimeout(800);
  //////////

  await page.getByTestId("AM-AMD-AD-add-asset-button").click();
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AM-asset-type-input").click();
  await page.locator("div.font-medium").first().click();
  // await page.getByText(new RegExp(assetType)).click();

  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AM-unique-identifier-input").click();
  await page
    .getByTestId("AM-AMD-AM-unique-identifier-input")
    .fill(uniqueId + 1);
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AM-serial-number-input").click();
  await page.getByTestId("AM-AMD-AM-serial-number-input").fill(serialNo + 2);
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AM-save-asset-button").click();
  await page.waitForTimeout(800);
  //////////

  await page.getByTestId("AM-AMD-AD-add-asset-button").click();
  await page.waitForTimeout(800);
  
  await page.getByTestId("AM-AMD-AM-asset-type-input").click();
  await page.locator("div.font-medium").first().click();
  // await page.getByText(new RegExp(assetType)).click();
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AM-unique-identifier-input").click();
  await page
    .getByTestId("AM-AMD-AM-unique-identifier-input")
    .fill(uniqueId + 3);
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AM-serial-number-input").click();
  await page.getByTestId("AM-AMD-AM-serial-number-input").fill(serialNo + 4);
  await page.waitForTimeout(800);

  await page.getByTestId("AM-AMD-AM-save-asset-button").click();
  await page.waitForTimeout(800);
  //////////////
  await page.getByTestId("AM-AMD-AD-search-assets-input").click();
  await page.getByTestId("AM-AMD-AD-search-assets-input").fill("Hdmi");
  await page.waitForTimeout(800);
  await page.locator(".lucide.lucide-x > path:nth-child(2)").click();

  // await page.getByText("Charger - HP10").click();
  // await page.getByText("Laptop - HP10").click();
  // await page.getByText("Charger - Dell10").click();
  // await page.getByText("Remote - VU10").click();
  // await page.getByText("Chair - Future ...10").click();
  // await page.getByText("Charger - MAC10").click();
  // await page.getByText("Laptop - MAC10").click();
  // await page.getByText("Chair - White10").click();
  // await page.getByText("Chair - Green10").click();
  // await page.getByText("Laptop - Dell10").click();
  // await page.getByText("Mouse - Lapcare3").click();

  await page.waitForTimeout(800);

  await page
    .locator(
      '//*[@id="root"]/div/div/div[3]/div/div[3]/div/div[1]/div/div[1]/div/div[13]/div/p',
    )
    .click();
  await page
    .locator(
      '//*[@id="root"]/div/div/div[3]/div/div[3]/div/div[1]/div/div[1]/div/div[1]/div/p',
    )
    .click();
  await page.waitForTimeout(800);
  await page.locator(".lucide.lucide-rotate-ccw").click();
  await page.waitForTimeout(800);
});
