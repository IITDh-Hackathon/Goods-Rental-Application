import mongoose, { Schema } from "mongoose";
import item from "./item";
import user from "./user";

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
    }
});

export default mongoose.model("Cart", cartSchema);