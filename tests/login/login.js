//Prod
// export const DASHBOARD = 'https://platform.baap.company/dashboard';

//QA
export const DASHBOARD = "https://qa-platform.baap.company/dashboard";
export class LoginPage {
    constructor(page) {
        this.page = page;
    }
    async login() {
        // PROD
        // await this.page.goto('https://platform.baap.company/');

        // QA
        await this.page.goto("https://qa-platform.baap.company/");

        await this.page.getByTestId("SI-username-input-password").click();
        await this.page
            .getByTestId("SI-username-input-password")
            .fill("7058735643");

        await this.page.getByTestId("SI-password-input-password").click();
        await this.page
            .getByTestId("SI-password-input-password")
            .fill("Nagesh@7058");

        await this.page.locator("path").nth(3).click();
        await this.page.locator("svg").nth(3).click();

        await this.page.getByTestId("SI-submit-button-show").click();

        await this.page.getByTestId("CG-search-input").click();

        ////prod

        // await this.page.getByTestId('CG-search-input').fill('CRM App');

        // await this.page
        //     .getByTestId('CG-org-select-arrow-8f896e16-2a85-4b88-bca7-e3d16fea2889')
        //     .locator('path')
        //     .click();


        ////QA
        await this.page.getByTestId('CG-search-input').fill('Cr');

        await this.page
          .getByTestId("CG-org-select-arrow-c92f8010-47b9-416b-a434-22cad830b8ef")
          .locator("path")
          .click();



        await this.page.waitForURL(DASHBOARD);
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(2000);

        console.log("✔ Client Login Successful");
    }
}