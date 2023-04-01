const base = require('@playwright/test');

exports.test = base.test.extend({
    beforeEach: async ({ page }, use) => {
        page.on('console', msg => console.log('CONSOLE LOG ENTRY : ' + msg.text()));
        await page.goto("https://www.oceanofrecipes.com");
        await use();
    },
});

exports.expect = base.expect;