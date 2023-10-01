import express from "express";
import { getCityListings, getItems, getUser,getAllCartItems ,addToCart} from "../controllers/userController.js";
import { authenticateUser } from "../middlewares/Authenticate.js";
import { authorizeUser } from "../middlewares/Authorize.js";

const router = express.Router();

router.get('/profile', authenticateUser, authorizeUser(['user', 'admin']), getUser);
router.get('/items', getItems);
router.get('/getCityListings', getCityListings);
router.get('/getcartItems', authenticateUser, authorizeUser(['user', 'admin']), getAllCartItems);
router.post('/addToCart', authenticateUser, authorizeUser(['user', 'admin']), addToCart);

export default router;