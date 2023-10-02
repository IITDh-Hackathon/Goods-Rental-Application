import express from "express";
const router = express.Router();

import { addItemHandler,addCity,addCityListing,getCities,getStats,removeCityListing } from "../controllers/adminController.js";
import { authenticateUser} from "../middlewares/Authenticate.js";
import {authorizeUser} from "../middlewares/Authorize.js";

//api to handle adding items
router.post("/addItem", authenticateUser, authorizeUser(["admin"]), addItemHandler);

//api to handle a new city add
router.post("/addCity", authenticateUser, authorizeUser(["admin"]), addCity);

//api to handle a new city addlistings
router.post("/addCityListing", authenticateUser, authorizeUser(["admin"]), addCityListing);

//api to remove a city listing
router.delete("/removeCityListing", authenticateUser, authorizeUser(["admin"]), removeCityListing);

//api to get all cities
router.get("/getCities", authenticateUser, authorizeUser(["admin"]), getCities);

//api to get stats
router.get("/getStats",authenticateUser, authorizeUser(["admin"]),getStats);

export default router;