module.exports = {
    plugins: {
        tailwindcss: {},
        'postcss-preset-env': {
            browsers: ['>0.3%', 'last 2 version', 'not dead'],
        },
        cssnano: {},
    },
}