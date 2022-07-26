const deps = require("./package.json").dependencies;

console.log(process.env.ROOT_PATH_MODE);

module.exports = {
  name: "app0",
  remotes: {
    grp: "grp_reporter_app@http://localhost:3003/remoteEntry.js",
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
