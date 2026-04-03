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
      setFormData({ doctorId: "", dateTime: "", reason: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create appointment");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f4fbff 0%, #eefaf6 45%, #fdfcff 100%)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div className="container py-5">
        <div
          className="mx-auto p-4 p-md-5"
          style={{
            maxWidth: "650px",
            background: "#ffffff",
            borderRadius: "28px",
            boxShadow: "0 20px 45px rgba(20, 70, 90, 0.08)",
          }}
        >
          <h2 className="fw-bold mb-4" style={{ color: "#143b52" }}>
            Book Appointment 🩺
          </h2>

          {message && (
            <div
              style={{
                background: "#e8fbf5",
                color: "#0d8d78",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              {message}
            </div>
          )}

          {error && (
            <div
              style={{
                background: "#ffe9ec",
                color: "#c44b62",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className="btn w-100"
              style={{
                background:
                  "linear-gradient(90deg, #11b89c 0%, #22c7d8 100%)",
                color: "#fff",
                borderRadius: "12px",
                padding: "12px",
                fontWeight: "600",
              }}
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookAppointmentPage;