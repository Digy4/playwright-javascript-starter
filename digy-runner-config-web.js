const digyRunnerConfig = {

  env: {
    LOB: "digydashboard",
    APPLICATION: "checkout",
    TEAM_NAME: "TeamPlaywight",
    PROJECT_NAME: "Digy4TestProject",
    SUITE_NAME: "Regression WEB",
    APP_VERSION: "2.0",
    ENVIRONMENT: "test",
    FRAMEWORK: "playwright",
    MODULE_NAME: "SomeModuleName",
    TESTER: "Joe Bloggs",
    BA: "Joe Bloggs",
    DEVELOPER: "Joe Bloggs",
    TEST_TYPE: "WEB",
    RELEASE: "release",
    RESULTS_SUMMARY_URL: `https://2tvjoz1e36.execute-api.us-west-2.amazonaws.com/digy4-prod/v3/resultsSummary`,
    RESULTS_URL: `https://2tvjoz1e36.execute-api.us-west-2.amazonaws.com/digy4-prod/v3/results`,
    PROJECT_PLAN_URL: `https://87z71f2mxj.execute-api.us-west-2.amazonaws.com/prod/users/project-plan-details`,
    CLIENT_ID: "",
    CLIENT_SECRET: ""
  },

};

module.exports = digyRunnerConfig;
