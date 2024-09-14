const { test, expect } = require('@playwright/test');
// const { LoginPage } = require('../../pageObjects/loginPage');
const { AddWorkspacePage } = require('../../pageObjects/addWorkspacePage');
const testData = require('../../data/users.json');
const { login } = require('../../helpers/helper');


test.describe('Add Workflow Flow', () => {
    test.beforeEach(async ({ page }) => {
        await login(page, testData.validUser.email,testData.validUser.password);
      
        // const loginPage = new LoginPage(page);
        // await page.goto('/');
        // await loginPage.login(testData.validUser.email,testData.validUser.password);
    });
  
    test('should able to create new workflow', async ({ page }) => {
    const addWorkspacePage = new AddWorkspacePage(page);
    // await page.goto('/');
    await addWorkspacePage.addWorkspace(testData.workspaceName);
  });
});