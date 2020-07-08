const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// mongoose.connect(db).then(val => {
//     console.log("Connection Estblished....");
// });

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });
        console.log("MongoDB Connected.....");
    } catch (error) {
        console.log(error);
    }
};

module.exports = db;
