const mongoose = require('mongoose');

//Suppress warning
mongoose.set('strictQuery', true);

const connectToDb = () => {
    mongoose.connect(process.env.MONGO);
    console.log('DB CONNECTED!')
}

module.exports = connectToDb;