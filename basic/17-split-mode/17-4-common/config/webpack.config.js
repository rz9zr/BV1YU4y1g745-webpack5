const { merge } = require("webpack-merge");
const commonCfg = require("./webpack.config.common");
const proCfg = require("./webpack.config.pro");
const devCfg = require("./webpack.config.dev");

module.exports = (env) => {
  switch (true) {
    case env.development:
      return merge(commonCfg, devCfg);
    case env.production:
      return merge(commonCfg, proCfg);
    default:
      throw new Error("Invalid env");
  }
};
