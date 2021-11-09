"use strict";

const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./db/database");
const app = express();
const fileRoutes = require("./routes/fileUpdateRoutes");
const tasks = require("./routes/tasks");

const port = process.env.PORT || 8080;

app.use(cors());
// app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
//routers;
app.use("/api", fileRoutes);

app.use("/api/v1/tasks", tasks);
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
