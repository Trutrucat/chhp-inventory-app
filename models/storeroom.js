const mongoose = require('mongoose')
const Inventory = require('./inventory')

const storeroomSchema = new mongoose.Schema({
})

const StoreRoom = Inventory.discriminator('StoreRoom', storeroomSchema)

module.exports = StoreRoom