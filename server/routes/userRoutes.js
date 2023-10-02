import express from "express";
import { getCityListings, getItems, getUser,getAllCartItems ,addToCart,deleteCartItem,checkout,addMoneyToWallet, updateCartItemMonths, updateCartItemQuantity} from "../controllers/userController.js";
import { authenticateUser } from "../middlewares/Authenticate.js";
import { authorizeUser } from "../middlewares/Authorize.js";

const router = express.Router();

router.get('/profile', authenticateUser, authorizeUser(['user', 'admin']), getUser);
router.get('/items', getItems);
router.get('/getCityListings', getCityListings);
router.get('/getcartItems', authenticateUser, authorizeUser(['user', 'admin']), getAllCartItems);
router.post('/addToCart', authenticateUser, authorizeUser(['user', 'admin']), addToCart);
router.post('/updateCartItemQuantity', authenticateUser, authorizeUser(['user', 'admin']), updateCartItemQuantity);
router.post('/updateCartItemMonths', authenticateUser, authorizeUser(['user', 'admin']), updateCartItemMonths);
router.post('/deleteCartItem', authenticateUser, authorizeUser(['user', 'admin']), deleteCartItem);
router.post('/checkout', authenticateUser, authorizeUser(['user', 'admin']), checkout);
router.post('/addMoneyToWallet', authenticateUser, authorizeUser(['user', 'admin']), addMoneyToWallet);

export default router;