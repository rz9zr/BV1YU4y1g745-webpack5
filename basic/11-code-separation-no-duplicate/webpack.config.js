const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    another: {
      import: "./src/another.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [new HtmlWebpackPlugin({ inject: "body" })],
  devServer: {
    static: "./dist",
  },
};
