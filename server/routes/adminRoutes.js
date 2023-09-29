import express from "express";
const router = express.Router();

import { addItemHandler,addCity,addCityListing } from "../controllers/adminController.js";


//api to handle adding items
router.post("addItem",addItemHandler);

//api to handle a new city add
router.post("addCity",addCity);

//api to handle a new city addlistings
router.post("addCityListing",addCityListing);

export default router;