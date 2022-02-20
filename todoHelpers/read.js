'use strict'

const dynamoClient = require('../config/db')

module.exports = (event, callback) => {
    console.log('the region is ',process.env.AWS_REGION)
    const params = {
        TableName: 'todoTable',
    }

    return dynamoClient.scan(params, (err, data) => {
        if (err) {
            callback(err)
        }
        callback(err,data.Items)
    })
}

