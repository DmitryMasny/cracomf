const deps = require("./package.json").dependencies;

console.log(process.env.ROOT_PATH_MODE);

module.exports = {
  name: "app0",
  exposes: {
    "./Test": "./src/components/Test",
  },
  remotes: {
    app22: "app2@http://localhost:3004/remoteEntry.js",
    grp: "grp_reporter_app@http://localhost:3003/remoteEntry.js",
    grp2: "grp-reporter-front@http://localhost:3003/remoteEntry.js",
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
