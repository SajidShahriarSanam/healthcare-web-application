import express from "express";
import { isAuthenticated, authorizeRoles } from "../middleware/auth.js";

const router = express.Router();

router.get(
  "/secret",
  isAuthenticated,
  authorizeRoles("admin"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Admin 👑 (RBAC working)",
    });
  }
);

export default router;