import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { navigateToPage } from "../pageAction/organizationPage";
import { OrganizationPage } from "../stepObjects/organizationPage";
import { page } from "../support/hooks";



let organizationPage: OrganizationPage;

Given('I am on the organization dashboard of skillsmax.ai', async () => {
    organizationPage = new OrganizationPage(page);
    await navigateToPage();

})

When('I click the "Create Organization" button', async () => {
    await organizationPage.createButton();
})

Then('I should see the organization creation sidetray with mandatory fields', async () => {
    await organizationPage.sideTray();
})


When('I fill in the organization creation form with:', async (datatable) => {
    await organizationPage.fillData(datatable);
}
)

When('I click the "Create" button', async () => {
    await organizationPage.create();
})

Then('I should see my organization in organization table',async()=>{
    await organizationPage.showCreation();
})


When('I submit the organization creation form without filling mandatory fields', async () => {
    await organizationPage.create();
})

Then('I should see validation messages for:', async (dataTable) => {
    await organizationPage.showError(dataTable);
})
