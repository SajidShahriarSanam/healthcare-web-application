const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// We import your ESM connectDB using dynamic import
let connectDB;

beforeAll(async () => {
  process.env.NODE_ENV = "test";
  const mod = await import("../src/config/db.js");
  connectDB = mod.default;
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});