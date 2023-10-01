import mongoose, { Schema } from "mongoose";
import Item from "./item.js";
import User from "./user.js";
const cartSchema = new Schema({
    item:{
        type: Schema.Types.ObjectId,
        ref: "Item"
    },
    quantity: Number,
    numberOfMonths: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    city: String
});

export default mongoose.model("Cart", cartSchema);