const mongoose = require("mongoose");

const connectDB = url => {
  return mongoose.connect(url).then(() => console.log("Connect MongooseDb Success!"));
};

module.exports = connectDB;
