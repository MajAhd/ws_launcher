export default {
    clearMocks: true,
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],
    coverageProvider: "v8",
    moduleFileExtensions: [
        "js",
        "json",
        "jsx",
        "ts",
        "tsx",
        "node"
    ],
    preset: 'ts-jest',
    testEnvironment: "node",
    testMatch: [
        "**/__tests__/**/*test.[jt]s?(x)"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/"
    ],
};