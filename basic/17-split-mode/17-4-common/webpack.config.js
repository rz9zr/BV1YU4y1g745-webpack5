const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

// npx webpack --env production
module.exports = (env) => {
  return {
    entry: {
      index: "./src/index.js",
      math: "./src/math.js",
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "scripts/[name].[contenthash].js",
      clean: true,
      assetModuleFilename: "assets/[contenthash].[ext]",
      publicPath: "https://localhost:8080/",
    },
    mode: env.production ? "production" : "development",
    devtool: "inline-source-map",
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
    devServer: {
      static: "./dist",
    },
    optimization: {
      minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
    },
  };
};
