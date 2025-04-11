import { config } from "./config";

const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });

    mongoose.connection.on("error", (err: Error) => {
      console.log("Error in connecting to database.", err);
    });
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
  } catch (err) {
    console.error("Failed to connect to database.", err);
    process.exit(1);
  }
};
export default connectDB;
