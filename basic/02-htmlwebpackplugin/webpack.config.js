const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: require("path").resolve(__dirname, "./dist"),
    filename: "bundle.js",
    clean: true,
  },
  mode: "none",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // 模板文件
      filename: "app.html", // 打包输出的文件名
      inject: "body", // 将 script 标签生成到 body 标签里
    }),
  ],
};
