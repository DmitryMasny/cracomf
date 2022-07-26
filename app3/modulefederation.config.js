const deps = require("./package.json").dependencies;

console.log(process.env.ROOT_PATH_MODE);

module.exports = {
  name: "app3",
  exposes: {
    "./Test": "./src/components/Test",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
