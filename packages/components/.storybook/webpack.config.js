const fs = require("fs");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const findMonorepo = require("react-dev-utils/workspaceUtils").findMonorepo;

module.exports = (baseConfig, env, config) => {
  const srcPaths = getSrcPaths();

  config.module.rules.push({
    test: /\.tsx?$/,
    include: srcPaths,
    use: [
      require.resolve("ts-loader"),
      require.resolve("react-docgen-typescript-loader"),
    ],
  });

  config.resolve.extensions.push(".ts", ".tsx");

  config.plugins.push(
    new Dotenv({
      silent: true,
      path: path.resolve(__dirname, "../../app/.env"),
    }),
  );

  return config;
};

function getSrcPaths() {
  let componentPaths;

  componentPaths = [path.resolve(__dirname, "../src")];

  // Dependencies from monorepo.
  const mono = findMonorepo(path.resolve(__dirname, "..") /* appDirectory */);
  componentPaths = [...componentPaths, ...mono.pkgs];

  return componentPaths;
}
