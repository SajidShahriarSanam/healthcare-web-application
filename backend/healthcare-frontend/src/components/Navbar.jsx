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
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(111, 212, 255, 0.2)",
        boxShadow: "0 8px 25px rgba(20, 70, 90, 0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container py-2">

        {/* 🔥 NEW LOGO */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #ff8aa1, #6fd4ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "900",
              boxShadow: "0 8px 18px rgba(111, 212, 255, 0.25)",
            }}
          >
            ⚕
          </div>

          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: "800",
              color: "#24495e",
              letterSpacing: "0.3px",
            }}
          >
            VitaPulse
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          style={{
            border: "1px solid rgba(111, 212, 255, 0.4)",
            borderRadius: "10px",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <Link className="nav-link fw-semibold" to="/" style={{ color: "#4f6f82" }}>
              Home
            </Link>

            {!isLoggedIn ? (
              <>
                <Link className="nav-link fw-semibold" to="/login" style={{ color: "#4f6f82" }}>
                  Login
                </Link>

                <Link
                  to="/register"
                  className="btn ms-lg-2 mt-2 mt-lg-0"
                  style={{
                    background: "linear-gradient(90deg, #ff8aa1, #6fd4ff)",
                    color: "#fff",
                    fontWeight: "600",
                    borderRadius: "14px",
                    padding: "10px 22px",
                    border: "none",
                    boxShadow: "0 10px 20px rgba(111, 212, 255, 0.2)",
                  }}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="nav-link fw-semibold"
                  to={
                    user?.role === "doctor"
                      ? "/doctor-dashboard"
                      : "/patient-dashboard"
                  }
                  style={{ color: "#4f6f82" }}
                >
                  Dashboard
                </Link>

                {user?.role === "patient" && (
                  <>
                    <Link
                      className="nav-link fw-semibold"
                      to="/book-appointment"
                      style={{ color: "#4f6f82" }}
                    >
                      Book Appointment
                    </Link>

                    <Link
                      className="nav-link fw-semibold"
                      to="/my-appointments"
                      style={{ color: "#4f6f82" }}
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
                    color: "#2f8a70",
                    border: "1px solid #d8f3ec",
                    borderRadius: "14px",
                    padding: "10px 20px",
                    fontWeight: "600",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
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