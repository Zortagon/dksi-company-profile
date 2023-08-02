const platformPath = require('path')

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: platformPath.resolve(__dirname, '../public'),
        clean: true,
        filename: 'main.[contenthash].js',
    },
}