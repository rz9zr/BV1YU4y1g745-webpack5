const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    another: "./src/another.js",
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
