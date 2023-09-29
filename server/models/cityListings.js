import mongoose, { Schema } from "mongoose";
import item from "./item";

const cityListingSchema = new Schema({
    item:{
        type: [Schema.Types.ObjectId],
        ref: "Item"
    },
    city: String, //zip code of the city
});

export default mongoose.model("CityListing", cityListingSchema);