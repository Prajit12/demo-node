const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    sex: {
        type: String
    },
    age: {
        type: Number
    }
})

module.exports = mongoose.model('users', userSchema)