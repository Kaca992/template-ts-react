const path = require("path");
const webpack = require("webpack");

const rules = require("./webpack/rules");
const plugins = require("./webpack/plugins");

const isProduction = process.env.NODE_ENV === "production";

module.exports = env => {
  return {
    entry: {
      main: "./src/index.tsx"
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    output: {
      filename: "[name].[hash].bundle.js",
      chunkFilename: "[name].[hash].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: isProduction ? "./" : "/"
    },
    // sets some default plugins like uglify
    mode: isProduction ? "production" : "development",
    resolve: {
      extensions: [".js", ".json", ".ts", ".tsx"]
    },
    module: {
      rules: rules.getRules(isProduction)
    },
    plugins: plugins.getPlugins(isProduction),
    optimization: isProduction
      ? {
          splitChunks: {
            chunks: "all"
          },
          minimizer: [new plugins.OptimizeCSSAssetsPlugin({})]
        }
      : {},
    devServer: {
      contentBase: path.resolve(__dirname, "src"),
      hot: true
    }
    // will not be bundled, expected to be present in the environment of user, nice for libraries
    // externals: {
    //   react: 'react'
    // },
    // node: {
    //   // workaround for webpack-dev-server issue
    //   // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    //   fs: 'empty',
    //   net: 'empty'
    // }
  };
};
