import { Link } from "react-router-dom";

function DoctorDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const dashboardCards = [
    {
      icon: "📅",
      title: "Appointments",
      text: "Check all patient appointments and manage schedules easily.",
      link: "/my-appointments",
      buttonText: "View Appointments",
    },
    {
      icon: "📈",
      title: "Performance",
      text: "Track patient interactions and keep your workflow organized.",
      link: "#",
      buttonText: "Coming Soon",
      disabled: true,
    },
  ];

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
          className="p-4 p-md-5 mb-5"
          style={{
            background: "rgba(255,255,255,0.75)",
            borderRadius: "28px",
            boxShadow: "0 18px 40px rgba(20, 70, 90, 0.08)",
            border: "1px solid rgba(255,255,255,0.9)",
          }}
        >
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(17, 184, 156, 0.10)",
                  color: "#0d8d78",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  fontSize: "14px",
                  border: "1px solid rgba(13, 141, 120, 0.18)",
                }}
              >
                Doctor Portal
              </span>

              <h1
                className="fw-bold mt-3"
                style={{ color: "#143b52", fontSize: "clamp(2rem, 5vw, 3.3rem)" }}
              >
                Welcome back, {user?.name || "Doctor"} 👋
              </h1>

              <p className="mt-3 mb-2" style={{ color: "#5c7586", fontSize: "17px" }}>
                Manage your appointments, review patient requests, and stay
                organized with your healthcare dashboard.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link
                  to="/my-appointments"
                  className="btn"
                  style={{
                    background:
                      "linear-gradient(90deg, #11b89c 0%, #22c7d8 100%)",
                    color: "#fff",
                    borderRadius: "14px",
                    padding: "12px 26px",
                    fontWeight: "600",
                    boxShadow: "0 12px 24px rgba(34, 199, 216, 0.18)",
                    border: "none",
                  }}
                >
                  View Appointments
                </Link>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #f6fffc 100%)",
                  borderRadius: "24px",
                  padding: "24px",
                  boxShadow: "0 12px 30px rgba(20, 138, 123, 0.08)",
                }}
              >
                <h5 className="fw-bold mb-3" style={{ color: "#143b52" }}>
                  Doctor Info
                </h5>
                <p className="mb-2" style={{ color: "#5c7586" }}>
                  <strong>Name:</strong> {user?.name || "Doctor"}
                </p>
                <p className="mb-2" style={{ color: "#5c7586" }}>
                  <strong>Email:</strong> {user?.email || "N/A"}
                </p>
                <p className="mb-0" style={{ color: "#5c7586" }}>
                  <strong>Role:</strong> {user?.role || "doctor"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div
              className="text-center p-4 h-100"
              style={{
                background: "rgba(255,255,255,0.75)",
                borderRadius: "22px",
                boxShadow: "0 14px 30px rgba(20, 70, 90, 0.06)",
              }}
            >
              <div style={{ fontSize: "34px" }}>🩺</div>
              <h4 className="fw-bold mt-2" style={{ color: "#0e927f" }}>
                Smart Care
              </h4>
              <p className="mb-0" style={{ color: "#5c7586" }}>
                Provide better care through a simple digital workflow.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center p-4 h-100"
              style={{
                background: "rgba(255,255,255,0.75)",
                borderRadius: "22px",
                boxShadow: "0 14px 30px rgba(20, 70, 90, 0.06)",
              }}
            >
              <div style={{ fontSize: "34px" }}>📋</div>
              <h4 className="fw-bold mt-2" style={{ color: "#0e927f" }}>
                Organized Tasks
              </h4>
              <p className="mb-0" style={{ color: "#5c7586" }}>
                Keep appointment records and patient actions well managed.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center p-4 h-100"
              style={{
                background: "rgba(255,255,255,0.75)",
                borderRadius: "22px",
                boxShadow: "0 14px 30px rgba(20, 70, 90, 0.06)",
              }}
            >
              <div style={{ fontSize: "34px" }}>⏱️</div>
              <h4 className="fw-bold mt-2" style={{ color: "#0e927f" }}>
                Time Saving
              </h4>
              <p className="mb-0" style={{ color: "#5c7586" }}>
                Quickly review appointments without unnecessary hassle.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h2 className="fw-bold" style={{ color: "#143b52" }}>
            Dashboard Components
          </h2>
          <p style={{ color: "#5c7586" }}>
            Access important sections from your doctor panel
          </p>
        </div>

        <div className="row g-4">
          {dashboardCards.map((card, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="h-100 p-4"
                style={{
                  background: "rgba(255,255,255,0.78)",
                  borderRadius: "24px",
                  boxShadow: "0 16px 35px rgba(27, 82, 99, 0.08)",
                  border: "1px solid rgba(255,255,255,0.95)",
                }}
              >
                <div style={{ fontSize: "38px" }}>{card.icon}</div>
                <h4 className="fw-bold mt-3" style={{ color: "#143b52" }}>
                  {card.title}
                </h4>
                <p style={{ color: "#5c7586", minHeight: "72px" }}>
                  {card.text}
                </p>

                {card.disabled ? (
                  <button
                    className="btn"
                    disabled
                    style={{
                      background: "#eef5f7",
                      color: "#7e95a3",
                      borderRadius: "12px",
                      padding: "10px 20px",
                      fontWeight: "600",
                      border: "none",
                    }}
                  >
                    {card.buttonText}
                  </button>
                ) : (
                  <Link
                    to={card.link}
                    className="btn"
                    style={{
                      background:
                        "linear-gradient(90deg, #11b89c 0%, #22c7d8 100%)",
                      color: "#fff",
                      borderRadius: "12px",
                      padding: "10px 20px",
                      fontWeight: "600",
                      border: "none",
                    }}
                  >
                    {card.buttonText}
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

export default DoctorDashboard;