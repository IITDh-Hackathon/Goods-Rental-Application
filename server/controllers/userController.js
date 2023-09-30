import city from "../models/city";
import item from "../models/item";

// const citySchema = new Schema({
//     name: String, //name of the city
//     image: String,
//     pincode: {
//         type: String,
//         unique: true,
//         required: true,
//         indexedDB: true
//     },
//     listings: [{
//         type: Schema.Types.ObjectId,
//         ref: "item"
//     }]
// });

export const getAllCities = async (req, res) => {
  try {
    let cities = await city.find();
    //remove listings from cities
    cities.forEach((city) => {
      city.listings = undefined;
    });
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllItems = async (req, res) => {
  try {
    let items = await item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCityListings = async (req, res) => {
  try {
    let pincode = req.params.pincode;
    let cityListings = await city.findOne({ pincode }).populate("listings");
    res.status(200).json(cityListings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
