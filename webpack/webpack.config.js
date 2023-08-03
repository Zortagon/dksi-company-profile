const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, '../public'),
        clean: true,
    },
    resolve: {
        alias: {
            jquery: 'jquery/dist/jquery.slim.js',
        },
    },
    plugins: [
        new HTMLWebpackPlugin({ template: 'src/index.html' }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'],
            },
        ],
    },
}