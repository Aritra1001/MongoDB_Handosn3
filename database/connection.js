const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/Human_Resource";

const connection = async()=>{
    try {
        console.log("Trying to connect to database...");
        await mongoose.connect(url);
        console.log("Connected to database");
    } catch (error) {
        console.log("Error in connecting to database ", error.message);
    }
}

module.exports = connection;