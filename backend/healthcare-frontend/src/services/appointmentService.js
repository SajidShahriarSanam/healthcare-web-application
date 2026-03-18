import api from "./api";

export const createAppointment = async (appointmentData) => {
  const token = localStorage.getItem("token");

  const response = await api.post("/appointments", appointmentData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getMyAppointments = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/appointments/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateAppointmentStatus = async (appointmentId, status) => {
  const token = localStorage.getItem("token");

  const response = await api.patch(
    `/appointments/${appointmentId}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
