const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, '../public'),
        clean: true,
        filename: 'js/main.[contenthash].js',
        environment: {
            arrowFunction: false,
        },
    },
    watch: true,
    resolve: {
        alias: {
            jquery: 'jquery/dist/jquery.slim.js',
        },
    },
    plugins: [
        new HTMLWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                        ],
                    },
                },
            },
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