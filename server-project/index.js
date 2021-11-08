"use strict";

const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./db/database");
const app = express();
const fileRoutes = require("./routes/file-upload-routes");

const port = process.env.PORT || 8080;

app.use(cors());
// app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", fileRoutes.routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening is with port:${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
