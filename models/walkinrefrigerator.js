const mongoose = require('mongoose')
const Inventory = require('./inventory')

const walkinrefrigeratorSchema = new mongoose.Schema({
})

const WalkinRefrigerator = Inventory.discriminator('WalkinRefrigerator', walkinrefrigeratorSchema)

module.exports = WalkinRefrigerator