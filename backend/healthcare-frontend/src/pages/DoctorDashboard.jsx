import { Link } from "react-router-dom";

function DoctorDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container mt-5">
      <h2>Doctor Dashboard</h2>
      <p className="mt-3">Welcome, {user?.name || "Doctor"}!</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>

      <div className="mt-4 d-flex gap-3 flex-wrap">
        <Link to="/my-appointments" className="btn btn-primary">
          View Appointments
        </Link>
      </div>
    </div>
  );
}

export default DoctorDashboard;
