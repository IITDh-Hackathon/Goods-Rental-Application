import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";

import connectDB from './config/connectDB.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

const app = express();


//middlewares
app.use(cors());
app.use(express.json());

connectDB();

//routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

