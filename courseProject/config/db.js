const mongoose = require("mongoose");
const config = require("config");
// const db = config.get("mongoURI");
const db = config.get("localMongoURI");

// mongoose.connect(db, { useNewUrlParser: true }).then(val => {
//     console.log("Connection Estblished....");
// });

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected ... ");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
