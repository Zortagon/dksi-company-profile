const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.config')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge([
    commonConfiguration, {
        mode: 'development',
        output: {
            filename: 'js/main.js',
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            hot: true,
            port: 5500,
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
            }),
        ],
    }])