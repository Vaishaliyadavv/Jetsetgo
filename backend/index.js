import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
mongoose.set("strictQuery", false);
// Database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

// For testing
app.get("/", (req, res) => {
  res.send("API is working");
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/tours", tourRoute);

// Start server
app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});

app.listen();
