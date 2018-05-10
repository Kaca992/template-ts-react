const Webpack = require('webpack');
const Path = require('path');

const webpackLoaders = require('./webpack/webpack.loaders');
const webpackPlugins = require('./webpack/webpack.plugins');
const variables = require('./webpack/webpack.variables');

const outPath = Path.join(__dirname, './dist');
const sourcePath = Path.join(__dirname, './src');

module.exports = {
  context: sourcePath,
  entry: {
    main: './index.tsx',
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: outPath,
    publicPath: '/',
    filename: 'bundle.js',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      // CUSTOM PACKAGES:
      // enables custom paths on import. IMPORTANT!: need to be defined in typescript path also + baseUrl
      'common': Path.resolve(__dirname, 'src/common'),
      'components': Path.resolve(__dirname, 'src/components'),
      'containers': Path.resolve(__dirname, 'src/containers')
     }
  },
  module: {
    loaders: [
      webpackLoaders.awesomeTypeScript,
      // static assets
     webpackLoaders.htmlLoader,
     webpackLoaders.fileLoader,
     //styles
     variables.isProduction ? webpackLoaders.sassOneFile : webpackLoaders.sass
    ],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': variables.isProduction === true ? JSON.stringify('production') : JSON.stringify('development')
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new Webpack.optimize.AggressiveMergingPlugin(),
    new webpackPlugins.ExtractTextPlugin({
      filename: 'styles.css',
      disable: !variables.isProduction
    }),
    new webpackPlugins.HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpackPlugins.WebpackNotifierPlugin()
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    stats: {
      warnings: false
    },
  },
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  }
};
