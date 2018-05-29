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

// compresses files to gzip
const CompressionPlugin = require("compression-webpack-plugin");
exports.CompressionPlugin = CompressionPlugin;

// runs tslint alongside webpack. Targets all defined targets
const TSLintPlugin = require('tslint-webpack-plugin');

exports.getPlugins = (isProduction) => {
    let plugins = [
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
        }),
        new webpack.HotModuleReplacementPlugin(),
        new TSLintPlugin({files: ['./src/**/*.ts', './src/**/*.tsx']})
    ];

    if (isProduction) {
        plugins.push(
            new CompressionPlugin({deleteOriginalAssets: true})
        );
    }

    return plugins;
};