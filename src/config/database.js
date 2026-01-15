const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://amishaaworks06_db_user:JMIEcKQVhwwG4UKe@cluster0.0ar9wpt.mongodb.net/devTinder");
};

module.exports = connectDB;

