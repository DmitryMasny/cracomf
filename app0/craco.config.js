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
      "@components": path.resolve(__dirname, "src/components/")
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/src/components$1"
      }
    }
  }
};