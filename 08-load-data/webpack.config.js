const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const toml = require("toml");
const yaml = require("yaml");
const json5 = require("json5");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[contenthash][ext]",
  },
  mode: "development",
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
      {
        test: /\.xml$/,
        use: "xml-loader",
      },
      {
        test: /\.(csv|tsv)$/,
        use: "csv-loader",
      },
      {
        test: /\.toml$/,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/,
        type: "json",
        parser: {
          parse: json5.parse,
        },
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
