const mongoose = require('mongoose')
const Inventory = require('./inventory')

const diningareaSchema = new mongoose.Schema({
  // add any additional fields specific to walkinrefrigerators
})

const DiningArea = Inventory.discriminator('DiningArea', diningareaSchema)

module.exports = DiningArea