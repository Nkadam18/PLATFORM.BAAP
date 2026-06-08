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

    //Task Status 

    //New 
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

    //In Progress
    await expect(page.getByTestId('menu-item-my-hrms')).toBeVisible();

    await page.getByTestId('TM-TC-add-status').click();
    await expect(page.getByRole('heading', { name: 'Add Task Status' })).toBeVisible();

    await page.getByTestId('TM-TC-SF-name').click();
    await page.getByTestId('TM-TC-SF-name').fill('In-Progress');
    await page.getByRole('textbox', { name: 'Select color' }).click();
    await expect(page.getByRole('textbox', { name: 'Search color name' })).toBeVisible();

    await page.locator('.max-h-40 > div:nth-child(8)').click();
    await page.getByRole('button', { name: 'Select category' }).click();
    await expect(page.getByRole('button', { name: 'To Do' })).toBeVisible();

    await page.getByRole('button', { name: 'In Progress' }).click();
    await page.getByTestId('TM-TC-SF-description').click();
    await page.getByTestId('TM-TC-SF-description').fill('It is on working');
    await page.getByRole('checkbox', { name: 'Language Mapping' }).check();
    await page.getByRole('checkbox', { name: 'English' }).check();
    await page.getByTestId('TM-TC-SF-save').click();
    await expect(page.getByRole('row', { name: 'In-Progress' })).toBeVisible();

    //Qa-done
    await page.getByTestId('TM-TC-add-status').click();
    await expect(page.getByRole('heading', { name: 'Add Task Status' })).toBeVisible();

    await page.getByTestId('TM-TC-SF-name').click();
    await page.getByTestId('TM-TC-SF-name').fill('Qa-done');
    await page.getByRole('textbox', { name: 'Select color' }).click();
    await expect(page.getByRole('textbox', { name: 'Search color name' })).toBeVisible();

    await page.locator('.max-h-40 > div:nth-child(26)').click();
    await page.getByRole('button', { name: 'Select category' }).click();
    await expect(page.getByRole('button', { name: 'To Do' })).toBeVisible();

    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByTestId('TM-TC-SF-description').click();
    await page.getByTestId('TM-TC-SF-description').fill('Work has completed');
    await page.getByRole('checkbox', { name: 'Language Mapping' }).check();
    await expect(page.getByRole('checkbox', { name: 'English' })).toBeVisible();

    await page.getByRole('checkbox', { name: 'Marathi' }).check();
    await page.getByRole('checkbox', { name: 'Hindi' }).check();
    await page.getByRole('checkbox', { name: 'English' }).check();
    await page.locator('.text-\\[var\\(--secondary-text-color\\)\\].p-1').first().click();
    await expect(page.getByRole('button', { name: '✓' })).toBeVisible();

    await page.getByTestId('TM-TC-SF-save').click();
    await expect(page.getByRole('row', { name: 'Qa-done' })).toBeVisible();
}); 