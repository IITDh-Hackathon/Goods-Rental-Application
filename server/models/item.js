import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    image: String,
    category: String,
});

export default mongoose.model("Item", itemSchema);