
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        indexedDB: true
    },
    password: String,
    Name: String,
    city: String,
    role: {
        type: String,
        //either "user" or "admin"
        enum: ["user", "admin"],
        default: "user"
    }
});


export default mongoose.model("User", userSchema);