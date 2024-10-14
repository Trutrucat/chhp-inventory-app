const mongoose = require('mongoose')
const Inventory = require('./inventory')

const beerSchema = new mongoose.Schema({
})

const Beer = Inventory.discriminator('Beer', beerSchema)

module.exports = Beer