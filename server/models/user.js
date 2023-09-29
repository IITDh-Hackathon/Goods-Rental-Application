
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: String,
    password: String,
    Name: String,
    role: String,
    city: String,
});


export default mongoose.model("User", userSchema);
