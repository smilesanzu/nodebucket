/**
 * Title: app.js
 * Author: Professor Krasso
 * Co-Author: Janis Gonzalez
 * Date: 8/17/2023
 * Description: JS for application
 */


'use strict'

// Require statements
const express = require('express')
const createServer = require('http-errors')
const path = require('path')
const employeeRoute = require('./routes/employee')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')


// Create the Express app
const app = express()

// Configure the app
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../dist/nodebucket')))
app.use('/', express.static(path.join(__dirname, '../dist/nodebucket')))

// Generate Swagger API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/api/employees', employeeRoute)

// error handler for 404 errors
app.use(function(req, res, next) {
  next(createServer(404)) // forward to error handler
})


// error handler for all other errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500) // set response status code

  // send response to client in JSON format with a message and stack trace
  res.json({
    type: 'error',
    status: err.status,
    message: err.message,
    stack: req.app.get('env') === 'development' ? err.stack : undefined
  })
})

module.exports = app // export the Express application