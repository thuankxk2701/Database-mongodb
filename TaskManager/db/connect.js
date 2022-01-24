const mongoose = require("mongoose");

const connectDB = url => {
  return mongoose.connect(url).then(() => console.log("Connect to MongoDB Success"));
};

module.exports = connectDB;
