import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  const uniqueName = Math.random()
    .toString(36)
    .replace(/[^a-z]/g, "")
    .substring(0, 8);
  const uniquemobile = Date.now().toString().slice(-9);
  const id = Date.now().toString().slice(-5);

  await page.getByTestId("menu-item-crm").click();
  await page.getByTestId("submenu-item-leads").click();
  await page.getByTestId("CRM-L-add-new-button").click();
  await page
    .getByTestId("CRM-L-add-leads-full-name-input")
    .fill(`Lead ${uniqueName}`);
  await page
    .getByTestId("CRM-L-add-leads-phone-number-input")
    .fill(9 + uniquemobile);
  await page
    .getByTestId("CRM-L-add-leads-business-name-input")
    .fill(uniqueName);
  await page
    .getByTestId("CRM-L-add-leads-address-textarea")
    .fill("Parabhani, Maharashtra, India");

  await page.getByTestId("CRM-L-add-leads-tags-search-input").click();
  await page.locator("span.capitalize").click();

  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("Lead added")).toBeVisible();

  await page.locator('[data-testid^="CRM-L-lead-name-"]').first().click();

  await page.getByTestId("CRM-L-additional-info-tab-Document").click();
  await page.getByRole("textbox", { name: "Select Services" }).click();

  await page.locator("div.absolute.z-50").locator("div.p-2").nth(0).click();
//   await page.locator("div.absolute.z-50").locator("div.p-2").nth(1).click();
//   await page.locator("div.absolute.z-50").locator("div.p-2").nth(2).click();
  await page.getByRole("button", { name: "Apply" }).click();

  await page
    .locator(
      "//body/div/div/div/div/div/div/div/div/div/div/div[1]/div[2]/div[1]/input[1]",
    )
    .setInputFiles("C:\\Users\\NK\\Downloads\\Vyapo 1.jpg");
  await expect(page.getByText("Aadhar Card uploaded")).toBeVisible();

  await page
    .locator(
      '//*[@id="root"]/div/div/div[3]/div/div[1]/div[3]/div/div[2]/div/div[2]/div[2]/div/input',
    )
    .setInputFiles("C:\\Users\\NK\\Downloads\\Vyapo 1.jpg");
  await expect(page.getByText("Pan Card uploaded")).toBeVisible();

  await page
    .locator('input[type="file"]')
    .nth(0)
    .setInputFiles("C:\\Users\\NK\\Downloads\\N kadam -Resume.jpg");
  await expect(page.getByText("Aadhar Card updated")).toBeVisible();

  await page
    .locator(
      "//body/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[1]/div[1]/button[2]//*[name()='svg']",
    )
    .click();
  await page
    .locator("//button[@title='Close Viewer']//*[name()='svg']")
    .click();

  await page
    .locator(
      "//body/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[1]/div[1]/button[3]//*[name()='svg']",
    )
    .click();

  await page
    .locator(
      "//body/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[1]/div[1]/button[4]//*[name()='svg']",
    )
    .click();
  await expect(page.getByText("Aadhar Card approved")).toBeVisible();

  await page
    .locator(
      "//body/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[1]/div[1]/button[5]//*[name()='svg']",
    )
    .click();
  await page
    .getByPlaceholder("Enter rejection reason...")
    .fill("Document is not clear");

  await page
    .locator(
      '//*[@id="root"]/div/div/div[3]/div/div[1]/div[3]/div/div[3]/div/div[3]/button[2]',
    )
    .click();

  await expect(page.getByText("Aadhar Card rejected")).toBeVisible();

  await page.getByTitle("Delete").nth(0).click();
  await page
    .locator(
      '//*[@id="root"]/div/div/div[3]/div/div[1]/div[3]/div/div[3]/div/div[2]/div/button[2]',
    )
    .nth(0)
    .click();

  await expect(page.getByText("Aadhar Card deleted")).toBeVisible();

  await page
    .locator(
      "//body/div/div/div/div/div/div/div/div/div/div/div[1]/div[2]/div[1]/input[1]",
    )
    .setInputFiles("C:\\Users\\NK\\Downloads\\Vyapo 1.jpg");
  await expect(page.getByText("Aadhar Card uploaded")).toBeVisible();

  await page
    .locator(
      "//body/div/div/div/div/div/div/div/div/div/div/div[1]/div[1]/div[1]/div[1]/button[4]//*[name()='svg']",
    )
    .click();
  await expect(page.getByText("Aadhar Card approved")).toBeVisible();

  await page.locator('button[title="Approve"]').nth(1).click();
  await expect(page.getByText("Aadhar Card approved")).toBeVisible();

  await page
    .getByRole("textbox", { name: "Enter license name (optional)" })
    .nth(0)
    .fill(id);

  await page
    .locator('input[type="file"]')
    .nth(2)
    .setInputFiles("C:\\Users\\NK\\Downloads\\Vyapo 1.jpg");
  await expect(page.getByText("uploaded successfully")).toBeVisible();

  await page.getByRole("button", { name: "Add" }).nth(0).click();
  await page
    .getByRole("textbox", { name: "Enter license name (optional)" })
    .fill("license_" + id);

  await page
    .locator('input[type="file"]')
    .nth(2)
    .setInputFiles("C:\\Users\\NK\\Downloads\\N kadam -Resume.jpg");
  await expect(page.getByText("uploaded successfully")).toBeVisible();

});
