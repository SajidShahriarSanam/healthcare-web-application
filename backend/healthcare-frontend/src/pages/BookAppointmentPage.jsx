import { useState } from "react";
import { createAppointment } from "../services/appointmentService";

function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    doctorId: "",
    dateTime: "",
    reason: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await createAppointment(formData);
      setMessage("Appointment booked successfully!");
      setFormData({
        doctorId: "",
        dateTime: "",
        reason: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create appointment");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Book Appointment</h2>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Doctor ID</label>
          <input
            type="text"
            name="doctorId"
            className="form-control"
            value={formData.doctorId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date & Time</label>
          <input
            type="datetime-local"
            name="dateTime"
            className="form-control"
            value={formData.dateTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Reason</label>
          <textarea
            name="reason"
            className="form-control"
            rows="3"
            value={formData.reason}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointmentPage;
