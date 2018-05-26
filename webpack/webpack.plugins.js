// //pop up notifications for webpack build
// exports.WebpackNotifierPlugin = require('webpack-notifier');
// //multiple files concat into one, useful for styles for faster load
// exports.ExtractTextPlugin = require('extract-text-webpack-plugin');
// //creates an html file with included all scripts that webpack generates
// exports.HtmlWebpackPlugin = require('html-webpack-plugin');
// //copy files
// exports.CopyWebpackPlugin = require('copy-webpack-plugin');
// exports.UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// exports.CompressionPlugin = require("compression-webpack-plugin");

const webpack = require('webpack');
// separates css into separate file that is not inlined with javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
exports.MiniCssExtractPlugin = MiniCssExtractPlugin;

// includes all bundles into an html file that is used for serving on server. useful if 
// names contains hash
const HtmlWebpackPlugin = require('html-webpack-plugin');
exports.HtmlWebpackPlugin = HtmlWebpackPlugin;

// optimization of css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
exports.OptimizeCSSAssetsPlugin = OptimizeCSSAssetsPlugin;

exports.getPlugins = (isProduction) => {
    return [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: isProduction ? '[name].[hash].css' : '[name].css',
            chunkFilename: isProduction ? '[id].[hash].css' : '[id].css'
        }),
        new HtmlWebpackPlugin({
            // Load a custom template (lodash by default see the FAQ for details)
            template: 'index.html'
        }),
        // so other modules can use it. some modules will have different behaviour if NODE_ENV is set to production
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': isProduction ? JSON.stringify('production') : JSON.stringify('development')
        })
    ];
};