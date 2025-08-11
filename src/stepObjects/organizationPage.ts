import { Page } from "@playwright/test";
import { utility } from "../utils/utility";
import { DataTable } from "@cucumber/cucumber";


export class OrganizationPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async createButton() {
        await utility.clickable(this.page, "//button[text()='Create Organization']");
    }

    async sideTray() {
        await utility.checkVisibility(this.page, "//p[text()='Create Organization']");
    }
    async fillData(dataTable: DataTable) {
        const data = dataTable.rowsHash();

        if (data.OrganizationName) {
            await utility.fillDetails(this.page, "//input[@name='organisation_name']", data.OrganizationName);
        }

        if (data.Address) {
            await utility.fillDetails(this.page, "//textarea[@name='address']", data.Address);
        }

        if (data.Country) {
            const countryInput = this.page.locator("//input[@placeholder='Select Country']");
            await countryInput.waitFor({ state: 'visible', timeout: 15000 });
            await countryInput.click();
            const countryOption = this.page.locator(`//*[normalize-space(text())="${data.Country}"]`).first();
            await countryOption.waitFor({ state: 'visible', timeout: 15000 });
            await countryOption.click();
        }


        if (data.State) {
            const stateInput = this.page.locator("//input[@placeholder='Select State']");
            await stateInput.waitFor({ state: 'visible', timeout: 15000 });
            await stateInput.click();
            const stateOption = this.page.locator(`//*[normalize-space(text())="${data.State}"]`).first();
            await stateOption.waitFor({ state: 'visible', timeout: 15000 });
            await stateOption.click();
        }

        if (data.Pincode) {
            await utility.fillDetails(this.page, "//input[@name='pincode']", data.Pincode);
        }


        if (data.City) {
            const cityInput = this.page.locator("//input[@placeholder='Select City']");
            await cityInput.waitFor({ state: 'visible', timeout: 15000 });
            await cityInput.click();
            const cityOption = this.page.locator(`//*[normalize-space(text())="${data.City}"]`).first();
            await cityOption.waitFor({ state: 'visible', timeout: 15000 });
            await cityOption.click();
        }

        if (data.AssessmentLevel) {
            const label = this.page.locator(
                `//p[normalize-space(text())='${data.AssessmentLevel}']//parent::div//child::input[@type='checkbox']`
            );
            await label.waitFor({ state: 'visible', timeout: 10000 });
            await label.click();
        }
    }
    async create() {
        await utility.clickable(this.page, "//p[text()='Create']");
    }

    async showCreation() {
        await utility.checkVisibility(this.page, "//div[text()='Org_test']");
    }

    async showError(dataTable: DataTable) {
        const data = dataTable.rowsHash();
        for (const [field, message] of Object.entries(data)) {
            console.log(`Waiting for validation message for field "${field}": "${message}"`);
            await this.page.locator(`text=${message}`).waitFor({ state: 'visible', timeout: 5000 });
        }
    }




}