const digyRunnerConfig = {

  env: {
    PROJECT_NAME: "Playwright-js-starter",
    TEAM_NAME: "TeamPlaywright",
    SUITE_NAME: "Regression API",
    APP_VERSION: "2.0",
    ENVIRONMENT: "test",
    FRAMEWORK: "playwright",
    MODULE_NAME: "SomeModuleName",
    TESTER: "Joe Bloggs",
    BA: "Joe Bloggs",
    DEVELOPER: "Joe Bloggs",
    TEST_TYPE: "API",
    RESULTS_SUMMARY_URL: `https://rcr0bssa51.execute-api.us-west-2.amazonaws.com/digykube-dev/v3/resultsSummary`,
    RESULTS_URL: `https://rcr0bssa51.execute-api.us-west-2.amazonaws.com/digykube-dev/v3/results`,
    DIGY4_API_KEY: "<YOUR API KEY>",
    DIGY4_API_SECRET: "<YOUR API SECRET>",
  },

};

module.exports = digyRunnerConfig;
