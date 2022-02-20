const AWS = require('aws-sdk');



AWS.config.update({
    region: 'us-east-2',
    accessKeyId: 'AKIARPKBPHTQEGLWEKKF',
    secretAccessKey: 'SQ2+TEstH7/2RBUxqnbgpu5het6brNy4RDVnl5/R'
})

const dynamoClient = new AWS.DynamoDB.DocumentClient()

module.exports = dynamoClient