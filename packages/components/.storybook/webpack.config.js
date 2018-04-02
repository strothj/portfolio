const fs = require("fs");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = (baseConfig, env, config) => {
  const componentPaths = getComponentFolderPaths();

  config.module.rules.push({
    test: /\.tsx?$/,
    include: componentPaths,
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

function getComponentFolderPaths() {
  return fs
    .readdirSync(path.resolve(__dirname, ".."))
    .filter(d => ![".storybook", "node_modules", "dist"].includes(d))
    .map(d => path.resolve(__dirname, "..", d))
    .filter(d => fs.lstatSync(d).isDirectory())
    .concat(path.resolve(__dirname, "../../styled"));
}
