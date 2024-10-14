const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  quantity: Number
})

const Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory