import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
    name: String, //name of the item to be rented
    description: String,
    price: Number,
    quantity: Number,
    images: {
        //array of image urls
        type: [String],
        default: [],
    },
    category: String,
});

export default mongoose.model("Item", itemSchema);