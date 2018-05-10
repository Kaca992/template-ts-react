//pop up notifications for webpack build
exports.WebpackNotifierPlugin = require('webpack-notifier');
//multiple files concat into one, useful for styles for faster load
exports.ExtractTextPlugin = require('extract-text-webpack-plugin');
//creates an html file with included all scripts that webpack generates
exports.HtmlWebpackPlugin = require('html-webpack-plugin');
//copy files
exports.CopyWebpackPlugin = require('copy-webpack-plugin');