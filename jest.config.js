const { defaults } = require('ts-jest/presets');

module.exports = {
  transform: {
    ...defaults.transform,
  },
  testMatch: [
    '<rootDir>/**/?(*.)(spec|test).(t)s?(x)',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/*.(t)s?(x)',
    '!packages/**/*.d.ts',
    '!**/node_modules/**',
  ],
  roots: [
    'packages/',
  ],
  setupTestFrameworkScriptFile: './config/setupTests.ts'
};
