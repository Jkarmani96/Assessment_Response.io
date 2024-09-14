class AddWorkspacePage {
    constructor(page) {
        this.page = page;
        this.settignButton = page.locator('a[data-pendo="nav-settings"]');
        this.workspacesButton = page.locator('span:has-text("Workspaces")');
        this.addWorkspaceButton = page.locator('span:has-text("Add Workspace")');

        const c_dotMenuXPath = '//button[@aria-haspopup="menu" and @data-variant="tertiary"]';
        const c_deleteButtonXPath = '//div[text()="Delete"]';
        const c_DeleteButtonXPath = '//span[text()="Delete"]';


        this.dotMenuXPath = page.locator(c_dotMenuXPath);
        this.deleteButtonXPath = page.locator(c_deleteButtonXPath);
        this.DeleteButtonXPath = page.locator(c_DeleteButtonXPath);

        const c_addWorkspaceButtonXpath = '(//span[text()="Add Workspace"])[2]';
        this.addWorkspaceButton = page.locator(c_addWorkspaceButtonXpath);
        this.deleteConfirmationInput = page.locator('input[placeholder="Test123"]');

        const c_nextButtonXpath = '//span[text()="Next"]';
        const c_inviteUserButtonXpath = '//span[text()="Invite Users"]';

        this.workspaceNameInput = page.locator('input[placeholder="Name your workspace e.g. Customer Support"]');
        this.nextButton = page.locator(c_nextButtonXpath);
        this.inviteUserButton = page.locator(c_inviteUserButtonXpath);

        const C_statusMessage = '//p[@class="dls-txt-body dls-text-text-primary"]/span';
        this.statusMessage = page.locator(C_statusMessage);

        //span:   Users added to workspace Successfully.
    }

    async addWorkspace(workspaceName) {
        await this.settignButton.click();
        await this.workspacesButton.click();


        await this.dotMenuXPath.click();
        await this.deleteButtonXPath.click();
        await this.deleteConfirmationInput.fill(workspaceName);
        await this.DeleteButtonXPath.click();
        await this.page.waitForTimeout(2000);

        await this.addWorkspaceButton.click();
        await this.page.waitForTimeout(2000);

        await this.workspaceNameInput.fill(workspaceName);
        await this.page.waitForTimeout(2000);

        await this.nextButton.click();
        await this.page.waitForTimeout(2000);
        await this.inviteUserButton.click();

        await this.page.waitForTimeout(4000);

        // await expect(statusMessage).toBeVisible();
        // await expect(statusMessage).toHaveText('Users added to workspace Successfully');

    }
}

module.exports = { AddWorkspacePage };