const cardsRouter = require('express').Router()
const CardSchema = require('../models/card')

//Gets all cards
cardsRouter.get('/', async (request, response) => {
  const cards = await CardSchema.find({})
  response.json(cards);
})

//Gets a card by id
cardsRouter.get('/:id', async (request, response) => {
  const card = await CardSchema.findById({ _id: request.params.id })
  if (card) {
    response.json(card)
  } else {
    response.status(404).end()
  }
})

cardsRouter.post('/', async (request, response) => {
  const body = request.body
  console.log(body)

  const card = new CardSchema({
    name: body.name,
    rarity: body.rarity,
    type: body.type,
    cost: body.cost,
    imageURL: body.imageURL,
    description: body.description,
  })

  const savedCard = await card.save()
  response.status(201).json(savedCard)
})

module.exports = cardsRouter