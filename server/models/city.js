import mongoose, { Schema } from "mongoose";
import item from "./item";

const citySchema = new Schema({
    name: String, //name of the city
    image: String,
    pincode: String,
    listings: [{
        type: Schema.Types.ObjectId,
        ref: "item"
    }]
});

export default mongoose.model("City", citySchema);