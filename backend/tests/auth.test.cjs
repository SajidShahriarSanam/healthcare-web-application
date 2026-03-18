const request = require("supertest");

let app;

beforeAll(async () => {
  // import ESM app.js dynamically
  const mod = await import("../src/app.js");
  app = mod.default;
});

describe("Auth API", () => {
  test("should register a new patient", async () => {
    const res = await request(app).post("/api/v1/auth/register").send({
      name: "Test User",
      email: `test${Date.now()}@test.com`,
      password: "password123",
      role: "patient",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
  });

  test("should login an existing user", async () => {
    const email = `login${Date.now()}@test.com`;

    await request(app).post("/api/v1/auth/register").send({
      name: "Login User",
      email,
      password: "password123",
      role: "patient",
    });

    const res = await request(app).post("/api/v1/auth/login").send({
      email,
      password: "password123",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
  });
});