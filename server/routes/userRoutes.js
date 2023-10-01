import express from "express";
import { getCityListings, getItems, getUser } from "../controllers/userController.js";
import { authenticateUser } from "../middlewares/Authenticate.js";
import { authorizeUser } from "../middlewares/Authorize.js";

const router = express.Router();

router.get('/profile', authenticateUser, authorizeUser(['user', 'admin']), getUser);
router.get('/items', getItems);
router.get('/getCityListings', getCityListings);


export default router;