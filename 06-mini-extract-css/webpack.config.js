const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[contenthash][ext]",
  },
  mode: "production",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin()],
  },
  devServer: {
    static: "./dist",
  },
};
