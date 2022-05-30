const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const UserSchema = require('../models/user')

userRouter.get('/', async (request, response) => {
  const users = await UserSchema.find({}).populate('cards')
  response.json(users)
})

userRouter.get('/:id', async (request, response) => {
  const user = await UserSchema.findById(request.params.id)
  if (user) {
    response.json(user)
  } else {
    response.status(404).end()
  }
})

userRouter.post('/', async (request, response) => {
  const { username, name, password, coinValue } = request.body
  
  const existingUser = await UserSchema.findOne({ name })
  if (existingUser) {
    return response.status(400).json({
      error: 'name must be unique'
    })
}

  const saltRounds = 10
  const passwordHash = await  bcrypt.hash(password, saltRounds)

  const user = new UserSchema({
    username, 
    name, 
    passwordHash,
    coinValue,
    totalCardValue: 0,
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = userRouter