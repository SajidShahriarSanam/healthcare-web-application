import Appointment from "../models/Appointment.js";
import User from "../models/User.js";

// Patient creates an appointment request
export const createAppointment = async (req, res, next) => {
  try {
    const { doctorId, dateTime, reason } = req.body;

    if (!doctorId || !dateTime || !reason) {
      return res.status(400).json({
        success: false,
        message: "doctorId, dateTime and reason are required",
      });
    }

    // doctor must exist and be role doctor
    const doctor = await User.findById(doctorId);
    if (!doctor || doctor.role !== "doctor") {
      return res.status(400).json({
        success: false,
        message: "Invalid doctorId (must be a doctor user)",
      });
    }

    const appointment = await Appointment.create({
      patient: req.user._id,
      doctor: doctorId,
      dateTime,
      reason,
    });

    res.status(201).json({
      success: true,
      message: "Appointment request created",
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

// Patient/Doctor/Admin: view their appointments
export const getMyAppointments = async (req, res, next) => {
  try {
    let filter = {};

    if (req.user.role === "patient") filter.patient = req.user._id;
    if (req.user.role === "doctor") filter.doctor = req.user._id;
    if (req.user.role === "admin") filter = {}; // admin sees all

    const appointments = await Appointment.find(filter)
      .populate("patient", "name email role")
      .populate("doctor", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, appointments });
  } catch (error) {
    next(error);
  }
};

// Doctor/Admin updates appointment status
export const updateAppointmentStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowed = ["approved", "rejected", "completed", "cancelled"];
    if (!allowed.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `status must be one of: ${allowed.join(", ")}`,
      });
    }

    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ success: false, message: "Appointment not found" });
    }

    // Doctor can update only their own appointments
    if (req.user.role === "doctor" && appointment.doctor.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    appointment.status = status;
    await appointment.save();

    res.status(200).json({
      success: true,
      message: "Appointment status updated",
      appointment,
    });
  } catch (error) {
    next(error);
  }
};