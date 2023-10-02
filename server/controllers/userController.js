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
  if (req.query.city) {
    items = await City.findOne({ name: req.query.city });
    if (items) {
      items = items.listings;
    }
  }
  if (req.query.notCity) {
    items = await City.findOne({ name: req.query.notCity });
    if (items) {
      items = items.listings;
    }
  }
  const filter = pick(req.query, ["name", "category", "price", "quantity"]);
  // filter id with items array
  if (req.query.city) {
    filter._id = { $in: items };
  }
  if (req.query.notCity) {
    filter._id = { $nin: items };
  }
  const options = pick(req.query, [
    "sortBy",
    "limit",
    "skip",
    "populate",
    "page",
  ]);
  res.send(await Item.paginate(filter, options));
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
    const user =await User.findOne({email:req.user.email});
    res.status(200).json(user);
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

//all apis for cart handling
export const addToCart = async (req, res) => {
  try {
    const { item, city,quantity } = req.body;
    const numberOfMonths = req.body.months;
    const email = req.user.email;
    const user = await User.findOne({ email });
    const cartItem = await Item.findById(item);
    user.cartTotal += cartItem.price * quantity * numberOfMonths;
    await user.save();
    const cart = await Cart.create({
      user: user._id,
      item,
      quantity,
      numberOfMonths,
      city,
    });
    res.status(201).json({ message: "Item added to cart successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllCartItems = async (req, res) => {
  try {
    const email = req.user.email;
    const user = await User.findOne({ email });
    const cartItems = await Cart.find({ user: user._id });

    const items = [];

    for (let i = 0; i < cartItems.length; i++) {
      let obj = {};
      obj.id = cartItems[i]._id;
      obj.cartTotal = user.cartTotal;
      obj.quantity = cartItems[i].quantity;
      obj.months = cartItems[i].numberOfMonths;
      obj.city = cartItems[i].city;
      //find item
      let item = await Item.findById(cartItems[i].item);
      obj.item = item;
      items.push(obj);
    }
    res.status(200).json(items);
  } catch (err) {
    
    res.status(500).json({ message: err.message });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const { id } = req.body;
    await Cart.findByIdAndDelete(id);
    res.status(200).json({ message: "Item deleted from cart successfully!" });
  } catch (err) {
    
    res.status(500).json({ message: err.message });
  }
};

export const deleteCart = async (req, res) => {
  try{
    const user = await User.findOne({email:req.user.email});
    await Cart.deleteMany({user:user._id});
  }catch(err){
    res.status(500).json({ message: err.message });
  }
};

export const updateCartItemQuantity = async (req, res) => {
  try {
    const { id, quantity } = req.body;
    const cart = await Cart.findById(id);
    const user = await User.findOne({ email: req.user.email });
    cart.quantity = quantity;
    await user.save();
    await cart.save();
    res.status(200).json({ message: "Item quantity updated successfully!", cartTotal: user.cartTotal });
  } catch (err) {
    
    res.status(500).json({ message: err.message });
  }
};

export const updateCartItemMonths = async (req, res) => {
  try {
    const { id, months } = req.body;
    const cart = await Cart.findById(id);
    const user = await User.findOne({ email: req.user.email });

    cart.numberOfMonths = months;
    await user.save();
    await cart.save();
    res.status(200).json({ message: "Item months updated successfully!", cartTotal: user.cartTotal });
  } catch (err) {
    
    res.status(500).json({ message: err.message });
  }
};

//all apis for wallet handling
export const addMoneyToWallet = async (req, res) => {
  try {
    const { amount } = req.body;
    const email = req.user.email;
    const user = await User.findOne({ email });
    user.walletCash += amount;
    await user.save();
    res.status(201).json({ message: "Money added to wallet successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const checkout = async (req, res) => {
  try{
    const user = await User.findOne({email:req.user.email});
    user.walletCash -= user.cartTotal;
    user.cartTotal = 0;
    await Cart.deleteMany({user:user._id});
    await user.save();
    res.status(201).json({ message: "Checkout successful!" });
  }catch(err){
    res.status(500).json({ message: err.message });
  }
};