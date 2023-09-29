import express from "express";
const router = express.Router();

import { addItemHandler,addCityListingHandler } from "../controllers/adminController.js";


//api to handle adding items for admin
router.post("addItem",addItemHandler);

//api to handle add city listing for admin
router.post("addCityListing",addCityListingHandler);

export default router;