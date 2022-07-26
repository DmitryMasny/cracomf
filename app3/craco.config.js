const cracoModuleFederation = require('craco-module-federation');
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
  webpack: {
    alias: {
      "@components2": path.resolve(__dirname, "src/components/")
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@components2(.*)$": "<rootDir>/src/components$1"
      }
    }
  }
};