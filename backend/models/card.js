const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  name: String,
  rarity: String,
  type: String,
  cost: Number,
  imageURL: String,
  description: String,
})

cardSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('CardInformation', cardSchema)