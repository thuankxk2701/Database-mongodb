"use strict";
const mongoose = require("mongoose");

const connectDB = url => {
  mongoose.connect(url).then(() => console.log("Connect to MongoDB"));
};
module.exports = connectDB;
