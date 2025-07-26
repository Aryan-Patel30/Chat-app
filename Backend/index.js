import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();

const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI)
  console.log('Connected to MongoDB successfully');
} catch (error) {
  console.error(error);
}

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});