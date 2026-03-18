import { Link } from "react-router-dom";

function LandingPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">Healthcare Web Application</h1>
      <p className="lead mb-4">
        A secure platform for patients, doctors, and administrators.
      </p>

      {!token ? (
        <div className="d-flex justify-content-center gap-3">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline-primary">
            Register
          </Link>
        </div>
      ) : (
        <div className="d-flex justify-content-center gap-3">
          <Link
            to={user?.role === "doctor" ? "/doctor-dashboard" : "/patient-dashboard"}
            className="btn btn-primary"
          >
            Go to Dashboard
          </Link>

          {user?.role === "patient" && (
            <Link to="/book-appointment" className="btn btn-outline-primary">
              Book Appointment
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default LandingPage;
