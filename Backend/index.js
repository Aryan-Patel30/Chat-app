import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/userRoute.js';
import messageRoutes from './routes/messageRoute.js';
import { app, server } from './SocketIO/server.js';


dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI)
  console.log('Connected to MongoDB successfully');
} catch (error) {
  console.error(error);
}

app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});