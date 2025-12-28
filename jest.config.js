// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node", // or 'jsdom' for browser environments
  testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(test).ts"],
  verbose: false,
  silent: true,
  testLocationInResults: false,
  transform: {
    "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },
  moduleFileExtensions: ["ts", "js", "json"],
};
