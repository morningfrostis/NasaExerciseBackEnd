const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    nasaFavs: {
        type: [String]
    },
    salt: {
        type: String,
        required: true
    },

}, { collection: 'users' });

const User = mongoose.model("User", userSchema)

module.exports = User