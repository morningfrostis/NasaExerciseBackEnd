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
    /* ¿sería mejor un objeto dentro de la array de nasaFavs para
    guardar más info sobre el item favorito del usuario?

    Ej:
    nasaFavs: [{
        sol: Number,
        camera: String,
        img_src: String,
        earth_date: String,
    }]

    */
}, { collection: 'users' });

const User = mongoose.model("User", userSchema)

module.exports = User