const path = require("path");

module.exports = {
  entry: { graphql: path.resolve(__dirname, "src/graphql.ts") },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    mainFields: ["main"],
    extensions: [".js", ".ts"],
  },
};
