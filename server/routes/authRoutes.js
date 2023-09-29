import express from "express";
const router = express.Router();
import { handleSignup, handleLogin } from "../controllers/userController.js";


router.post("/signup", handleSignup);

router.post("/login", handleLogin);

export default router;