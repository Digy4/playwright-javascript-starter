const digyRunnerConfig = {
  enabled: true,

  env: {
    PROTOCOL: "http",
    HOSTNAME: "localhost",
    REGION: ``,
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
    RESULTS_SUMMARY_URL: `https://hjkaxoe2zh.execute-api.us-east-2.amazonaws.com/digykube-dev-ht/v3/resultsSummary`,
    RESULTS_URL: `https://hjkaxoe2zh.execute-api.us-east-2.amazonaws.com/digykube-dev-ht/v3/results`,
    TAGS: "",
    filterSpecs: true,
    omitFiltered: true,
  },

};

module.exports = digyRunnerConfig;
