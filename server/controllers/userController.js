import city from "../models/city.js";
import City from "../models/city.js";
import Item from "../models/item.js";
import { pick } from "../utils/pick.js";

export const getAllCities = async (req, res) => {
  try {
    let cities = await City.find();
    //remove listings from cities
    cities.forEach((city) => {
      city.listings = undefined;
    });
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getItems = async (req, res) => {
  let items;
  if(req.query.city){
    items = await City.findOne({name: req.query.city});
    if(items){
      items = items.listings;
    }
  }
  if(req.query.notCity){
    items = await City.findOne({name: req.query.notCity});
    if(items){
      items = items.listings;
    }
  }
  const filter = pick(req.query, ['name', 'category', 'price', 'quantity'])
  // filter id with items array
  if(req.query.city){
    filter._id = { $in: items };
  }
  if(req.query.notCity){
    filter._id = { $nin: items };
  }
  console.log(filter);
  const options = pick(req.query, ['sortBy', 'limit', 'skip', 'populate', 'page'])
  res.send( await Item.paginate(filter, options ));
};

export const getCityListings = async (req, res) => {
  try {
    let pincode = req.params.pincode;
    let cityListings = await City.findOne({ pincode }).populate("listings");
    res.status(200).json(cityListings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    let categories = await Item.find().distinct("category");
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
