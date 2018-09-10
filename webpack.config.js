const path = require('path');
const webpack = require('webpack');

const rules = require('./webpack/rules');
const plugins = require('./webpack/plugins');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = env => {
  return {
    entry: {
      // IE support, if not needed you can remove this and babel from awesome TS loader
      babel_polyfill: 'babel-polyfill',
      main: './src/index.tsx'
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    output: {
      filename: '[name].[hash].bundle.js',
      chunkFilename: '[name].[hash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: isProduction ? './' : '/'
    },
    // sets some default plugins like uglify
    mode: isProduction ? 'production' : 'development',
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
      alias: {
        // CUSTOM PACKAGES:
        // enables custom paths on import. IMPORTANT!: need to be defined in typescript path also + baseUrl
        '@common': path.resolve(__dirname, 'src/common'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/containers'),
        '@actions': path.resolve(__dirname, 'src/actions'),
        '@reducers': path.resolve(__dirname, 'src/reducers')
      }
    },
    module: {
      rules: rules.getRules(isProduction)
    },
    plugins: plugins.getPlugins(isProduction),
    optimization: isProduction ? {
      splitChunks: {
        chunks: 'all'
      },
      minimizer: [new plugins.OptimizeCSSAssetsPlugin({})]
    } : {},
    devServer: {
      contentBase: path.resolve(__dirname, 'src'),
      hot: true
    },
    // node: {
    //   // workaround for webpack-dev-server issue
    //   // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    //   fs: 'empty',
    //   net: 'empty'
    // }
  }
};