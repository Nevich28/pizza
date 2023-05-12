/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: '512px',
                xl: '1340px',
            },
            colors: {
                'main-back': '#FFDF8C',
                'font-black': '#181818',
                'font-gray': '#7B7B7B',
                'font-ligth-gray': '#2C2C2C',
                'dark-gray': '#282828',
                'light-gray': '#F9F9F9',
                'main-orange': '#FE5F1E',
                'rose-back': 'rgba(254, 95, 30, 0.05);',
            },
        },
    },
    plugins: [],
};
