const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, '../public'),
        clean: true,
        filename: 'js/main.[contenthash].js',
        environment: {
            arrowFunction: false,
        },
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
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    },
                },
            },
        ],
    },
}