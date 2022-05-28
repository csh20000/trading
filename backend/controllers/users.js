const usersRouter = require('express').Router()
const UserSchema = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await UserSchema.find({})
  response.json(cards);
})

cardsRouter.get('/:id', async (request, response) => {
  const user = await UserSchema.findById({ _id: request.params.id })
  if (user) { response.json(user) } 
  else { response.status(404).end() }
})

usersRouter.post('/', async (request, response) => {
    const body = request.body
    console.log(body)
  
    const user = new UserSchema({
      username: body.username,
      password: body.password,
    })
  
    const savedUser = await user.save()
    response.status(201).json(savedUser)
  })
  
  module.exports = usersRouter