---
# Integrating Playwright tests with DigyRunner
---

## How to integrate DigyRunner

- Install `@digy4/digyrunner-playwright`
  `npm install @digy4/digyrunner-playwright`
  
- Create a config file `digy-runner-config-web.js` for DigyRunner

```
const digyRunnerConfig = {
  enabled: true,
  
  env: {
    PROTOCOL: "http",
    HOSTNAME: "localhost",
    REGION: "us-east-2",
    PROJECT_NAME: "Playwright-js-starter",
    TEAM_NAME: "TeamPlaywright",
    BUILD_ID: "",
    SUITE_NAME: "Regression",
    APP_VERSION: "2.0",
    ENVIRONMENT: "test",
    FRAMEWORK: "playwright",
    MODULE_NAME: "SomeModuleName",
    TESTER: "Joe Bloggs",
    BA: "Joe Bloggs",
    DEVELOPER: "Joe Bloggs",
    TEST_TYPE: "WEB",
    RESULTS_SUMMARY_URL: `https://rcr0bssa51.execute-api.us-west-2.amazonaws.com/digykube-dev/v3/resultsSummary`,
    RESULTS_URL: `https://rcr0bssa51.execute-api.us-west-2.amazonaws.com/digykube-dev/v3/results`,
    TAGS: "",
    filterSpecs: true,
    omitFiltered: true,
    DIGY4_API_KEY: "<key>",
    DIGY4_API_SECRET: "secret"
  },

};

module.exports = digyRunnerConfig;
```

- Include the config file in the playwright config

  ```const digyRunnerConfig = require('./digy-runner-config-web');```

- Add digyrunner as a reporter in the playwright config
  
  ```['@digy4/digyrunner-playwright/DigyReporter', digyRunnerConfig]```
  
- Optionally import digyrunner "test" instead of playwright "test" directly

  ```const test = require("@digy4/digyrunner-playwright/DigyWebTest");```

