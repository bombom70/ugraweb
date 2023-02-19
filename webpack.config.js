const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const jsLoaders = () => {
    const loaders = [
        'babel-loader'
    ];

    if (isDev) {
        loaders.push('eslint-loader')
    }
    return loaders;
}

module.exports = {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    entry: {
        main: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: path.join('img', '[name].[contenthash][ext]')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/img'), to: 'img' }
            ]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(css|sass)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", 'postcss-loader', "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('img', '[name][ext]')
                }
            },
        ]
    }
}
