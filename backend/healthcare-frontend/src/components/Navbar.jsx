import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Healthcare App
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>

          {!isLoggedIn ? (
            <>
              <Link className="nav-link text-white" to="/login">
                Login
              </Link>
              <Link className="nav-link text-white" to="/register">
                Register
              </Link>
            </>
          ) : (
            <>
              {user?.role === "doctor" ? (
                <Link className="nav-link text-white" to="/doctor-dashboard">
                  Dashboard
                </Link>
              ) : (
                <Link className="nav-link text-white" to="/patient-dashboard">
                  Dashboard
                </Link>
              )}

              {user?.role === "patient" && (
                <>
                  <Link className="nav-link text-white" to="/book-appointment">
                    Book Appointment
                  </Link>
                  <Link className="nav-link text-white" to="/my-appointments">
                    My Appointments
                  </Link>
                </>
              )}

              <button
                onClick={handleLogout}
                className="btn btn-light btn-sm ms-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
