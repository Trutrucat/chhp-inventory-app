const mongoose = require('mongoose')
const Inventory = require('./inventory')

const walkinfreezerSchema = new mongoose.Schema({
  // add any additional fields specific to walkinrefrigerators
})

const WalkinFreezer = Inventory.discriminator('WalkinFreezer', walkinfreezerSchema)

module.exports = WalkinFreezer