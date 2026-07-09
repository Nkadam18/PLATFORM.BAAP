import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });
  test.setTimeout(120000);

  await page.waitForTimeout(2000);
  await page.locator('//*[@id="root"]/div/div/div[1]/div[5]/button/span').click();
  
  await page.getByText("yes").click();
  
  await page.getByTestId("SI-username-input-password").click();
  
  await page
    .getByTestId("SI-username-input-password")
    .fill("8080569397");
  
  await page.getByTestId("SI-password-input-password").click();
  
  await page
    .getByTestId("SI-password-input-password")
    .fill("Nagesh@7058");
  
  await page.locator("path").nth(3).click();
  await page.locator("svg").nth(3).click();

  await page.getByTestId("SI-submit-button-show").click();

  
  await page.getByTestId("menu-item-asset-management").click();
  
  await page.getByTestId("submenu-item-asset-checkout").click();
  
  //await page.getByTestId("AM-AC-status-card-expired").click();
  // 
  // await page.getByTestId("AM-AC-status-card-pending_approval").click();
  // 
  // await page.getByTestId("AM-AC-status-card-approved").click();
  // 
  // await page.getByTestId("AM-AC-status-card-total").click();
  // 

  await page.getByTestId("AM-AC-search-checkout-input").click();
  await page.getByTestId("AM-AC-search-checkout-input").fill("N");
  

  await page.getByTestId("AM-AC-clear-search-button").click();
  await page.getByTestId("AM-AC-add-checkout-button").click();
  

  //////////
  // Asset Type
  await page.getByTestId("AM-AC-AAC-asset-type-input").click();
  await page.locator("li.px-3.py-2:visible").first().click();

  // Unique Identifier
  await page.getByTestId("AM-AC-AAC-unique-identifier-input").click();
  await page.locator("div.font-medium").click();
  /////////////////

  

  await page.getByTestId("AM-AC-AAC-Duration-Start-Date").click();
  

  //upadate date every day to avoid error of past date
  await page.getByRole('button', { name: '27' }).click();
  
  await page.getByTestId("AM-AC-AAC-Duration-End-Date").click();

  await page.getByTestId("AM-AC-AAC-save-checkout-button").click();

  await page.locator('//*[@id="root"]/div/div/div[1]/div[5]/button/span').click();
  
  await page.getByText("yes").click();
  

  await page.getByTestId("SI-username-input-password").click();
  
  await page
    .getByTestId("SI-username-input-password")
    .fill("nkadam8080+1@gmail.com");
  
  await page.getByTestId("SI-password-input-password").click();
  
  await page
    .getByTestId("SI-password-input-password")
    .fill("Nagesh@7058");
  

  await page.locator("path").nth(3).click();
  
  await page.locator("svg").nth(3).click();
  

  await page.getByTestId("SI-submit-button-show").click();
  

  // await page.getByTestId("CG-search-input").click();
  // 

  // await page.getByTestId('CG-search-input').fill('CRM App');
  // 

  // await page
  //   .getByTestId('CG-org-select-arrow-8f896e16-2a85-4b88-bca7-e3d16fea2889')
  //   .locator('path')
  //   .click();


  


  await page.getByTestId("menu-item-asset-management").click();
  
  await page.getByTestId("submenu-item-asset-checkout").click();
  
  await page.getByTestId("AM-AC-search-checkout-input").click();
  await page.getByTestId("AM-AC-search-checkout-input").fill("N");
  

  await page.locator(".block.truncate.w-full").nth(0).click();
  
  await page.getByTestId("AM-AR-ARD-tab-workflow").click();
  
  await page.getByText("Level 1Pending").click();
  
  await page.getByTestId("AM-AR-ARD-W-approve-button-0-0").click();
  
  await page.getByTestId("AM-AR-ARD-back-button").click();

  
  await page.getByRole("link", { name: "Daily Check In/Out" }).click();
  
  await page.getByTitle("Check Out").first().click();
  
  await page.getByRole("link", { name: "Activity Logs" }).click();
  
  await page.getByRole("link", { name: "Daily Check In/Out" }).click();
  
  await page.getByTitle("Check In").first().click();
  
  await page.getByRole("link", { name: "Activity Logs" }).click();
  
});
