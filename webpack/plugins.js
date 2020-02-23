'use strict';

const webpack = require('webpack');

// separates css into separate file that is not inlined with javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
exports.MiniCssExtractPlugin = MiniCssExtractPlugin;

// includes all bundles into an html file that is used for serving on server. useful if
// names contains hash
const HtmlWebpackPlugin = require('html-webpack-plugin');
exports.HtmlWebpackPlugin = HtmlWebpackPlugin;

// Webpack plugin that runs TypeScript type checker on a separate process.
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// initial builds may be slower, but rebuilds are much faster
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

// Visualize and analyze your Webpack bundle to see which modules are taking up space and which might be duplicates.
const Visualizer = require('webpack-visualizer-plugin');

// copy files and folders to build folder
const FileManagerPlugin = require('filemanager-webpack-plugin');
exports.FileManagerPlugin = FileManagerPlugin;

exports.getPlugins = isProduction => {
    let plugins = [
        new HtmlWebpackPlugin({
            // Load a custom template (lodash by default see the FAQ for details)
            template: 'index.html'
        }),
        // so other modules can use it. some modules will have different behaviour if NODE_ENV is set to production
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': isProduction ? JSON.stringify('production') : JSON.stringify('development')
        })
    ];

    if (isProduction) {
        plugins.push(
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].[hash].css',
                chunkFilename: '[id].[hash].css'
            })
        );

        plugins.push(
            new FileManagerPlugin({
                onStart: [
                    {
                        delete: ['dist', 'lib']
                    }
                ],
                onEnd: [
                    {
                        copy: [
                            // Doesn't matter in which way you choose to do this. It will still get done
                            { source: 'src/assets/*', destination: 'dist/assets/' }
                        ]
                    }
                ]
            })
        );

        plugins.push(new Visualizer({ filename: './statistics.html' }));
    } else {
        plugins.push(
            ...[
                new HardSourceWebpackPlugin(),
                new webpack.HotModuleReplacementPlugin(),
                new ForkTsCheckerWebpackPlugin({ tslint: false, measureCompilationTime: true })
            ]
        );
    }

    return plugins;
};
