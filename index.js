'use strict';
module.exports.endpoint = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hello, the current time is ${new Date().toTimeString()}.`,
        }),
    };

    callback(null, response);
};

async function getLocalGreeting(language) {
    const aws = require('aws-sdk');
    const s3 = new aws.S3({ apiVersion: '2006-03-01' });
    const result = await s3.listBuckets().promise();
    return result
}

function pickLocale() {
    const languages = ["en", "es", "cn", "fr", "ru"];
    return languages [Math.floor(Math.random() * languages.length)];
}

module.exports.getLocalGreeting = getLocalGreeting;