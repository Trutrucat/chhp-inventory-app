const mongoose = require('mongoose')
const Inventory = require('./inventory')

const kitchenSchema = new mongoose.Schema({
})

const Kitchen = Inventory.discriminator('Kitchen', kitchenSchema)

module.exports = Kitchen