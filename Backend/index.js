import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3001",
      process.env.FRONTEND_URL || "https://chat-app-nine-gilt-39.vercel.app",
    ],
    credentials: true,
  })
);

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

try {
  await mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("MongoDB connection error:", error);
  process.exit(1);
}

app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
