const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    math: "./src/math.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "scripts/[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[contenthash].[ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
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
