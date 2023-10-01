import City from "../models/city.js";
import Item from "../models/item.js";
import Cart from "../models/cart.js";
import User from "../models/user.js";
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

export const getUser = async (req, res) => {
  try {
    let user = req.user;
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const getAllCategories = async (req, res) => {
  try {
    let categories = await Item.find().distinct("category");
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//all apis for cart handling
export const addToCart = async (req, res) => {
  try {
    const {item, city} = req.body;
    console.log(item, city);
    const email = req.user.email;
    const user = await User.findOne({email});
    const cart = await Cart.create({user:user._id, item, quantity:1, numberOfMonths: 1,city});
    res.status(201).json({ message: "Item added to cart successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllCartItems = async (req, res) =>{
  try{
    const email = req.user.email;
    const user = await User.findOne({email});
    const cartItems= await Cart.find({user:user._id});
    // console.log(cartItems);
    // const allItems=await Item.find({});
    const items = [];
    // cartItems.forEach((cartItem)=>{
    //   console.log("cartItem",cartItem.item);
    //   let obj = {};
    //   obj.quantity = cartItem.quantity;
    //   obj.months = cartItem.numberOfMonths;
    //   //find item
    //   let item = allItems.find((item)=>item._id.toString()===cartItem.item.toString());
    //   obj.item = item;
    // });
    for(let i=0;i<cartItems.length;i++){
      let obj = {};
      obj.quantity = cartItems[i].quantity;
      obj.months = cartItems[i].numberOfMonths;
      //find item
      let item = await Item.findById(cartItems[i].item);
      console.log("item",item);
      obj.item = item;
      items.push(obj);
    }
    res.status(200).json(items);
  }catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}