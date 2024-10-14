const mongoose = require('mongoose')
const Inventory = require('./inventory')

const walkinrefrigeratorSchema = new mongoose.Schema({
  // add any additional fields specific to walkinrefrigerators
})

const WalkinRefrigerator = Inventory.discriminator('WalkinRefrigerator', walkinrefrigeratorSchema)

module.exports = WalkinRefrigerator