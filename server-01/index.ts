import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect";
import productsRouter from "./routes/products";
import notFoundMiddleware from "./middleware/notFound";
import errorMiddleware from "./middleware/errorHandler";

const app = express();

// middleware
app.use(express.json());
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.listen(process.env.PORT, () => {
  console.log(`Listening is width port${process.env.PORT} `);
});

app.use("/api/v1/products", productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
