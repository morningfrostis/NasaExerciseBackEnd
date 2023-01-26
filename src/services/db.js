const mongoose = require('mongoose');

//Suppress warning
mongoose.set('strictQuery', true);

<<<<<<< HEAD
const connectToDb = () => {
    mongoose.connect(process.env.MONGO);
=======
const connectToDb = async () => {
    await mongoose.connect(process.env.MONGO);
>>>>>>> 4c8f83cd986d9bef87757c868a96c6f08837c44c
    console.log('DB CONNECTED!')
}

module.exports = connectToDb;