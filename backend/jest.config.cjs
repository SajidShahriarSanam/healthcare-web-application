module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.cjs"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.cjs"],
  collectCoverageFrom: ["src/**/*.js"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  testTimeout: 20000,
};