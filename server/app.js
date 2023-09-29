import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";

import connectDB from './config/connectDB';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();


//middlewares
app.use(cors());
app.use(express.json());

connectDB();

//routes
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

