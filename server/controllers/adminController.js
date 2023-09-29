import Item  from '../models/item.js';

// const itemSchema = new Schema({
//     name: String,
//     description: String,
//     price: Number,
//     quantity: Number,
//     image: String,
//     category: String,
// });

// const cityListingSchema = new Schema({
//     item:{
//         type: Schema.Types.ObjectId,
//         ref: "Item"
//     },
//     city: String, //zip code of the city
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

export const addCityListingHandler = async (req, res) => {
    const { item, city } = req.body;
    try {
        const cityListing = await CityListing.create({ item, city });
        res.status(201).json({ message: "City listing added successfully!", cityListing });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};