import express from "express";
import { getCityListings, getItems } from "../controllers/userController.js";

const router = express.Router();
router.get('/items', getItems);
router.get('/getCityListings', getCityListings);


export default router;