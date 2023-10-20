import mongoose from "mongoose";

const URL =
  "mongodb+srv://admin:<password>@cluster0.ukqw7qm.mongodb.net/?retryWrites=true&w=majority";

const databaseConnection = async () => {
  if (!global.mongoose) {
    mongoose.set("strictQuery", false);
    global.mongoose = await mongoose.connect(URL);
  }
};

export default databaseConnection;
