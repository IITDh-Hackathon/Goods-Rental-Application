import mongoose, { Schema } from "mongoose";
import item from "./item.js";

const citySchema = new Schema({
    name: String, //name of the city
    image: String,
    pincode: {
        type: String,
        unique: true,
        required: true,
        indexedDB: true
    },
    listings: [{
        type: Schema.Types.ObjectId,
        ref: "item"
    }]
});

export default mongoose.model("City", citySchema);