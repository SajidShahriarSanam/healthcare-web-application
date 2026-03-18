import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";
import DoctorDashboard from "./pages/DoctorDashboard.jsx";
import BookAppointmentPage from "./pages/BookAppointmentPage.jsx";
import MyAppointmentsPage from "./pages/MyAppointmentsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
  path="/patient-dashboard"
  element={
    <ProtectedRoute>
      <PatientDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/doctor-dashboard"
  element={
    <ProtectedRoute>
      <DoctorDashboard />
    </ProtectedRoute>
  }
/>
        <Route
  path="/book-appointment"
  element={
    <ProtectedRoute>
      <BookAppointmentPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-appointments"
  element={
    <ProtectedRoute>
      <MyAppointmentsPage />
    </ProtectedRoute>
  }
/>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

