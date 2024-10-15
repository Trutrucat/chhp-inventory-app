const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0, 
  },
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
