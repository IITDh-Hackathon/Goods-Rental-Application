
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });


export default mongoose.model("User", userSchema);