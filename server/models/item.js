import mongoose, { Schema } from "mongoose";

import { toJSON } from "./plugins/toJson.plugin.js";
import { paginate } from "./plugins/paginate.plugin.js";

const itemSchema = new Schema({
    name: String, //name of the item to be rented
    description: String,
    price: Number,
    quantity: Number,
    image: String,
    category: String,
});

itemSchema.plugin(toJSON);
itemSchema.plugin(paginate);

export default mongoose.model("Item", itemSchema);