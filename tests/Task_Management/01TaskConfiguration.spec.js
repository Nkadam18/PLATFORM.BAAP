import { test, expect } from '@playwright/test';
import { DASHBOARD } from '../login/login';

test.use({
    storageState: 'auth/client.json'
});

test('Task Configuration', async ({ page }) => {
    test.setTimeout(120000);

    await page.goto(DASHBOARD, { waitUntil: 'networkidle' });

    await page.getByTestId('menu-item-task-management').click();
    await expect(page.getByTestId('submenu-item-task-dashboard')).toBeVisible();

    await page.getByTestId('submenu-item-task-configuration').click();
    await expect(page.getByRole('heading', { name: 'Task Configuration' })).toBeVisible();

    await page.getByTestId('TM-TC-TAB-TaskConfiguration').click();
    await page.getByTestId('TM-TC-search').click();
    await page.getByTestId('TM-TC-search').fill('Qa');
    await page.getByTestId('TM-TC-clear-search').click();

    await page.locator('.flex.items-center.justify-center.p-2').click();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByTestId('TM-TC-add-status').click();
    await expect(page.getByRole('heading', { name: 'Add Task Status' })).toBeVisible()

    await page.getByTestId('TM-TC-SF-name').click();
    await page.getByTestId('TM-TC-SF-name').fill('New');
    await page.getByRole('textbox', { name: 'Select color' }).click();
    await expect(page.getByRole('textbox', { name: 'Search color name' })).toBeVisible();


    await page.locator('.max-h-40 > div:nth-child(20)').click();
    await page.getByRole('button', { name: 'Select category' }).click();
    await page.getByRole('button', { name: 'To Do' }).click();
    await page.getByTestId('TM-TC-SF-description').click();
    await page.getByTestId('TM-TC-SF-description').fill('Newly camed');
    await page.getByRole('checkbox', { name: 'Language Mapping' }).check();
    await expect(page.getByRole('checkbox', { name: 'English' })).toBeVisible();

    await page.getByRole('checkbox', { name: 'Language Mapping' }).click();
    await page.getByTestId('TM-TC-SF-save').click();
    await expect(page.getByRole('row', { name: 'New' })).toBeVisible();

}); 