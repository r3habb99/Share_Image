require('dotenv').config()
const mongoose = require("mongoose")


function connectDB(){
    //Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true , useUnifiedTopology: true,
    })
    const connection = mongoose.connection

    connection.once('open', () => {
    try {
        console.log("Database Connected.");
      } catch (error) {
        console.log('Connection failed.');
      }
    })
}


module.exports = connectDB