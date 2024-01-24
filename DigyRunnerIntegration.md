---
# Integrating Playwright tests with DigyRunner
---

## How to integrate DigyRunner

- Install `@digy4/digyrunner-playwright`
  `npm install @digy4/digyrunner-playwright`
  
- Create a config file `digy-runner-config-web.js` for DigyRunner

```
const digyRunnerConfig = {
  
  env: {
    PROJECT_NAME: "Playwright-js-starter",
    TEAM_NAME: "TeamPlaywright",
    SUITE_NAME: "Regression WEB",
    APP_VERSION: "2.0",
    ENVIRONMENT: "test",
    FRAMEWORK: "playwright",
    MODULE_NAME: "SomeModuleName",
    TESTER: "Joe Bloggs",
    BA: "Joe Bloggs",
    DEVELOPER: "Joe Bloggs",
    TEST_TYPE: "WEB",
    RESULTS_SUMMARY_URL: ``,
    RESULTS_URL: ``,
    CLIENT_ID: "<key>",
    CLIENT_SECRET: "<secret>"
  },

};

module.exports = digyRunnerConfig;
```

- Include the config file in the playwright config file

  ```const digyRunnerConfig = require('./digy-runner-config-web');```

- Add digyrunner as a reporter in the playwright config file
  
  ```['@digy4/digyrunner-playwright/DigyReporter', digyRunnerConfig]```
  
- Optionally import digyrunner "test" instead of playwright "test" directly

  ```const test = require("@digy4/digyrunner-playwright/DigyWebTest");```

