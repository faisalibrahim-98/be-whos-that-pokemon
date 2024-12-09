import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"], // Files I am trying to include in jest
  moduleFileExtensions: ["ts", "js", "json", "node"], // Formats recognised by jest.
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "routes/**/*.{js,ts}",
    "services/**/*.{js,ts}",
    "src/**/*.{js,ts}",
    "tests/**/*.{js,ts}",
  ],
};

export default config;
