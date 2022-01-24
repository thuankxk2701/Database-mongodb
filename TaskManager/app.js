// "use strict";
const express = require("express");
const cors = require("cors");
require("dotenv").config();
app = express();
const tasks = require("./routers/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const PORT = process.env.PORT || 5000;
app.use(cors());
//Middleware

app.use(express.static("./public"));
app.use(express.json());
// router

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const initial = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

initial();
