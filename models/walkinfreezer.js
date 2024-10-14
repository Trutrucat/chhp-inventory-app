const mongoose = require('mongoose')
const Inventory = require('./inventory')

const walkinfreezerSchema = new mongoose.Schema({
})

const WalkinFreezer = Inventory.discriminator('WalkinFreezer', walkinfreezerSchema)

module.exports = WalkinFreezer