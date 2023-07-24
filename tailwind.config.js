/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            colors: {
                'white-background': '#f9fafe',
                'primary-blue': '#0b1f2a',
                'primary-gold': '#ca9d42',
                'primary-gold-100': '#85682c',
                'accent-gold': '#aa823c',
                'accent-gold-100': '#705628',
            },
            fontFamily: {
                'mono': ['JetBrains Mono', 'ui-monospace', 'monospace']
            }
        },
    },
    plugins: [],
}

