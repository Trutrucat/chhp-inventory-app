const mongoose = require('mongoose')
const inventorySchema = new mongoose.Schema({
    name: String,
    quantity: Number
})
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        requried: true
    },
    inventory: [inventorySchema]
})


const User = mongoose.model("User", userSchema)
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword;
    }
});

module.exports = User