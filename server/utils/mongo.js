/**
 * Janis Gonzalez
 */

'use strict'

const { MongoClient } = require('mongodb')

// URL for MongoDB
const MONGO_URL = 'mongodb+srv://nodebucket_user:s3cret@web420db.3t4v4ax.mongodb.net/nodebucket?retryWrites=true&w=majority'

// Error message for database and callback function
const mongo = async(operations, next) => {
  try {
    console.log('Connecting to MongoDB Atlas...', MONGO_URL)

    // Connect to MongoDB Cluster
    const client = await MongoClient.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    // Select the database
    const db = client.db('nodebucket')
    console.log('Connected to MongoDB Atlas', db)

    // Execute the operations
    await operations(db)
    console.log('Operation was successful')

    // Close the connection
    client.close()
    console.log('Closing connection to MongoDB Atlas...')
  } catch (err) {
    const error = new Error('Error connecting to db', err)
    error.status = 500
    console.log('Error connecting to db', err)
    next(error)
  }
}
module.exports = { mongo }