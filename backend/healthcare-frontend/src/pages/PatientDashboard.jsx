import { Link } from "react-router-dom";

function PatientDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

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
        {/* Hero */}
        <div
          className="p-4 p-md-5 mb-5"
          style={{
            background: "rgba(255,255,255,0.8)",
            borderRadius: "28px",
            boxShadow: "0 18px 40px rgba(20, 70, 90, 0.08)",
          }}
        >
          <h1 className="fw-bold" style={{ color: "#143b52" }}>
            Welcome, {user?.name || "Patient"} 👋
          </h1>
          <p style={{ color: "#5c7586", fontSize: "17px" }}>
            Manage your appointments, track your health, and stay connected with
            doctors.
          </p>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link
              to="/book-appointment"
              className="btn"
              style={{
                background:
                  "linear-gradient(90deg, #11b89c 0%, #22c7d8 100%)",
                color: "#fff",
                borderRadius: "14px",
                padding: "12px 26px",
                fontWeight: "600",
              }}
            >
              Book Appointment
            </Link>

            <Link
              to="/my-appointments"
              className="btn"
              style={{
                background: "#ffffff",
                color: "#148a7b",
                border: "1px solid #cdeee8",
                borderRadius: "14px",
                padding: "12px 26px",
                fontWeight: "600",
              }}
            >
              My Appointments
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {[
            {
              icon: "📅",
              title: "Appointments",
              text: "View and manage all your booked appointments.",
              link: "/my-appointments",
            },
            {
              icon: "➕",
              title: "New Booking",
              text: "Book appointments quickly with your preferred doctor.",
              link: "/book-appointment",
            },
            {
              icon: "💊",
              title: "Health Tracking",
              text: "Keep track of your medical activities and updates.",
              link: "#",
            },
          ].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="p-4 h-100"
                style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  boxShadow: "0 14px 30px rgba(20, 70, 90, 0.06)",
                }}
              >
                <div style={{ fontSize: "36px" }}>{item.icon}</div>
                <h4 className="fw-bold mt-3" style={{ color: "#143b52" }}>
                  {item.title}
                </h4>
                <p style={{ color: "#5c7586" }}>{item.text}</p>

                {item.link !== "#" && (
                  <Link
                    to={item.link}
                    className="btn"
                    style={{
                      background:
                        "linear-gradient(90deg, #11b89c 0%, #22c7d8 100%)",
                      color: "#fff",
                      borderRadius: "12px",
                      padding: "8px 18px",
                      fontWeight: "600",
                    }}
                  >
                    Open
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;