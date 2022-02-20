'use strict';

const dynamoClient = require('../config/db')

module.exports = (event, callback) => {
    
    try {
        
        
        let params = {
            TableName: 'todoTable',
            Key: {
                id: JSON.parse(event.body).id
            },
            UpdateExpression: 'set newData = :newData',
            ExpressionAttributeValues: {
                ':newData': JSON.parse(event.body).data
            }
        }
        return dynamoClient.update(params, function (err, data) {
            if (err) {
                callback(err)
            }
            callback(err,data)
        })
    } catch (err) {
        console.log(err)
    }
}