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
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(17, 184, 156, 0.12)",
        boxShadow: "0 8px 25px rgba(20, 70, 90, 0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container py-2">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            fontSize: "1.7rem",
            color: "#143b52",
            letterSpacing: "0.4px",
          }}
        >
          Medi<span style={{ color: "#11b89c" }}>Care</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: "1px solid rgba(17, 184, 156, 0.35)",
            borderRadius: "10px",
            boxShadow: "none",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <Link
              className="nav-link"
              to="/"
              style={{
                color: "#4f6f82",
                fontWeight: "600",
              }}
            >
              Home
            </Link>

            {!isLoggedIn ? (
              <>
                <Link
                  className="nav-link"
                  to="/login"
                  style={{
                    color: "#4f6f82",
                    fontWeight: "600",
                  }}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="btn ms-lg-2 mt-2 mt-lg-0"
                  style={{
                    background:
                      "linear-gradient(90deg, #11b89c 0%, #22c7d8 100%)",
                    color: "#fff",
                    fontWeight: "600",
                    borderRadius: "14px",
                    padding: "10px 22px",
                    boxShadow: "0 12px 24px rgba(34, 199, 216, 0.18)",
                    border: "none",
                  }}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="nav-link"
                  to={
                    user?.role === "doctor"
                      ? "/doctor-dashboard"
                      : "/patient-dashboard"
                  }
                  style={{
                    color: "#4f6f82",
                    fontWeight: "600",
                  }}
                >
                  Dashboard
                </Link>

                {user?.role === "patient" && (
                  <>
                    <Link
                      className="nav-link"
                      to="/book-appointment"
                      style={{
                        color: "#4f6f82",
                        fontWeight: "600",
                      }}
                    >
                      Book Appointment
                    </Link>

                    <Link
                      className="nav-link"
                      to="/my-appointments"
                      style={{
                        color: "#4f6f82",
                        fontWeight: "600",
                      }}
                    >
                      My Appointments
                    </Link>
                  </>
                )}

                <button
                  onClick={handleLogout}
                  className="btn ms-lg-2 mt-2 mt-lg-0"
                  style={{
                    background: "#ffffff",
                    color: "#148a7b",
                    border: "1px solid #cdeee8",
                    borderRadius: "14px",
                    padding: "10px 20px",
                    fontWeight: "600",
                    boxShadow: "0 10px 24px rgba(20, 138, 123, 0.07)",
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;