const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

// npx webpack -c config/webpack.config.pro.js
module.exports = {
  output: {
    publicPath: "https://localhost:8080/",
  },
  mode: "production",
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
  },
  performance: {
    hints: false, // 关闭打包文件过大的提示
  },
};
