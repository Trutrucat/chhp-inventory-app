const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  quantity: Number
})

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  inventory: [inventorySchema],
  createdAt: Date,
  updatedAt: Date
})

const User = mongoose.model("User", userSchema)

const Inventory = mongoose.model('Inventory', inventorySchema)

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword
  }
})

module.exports = { User, Inventory }