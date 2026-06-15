import { test, expect } from '@playwright/test';
import { DASHBOARD } from '../login/login';

test.use({
    storageState: 'auth/client.json',
});

test('test', async ({ page }) => {
    await page.goto(DASHBOARD, { waitUntil: 'networkidle' });
    test.setTimeout(200000);

    
    await page.getByTestId('menu-item-click-workflow').click();
    
    await page.getByRole('button', { name: 'Create New' }).click();
    
    await page.getByRole('textbox', { name: 'Enter workflow title' }).click();
    
    await page.getByRole('textbox', { name: 'Enter workflow title' }).fill('Asset Request Approval ');
    
    await page.locator('.react-select__input-container').first().click();
    
    await page.getByRole('option', { name: 'Asset Management' }).click();
    
    await page.locator('.react-select__control.css-dml4u9-control > .react-select__value-container > .react-select__input-container').first().click();
    
    await page.getByRole('option', { name: 'Asset Request' }).click();
    
    await page.locator('div:nth-child(3) > .relative > .react-select-container > .react-select__control > .react-select__value-container > .react-select__input-container').first().click();
    
    // await page.getByRole('option', { name: 'Aprroval' }).click();
    await page.locator('#react-select-7-listbox').click();
    
    await page.locator('.react-select__input-container.css-blprcc').click();
    
    await page.getByRole('option', { name: 'Manager Of' }).click();
    
    await page.getByText('Select manager', { exact: true }).click();
    
    await page.getByRole('option', { name: 'Owner' }).click();
    
    await page.getByRole('button', { name: 'Save' }).click();
    
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    await page.getByTestId('menu-item-asset-management').click();
    
    await page.getByTestId('submenu-item-my-asset-requests').click();
    
    await page.getByTestId('AM-MAR-raise-request-button').click();
    
    await page.locator('div').filter({ hasText: /^Search user$/ }).nth(3).click();
    
    await page.getByRole('option', { name: 'Nk Kadam' }).click();
    
    await page.locator('.react-select__control.css-11wqccx-control > .react-select__value-container > .react-select__input-container').click();
    
    await page.getByRole("option").first().click();
    
    await page.getByTestId('AM-MAR-RR-AAR-priority-dropdown-button').click();
    
    await page.getByText('High', { exact: true }).click();
    
    await page.getByTestId('AM-MAR-RR-AAR-save-request-button').click();
    
    await page.getByTestId('submenu-item-asset-requests').click();
    
    await page.getByText('Nk Kadam').nth(0).click();
    
    await page.getByTestId('AM-AR-ARD-tab-workflow').click();
    
    await page.getByText('Level 1Pending').click();
    await page.waitForTimeout(1500);
    await page.getByTestId('AM-AR-ARD-back-button').click();
    
    await page.getByTestId('submenu-item-my-asset-requests').click();
    
    await page.getByTestId('AM-MAR-delete-button-0').click();
    
    await page.getByTestId('AM-MAR-cancel-delete-popup-confirm').click();
    
    await page.getByTestId('menu-item-click-workflow').click();
    
    await page.locator('.relative > button').first().click();
    
    await page.getByTestId('WF-CN-workflow-status-toggle').click();
    
    await page.getByRole('button', { name: 'Update' }).click();
    
    await page.getByRole('button', { name: 'Create New' }).click();
    
    await page.getByRole('textbox', { name: 'Enter workflow title' }).click();
    
    await page.getByRole('textbox', { name: 'Enter workflow title' }).fill('Asset Request Apperoval');
    
    await page.locator('.react-select__input-container').first().click();
    
    await page.getByRole('option', { name: 'Asset Management' }).click();
    
    await page.locator('.react-select__control.css-dml4u9-control > .react-select__value-container > .react-select__input-container').first().click();
    
    await page.getByRole('option', { name: 'Asset Request' }).click();
    
    await page.locator('div:nth-child(3) > .relative > .react-select-container > .react-select__control > .react-select__value-container > .react-select__input-container').first().click();
    
    await page.getByText('Approval').click();
    
    await page.locator('.react-select__input-container.css-blprcc').click();
    
    
    await page.getByRole('option', { name: 'Specific User' }).click();
    
    await page.locator('.react-select__value-container.react-select__value-container--is-multi > .react-select__input-container').click();
    
    await page.locator('[role="option"]').nth(5).click();
    
    await page.getByRole('button', { name: 'Save' }).click();
    
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    await page.getByTestId('menu-item-asset-management').click();
    
    await page.getByTestId('submenu-item-my-asset-requests').click();
    
    await page.getByTestId('AM-MAR-raise-request-button').click();
    
    await page.locator('.react-select__input-container').first().click();
    
    await page.getByRole('option', { name: 'Nk Kadam' }).click();
    
    await page.locator('.react-select__control.css-11wqccx-control > .react-select__value-container > .react-select__input-container').click();
    
    await page.getByRole("option").first().click();
    
    await page.getByTestId('AM-MAR-RR-AAR-priority-dropdown-button').click();
    
    await page.getByText('High', { exact: true }).click();
    
    await page.getByTestId('AM-MAR-RR-AAR-save-request-button').click();
    
    await page.getByTestId('submenu-item-asset-requests').click();
    
    await page.getByText('Nk Kadam').nth(0).click();
    
    await page.getByTestId('AM-AR-ARD-tab-workflow').click();
    
    await page.getByText('Level 1Pending').click();
    await page.waitForTimeout(1500);
    await page.getByTestId('submenu-item-my-asset-requests').click();
    
    await page.getByTestId('AM-MAR-delete-button-0').click();
    
    await page.getByTestId('AM-MAR-cancel-delete-popup-confirm').click();
    
    await page.getByTestId('menu-item-click-workflow').click();
    
    await page.getByRole('button', { name: 'Create New' }).click();
    
    await page.getByTestId('WF-CN-Arrowleft icon').click();
    
    await page.locator('.relative > button').first().click();
    
    await page.getByTestId('WF-CN-workflow-status-toggle').click();
    
    await page.getByRole('button', { name: 'Update' }).click();
    
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
    
    await page.getByRole('option', { name: 'User Role' }).click();
    
    await page.locator('.react-select__control.css-1gahky3-control > .react-select__value-container > .react-select__input-container').click();
    
    await page.getByRole('option', { name: 'Admin', exact: true }).click();
    
    await page.locator('.react-select__control.react-select__control--is-focused > .react-select__value-container > .react-select__input-container').click();
    
    await page.getByText('Select User', { exact: true }).click();
    
    await page.getByRole('option', { name: 'Nagesh Kadam' }).click();
    
    await page.getByRole('button', { name: 'Save' }).click();
    
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    await page.getByTestId('menu-item-asset-management').click();
    
    await page.getByTestId('submenu-item-my-asset-requests').click();
    
    await page.getByTestId('AM-MAR-raise-request-button').click();
    
    await page.locator('.react-select__input-container').first().click();
    
    await page.getByRole('option', { name: 'Nk Kadam' }).click();
    
    await page.locator('.react-select__control.css-11wqccx-control > .react-select__value-container > .react-select__input-container').click();
    
    await page.getByRole("option").first().click();
    
    await page.getByTestId('AM-MAR-RR-AAR-priority-dropdown-button').click();
    
    await page.getByText('High', { exact: true }).click();
    
    await page.getByTestId('AM-MAR-RR-AAR-save-request-button').click();
    
    await page.getByTestId('submenu-item-asset-requests').click();
    
    await page.getByText('Nk Kadam').nth(0).click();
    
    await page.getByTestId('AM-AR-ARD-tab-workflow').click();
    
    await page.getByText('Level 1Pending').click();
    await page.waitForTimeout(1500);
    await page.getByTestId('submenu-item-my-asset-requests').click();
    
    await page.getByTestId('AM-MAR-delete-button-0').click();
    
    await page.getByTestId('AM-MAR-cancel-delete-popup-confirm').click();
    
    await page.getByTestId('menu-item-click-workflow').click();
    
    await page.locator('.relative > button').first().click();
    
    await page.getByTestId('WF-CN-workflow-status-toggle').click();
    
    await page.getByRole('button', { name: 'Update' }).click();
    
});