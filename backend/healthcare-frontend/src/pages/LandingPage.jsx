import { Link } from "react-router-dom";

function LandingPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const features = [
    {
      icon: "🩺",
      title: "Trusted Consultation",
      text: "Connect with qualified doctors and specialists with confidence.",
    },
    {
      icon: "📅",
      title: "Quick Appointments",
      text: "Book your doctor visit in just a few clicks without hassle.",
    },
    {
      icon: "💊",
      title: "Health Support",
      text: "Track your care journey with updates and organized records.",
    },
    {
      icon: "🛡️",
      title: "Safe & Secure",
      text: "Your healthcare data stays protected with modern safeguards.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create Account",
      text: "Sign up as a patient or doctor and get started easily.",
    },
    {
      number: "02",
      title: "Choose Service",
      text: "Find doctors, schedule appointments, and explore care options.",
    },
    {
      number: "03",
      title: "Manage Care",
      text: "Stay updated and manage your appointments from one place.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f4fbff 0%, #eefaf6 45%, #fdfcff 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Watermark Background */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "4%",
          fontSize: "220px",
          opacity: 0.05,
          pointerEvents: "none",
          userSelect: "none",
          fontWeight: "700",
          color: "#0b8f7a",
        }}
      >
        ⚕
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          fontSize: "200px",
          opacity: 0.05,
          pointerEvents: "none",
          userSelect: "none",
          color: "#1b6ca8",
        }}
      >
        +
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "12%",
          width: "220px",
          height: "220px",
          background:
            "radial-gradient(circle, rgba(57,197,187,0.18) 0%, rgba(57,197,187,0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "10%",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(106,145,255,0.15) 0%, rgba(106,145,255,0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="container py-5 position-relative">
        {/* Hero */}
        <div className="row align-items-center py-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              style={{
                display: "inline-block",
                background: "rgba(16, 150, 120, 0.10)",
                color: "#0d8d78",
                padding: "8px 16px",
                borderRadius: "999px",
                fontWeight: "600",
                fontSize: "14px",
                border: "1px solid rgba(13, 141, 120, 0.18)",
              }}
            >
              Medical Care • Smarter • Safer
            </div>

            <h1
              className="fw-bold mt-4"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: "1.1",
                color: "#143b52",
              }}
            >
              Your Health,
              <br />
              Reimagined
            </h1>

            <p
              className="mt-4"
              style={{
                fontSize: "18px",
                color: "#4f6f82",
                maxWidth: "560px",
                lineHeight: "1.8",
              }}
            >
              A modern healthcare platform for booking appointments, connecting
              with doctors, and managing medical support with comfort,
              simplicity, and trust.
            </p>

            {!token ? (
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link
                  to="/login"
                  className="btn"
                  style={{
                    background:
                      "linear-gradient(90deg, #11b89c 0%, #22c7d8 100%)",
                    color: "#fff",
                    borderRadius: "14px",
                    padding: "12px 28px",
                    fontWeight: "600",
                    boxShadow: "0 12px 30px rgba(34, 199, 216, 0.22)",
                  }}
                >
                  Login Now
                </Link>

                <Link
                  to="/register"
                  className="btn"
                  style={{
                    background: "#ffffff",
                    color: "#148a7b",
                    border: "1px solid #cdeee8",
                    borderRadius: "14px",
                    padding: "12px 28px",
                    fontWeight: "600",
                    boxShadow: "0 10px 25px rgba(20, 138, 123, 0.08)",
                  }}
                >
                  Create Account
                </Link>
              </div>
            ) : (
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link
                  to={
                    user?.role === "doctor"
                      ? "/doctor-dashboard"
                      : "/patient-dashboard"
                  }
                  className="btn"
                  style={{
                    background:
                      "linear-gradient(90deg, #11b89c 0%, #22c7d8 100%)",
                    color: "#fff",
                    borderRadius: "14px",
                    padding: "12px 28px",
                    fontWeight: "600",
                    boxShadow: "0 12px 30px rgba(34, 199, 216, 0.22)",
                  }}
                >
                  Go to Dashboard
                </Link>

                {user?.role === "patient" && (
                  <Link
                    to="/book-appointment"
                    className="btn"
                    style={{
                      background: "#ffffff",
                      color: "#148a7b",
                      border: "1px solid #cdeee8",
                      borderRadius: "14px",
                      padding: "12px 28px",
                      fontWeight: "600",
                      boxShadow: "0 10px 25px rgba(20, 138, 123, 0.08)",
                    }}
                  >
                    Book Appointment
                  </Link>
                )}
              </div>
            )}

            <div className="row g-3 mt-4">
              <div className="col-6 col-md-3">
                <div
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: "18px",
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 12px 30px rgba(19, 81, 97, 0.08)",
                    border: "1px solid rgba(255,255,255,0.9)",
                  }}
                >
                  <h4 className="fw-bold mb-1" style={{ color: "#0e927f" }}>
                    500+
                  </h4>
                  <small style={{ color: "#5c7586" }}>Doctors</small>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: "18px",
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 12px 30px rgba(19, 81, 97, 0.08)",
                    border: "1px solid rgba(255,255,255,0.9)",
                  }}
                >
                  <h4 className="fw-bold mb-1" style={{ color: "#0e927f" }}>
                    10k+
                  </h4>
                  <small style={{ color: "#5c7586" }}>Patients</small>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: "18px",
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 12px 30px rgba(19, 81, 97, 0.08)",
                    border: "1px solid rgba(255,255,255,0.9)",
                  }}
                >
                  <h4 className="fw-bold mb-1" style={{ color: "#0e927f" }}>
                    98%
                  </h4>
                  <small style={{ color: "#5c7586" }}>Satisfaction</small>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: "18px",
                    padding: "16px",
                    textAlign: "center",
                    boxShadow: "0 12px 30px rgba(19, 81, 97, 0.08)",
                    border: "1px solid rgba(255,255,255,0.9)",
                  }}
                >
                  <h4 className="fw-bold mb-1" style={{ color: "#0e927f" }}>
                    24/7
                  </h4>
                  <small style={{ color: "#5c7586" }}>Support</small>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Medical Card */}
          <div className="col-lg-6">
            <div
              style={{
                position: "relative",
                background: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(10px)",
                borderRadius: "30px",
                padding: "35px",
                boxShadow: "0 20px 50px rgba(34, 96, 125, 0.12)",
                border: "1px solid rgba(255,255,255,0.85)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-35px",
                  right: "-35px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(17,184,156,0.18), rgba(34,199,216,0.08))",
                }}
              />

              <div className="row g-3">
                <div className="col-12">
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #d9fff7 0%, #f7ffff 100%)",
                      borderRadius: "22px",
                      padding: "24px",
                      border: "1px solid #d9f5f0",
                    }}
                  >
                    <h4 className="fw-bold" style={{ color: "#12465a" }}>
                      Smart Patient Care
                    </h4>
                    <p className="mb-0" style={{ color: "#5c7586" }}>
                      Manage appointments, doctors, and health support in one
                      beautiful and organized platform.
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "20px",
                      padding: "22px",
                      textAlign: "center",
                      boxShadow: "0 12px 25px rgba(20, 138, 123, 0.07)",
                    }}
                  >
                    <div style={{ fontSize: "34px" }}>🧑‍⚕️</div>
                    <h6 className="mt-2 fw-bold" style={{ color: "#12465a" }}>
                      Verified Doctors
                    </h6>
                  </div>
                </div>

                <div className="col-6">
                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "20px",
                      padding: "22px",
                      textAlign: "center",
                      boxShadow: "0 12px 25px rgba(20, 138, 123, 0.07)",
                    }}
                  >
                    <div style={{ fontSize: "34px" }}>🏥</div>
                    <h6 className="mt-2 fw-bold" style={{ color: "#12465a" }}>
                      Easy Booking
                    </h6>
                  </div>
                </div>

                <div className="col-12">
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #f4faff 0%, #ffffff 100%)",
                      borderRadius: "22px",
                      padding: "22px",
                      border: "1px dashed #cfe7f0",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: "#12465a" }}>
                          Care with Comfort
                        </h6>
                        <small style={{ color: "#5c7586" }}>
                          Designed to make medical services easier and faster.
                        </small>
                      </div>
                      <span
                        style={{
                          background: "#e8fbf5",
                          color: "#0d8d78",
                          padding: "8px 14px",
                          borderRadius: "999px",
                          fontWeight: "600",
                          fontSize: "13px",
                        }}
                      >
                        Medical Platform
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="text-center mt-4 mb-4">
          <h2 className="fw-bold" style={{ color: "#143b52" }}>
            Healthcare Made Simpler
          </h2>
          <p style={{ color: "#5c7586" }}>
            Modern features to improve your care experience
          </p>
        </div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div
                className="h-100"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  borderRadius: "24px",
                  padding: "28px 22px",
                  boxShadow: "0 16px 35px rgba(27, 82, 99, 0.08)",
                  border: "1px solid rgba(255,255,255,0.9)",
                }}
              >
                <div style={{ fontSize: "36px" }}>{item.icon}</div>
                <h5 className="fw-bold mt-3" style={{ color: "#143b52" }}>
                  {item.title}
                </h5>
                <p style={{ color: "#5c7586", marginBottom: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="text-center mt-5 pt-4 mb-4">
          <h2 className="fw-bold" style={{ color: "#143b52" }}>
            How It Works
          </h2>
          <p style={{ color: "#5c7586" }}>
            Start your journey in a few easy steps
          </p>
        </div>

        <div className="row g-4 pb-5">
          {steps.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="h-100 text-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.8), rgba(245,252,255,0.95))",
                  borderRadius: "26px",
                  padding: "30px 24px",
                  boxShadow: "0 18px 40px rgba(27, 82, 99, 0.08)",
                  border: "1px solid rgba(255,255,255,0.95)",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    lineHeight: "72px",
                    margin: "0 auto 18px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #11b89c 0%, #22c7d8 100%)",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "24px",
                    boxShadow: "0 10px 20px rgba(34, 199, 216, 0.20)",
                  }}
                >
                  {item.number}
                </div>
                <h5 className="fw-bold" style={{ color: "#143b52" }}>
                  {item.title}
                </h5>
                <p style={{ color: "#5c7586", marginBottom: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pb-4" style={{ color: "#7390a0" }}>
          © 2026 MediCare • Better Care, Better Experience
        </div>
      </div>
    </div>
  );
}

export default LandingPage;