const mongoose = require('mongoose');
const Inventory = require('./inventory');

const walkinrefrigeratorSchema = new mongoose.Schema({
  // Define any specific fields for WalkinRefrigerator here
});

const WalkinRefrigerator = Inventory.discriminator('WalkinRefrigerator', walkinrefrigeratorSchema);

module.exports = WalkinRefrigerator;
