import express from "express";
const router = express.Router();

import { addItemHandler } from "../controllers/adminController.js";


//api to handle adding items for admin
router.post("addItem",addItemHandler);

export default router;