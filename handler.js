'use strict';

const readTodo = require('./todoHelpers/read')
const createTodo = require('./todoHelpers/create')
const deleteTodo = require('./todoHelpers/delete')
const updateTodo = require('./todoHelpers/update')


module.exports.create = (event, context, callback) => {
  createTodo(event, (err, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Item inserted successfully!',
          item: result
        }
        )
    }
    context.succeed(response)
  })
}

module.exports.delete = (event, context, callback) => {
  deleteTodo(event, (err, result) => {
    
    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Item deleted successfully!',
          item: result
        }
      )
    }

    context.succeed(response)
  })
}

module.exports.read = (event, context, callback) => {
  readTodo(event, (err, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Got all todo items successfully!',
          item: result
        }
      )
    }

    context.succeed(response)
  })
}

module.exports.update = (event, context, callback) => {

  updateTodo(event, (err, result) => {
    
    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'data updated Successfully',
          
        }
      )
    }
    context.succeed(response)
  })
}
