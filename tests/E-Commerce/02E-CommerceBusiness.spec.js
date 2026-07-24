import { test, expect } from "@playwright/test";
import { DASHBOARD } from "../login/login";
import fs from "fs";

test.use({
  storageState: "auth/client.json",
});

test("test", async ({ page }) => {
  test.setTimeout(130000);

  await page.goto(DASHBOARD, { waitUntil: "networkidle" });

  // reusable random generator
  const randomText = Math.random()
    .toString(36)
    .replace(/[^a-z]/g, "")
    .slice(0, 6);
  const BusinessName = `Electricts Business ${randomText}`;

  // OPEN E-COMMERCE BUSINESS FORM

  await page.getByTestId("menu-item-sales-&-distribution").click();

  await page.getByTestId("submenu-item-business").click();

  await page.getByTestId("EC-STR-btn-add").click();

  //  BASIC BUSINESS DETAILS

  //PRIORITY
  await page.getByTestId("EC-AST-ip-priority").fill("0");

  await page.getByTestId("EC-AST-ip-name").fill(BusinessName);

  await page.waitForTimeout(1000);

  await page.getByTestId("EC-AST-ip-legal-name").fill("Electricts pvt.lmt");

  await page
    .getByTestId("EC-AST-re-description")
    .fill("we really have to best electronics");

  await page.getByTestId("EC-AST-ip-type-search").click();

  await page.locator("span.capitalize").first().click();

  await page.getByTestId("EC-AST-ip-ownership-search").click();

  // BUSINESS TIMINGS

  // Opening Time
  await page.getByTestId("TimePicker-btn-trigger").first().click();

  await page.getByTestId("TimePicker-hour-10").click();

  await page.getByTestId("TimePicker-minutes-column").getByText("00").click();

  await page.getByTestId("TimePicker-period-AM").click();

  // Closing Time
  await page.getByTestId("TimePicker-btn-trigger").nth(1).click();

  await page.getByTestId("TimePicker-hour-7").click();

  await page.getByTestId("TimePicker-minutes-column").getByText("00").click();

  await page.getByTestId("TimePicker-period-PM").click();

  // Working Days
  await page.getByTestId("EC-AST-btn-day-mon").click();

  await page.getByTestId("EC-AST-btn-day-tue").click();

  await page.getByTestId("EC-AST-btn-day-wed").click();

  await page.getByTestId("EC-AST-btn-day-thu").click();

  await page.getByTestId("EC-AST-btn-day-fri").click();

  // CONTACT INFORMATION

  await page
    .locator("div")
    .filter({ hasText: /^Contact Information \(Optional\)$/ })
    .nth(1)
    .click();

  await page
    .locator(".flex.items-center.text-sm.font-semibold")
    .first()
    .click();

  await page.getByTestId("EC-AST-ip-address").fill("Parabhani ,maharashtra");

  await page.getByTestId("EC-AST-ip-pincode").fill("431401");

  await page.getByTestId("EC-AST-ip-city").fill("Parabhani");

  await page.getByTestId("EC-AST-ip-state").fill("Maharashtra");

  await page.getByTestId("EC-AST-ip-country").fill("India");

  await page.getByTestId("EC-AST-ip-phone").fill("7368273827");

  await page.getByTestId("EC-AST-ip-email").fill("nkadam@gmail.com");

  await page.getByTestId("EC-AST-ip-business-instagram").fill("n.kadam18_");

  await page.getByTestId("EC-AST-ip-business-facebook").fill("Nagesh Kadam");

  await page.getByTestId("EC-AST-ip-latitude").fill("12345");

  await page.getByTestId("EC-AST-ip-longitude").fill("67890");

  // CATEGORY / SUBCATEGORY / TAGS

  // CATEGORY
  await page.getByTestId("EC-AST-ip-category-search").click();

  await page.locator("div.px-4.py-2").nth(0).click();

  // SUBCATEGORY
  await page.getByTestId("EC-AST-ip-subcategory-search").click();

  await page.locator("div.px-4.py-2").nth(0).click();

  // TAG
  await page.getByTestId("EC-AST-ip-tag-search").click();

  await page.locator("div.px-4.py-2").nth(0).click();

  // OWNER DETAILS

  await page.getByTestId("EC-AST-ip-owner-first-name").fill("Nagesh");

  await page.getByTestId("EC-AST-ip-owner-last-name").fill("Kadam");

  await page.getByTestId("EC-AST-ip-owner-email").fill("nkadam@gmail.com");

  await page.getByTestId("EC-AST-ip-owner-phone").fill("1234567890");

  await page.getByTestId("EC-AST-ip-gender").click();

  await page.getByTestId("EC-AST-btn-gender-option-Male").click();

  // WHOM TO SELL

  await page.getByTestId("EC-AST-ip-whom-to-sell-search").click();

  await page.locator("div.px-4.py-2").nth(0).click();

  await page.locator("div.px-4.py-2").nth(1).click();

  await page
    .locator("div")
    .filter({ hasText: /^Whom To Sell$/ })
    .click();

  // BANK DETAILS

  await page
    .locator(
      ".space-y-6 > div:nth-child(6) > .flex.items-center.justify-between > .flex",
    )
    .click();

  await page.getByTestId("EC-AST-ip-account-type").click();

  await page.getByText("Savings").click();

  await page.getByTestId("EC-AST-ip-account-number").fill("873298739827864387");

  await page.getByTestId("EC-AST-ip-account-name").fill("Nagesh Kadam");

  await page.getByTestId("EC-AST-ip-ifsc-code").fill("HDFC0002323");

  await page.getByTestId("EC-AST-ip-bank-name").fill("HDFC Bank");

  await page.getByTestId("EC-AST-ip-branch-name").fill("BRANCH OF PAREGAO");

  // SAVE BUSINESS

  await page.getByTestId("EC-AST-btn-save").click();
});
