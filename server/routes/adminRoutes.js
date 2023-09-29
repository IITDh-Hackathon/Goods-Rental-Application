import express from "express";
const router = express.Router();

import { addItemHandler,addCity,addCityListing,getCities } from "../controllers/adminController.js";


//api to handle adding items
router.post("addItem",addItemHandler);

//api to handle a new city add
router.post("addCity",addCity);

//api to handle a new city addlistings
router.post("addCityListing",addCityListing);

//api to get all cities
router.get("getCities",getCities);

export default router;