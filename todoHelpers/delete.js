'use strict';
const dynamoClient = require('../config/db')

module.exports = (event,callback)=>{
    
    const params = {
        TableName: 'todoTable',
        Key: {
            id: event.pathParameters.todoId
        },
        ConditionExpression: 'attribute_exists(id)'
    }

    return dynamoClient.delete(params, function(err, data)  {
        if (err) {
            callback(err)
        }
        callback(err,params.Key)
    })
}