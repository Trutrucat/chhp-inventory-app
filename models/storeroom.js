const mongoose = require('mongoose')
const Inventory = require('./inventory')

const storeroomSchema = new mongoose.Schema({
  // add any additional fields specific to walkinrefrigerators
})

const StoreRoom = Inventory.discriminator('StoreRoom', storeroomSchema)

module.exports = StoreRoom