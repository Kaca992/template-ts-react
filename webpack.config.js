const path = require('path');
const webpack = require('webpack');

const webpackLoaders = require('./webpack/webpack.loaders');
const webpackPlugins = require('./webpack/webpack.plugins');

module.exports = env => {
  console.log(env);
  return {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
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
      rules: [
        webpackLoaders.awesomeTypeScript,
        webpackLoaders.sass
      ]
    },
    plugins: [

    ]
  }
};