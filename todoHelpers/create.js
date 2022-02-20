'use strict';

const dynamoClient = require('../config/db')
const { v4: uuidv4 } = require('uuid');


module.exports = (event, callback) => {
    
    const data = JSON.parse(event.body);
    data.id = uuidv4();
    data.updatedAt = new Date().getTime();

    const params = {
        TableName: 'todoTable',
        Item: data
    };

    return dynamoClient.put(params, (err, data) => {
        if (err) {
            callback(err)
        }
        
        callback(err,params.Item)
    })
}