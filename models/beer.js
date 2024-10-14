const mongoose = require('mongoose')
const Inventory = require('./inventory')

const beerSchema = new mongoose.Schema({
  // add any additional fields specific to walkinrefrigerators
})

const Beer = Inventory.discriminator('Beer', beerSchema)

module.exports = Beer