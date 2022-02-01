const express = require("express");
require("dotenv").config();
const mainRouter = require("./routes/main");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const connectDB = require("./db/connect");
const app = express();

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", mainRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const init = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

init();