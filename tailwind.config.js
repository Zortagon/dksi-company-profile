/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'darken-blue': '#0B1F2A',
                'darken-gold': '#AA823C',
                'medium-white': '#FBFBFB',
                'light-gray': '#F2F2F2',
                'light-gold': '#CA9D42',
                'white': '#FFFFFF',
                'cream': '#F4EBD9',
            }
        },
        fontFamily: {
            'roboto': ['Roboto Mono', 'ui-monospace']
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
            }
        }   
    },
    plugins: [],
}