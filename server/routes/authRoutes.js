import express from "express";
const router = express.Router();
import { handleSignup, handleLogin } from "../controllers/authController.js";


router.post("/signup", handleSignup);

router.post("/login", handleLogin);

export default router;