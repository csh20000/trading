const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')

const app = express()
app.use(express.json())
app.use(cors())
const cardsRouter = require('./controllers/cards')
const userRouter = require('./controllers/users')

console.log('connecting to ', config.MONGODB_URI) 

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB: ', error.message)
  })

app.use('/api/cards', cardsRouter)
app.use('/api/users', userRouter)

module.exports = app