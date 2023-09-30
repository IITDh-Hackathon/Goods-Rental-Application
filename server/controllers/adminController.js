import Item  from '../models/item.js';
import City from '../models/city.js';
import upload from '../config/multerConfig.js';
import user from '../models/user.js';

export const addItemHandler = async (req, res) => {
    
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
        else {
            const { name, description, price, quantity, category } = req.body;
            const images = req.files.map((file) => {
                //add only last part of the path to the array
                return file.path.split('\\').slice(-1)[0];
            });
            console.log(images);
            try {
                const item = await Item.create({ name, description, price, quantity, category, images });
                res.status(201).json({ message: "Item added successfully!", item });
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        }
    });
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

export const getStats = async (req, res) => {
    try {
        const users = await user.find({});
        const cities = await City.find({});
        const items = await Item.find({});
        let productCount = 0;
        let cityCount = cities.length;
        let userCount = users.length;
        items.forEach((item) => {
            productCount += item.quantity;
        });
        res.status(200).json({ productCount, cityCount, userCount });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}