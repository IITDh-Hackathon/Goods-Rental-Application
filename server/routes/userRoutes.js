import express from "express";
import { getCityListings, getItems, getUser,getAllCartItems ,addToCart,deleteCartItem,deleteCart,addMoneyToWallet} from "../controllers/userController.js";
import { authenticateUser } from "../middlewares/Authenticate.js";
import { authorizeUser } from "../middlewares/Authorize.js";

const router = express.Router();

router.get('/profile', authenticateUser, authorizeUser(['user', 'admin']), getUser);
router.get('/items', getItems);
router.get('/getCityListings', getCityListings);
router.get('/getcartItems', authenticateUser, authorizeUser(['user', 'admin']), getAllCartItems);
router.post('/addToCart', authenticateUser, authorizeUser(['user', 'admin']), addToCart);
router.post('/deleteCartItem', authenticateUser, authorizeUser(['user', 'admin']), deleteCartItem);
router.post('/deleteCart', authenticateUser, authorizeUser(['user', 'admin']), deleteCart);
router.post('/addMoneyToWallet', authenticateUser, authorizeUser(['user', 'admin']), addMoneyToWallet);

export default router;