import express from "express";
import { isAuthenticated, authorizeRoles } from "../middleware/auth.js";
import {
  createAppointment,
  getMyAppointments,
  updateAppointmentStatus,
} from "../controllers/appointmentController.js";

const router = express.Router();

// Patient creates appointment
router.post("/", isAuthenticated, authorizeRoles("patient"), createAppointment);

// Patient/Doctor/Admin views appointments
router.get("/me", isAuthenticated, authorizeRoles("patient", "doctor", "admin"), getMyAppointments);

// Doctor/Admin updates status
router.patch("/:id/status", isAuthenticated, authorizeRoles("doctor", "admin"), updateAppointmentStatus);

export default router;