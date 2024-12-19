import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const connectDatabase = async (): Promise<void> => {
  const mongoURI = process.env.MONGO_URI; // Fetch the MongoDB URI from environment variables

  if (!mongoURI) {
    console.error("MONGO_URI is not defined in the .env file");
    process.exit(1); // Exit the process if the URI is not provided
  }

  try {
    await mongoose.connect(mongoURI); // No need to pass additional options
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectDatabase;
