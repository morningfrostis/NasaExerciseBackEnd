const mongoose = require('mongoose');

//Suppress warning
mongoose.set('strictQuery', true);

const connectToDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/nasa_db');
    console.log('DB CONNECTED!')
}

module.exports = connectToDb;