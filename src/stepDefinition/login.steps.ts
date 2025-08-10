import { When, Then, Given } from "@cucumber/cucumber";
import { navigateToUrl } from "../pageAction/LoginPage";
import { LoginPage } from "../stepObjects/loginDetails";
import { page } from "../support/hooks";
require('dotenv').config();


let loginPage: LoginPage;

Given('the user is on the skillsmax login page', async () => {

    loginPage = new LoginPage(page);
    await navigateToUrl();
});

When('the user enters a valid username and password', async () => {
    await loginPage.validateUser(process.env.TEST_USERNAME, process.env.PASSWORD);
});

When('clicks the login button', async () => {
    await loginPage.login();
});

Then('the user should be redirected to the Organization dashboard', async () => {
    await loginPage.validateNavigation();
});

When("the user enters a valid username and an incorrect password", async () => {
    await loginPage.validateUser('sangeetha.sakthimurugan@crystaldelat.com', "password");
    await loginPage.login();
})

Then('an error message should be displayed', async () => {
    await loginPage.showErrorMessage();
})

Then('the user should remain on the login page', async () => {
    await loginPage.validateURL();
})

When('the user clicks the login button without entering credentials', async () => {
    await loginPage.validateUser("", "");
})

Then('validation messages should appear for the required fields', async () => {
    await loginPage.validateErrorMessage();
})

