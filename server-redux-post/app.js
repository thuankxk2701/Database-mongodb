"use strict";
const express = require("express");
const path = require("path");
const cors = require("cors");
const taskSingleFile = require("./routes/fileUpdateRoutes");
require("dotenv").config();
const app = express();
const connectDB = require("./db/database");
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/v1/single", taskSingleFile);

const port = process.env.PORT || 8080;
const init = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening is with port:${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};
init();
