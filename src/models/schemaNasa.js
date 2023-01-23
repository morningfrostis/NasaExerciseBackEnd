const mongoose = require('mongoose');

//Creo un esquema de Mongoose para representar los datos que obtengo de la API:

const dataSchema = new mongoose.Schema({

    // campos que se guardaran en MongoDB
    idNasa: {
        type: Number,
        required: true
    },
    camera: {
        name: String,
    },
    img_src: {
        type: String,

    },
    earth_date: {
        type: String,
    }
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data