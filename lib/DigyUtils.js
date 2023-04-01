// Copyright (c) 2022 Digy4 Inc. and its affiliates. All rights reserved.
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Any illegal or unauthorized usage or violations will result in immediate legal action.

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require('fs');
import AWS from 'aws-sdk'

const bucketName = "digykube-logs";

let DigyUtils = {
  setupS3: () => {
    /*const s3Client = new S3Client({
      region: `${process.env.REGION}`,
      credentials: {
        secretAccessKey: `${process.env.SECRET_KEY}`,
        accessKeyId: `${process.env.ACCESS_KEY}`
      }
    });*/
    const s3Client = new S3Client({
      region: 'us-east-2',
      credentials: {
        secretAccessKey: 'xxP7F88I30koktdGlt4CRIgL7PlCPRIxBoMdnvgr',
        accessKeyId: 'AKIAZ5BU6F55JC5CUYO4'
      }
    });
    const s3 = new AWS.S3({
      secretAccessKey: 'xxP7F88I30koktdGlt4CRIgL7PlCPRIxBoMdnvgr',
      accessKeyId: 'AKIAZ5BU6F55JC5CUYO4'
    })
    return s3
  },

  uploadDriverLogs: async (s3Client, sessionId, result) => {
    const logSteps = function(step, logs) {
      const location = step.location ? (step.location.file + ':' + step.location.line + ':' + step.location.column) : "";
      const errorMessage = step.error ? step.error.message : "";
      const errorStack = step.error ? step.error.stack : "";
      logs.push({
        timestamp: step.startTime.getTime(),
        command: step.title,
        type: step.category,
        data: `location=${location}, errorMessage=${errorMessage}, errorStack=${errorStack}`
      });
      step.steps.forEach((step) => {
        logSteps(step, logs);
      });
    };
    let logs = [];
    const driverLogsFileName = 'driver_log.txt';
    result.steps.forEach((step) => {
      logSteps(step, logs);
    });
    const params = {
      Bucket: bucketName,
      Key: `${sessionId}/${driverLogsFileName}`,
      Body: JSON.stringify(logs, null, '\t')
    };
    await s3Client.upload(params).promise();
    //await s3Client.send(new PutObjectCommand(params));
  },

  uploadConsoleLogs: async (s3Client, sessionId) => {
    const consoleLogsFileName = 'console_log.txt'
    const consoleLogs = fs.readFileSync(`${DigyUtils.logsPath}/console_logs.txt`).toString()

    const consoleLogsUploadParams = {
      Bucket: bucketName,
      Key: `${sessionId}/${consoleLogsFileName}`,
      Body: consoleLogs
    }
    const data = await s3Client.send(new PutObjectCommand(consoleLogsUploadParams))
    return data
  },

  uploadScreenshot: async (screenshotPath, sessionId, s3Client) => {
    console.log(`Screenshot file ${screenshotPath} exist? ` + fs.existsSync(screenshotPath));
    const screenshotData = fs.readFileSync(screenshotPath);
    const params = {
      Bucket: bucketName,
      Key: `${sessionId}/screenshot.png`,
      Body: screenshotData
    };
    await s3Client.upload(params).promise();
    //await s3Client.send(new PutObjectCommand(params));
  },

  uploadVideo: async (videoPath, sessionId, s3Client) => {
    console.log(`Video file ${videoPath} exist? ` + fs.existsSync(videoPath));
    const data = fs.readFileSync(videoPath);
    const params = {
      Bucket: bucketName,
      Key: `${sessionId}/video.webm`,
      Body: data
    };
    await s3Client.upload(params).promise();
    //await s3Client.send(new PutObjectCommand(params));
  },
};

module.exports = DigyUtils;