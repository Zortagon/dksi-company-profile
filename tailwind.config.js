/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
            }
        },
        colors: {
            'darken-blue': '#0B1F2A',
            'darken-gold': '#AA823C',
            'medium-white': '#FBFBFB',
            'cream': '#F4EBD9',
        }
    },
    plugins: [],
}

