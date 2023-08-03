const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.html'],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', ...defaultTheme.fontFamily.sans],
                'mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
                'display': ['Epilogue', defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}

