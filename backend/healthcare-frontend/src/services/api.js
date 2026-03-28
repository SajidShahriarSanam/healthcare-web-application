import axios from "axios";

const api = axios.create({
  baseURL: "https://healthcare-backend-3r77.onrender.com/api/v1",
});

export default api;
