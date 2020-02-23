'use strict';

const path = require('path');
const webpack = require('webpack');

const rules = require('./webpack/rules');
const plugins = require('./webpack/plugins');

const isProduction = process.env.NODE_ENV === 'production';
console.log('Build mode:', isProduction ? 'Production' : 'Development');

module.exports = env => {
    return {
        entry: {
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
            extensions: ['.js', '.json', '.ts', '.tsx']
        },
        module: {
            rules: rules.getRules(isProduction)
        },
        plugins: plugins.getPlugins(isProduction),
        optimization: isProduction
            ? {
                  splitChunks: {
                      chunks: 'all'
                  }
              }
            : {},
        devServer: {
            contentBase: path.resolve(__dirname, 'src'),
            hot: true,
            port: 3000,
            historyApiFallback: true
        }
    };
};
