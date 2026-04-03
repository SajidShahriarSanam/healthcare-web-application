import { useEffect, useState } from "react";
import {
  getMyAppointments,
  updateAppointmentStatus,
} from "../services/appointmentService";

function MyAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchAppointments = async () => {
    try {
      const data = await getMyAppointments();
      setAppointments(data.appointments || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load appointments");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleStatusUpdate = async (appointmentId, status) => {
    setError("");
    setMessage("");

    try {
      await updateAppointmentStatus(appointmentId, status);
      setMessage(`Appointment ${status} successfully!`);
      fetchAppointments();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update appointment");
    }
  };

  const getStatusBadge = (status) => {
    const commonStyle = {
      padding: "8px 14px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "600",
      display: "inline-block",
      textTransform: "capitalize",
    };

    if (status === "approved") {
      return (
        <span
          style={{
            ...commonStyle,
            background: "#e8fbf5",
            color: "#0d8d78",
          }}
        >
          Approved
        </span>
      );
    }

    if (status === "rejected") {
      return (
        <span
          style={{
            ...commonStyle,
            background: "#ffe9ec",
            color: "#c44b62",
          }}
        >
          Rejected
        </span>
      );
    }

    return (
      <span
        style={{
          ...commonStyle,
          background: "#fff7df",
          color: "#ad7a00",
        }}
      >
        Pending
      </span>
    );
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
        {/* Header */}
        <div
          className="p-4 p-md-5 mb-4"
          style={{
            background: "rgba(255,255,255,0.78)",
            borderRadius: "28px",
            boxShadow: "0 18px 40px rgba(20, 70, 90, 0.08)",
            border: "1px solid rgba(255,255,255,0.95)",
          }}
        >
          <h1 className="fw-bold mb-2" style={{ color: "#143b52" }}>
            {user?.role === "doctor" ? "Doctor Appointments" : "My Appointments"}
          </h1>
          <p className="mb-0" style={{ color: "#5c7586", fontSize: "16px" }}>
            {user?.role === "doctor"
              ? "Review patient appointment requests and manage their status."
              : "Track your booked appointments and see the latest status updates."}
          </p>
        </div>

        {message && (
          <div
            className="mb-4"
            style={{
              background: "#e8fbf5",
              color: "#0d8d78",
              padding: "14px 18px",
              borderRadius: "14px",
              fontWeight: "600",
            }}
          >
            {message}
          </div>
        )}

        {error && (
          <div
            className="mb-4"
            style={{
              background: "#ffe9ec",
              color: "#c44b62",
              padding: "14px 18px",
              borderRadius: "14px",
              fontWeight: "600",
            }}
          >
            {error}
          </div>
        )}

        {appointments.length === 0 ? (
          <div
            className="text-center p-5"
            style={{
              background: "rgba(255,255,255,0.78)",
              borderRadius: "24px",
              boxShadow: "0 16px 35px rgba(27, 82, 99, 0.08)",
            }}
          >
            <div style={{ fontSize: "52px" }}>📭</div>
            <h3 className="fw-bold mt-3" style={{ color: "#143b52" }}>
              No Appointments Found
            </h3>
            <p style={{ color: "#5c7586" }}>
              There are no appointments available at the moment.
            </p>
          </div>
        ) : (
          <div className="row g-4">
            {appointments.map((appointment) => {
              const person =
                user?.role === "doctor"
                  ? appointment.patient
                  : appointment.doctor;

              return (
                <div className="col-12 col-lg-6" key={appointment._id}>
                  <div
                    className="h-100 p-4"
                    style={{
                      background: "rgba(255,255,255,0.82)",
                      borderRadius: "24px",
                      boxShadow: "0 16px 35px rgba(27, 82, 99, 0.08)",
                      border: "1px solid rgba(255,255,255,0.95)",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
                      <div>
                        <h4 className="fw-bold mb-1" style={{ color: "#143b52" }}>
                          {person?.name ||
                            person?._id ||
                            (user?.role === "doctor"
                              ? appointment.patientId
                              : appointment.doctorId) ||
                            "N/A"}
                        </h4>
                        <p className="mb-0" style={{ color: "#5c7586" }}>
                          {person?.email || "N/A"}
                        </p>
                      </div>

                      <div>{getStatusBadge(appointment.status)}</div>
                    </div>

                    <hr style={{ opacity: 0.12 }} />

                    <div className="mb-3">
                      <p className="mb-2" style={{ color: "#5c7586" }}>
                        <strong style={{ color: "#143b52" }}>
                          {user?.role === "doctor" ? "Patient" : "Doctor"}:
                        </strong>{" "}
                        {person?.name || "N/A"}
                      </p>

                      <p className="mb-2" style={{ color: "#5c7586" }}>
                        <strong style={{ color: "#143b52" }}>Date & Time:</strong>{" "}
                        {new Date(appointment.dateTime).toLocaleString()}
                      </p>

                      <p className="mb-0" style={{ color: "#5c7586" }}>
                        <strong style={{ color: "#143b52" }}>Reason:</strong>{" "}
                        {appointment.reason || "N/A"}
                      </p>
                    </div>

                    {user?.role === "doctor" && (
                      <div className="d-flex gap-2 flex-wrap mt-4">
                        <button
                          className="btn"
                          onClick={() =>
                            handleStatusUpdate(appointment._id, "approved")
                          }
                          disabled={appointment.status !== "pending"}
                          style={{
                            background:
                              appointment.status === "pending"
                                ? "linear-gradient(90deg, #11b89c 0%, #22c7d8 100%)"
                                : "#dfeaec",
                            color:
                              appointment.status === "pending" ? "#fff" : "#7e95a3",
                            borderRadius: "12px",
                            padding: "10px 18px",
                            fontWeight: "600",
                            border: "none",
                          }}
                        >
                          Approve
                        </button>

                        <button
                          className="btn"
                          onClick={() =>
                            handleStatusUpdate(appointment._id, "rejected")
                          }
                          disabled={appointment.status !== "pending"}
                          style={{
                            background:
                              appointment.status === "pending"
                                ? "#ffe9ec"
                                : "#eef3f5",
                            color:
                              appointment.status === "pending" ? "#c44b62" : "#7e95a3",
                            borderRadius: "12px",
                            padding: "10px 18px",
                            fontWeight: "600",
                            border: "none",
                          }}
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyAppointmentsPage;