const express = require("express");
require("dotenv").config();
require("express-async-errors");
const app = express();
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
const notFoundMiddleware = require("./middleware/notFound");
const errorMiddleware = require("./middleware/errorHandler");
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
// routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const init = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

init();
