import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { getMe } from "../controllers/userController.js";

const router = express.Router();

router.get("/me", isAuthenticated, getMe);

export default router;