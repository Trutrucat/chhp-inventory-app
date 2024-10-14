const mongoose = require('mongoose')
const Inventory = require('./inventory')

const diningareaSchema = new mongoose.Schema({
})

const DiningArea = Inventory.discriminator('DiningArea', diningareaSchema)

module.exports = DiningArea