const path = require('path');
const webpack = require('webpack');

const webpackLoaders = require('./webpack/webpack.loaders');
const webpackPlugins = require('./webpack/webpack.plugins');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = env => {
  return {
    entry: {
      main: './src/index.tsx'
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    // sets some default plugins like uglify
    mode: isProduction ? 'production' : 'development',
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        // CUSTOM PACKAGES:
        // enables custom paths on import. IMPORTANT!: need to be defined in typescript path also + baseUrl
        'common': path.resolve(__dirname, 'src/common'),
        'components': path.resolve(__dirname, 'src/components'),
        'containers': path.resolve(__dirname, 'src/containers')
      }
    },
    module: {
      rules: webpackLoaders.getLoaders(isProduction)
    },
    plugins: webpackPlugins.getPlugins(isProduction),
    optimization: {
      minimizer: [ isProduction ? new webpackPlugins.OptimizeCSSAssetsPlugin({}) : null ]
    },
  }
};