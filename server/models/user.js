
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

import { toJSON } from "./plugins/toJson.plugin.js";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        indexedDB: true
    },
    password: {
        type: String,
        private : true
    },
    Name: String,
    city: String,
    role: {
        type: String,
        //either "user" or "admin"
        enum: ["user", "admin"],
        default: "user"
    }
});

userSchema.plugin(toJSON);

userSchema.pre("save", async function () {
    // check if password is modified
    if (!this.isModified("password")) {
      return;
    }
    this.password = await bcrypt.hash(this.password, 12);
  });


export default mongoose.model("User", userSchema);