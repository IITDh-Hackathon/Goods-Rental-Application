import Item  from '../models/item.js';
import City from '../models/city.js';
import upload from '../config/multerConfig.js';
import user from '../models/user.js';
import city from '../models/city.js';
import path from 'path';


export const addItemHandler = async (req, res) => {
    
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
        else {
            const { name, description, price, quantity, category } = req.body;
            const images = req.files.map((file) => {
                let fileName = file.path.split(path.sep).pop();
                return fileName;
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
    const { name, image } = req.body;
    try {
        const city = await City.create({ name });
        res.status(201).json({ message: "City added successfully!", city });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const addCityListing = async (req, res) => {
    const cityName = req.body.city;
    const itemId = req.body.id;
    try{
        //add item._id to city.listings
        const city = City.findOne({name:city_name});
        if(!city){
            //create city
            await City.create({name:city_name, listings:[item_id]});
            return res.status(201).json({ message: "City listing added successfully!"});
        }
        await City.updateOne({name:city_name}, {$push: {listings: item_id}});
        return res.status(201).json({ message: "City listing added successfully!"});
    }catch(err){
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