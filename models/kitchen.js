const mongoose = require('mongoose')
const Inventory = require('./inventory')

const kitchenSchema = new mongoose.Schema({
  // add any additional fields specific to walkinrefrigerators
})

const Kitchen = Inventory.discriminator('Kitchen', kitchenSchema)

module.exports = Kitchen