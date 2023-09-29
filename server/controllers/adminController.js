import Item  from '../models/item.js';
import City from '../models/city.js';

// const itemSchema = new Schema({
//     name: String,
//     description: String,
//     price: Number,
//     quantity: Number,
//     image: String,
//     category: String,
// });

// const citySchema = new Schema({
//     name: String, //name of the city
//     image: String,
//     pincode: String,
//     listings: [{
//         type: Schema.Types.ObjectId,
//         ref: "item"
//     }]
// });


export const addItemHandler = async (req, res) => {
    const { name, description, price, quantity, image, category } = req.body;
    try {
        const item = await Item.create({ name, description, price, quantity, image, category });
        res.status(201).json({ message: "Item added successfully!", item });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
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
    try {
        const item = await Item.create({ name, description, price, quantity, image, category });
        const city = await City.findById(cityId);
        city.listings.push(item);
        await city.save();
        res.status(201).json({ message: "Item added successfully!", item });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};