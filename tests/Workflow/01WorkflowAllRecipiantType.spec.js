import { test, expect } from '@playwright/test';
import { DASHBOARD } from '../login/login';

test.use({
    storageState: 'auth/client.json',
});

test('test', async ({ page }) => {
    await page.goto(DASHBOARD, { waitUntil: 'networkidle' });
    test.setTimeout(120000);

    
    await page.getByTestId('menu-item-click-workflow').click();
    await page.getByRole('button', { name: 'Create New' }).click();
    await page.getByRole('textbox', { name: 'Enter workflow title' }).click();
    await page.getByRole('textbox', { name: 'Enter workflow title' }).fill('Asset Request Approval');
    await page.locator('.react-select__input-container').first().click();
    await page.getByRole('option', { name: 'Asset Management' }).click();
    await page.locator('.react-select__control.css-dml4u9-control > .react-select__value-container > .react-select__input-container').first().click();
    await page.getByRole('option', { name: 'Asset Request' }).click();
    await page.locator('div:nth-child(3) > .relative > .react-select-container > .react-select__control > .react-select__value-container > .react-select__input-container').first().click();
    // await page.getByRole('option', { name: 'Aprroval' }).click();
    await page.getByText('Approval').click();
    await page.locator('.react-select__input-container.css-blprcc').click();
    await page.getByRole('option', { name: 'Manager Of' }).click();
    await page.getByText('Select manager', { exact: true }).click();
    await page.getByRole('option', { name: 'Owner' }).click();
    await page.getByRole('button', { name: 'Add Level' }).click();
    await page.locator('div:nth-child(2) > .px-4 > .mb-4 > div > .relative > .react-select-container > .react-select__control > .react-select__value-container > .react-select__input-container').click();
    await page.getByRole('option', { name: 'Specific User' }).click();
    await page.locator('.react-select__value-container.react-select__value-container--is-multi > .react-select__input-container').click();
    await page.waitForTimeout(2000);
    // await page.getByRole('option', { name: 'Nagesh Kadam' }).click();
    await page.locator('[role="option"]').nth(6).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Add Level' }).click();
    await page.locator('div:nth-child(3) > .px-4 > .mb-4 > div > .relative > .react-select-container > .react-select__control > .react-select__value-container > .react-select__input-container').click();
    await page.getByRole('option', { name: 'User Role' }).click();
    await page.locator('div:nth-child(3) > .px-4 > .mb-4 > .mt-4 > .md\\:w-1\\/2 > .relative > .react-select-container > .react-select__control > .react-select__value-container > .react-select__input-container').click();

    await page.getByRole('option', { name: 'Admin', exact: true }).click();
    // await page.locator('.react-select__control.react-select__control--is-focused > .react-select__value-container > .react-select__input-container').click();
    // await page.getByRole('option', { name: 'User' }).click();
    await page.getByText('Select User', { exact: true }).click();
    await page.getByRole('option', { name: 'Nagesh Kadam' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
});