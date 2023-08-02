const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.config')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge([
    commonConfiguration, {
        mode: 'production',
        output: {
            environment: {
                arrowFunction: false,
            },
        },
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
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
        },
    }])