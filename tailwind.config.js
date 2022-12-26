/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue'],
    theme: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
                bgdark: '#1c232f',
                gray: {
                    DEFAULT: '#f4f4f4',
                    light: '#f8f8f8',
                },
                primary: {
                    DEFAULT: '#5367ff',
                    light: '#eef0ff',
                },
                secondary: {
                    DEFAULT: '#0dcaf0',
                    light: '#e7fafe',
                },
                success: {
                    DEFAULT: '#00d09c',
                    light: '#e6fbf6',
                },
                danger: {
                    DEFAULT: '#ff585d',
                    light: '#ffeeef',
                },
                warning: {
                    DEFAULT: '#ffb61b',
                    light: '#fff3cd',
                },
                info: {
                    DEFAULT: '#1da1f2',
                    light: '#e8f6fe',
                },
            },
        },
    },
    plugins: [],
};
