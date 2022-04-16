const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "scripts/[name].[contenthash].js",
    clean: true,
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [new HtmlWebpackPlugin({ inject: "body" })],
  devServer: {
    static: "./dist",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
