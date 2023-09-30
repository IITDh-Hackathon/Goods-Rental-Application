import mongoose, { Schema } from "mongoose";
import item from "./item.js";

const citySchema = new Schema({
    name: String, //name of the city
    listings: [{
        type: Schema.Types.ObjectId,
        ref: "item"
    }]
});

export default mongoose.model("City", citySchema);