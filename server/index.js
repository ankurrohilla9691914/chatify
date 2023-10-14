import mongoose from "mongoose";
import express from "express";
import { connectDB } from "./db/db.js";
import bodyparser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userModels from "./models/userModel.js";

const PORT = 8000;

const app = express();
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
connectDB();

app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("hello world ");
});

app.listen(PORT, () => {
  console.log("server started on 8000");
});
