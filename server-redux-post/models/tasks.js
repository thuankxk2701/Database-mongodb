const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,

    trim: true,
  },
  body: {
    type: String,
    trim: true,
  },
  url_image: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
