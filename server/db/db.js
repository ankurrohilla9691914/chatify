import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.jh9naam.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      }
    );
    console.log("database connected");
  } catch (e) {
    console.log(`error in db :${e.message}`);
  }
};
