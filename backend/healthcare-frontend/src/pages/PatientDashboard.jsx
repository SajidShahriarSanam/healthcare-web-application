import { Link } from "react-router-dom";

function PatientDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container mt-5">
      <h2>Patient Dashboard</h2>
      <p className="mt-3">Welcome, {user?.name || "Patient"}!</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>

      <div className="mt-4 d-flex gap-3 flex-wrap">
        <Link to="/book-appointment" className="btn btn-primary">
          Book Appointment
        </Link>
        <Link to="/my-appointments" className="btn btn-outline-primary">
          View My Appointments
        </Link>
      </div>
    </div>
  );
}

export default PatientDashboard;
