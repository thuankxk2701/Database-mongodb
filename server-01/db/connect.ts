import mongoose from "mongoose";

const mongoDB = (url: any) => {
  mongoose.connect(url).then(() => console.log("Connect to MongoDB "));
};

export default mongoDB;
