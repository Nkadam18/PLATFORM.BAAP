import { test, expect } from '@playwright/test';
import { DASHBOARD } from '../login/login';

test.use({
    storageState: 'auth/client.json'
});

test('Task Configuration', async ({ page }) => {
    test.setTimeout(120000);


    //logic
    const randomText = Math.random()
        .toString(36)
        .replace(/[^a-z]/g, '')
        .substring(0, 6);

    const NewStatus = `New-${randomText}`;
    const InProgressStatus = `In-Progress-${randomText}`;
    const QaDoneStatus = `Qa-done-${randomText}`;
    const FeatureTaskType = `Feature-${randomText}`;
    const EnhancementTaskType = `Enhancement-${randomText}`;
    const BugTaskType = `Bug-${randomText}`;

    await page.goto(DASHBOARD, { waitUntil: 'networkidle' });

    await page.getByTestId('menu-item-task-management').click();
    await expect(page.getByTestId('submenu-item-task-dashboard')).toBeVisible();

    await page.getByTestId('submenu-item-task-configuration').click();
    await expect(page.getByRole('heading', { name: 'Task Configuration' })).toBeVisible();

    await page.getByTestId('TM-TC-TAB-TaskConfiguration').click();
    await page.getByTestId('TM-TC-search').click();
    await page.getByTestId('TM-TC-search').fill('Qa');
    await page.getByTestId('TM-TC-clear-search').click();


    //Task Statuses

    //New status
    await page.locator('.flex.items-center.justify-center.p-2').click();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByTestId('TM-TC-add-status').click();
    await expect(page.getByRole('heading', { name: 'Add Task Status' })).toBeVisible()

    await page.getByTestId('TM-TC-SF-name').click();
    await page.getByTestId('TM-TC-SF-name').fill(NewStatus);
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
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('row', { name: NewStatus })).toBeVisible();

    //In Progress status
    await expect(page.getByTestId('menu-item-my-hrms')).toBeVisible();

    await page.getByTestId('TM-TC-add-status').click();
    await expect(page.getByRole('heading', { name: 'Add Task Status' })).toBeVisible();

    await page.getByTestId('TM-TC-SF-name').click();
    await page.getByTestId('TM-TC-SF-name').fill(InProgressStatus);
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
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('row', { name: InProgressStatus })).toBeVisible();

    //Qa-done status
    await page.getByTestId('TM-TC-add-status').click();
    await expect(page.getByRole('heading', { name: 'Add Task Status' })).toBeVisible();

    await page.getByTestId('TM-TC-SF-name').click();
    await page.getByTestId('TM-TC-SF-name').fill(QaDoneStatus);
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
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('row', { name: QaDoneStatus })).toBeVisible();


    //Task Types   

    //Feature
    await page.getByTestId('TM-TC-TAB-TaskConfigType').click();
    await expect(page.getByTestId('TM-TCT-search-input')).toBeVisible();

    await page.getByTestId('TM-TCT-ADD-BTN').click();
    await expect(page.getByRole('heading', { name: 'Create Task Type' })).toBeVisible();

    await page.getByTestId('TM-ATCT-NAME-INPUT').click();
    await page.getByTestId('TM-ATCT-NAME-INPUT').fill(FeatureTaskType);
    await page.getByTestId('TM-ATCT-description-input').click();
    await page.getByTestId('TM-ATCT-description-input').fill('All features');
    await page.locator('.lucide.lucide-upload.h-8').click();
    await page.getByRole('checkbox', { name: 'Language Mapping' }).check();
    await expect(page.getByRole('checkbox', { name: 'English' })).toBeVisible();

    await page.getByRole('checkbox', { name: 'Hindi' }).check();
    await page.getByRole('checkbox', { name: 'English' }).check();
    await page.getByTestId('TM-TC-APC-save-btn').click();

    //Enhancement
    await page.getByTestId('TM-TCT-ADD-BTN').click();
    await expect(page.getByRole('heading', { name: 'Create Task Type' })).toBeVisible();

    await page.getByTestId('TM-ATCT-NAME-INPUT').click();
    await page.getByTestId('TM-ATCT-NAME-INPUT').fill(EnhancementTaskType);
    await page.getByTestId('TM-ATCT-description-input').click();
    await page.getByTestId('TM-ATCT-description-input').fill('Newly came features');
    await page.getByText('Click to upload iconJPG, PNG').click();
    await page.getByRole('checkbox', { name: 'Language Mapping' }).check();
    await page.getByRole('checkbox', { name: 'English' }).check();
    await page.getByTestId('TM-TC-APC-save-btn').click();

    //bug 
    await page.getByTestId('TM-TCT-ADD-BTN').click();
    await expect(page.getByRole('heading', { name: 'Create Task Type' })).toBeVisible();

    await page.getByTestId('TM-ATCT-NAME-INPUT').click();
    await page.getByTestId('TM-ATCT-NAME-INPUT').fill(BugTaskType);
    await page.getByTestId('TM-ATCT-description-input').click();
    await page.getByTestId('TM-ATCT-description-input').fill('Issues');
    await page.getByText('Click to upload iconJPG, PNG').click();
    await page.getByRole('checkbox', { name: 'Language Mapping' }).check();
    await expect(page.getByRole('checkbox', { name: 'English' })).toBeVisible();

    await page.getByText('English').nth(2).click();
    await page.locator('label').filter({ hasText: 'Marathi' }).nth(2).click();
    await page.locator('label').filter({ hasText: 'Hindi' }).click();
    await page.getByTestId('TM-TC-APC-save-btn').click();

}); 