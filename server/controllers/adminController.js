import Item  from '../models/item.js';
import City from '../models/city.js';
import upload from '../config/multerConfig.js';

export const addItemHandler = async (req, res) => {
    const { name, description, price, quantity, images, category } = req.body;
    console.log(images);
    try{
        const item = await Item.create({ name, description, price, quantity, category });
        res.status(201).json({ message: "Item added successfully!", item });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
    // upload(req, res, async (err) => {
    //     if (err) {
    //         res.status(500).json({ message: err.message });
    //     }
    //     else {
    //         const item = await Item.create({ name, description, price, quantity, images, category });
    //         res.status(201).json({ message: "Item added successfully!", item });
    //     }
    // });
};

export const addCity = async (req, res) => {
    const { name, image, pincode } = req.body;
    try {
        const city = await City.create({ name, image, pincode });
        res.status(201).json({ message: "City added successfully!", city });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const addCityListing = async (req, res) => {
    const { city,item } = req.body;
    try{
        //add item._id to city.listings
        await City.updateOne({name:city},{$push:{listings:item._id}});
        return res.status(201).json({ message: "City listing added successfully!"});
    }catch{
        return res.status(500).json({ message: err.message });
    }
};

export const getCities = async (req, res) => {
    try {
        const cities = await City.find({});
        res.status(200).json({ cities });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}