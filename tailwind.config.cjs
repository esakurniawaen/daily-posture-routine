/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                tablet: '2rem',
                desktop: '4rem',
            },
        },
        screens: {
            tablet: '640px',
            desktop: '1024px',
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            mono: ['"Roboto Mono"', 'monospace'],
        },
        extend: {},
    },
    plugins: [],
};
