// npx webpack -c config/webpack.config.dev.js
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
};
