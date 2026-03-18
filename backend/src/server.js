import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB();
  const server = app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
  return server;
};

// Only start server when NOT running tests
if (process.env.NODE_ENV !== "test") {
  startServer();
}

export default startServer;