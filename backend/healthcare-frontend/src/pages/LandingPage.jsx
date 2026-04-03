import { Link } from "react-router-dom";

function LandingPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const featureCards = [
    {
      icon: "🩺",
      title: "Consult with Ease",
      text: "Reach doctors quickly and manage care without confusion.",
      color: "#fff4f4",
    },
    {
      icon: "📆",
      title: "Simple Scheduling",
      text: "Book, view, and manage appointments in one smooth flow.",
      color: "#f4fbff",
    },
    {
      icon: "🧾",
      title: "Care Records",
      text: "Keep important health information organized in one place.",
      color: "#f7fff8",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fff9fb 0%, #f7fcff 45%, #f4fff8 100%)",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* soft background shapes */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "-60px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "rgba(255, 182, 193, 0.18)",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-50px",
          top: "120px",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background: "rgba(131, 220, 255, 0.18)",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "8%",
          bottom: "12%",
          fontSize: "180px",
          opacity: 0.04,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        ⚕
      </div>

      <div className="container py-5 position-relative">
        {/* HERO */}
        <div className="row align-items-center py-4 py-lg-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            {/* New Logo / Brand */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #ff8aa1, #6fd4ff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: "900",
                  boxShadow: "0 10px 20px rgba(111, 212, 255, 0.20)",
                }}
              >
                ⚕
              </div>
              <span
                style={{
                  fontWeight: "800",
                  color: "#24495e",
                  fontSize: "1.1rem",
                  letterSpacing: "0.3px",
                }}
              >
                VitaPulse Health
              </span>
            </div>

            <div
              style={{
                display: "inline-block",
                padding: "8px 16px",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#2d7f78",
                fontWeight: "600",
                fontSize: "14px",
                boxShadow: "0 8px 20px rgba(40, 110, 120, 0.08)",
              }}
            >
              Friendly Digital Healthcare
            </div>

            <h1
              className="fw-bold mt-4"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                lineHeight: "1.12",
                color: "#183b56",
                maxWidth: "560px",
              }}
            >
              Care that feels
              <span style={{ color: "#e07a8d" }}> closer</span>,
              <br />
              calmer, and easier.
            </h1>

            <p
              className="mt-4"
              style={{
                color: "#5f788b",
                fontSize: "18px",
                lineHeight: "1.9",
                maxWidth: "560px",
              }}
            >
              A patient-friendly medical platform to book appointments, connect
              with doctors, and keep your healthcare journey more organized and
              stress-free.
            </p>

            {!token ? (
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link
                  to="/register"
                  className="btn"
                  style={{
                    background:
                      "linear-gradient(90deg, #ff8aa1 0%, #6fd4ff 100%)",
                    color: "#fff",
                    borderRadius: "16px",
                    padding: "13px 28px",
                    fontWeight: "700",
                    border: "none",
                    boxShadow: "0 14px 28px rgba(111, 212, 255, 0.22)",
                  }}
                >
                  Start Here
                </Link>

                <Link
                  to="/login"
                  className="btn"
                  style={{
                    background: "#ffffff",
                    color: "#245c70",
                    borderRadius: "16px",
                    padding: "13px 28px",
                    fontWeight: "700",
                    border: "1px solid #e7eef3",
                    boxShadow: "0 10px 22px rgba(36, 92, 112, 0.06)",
                  }}
                >
                  Sign In
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
                      "linear-gradient(90deg, #ff8aa1 0%, #6fd4ff 100%)",
                    color: "#fff",
                    borderRadius: "16px",
                    padding: "13px 28px",
                    fontWeight: "700",
                    border: "none",
                    boxShadow: "0 14px 28px rgba(111, 212, 255, 0.22)",
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
                      color: "#245c70",
                      borderRadius: "16px",
                      padding: "13px 28px",
                      fontWeight: "700",
                      border: "1px solid #e7eef3",
                      boxShadow: "0 10px 22px rgba(36, 92, 112, 0.06)",
                    }}
                  >
                    Book Visit
                  </Link>
                )}
              </div>
            )}

            {/* Updated info chips */}
            <div className="d-flex flex-wrap gap-3 mt-5">
              {[
                "1.2k+ Active Consultations",
                "320+ Verified Doctors",
                "18k+ Health Records Managed",
                "99.2% Care Accuracy",
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "#ffffffcc",
                    color: "#315368",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    fontWeight: "600",
                    boxShadow: "0 8px 20px rgba(40, 110, 120, 0.08)",
                    border: "1px solid #edf3f6",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="col-lg-6">
            <div
              style={{
                position: "relative",
                background: "rgba(255,255,255,0.78)",
                borderRadius: "32px",
                padding: "30px",
                boxShadow: "0 24px 55px rgba(42, 98, 114, 0.10)",
                border: "1px solid rgba(255,255,255,0.95)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "18px",
                  top: "18px",
                  background: "#fef3f6",
                  color: "#d96d84",
                  borderRadius: "999px",
                  padding: "7px 14px",
                  fontWeight: "700",
                  fontSize: "13px",
                }}
              >
                Health First
              </div>

              <div className="row g-3 align-items-stretch">
                <div className="col-12">
                  <div
                    style={{
                      borderRadius: "24px",
                      padding: "24px",
                      background:
                        "linear-gradient(135deg, #fff1f5 0%, #f1fbff 100%)",
                      minHeight: "170px",
                    }}
                  >
                    <div style={{ fontSize: "52px" }}>👩‍⚕️</div>
                    <h3
                      className="fw-bold mt-2 mb-2"
                      style={{ color: "#24495e" }}
                    >
                      A softer healthcare experience
                    </h3>
                    <p className="mb-0" style={{ color: "#617c8e" }}>
                      Designed for patients and doctors who want a clear,
                      welcoming, and easy-to-use care platform.
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <div
                    style={{
                      background: "#f7fff9",
                      borderRadius: "22px",
                      padding: "22px",
                      height: "100%",
                      boxShadow: "inset 0 0 0 1px #e6f5eb",
                    }}
                  >
                    <div style={{ fontSize: "34px" }}>💗</div>
                    <h6 className="fw-bold mt-2 mb-1" style={{ color: "#24495e" }}>
                      Caring Design
                    </h6>
                    <small style={{ color: "#6b8392" }}>
                      Made to feel gentle and simple.
                    </small>
                  </div>
                </div>

                <div className="col-6">
                  <div
                    style={{
                      background: "#f7f9ff",
                      borderRadius: "22px",
                      padding: "22px",
                      height: "100%",
                      boxShadow: "inset 0 0 0 1px #e8eefb",
                    }}
                  >
                    <div style={{ fontSize: "34px" }}>🗂️</div>
                    <h6 className="fw-bold mt-2 mb-1" style={{ color: "#24495e" }}>
                      Organized Flow
                    </h6>
                    <small style={{ color: "#6b8392" }}>
                      Easy booking and cleaner records.
                    </small>
                  </div>
                </div>

                <div className="col-12">
                  <div
                    style={{
                      background: "#ffffff",
                      borderRadius: "22px",
                      padding: "18px 20px",
                      border: "1px dashed #e7edf2",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                      <div>
                        <div
                          className="fw-bold"
                          style={{ color: "#24495e", fontSize: "15px" }}
                        >
                          Patient-friendly portal
                        </div>
                        <small style={{ color: "#6b8392" }}>
                          Book, check, and manage medical support easily.
                        </small>
                      </div>
                      <span
                        style={{
                          background: "#eefcf6",
                          color: "#2f8a70",
                          padding: "8px 12px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        Easy to Use
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* FEATURES */}
        <div className="pt-4 pb-2 text-center">
          <h2 className="fw-bold" style={{ color: "#183b56" }}>
            What makes it feel different
          </h2>
          <p style={{ color: "#667f90" }}>
            A cleaner and calmer medical experience for everyone
          </p>
        </div>

        <div className="row g-4 mt-1">
          {featureCards.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="h-100"
                style={{
                  background: item.color,
                  borderRadius: "28px",
                  padding: "28px",
                  boxShadow: "0 16px 35px rgba(27, 82, 99, 0.06)",
                  border: "1px solid rgba(255,255,255,0.95)",
                }}
              >
                <div style={{ fontSize: "36px" }}>{item.icon}</div>
                <h4 className="fw-bold mt-3" style={{ color: "#1d455f" }}>
                  {item.title}
                </h4>
                <p className="mb-0" style={{ color: "#647d8f" }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PROCESS */}
        <div className="pt-5 mt-4 text-center">
          <h2 className="fw-bold" style={{ color: "#183b56" }}>
            Getting started is easy
          </h2>
          <p style={{ color: "#667f90" }}>
            A simpler path than traditional medical booking systems
          </p>
        </div>

        <div className="row g-4 mt-1 pb-5">
          {[
            {
              no: "01",
              title: "Sign Up",
              text: "Create your account as patient or doctor in moments.",
              bg: "#fff4f6",
            },
            {
              no: "02",
              title: "Book a Visit",
              text: "Choose a doctor, date, and reason without complexity.",
              bg: "#f4fbff",
            },
            {
              no: "03",
              title: "Stay Updated",
              text: "Track appointment progress and care information easily.",
              bg: "#f6fff8",
            },
          ].map((step, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="h-100 text-start"
                style={{
                  background: step.bg,
                  borderRadius: "28px",
                  padding: "28px",
                  boxShadow: "0 16px 35px rgba(27, 82, 99, 0.06)",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "18px",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    color: "#df718b",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  {step.no}
                </div>
                <h4 className="fw-bold mt-4" style={{ color: "#1d455f" }}>
                  {step.title}
                </h4>
                <p className="mb-0" style={{ color: "#647d8f" }}>
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pb-4" style={{ color: "#8094a0" }}>
          © 2026 VitaPulse Health • Smart Healthcare Platform
        </div>
      </div>
    </div>
  );
}

export default LandingPage;