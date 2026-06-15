import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  await page.goto(DASHBOARD, { waitUntil: "networkidle" });
  test.setTimeout(200000);

    await page.getByTestId("menu-item-user-management").click();

    await page.getByTestId("submenu-item-users").click();

    await page.getByPlaceholder("Search user").click();
    await page.getByPlaceholder("Search user").fill("Nk");

    await page.getByTestId("UM-emp-list-edit-btn").nth(0).click();

    await page
      .locator(".absolute > .text-\\[var\\(--text-color\\)\\]")
      .first()
      .click();

    await page.getByRole("button", { name: "Update" }).click();

    await page.getByTestId("menu-item-organization-settings").click();

    await page.getByTestId("submenu-item-configuration-settings").click();

    await page.getByTestId("OS-AO-CS-add-button").click();

    await page.getByTestId("add-settings-type-input").click();

    await page.getByTestId("add-settings-type-input").fill("w");

    await page
      .getByTestId("add-settings-type-option-workflow_approver_configuration")
      .click();

    await page.getByTestId("add-settings-subtype-dropdown").click();

    await page
      .getByTestId("add-settings-subtype-option-default_approver")
      .click();

    await page.getByTestId("add-settings-workflow-approver-input").click();
    await page
      .getByTestId("add-settings-workflow-approver-input")
      .fill("Shubham");

    await page
      .getByTestId(
        "add-settings-workflow-approver-option-da972444-a195-4fb4-8a20-67960eafeb26",
      )
      .click();

    await page.getByTestId("add-settings-save-button").click();

    await page.getByTestId("menu-item-click-workflow").click();

    await page.getByRole("button", { name: "Create New" }).click();

    await page.getByRole("textbox", { name: "Enter workflow title" }).click();

    await page
      .getByRole("textbox", { name: "Enter workflow title" })
      .fill("Asset Request Approval");

    await page
      .locator("div")
      .filter({ hasText: /^Select module$/ })
      .nth(3)
      .click();

    await page.getByRole("option", { name: "Asset Management" }).click();

    await page
      .locator(
        ".react-select__control.css-dml4u9-control > .react-select__value-container > .react-select__input-container",
      )
      .first()
      .click();

    await page.getByRole("option", { name: "Asset Request" }).click();

    await page
      .locator(
        "div:nth-child(3) > .relative > .react-select-container > .react-select__control > .react-select__value-container > .react-select__input-container",
      )
      .first()
      .click();

    await page.getByText("Approval").click();

    await page.locator(".react-select__input-container.css-blprcc").click();

    await page.getByRole("option", { name: "Manager Of" }).click();

    await page.getByText("Select manager", { exact: true }).click();

    await page.getByRole("option", { name: "Manager" }).click();

    await page.getByRole("button", { name: "Save" }).click();

    await page.getByTestId("logout-button").click();

    await page.getByRole("button", { name: "Yes" }).click();

    await page.getByTestId("SI-username-input-password").click();

    await page.getByTestId("SI-username-input-password").fill("8080569397");

    await page.getByTestId("SI-password-input-password").click();

    await page.getByTestId("SI-password-input-password").fill("Nagesh@7058");

    await page.getByTestId("SI-submit-button-show").click();

    // await page.getByTestId('CG-org-select-arrow-c92f8010-47b9-416b-a434-22cad830b8ef').click();

    await page.getByTestId("menu-item-asset-management").click();

    await page.getByTestId("submenu-item-my-asset-requests").click();

    await page.getByTestId("AM-MAR-raise-request-button").click();

    await page
      .locator(
        '//*[@id="root"]/div/div/div[3]/div/div[2]/div[4]/div[2]/div/div[1]/div/div/div/div[1]/div[2]',
      )
      .click();

    await page.getByRole("option", { name: "Nk Kadam" }).click();

    await page
      .locator("div")
      .filter({ hasText: /^Select asset$/ })
      .nth(3)
      .click();

    //first click
    await page.getByRole("option").first().click();
    // await page.getByRole('option', { name: 'HDMI-Cable-1778649518273219' }).click();

    await page.getByTestId("AM-MAR-RR-AAR-priority-dropdown-button").click();

    await page.getByText("High", { exact: true }).click();

    await page.getByTestId("AM-MAR-RR-AAR-save-request-button").click();

    await page.getByTestId("logout-button").click();

    await page.getByRole("button", { name: "Yes" }).click();

    await page.getByTestId("SI-username-input-password").click();

    await page
      .getByTestId("SI-username-input-password")
      .fill("nkadam8080+1@gmail.com");

    await page.getByTestId("SI-password-input-password").click();

    await page.getByTestId("SI-password-input-password").fill("Nagesh@7058");

    await page.getByTestId("SI-submit-button-show").click();

    // await page.getByTestId('CG-org-select-arrow-c92f8010-47b9-416b-a434-22cad830b8ef').click();

    await page.getByTestId("menu-item-asset-management").click();

    await page.getByTestId("submenu-item-asset-requests").click();

    await page.locator(".block.truncate.w-full").first().click();

    await page.getByTestId("AM-AR-ARD-tab-workflow").click();

    await page.getByTestId("am_ar_ard_w_level_header_0").click();

    await page.getByTestId("logout-button").click();

    await page.getByRole("button", { name: "Yes" }).click();

    await page.getByTestId("SI-username-input-password").click();

    await page.getByTestId("SI-username-input-password").fill("8080569397");

    await page.getByTestId("SI-password-input-password").click();

    await page.getByTestId("SI-password-input-password").fill("Nagesh@7058");

    await page.getByTestId("SI-submit-button-show").click();

    // await page.getByTestId('CG-org-select-arrow-c92f8010-47b9-416b-a434-22cad830b8ef').click();

    await page.getByTestId("menu-item-asset-management").click();

    await page.getByTestId("submenu-item-my-asset-requests").click();

    await page.getByTestId("AM-MAR-delete-button-0").click();

    await page.getByTestId("AM-MAR-cancel-delete-popup-confirm").click();

    await page.getByTestId("logout-button").click();

    await page.getByRole("button", { name: "Yes" }).click();

    await page.getByTestId("SI-username-input-password").click();

    await page
      .getByTestId("SI-username-input-password")
      .fill("nkadam8080+1@gmail.com");

    await page.getByTestId("SI-password-input-password").click();

    await page.getByTestId("SI-password-input-password").fill("Nagesh@7058");

    await page.getByTestId("SI-submit-button-show").click();

    // await page.locator('div:nth-child(8) > .text-lg > path').click();

    await page.getByTestId("menu-item-click-workflow").click();

    await page.locator(".relative > button").first().click();

    await page.getByTestId("WF-CN-workflow-status-toggle").click();

    await page.getByRole("button", { name: "Update" }).click();

    await page.reload();
    await page.getByTestId("menu-item-organization-settings").click();

    await page.getByTestId("submenu-item-configuration-settings").click();

    await page.locator('[data-testid^="OS-AO-CS-delete-button"]').first().click();

    await page.getByTestId("OS-AO-CS-delete-popup-confirm").click();

  await page.getByTestId("menu-item-user-management").click();

  await page.getByTestId("submenu-item-users").click();
  await page.getByPlaceholder("Search user").click();
  await page.getByPlaceholder("Search user").fill("Nk");

  await page.getByTestId("UM-emp-list-edit-btn").nth(0).click();

  await page.getByTestId("UM-AE-Manager").click();

    await page.getByTestId("UM-AE-Manager").fill("Nagesh Kadam");
    await page.locator('.p-2.text-\\[var\\(--text-color\\)\\]').nth(0).click();

  await page.getByRole("button", { name: "Update" }).click();
});
