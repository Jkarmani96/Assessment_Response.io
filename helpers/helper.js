// helpers/uiHelper.js
const { LoginPage } = require('../pageObjects/loginPage');
// const testData = require('../../data/users.json');

async function login(page, email, password) {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login(email,password);
}

module.exports = { login };