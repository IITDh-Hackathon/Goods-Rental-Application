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
            // console.log(images);
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
    // console.log("cityname",cityName, itemId);
    try{
        //add item._id to city.listings
        const city = await City.findOne({name:cityName});
        if(!city){
            //create city
            // console.log("city not found");
            await City.create({name:cityName, listings: [itemId]});
        }
        await City.updateOne({name:cityName}, {$push: {listings: itemId}});
        return res.status(201).json({ message: "City listing added successfully!", city});
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
};

export const removeCityListing = async (req, res) => {
    const cityName = req.body.city;
    const itemId = req.body.id;
    console.log("cityname",cityName);
    console.log("itemId",itemId);
    try{
        const city = await City.findOne({name:cityName});
        //remove item._id from city.listings
        console.log(city);
        const index = city.listings.indexOf(itemId);
        if(index > -1){
            city.listings.splice(index, 1);
        }
        await city.save();
        return res.status(201).json({ message: "City listing removed successfully!", city});
    }catch(err){
        console.log(err);
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