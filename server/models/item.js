import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
    name: String, //name of the item to be rented
    description: String,
    price: Number,
    quantity: Number,
    image: String,
    category: String,
});

export default mongoose.model("Item", itemSchema);