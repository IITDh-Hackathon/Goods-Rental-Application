import mongoose, { Schema } from "mongoose";
import { toJSON } from "./plugins/toJson.plugin.js";
import { paginate } from "./plugins/paginate.plugin.js";

const citySchema = new Schema({
    name: String, //name of the city
    listings: [{
        type: Schema.Types.ObjectId,
        ref: "item"
    }]
});

citySchema.plugin(toJSON);
citySchema.plugin(paginate);

export default mongoose.model("City", citySchema);