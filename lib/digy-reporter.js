// digy-reporter.js
// // @ts-check

/** @implements {import('@playwright/test/reporter').Reporter} */
const fs = require("fs");
const digyRunnerConfig = require("./digy-runner-config");
const DigyRunner = require("./DigyRunner.js");
const DigyUtils = require("./DigyUtils.js");
const { v4: uuidv4 } = require('uuid');

class DigyReporter {

    constructor() {
        this.passedCount = 0;
        this.failedCount = 0;
        this.sessions = [];
    }

    onBegin(config, suite) {
        console.log(`Starting the run with ${suite.allTests().length} tests`);

        //digyRunnerConfig.env.BUILD_ID = process.env.BUILD_ID;
        //digyRunnerConfig.env.RESULTS_SUMMARY_URL = process.env.RESULTS_SUMMARY_URL;
        //digyRunnerConfig.env.RESULTS_URL = process.env.RESULTS_URL;
        //digyRunnerConfig.env.REGION = process.env.REGION;
        digyRunnerConfig.env.BUILD_ID = uuidv4();
        digyRunnerConfig.env.RESULTS_SUMMARY_URL = "https://hjkaxoe2zh.execute-api.us-east-2.amazonaws.com/digykube-dev-ht/v3/resultsSummary";
        digyRunnerConfig.env.RESULTS_URL = "https://hjkaxoe2zh.execute-api.us-east-2.amazonaws.com/digykube-dev-ht/v3/results";
        digyRunnerConfig.env.REGION = "us-east-2";

        if (!(digyRunnerConfig.env.RESULTS_SUMMARY_URL && digyRunnerConfig.env.RESULTS_URL && digyRunnerConfig.env.REGION)) {
            throw new Error('missing environment variables!');
        }
        if (!digyRunnerConfig.env.BUILD_ID) {
            throw new Error('build id is undefined!');
        }

        DigyRunner.init({
            id: uuidv4(),
            projectName: `${digyRunnerConfig.env.PROJECT_NAME}`,
            teamName: `${digyRunnerConfig.env.TEAM_NAME}`,
            buildId: `${digyRunnerConfig.env.BUILD_ID}`,
            suiteName: `${digyRunnerConfig.env.SUITE_NAME}`,
            appVersion: `${digyRunnerConfig.env.APP_VERSION}`,
            environment: `${digyRunnerConfig.env.ENVIRONMENT}`,
            framework: `${digyRunnerConfig.env.FRAMEWORK}`,
            moduleName: `${digyRunnerConfig.env.MODULE_NAME}`,
            tester: `${digyRunnerConfig.env.TESTER}`,
            ba: `${digyRunnerConfig.env.BA}`,
            developer: `${digyRunnerConfig.env.DEVELOPER}`
        }, digyRunnerConfig.env);
    }

    onTestBegin(test) {
        console.log(`Starting test ${test.title}`);
    }

    onTestEnd(test, result) {
        const sessionId = uuidv4();
        console.log(`Session Id: ${sessionId}`);

        console.log(`Finished test ${test.title}: ${result.status}`);

        if (result.status === "passed") {
            this.passedCount++;
        } else {
            this.failedCount++;
        }

        let screenshotPath = "";
        let videoPath = "";
        for (const attachment of result.attachments) {
            console.log("Name: " + attachment.name);
            console.log("Content Type: " + attachment.contentType);
            console.log("Path: " + attachment.path);
            if (attachment.name === "screenshot") {
                screenshotPath = attachment.path;
            }
            if (attachment.name === "video") {
                videoPath = attachment.path;
            }
        }
        this.sessions.push({
          sessionId: sessionId,
          screenshotPath: screenshotPath,
          videoPath: videoPath
        });

        DigyRunner.sendResult(digyRunnerConfig.env, test, result, sessionId).then(result => console.log('Send result successful'));
        const s3Client = DigyUtils.setupS3();
        DigyUtils.uploadDriverLogs(s3Client, sessionId, result).then(result => console.log('Driver logs uploaded'));

        console.log("Session Id: " + sessionId);
    }

    async onEnd(result) {
        console.log(`Finished the run: ${result.status}`);

        const s3Client = DigyUtils.setupS3();
        for (const session of this.sessions) {
            await DigyUtils.uploadScreenshot(session.screenshotPath, session.sessionId, s3Client);
            await DigyUtils.uploadVideo(session.videoPath, session.sessionId, s3Client);
        }

        DigyRunner.testResultSummary.passedCount = this.passedCount;
        DigyRunner.testResultSummary.failedCount = this.failedCount;
        await DigyRunner.sendResultSummary(digyRunnerConfig.env, 'Completed');
    }
}

module.exports = DigyReporter;
