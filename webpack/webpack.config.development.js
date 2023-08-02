const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.config')
const path = require('path')

module.exports = merge([
    commonConfiguration, {
        mode: 'development',
        watch: true,
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            hot: true,
            port: 5500,
        },
    }])