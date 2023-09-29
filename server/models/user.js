
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    role: String,
    address: String,
    city: String,
    state: String,
    zip: String,
});


export default mongoose.model("User", userSchema);
