import express from "express";
import { getCityListings, getItems, getUser,getAllCartItems } from "../controllers/userController.js";
import { authenticateUser } from "../middlewares/Authenticate.js";
import { authorizeUser } from "../middlewares/Authorize.js";

const router = express.Router();

router.get('/profile', authenticateUser, authorizeUser(['user', 'admin']), getUser);
router.get('/items', getItems);
router.get('/getCityListings', getCityListings);
router.get('/getcartItems', authenticateUser, authorizeUser(['user', 'admin']), getAllCartItems);

export default router;