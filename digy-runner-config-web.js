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
    DIGY4_API_KEY: "AKIA44ICIUHKUFEUWCKU",
    DIGY4_API_SECRET: "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"
  },

};

module.exports = digyRunnerConfig;
