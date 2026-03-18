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

  return (
    <div className="container mt-5">
      <h2 className="mb-4">
        {user?.role === "doctor" ? "Doctor Appointments" : "My Appointments"}
      </h2>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">
            <thead>
              <tr>
                {user?.role === "doctor" ? <th>Patient</th> : <th>Doctor</th>}
                <th>Email</th>
                <th>Date & Time</th>
                <th>Reason</th>
                <th>Status</th>
                {user?.role === "doctor" && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => {
                const person =
                  user?.role === "doctor"
                    ? appointment.patient
                    : appointment.doctor;

                return (
                  <tr key={appointment._id}>
                    <td>
                      {person?.name ||
                        person?._id ||
                        (user?.role === "doctor"
                          ? appointment.patientId
                          : appointment.doctorId) ||
                        "N/A"}
                    </td>
                    <td>{person?.email || "N/A"}</td>
                    <td>{new Date(appointment.dateTime).toLocaleString()}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.status}</td>

                    {user?.role === "doctor" && (
                      <td>
                        <div className="d-flex gap-2 flex-wrap">
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() =>
                              handleStatusUpdate(appointment._id, "approved")
                            }
                            disabled={appointment.status !== "pending"}
                          >
                            Approve
                          </button>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              handleStatusUpdate(appointment._id, "rejected")
                            }
                            disabled={appointment.status !== "pending"}
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyAppointmentsPage;
