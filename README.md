---
# Playwright and JavaScript Setup Guide
---

## Features of this framework
* [Digy Dashboard](https://release-saas-sprint-1.dkhmetqbwqyzu.amplifyapp.com/)
* [Design Pattern: Page Object Model](https://playwright.dev/docs/test-pom)
* [Reporting: Allure](https://www.npmjs.com/package/allure-playwright)
* [Cloud Integration: SauceLab](https://saucelabs.com/)
* [Deep Deletion](https://www.npmjs.com/package/rimraf)

## Getting started

### Pre-requisites
* Download and install Node.js

### Setup Scripts 
* Clone the repository into a folder `git clone https://github.com/Digy4/playwright-javascript-starter`
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.

## Try Digy4 Pre Integrated Playwright Starter Kit
# Pre-Requisite
1. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

2. npx playwright install

3. https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Have you created an account with DigyDashboard? 
Please click https://dashboard.digy4.com to create one
1. Login to your account and click on Admin Panel -> Projects -> Add Project on the bottom left section of the dashboard
2. Add a Project name that (eg: demo) and other details and submit it
3. Click Profile under user icon on the top right section of the dashboard
4. Under Credentials section, copy Client ID and Client Secret and have it somewhere safe
5. Now clone the Digy4 Playwright Typescript Starter Kit
6. ```git clone https://github.com/Digy4/playwright-javascript-starter```
7.  ```cd playwright-javascript-starter```
8. ```npm install```
9.  Update digy-runner-config-web.js file with values of client id and client secret from steps 3 and 4
- CLIENT_ID:”Get it from step 4″,
- CLIENT_SECRET:”Get it from step 4″,
- PROJECT_NAME: ‘Git it from step 2’
- Note: project name can be passed via command line as well as shown below
10. Mac/Linux
  
```PROJECT_NAME=demo npm run e2e```

11. Windows (Power Shell ISE Prompt)

```$env:PROJECT_NAME=’demo’; npm run test:single```

Once this has completed, you should be able to see the results in DigyDashboard

### How to write Test
* Add new spec under `e2e-tests` folder
* Name the file as <testname>.spec.js (e.g. home.spec.js)
* Create folder under page-objects/pages as <page-name> (e.g. homePage)
* Under page folder create constant, helper and page object file.
    * <page-name>.constants.js (e.g. home.constants.js)
    * <page-name>.helper.js (e.g. home.helper.js)
    * <page-name>.po.js (e.g. home.po.js)

### How to Run Test
* Go to Project root directory and run command: `npm test`
* If you want to run e2e tests then run command: `npm run e2e`

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

### How to run Test on SauceLabs
* [SauceLabs Quickstart](https://docs.saucelabs.com/web-apps/automated-testing/playwright/quickstart/)
    * Set Environment Variables:
        * Open Terminal
        * Run `touch ~/.bash_profile; open ~/.bash_profile`
        * In TextEdit, add
        * `export SAUCE_USERNAME=“YOUR USERNAME”`
        * `export SAUCE_ACCESS_KEY="YOUR ACCESS KEY"`
        * Save the .bash_profile file and Quit (Command + Q) Text Edit.
        * In Terminal echo $SAUCE_USERNAME
        * In Terminal echo $SAUCE_ACCESS_KEY
    * Configure:
    `saucectl config` 
    * Run tests: `npm saucectl run`
